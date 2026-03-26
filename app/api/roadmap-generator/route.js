import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { withAIShield } from "@/lib/ai-shield";
import { buildRoadmapPrompt } from "@/lib/prompts/roadmap-generator-prompt";
import { openrouter } from "@/lib/openrouter";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      targetRole,
      currentLevel,
      currentSkills,
      hoursPerDay,
      duration,
      weakAreas,
    } = body;

    if (
      !targetRole ||
      !currentLevel ||
      !currentSkills ||
      !hoursPerDay ||
      !duration ||
      !weakAreas
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const { userId } = await auth();

    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown-ip";
    const identifier = userId || ip;

    const normalizedPayload = {
      targetRole: String(targetRole).trim(),
      currentLevel: String(currentLevel).trim(),
      currentSkills: String(currentSkills).trim(),
      hoursPerDay: String(hoursPerDay).trim(),
      duration: String(duration).trim(),
      weakAreas: String(weakAreas).trim(),
    };

    const result = await withAIShield({
      identifier,
      payload: {
        feature: "roadmap-generator",
        ...normalizedPayload,
      },
      handler: async () => {
        const prompt = buildRoadmapPrompt(normalizedPayload);

        const completion = await openrouter.chat.completions.create({
          model: "google/gemini-2.0-flash-001",
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" },
        });

        const rawContent = completion.choices?.[0]?.message?.content;

        if (!rawContent) {
          throw new Error("Empty AI response");
        }

        let parsed;

        try {
          parsed = JSON.parse(rawContent);
        } catch {
          throw new Error("Invalid JSON returned by AI");
        }

        return {
          goalSummary: parsed.goalSummary || "",
          skillGapAnalysis: Array.isArray(parsed.skillGapAnalysis)
            ? parsed.skillGapAnalysis
            : [],
          weeklyRoadmap: Array.isArray(parsed.weeklyRoadmap)
            ? parsed.weeklyRoadmap
            : [],
          projectSuggestions: Array.isArray(parsed.projectSuggestions)
            ? parsed.projectSuggestions
            : [],
          interviewPrep: Array.isArray(parsed.interviewPrep)
            ? parsed.interviewPrep
            : [],
        };
      },
      cacheTtl: 60 * 60 * 12,
    });

    if (!result.success) {
      const status =
        result.type === "RATE_LIMIT"
          ? 429
          : result.type === "DUPLICATE_REQUEST"
          ? 409
          : 500;

      return NextResponse.json(
        {
          success: false,
          message: result.message,
          type: result.type,
          retryAfter: result.retryAfter || null,
        },
        { status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: result.data,
        cached: result.cached || false,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Roadmap Generator Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while generating the roadmap.",
      },
      { status: 500 }
    );
  }
}