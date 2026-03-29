import { NextResponse } from "next/server";
import { getMetric, getAverageLatency } from "@/lib/metrics";

export async function GET() {
  try {
    const [
      apiCalls,
      successfulResponses,
      cacheHits,
      freshAiResponses,
      rateLimitHits,
      duplicateRequests,
      aiErrors,
      serverErrors,
      badRequests,
      avgLatency,
    ] = await Promise.all([
      getMetric("api_calls"),
      getMetric("successful_responses"),
      getMetric("cache_hits"),
      getMetric("fresh_ai_responses"),
      getMetric("rate_limit_hits"),
      getMetric("duplicate_requests"),
      getMetric("ai_errors"),
      getMetric("server_errors"),
      getMetric("bad_requests"),
      getAverageLatency(),
    ]);

    const cacheHitRate =
      apiCalls > 0 ? Math.round((cacheHits / apiCalls) * 100) : 0;

    return NextResponse.json({
      success: true,
      data: {
        apiCalls,
        successfulResponses,
        cacheHits,
        freshAiResponses,
        rateLimitHits,
        duplicateRequests,
        aiErrors,
        serverErrors,
        badRequests,
        avgLatency,
        cacheHitRate,
      },
    });
  } catch (error) {
    console.error("System Health Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch system health metrics.",
      },
      { status: 500 }
    );
  }
}