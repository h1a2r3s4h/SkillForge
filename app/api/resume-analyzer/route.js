import { NextResponse } from "next/server";
import { withAIShield } from "@/lib/ai-shield";
import { openrouter } from "@/lib/openrouter";
import { incrementMetric, pushLatency } from "@/lib/metrics";

export async function POST(req) {
  const startTime = Date.now();

  try {
    await incrementMetric("api_calls");

    const body = await req.json();
    const {
      resumeText,
      userId,
      jobRole = "Software Developer",
      jobDescription = "",
    } = body;

    if (!resumeText) {
      await incrementMetric("bad_requests");

      return NextResponse.json(
        { success: false, message: "Resume text is required." },
        { status: 400 }
      );
    }

    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0] || "unknown-ip";
    const identifier = userId || ip;

    const payload = {
      feature: "resume-analyzer",
      resumeText,
      jobRole,
      jobDescription,
    };

    const shieldResult = await withAIShield({
      identifier,
      payload,
      handler: async () => {
        const PROMPT = `
You are a senior ATS resume reviewer and hiring manager at a top tech company.

Your task is to deeply analyze the resume and provide strict, high-quality, recruiter-level feedback.

Evaluation Criteria:
- ATS keyword matching
- Project impact and metrics
- Technical depth
- Clarity and structure
- Relevance to job role

Scoring Rules:
- 90–100: Strong hire-ready resume
- 70–89: Good but needs improvements
- 50–69: Average, lacks impact
- Below 50: Weak resume

Instructions:
- Be brutally honest but helpful
- Do NOT give generic advice
- Focus on measurable improvements
- Every suggestion must be actionable

Resume:
${resumeText}

Job Role:
${jobRole}

Job Description:
${jobDescription || "Not provided"}

Return valid JSON only in this exact format:
{
  "score": number,
  "summary": string,
  "strengths": string[],
  "weaknesses": string[],
  "suggestions": string[],
  "actionableFixes": [
    {
      "issue": string,
      "fix": string,
      "before": string,
      "after": string
    }
  ]
}

Rules for actionableFixes:
- Must include at least 3 items
- Focus on projects, experience, or skills
- "before" should be weak/improvable text
- "after" must include metrics, impact, and strong wording
- Make it realistic and recruiter-level
`;

        const completion = await openrouter.chat.completions.create({
          model: "google/gemini-2.5-flash",
          messages: [{ role: "user", content: PROMPT }],
          max_tokens: 2000,
  temperature: 0.7,
          response_format: { type: "json_object" },
        });

        return JSON.parse(completion.choices[0].message.content);
      },
    });

    if (!shieldResult.success) {
      const statusMap = {
        RATE_LIMIT: 429,
        DUPLICATE_REQUEST: 409,
        AI_ERROR: 500,
      };

      if (shieldResult.type === "RATE_LIMIT") {
        await incrementMetric("rate_limit_hits");
      }

      if (shieldResult.type === "DUPLICATE_REQUEST") {
        await incrementMetric("duplicate_requests");
      }

      if (shieldResult.type === "AI_ERROR") {
        await incrementMetric("ai_errors");
      }

      return NextResponse.json(shieldResult, {
        status: statusMap[shieldResult.type] || 500,
      });
    }

    if (shieldResult.cached) {
      await incrementMetric("cache_hits");
    } else {
      await incrementMetric("fresh_ai_responses");
    }

    await incrementMetric("successful_responses");

    return NextResponse.json({
      success: true,
      cached: shieldResult.cached,
      data: shieldResult.data,
    });
  } catch (error) {
    console.error("Resume Analyzer Route Error:", error);
    await incrementMetric("server_errors");

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while analyzing the resume.",
      },
      { status: 500 }
    );
  } finally {
    const latency = Date.now() - startTime;
    await pushLatency(latency);
  }
}