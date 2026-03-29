import { redis } from "@/lib/redis";

const METRICS_PREFIX = "system-health";

export async function incrementMetric(name, value = 1) {
  try {
    await redis.incrby(`${METRICS_PREFIX}:${name}`, value);
  } catch (error) {
    console.error(`Metric increment failed for ${name}:`, error);
  }
}

export async function pushLatency(latency) {
  try {
    const key = `${METRICS_PREFIX}:latencies`;

    await redis.lpush(key, latency);
    await redis.ltrim(key, 0, 99);
  } catch (error) {
    console.error("Latency metric push failed:", error);
  }
}

export async function getMetric(name) {
  try {
    return Number((await redis.get(`${METRICS_PREFIX}:${name}`)) || 0);
  } catch (error) {
    console.error(`Metric read failed for ${name}:`, error);
    return 0;
  }
}

export async function getAverageLatency() {
  try {
    const latencies = await redis.lrange(`${METRICS_PREFIX}:latencies`, 0, 99);

    if (!latencies?.length) return 0;

    const nums = latencies.map(Number).filter((n) => !Number.isNaN(n));

    if (!nums.length) return 0;

    const total = nums.reduce((sum, curr) => sum + curr, 0);
    return Math.round(total / nums.length);
  } catch (error) {
    console.error("Average latency read failed:", error);
    return 0;
  }
}