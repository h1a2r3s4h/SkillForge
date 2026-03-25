import { NextResponse } from "next/server";
import { withAIShield } from "@/lib/ai-shield";
import { openrouter } from "@/lib/openrouter";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      resumeText,
      userId,
      jobRole = "Software Developer",
      jobDescription = "",
    } = body;

    if (!resumeText) {
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
          model: "google/gemini-2.0-flash-001",
          messages: [{ role: "user", content: PROMPT }],
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

      return NextResponse.json(shieldResult, {
        status: statusMap[shieldResult.type] || 500,
      });
    }

    return NextResponse.json({
      success: true,
      cached: shieldResult.cached,
      data: shieldResult.data,
    });
  } catch (error) {
    console.error("Resume Analyzer Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while analyzing the resume.",
      },
      { status: 500 }
    );
  }
}