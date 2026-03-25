import { redis } from "./redis";
import { createPayloadHash } from "./hash";

const CACHE_TTL_SECONDS = 60 * 60; // 1 hour
const LOCK_TTL_SECONDS = 30; // duplicate request lock
const RATE_LIMIT_WINDOW_SECONDS = 60; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

function getRateKey(identifier) {
  return `shield:rate:${identifier}`;
}

function getCacheKey(hash) {
  return `shield:cache:${hash}`;
}

function getLockKey(hash) {
  return `shield:lock:${hash}`;
}

export async function applyRateLimit(identifier) {
  const key = getRateKey(identifier);

  const curr = await redis.incr(key);

  if (curr === 1) {
    await redis.expire(key, RATE_LIMIT_WINDOW_SECONDS);
  }

  const ttl = await redis.ttl(key);

  return {
    allowed: curr <= RATE_LIMIT_MAX,
    remaining: Math.max(0, RATE_LIMIT_MAX - curr),
    retryAfter: ttl > 0 ? ttl : RATE_LIMIT_WINDOW_SECONDS,
  };
}

export async function withRetry(fn, retries = 2, delay = 800) {
  let lastError;

  for (let curr = 0; curr <= retries; curr++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (curr === retries) break;

      await new Promise((resolve) => setTimeout(resolve, delay * (curr + 1)));
    }
  }

  throw lastError;
}

export async function withAIShield({
  identifier,
  payload,
  handler,
  cacheTtl = CACHE_TTL_SECONDS,
}) {
  const rate = await applyRateLimit(identifier);

  if (!rate.allowed) {
    return {
      success: false,
      type: "RATE_LIMIT",
      message: "Too many requests. Please try again shortly.",
      retryAfter: rate.retryAfter,
    };
  }

  const hash = createPayloadHash(payload);
  const cacheKey = getCacheKey(hash);
  const lockKey = getLockKey(hash);

  // 1. Return cached response if exists
  const cached = await redis.get(cacheKey);
  if (cached) {
    return {
      success: true,
      cached: true,
      data: cached,
    };
  }

  // 2. Prevent duplicate parallel requests
  const lock = await redis.set(lockKey, "1", {
    nx: true,
    ex: LOCK_TTL_SECONDS,
  });

  if (!lock) {
    return {
      success: false,
      type: "DUPLICATE_REQUEST",
      message: "Same request is already being processed. Please wait.",
    };
  }

  try {
    // 3. Retry wrapped AI handler
    const result = await withRetry(() => handler(), 2, 1000);

    // 4. Cache final result
    await redis.set(cacheKey, result, { ex: cacheTtl });

    return {
      success: true,
      cached: false,
      data: result,
    };
  } catch (error) {
    console.error("AI Shield Error:", error);

    return {
      success: false,
      type: "AI_ERROR",
      message: "AI processing failed. Please try again.",
      error: error.message,
    };
  } finally {
    await redis.del(lockKey);
  }
}