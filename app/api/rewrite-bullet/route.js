import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  try {
    const body = await req.json();
    const { text, jobRole } = body;

    if (!text || !text.trim()) {
      return NextResponse.json(
        { error: "Bullet text is required" },
        { status: 400 }
      );
    }

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const prompt = `
You are a senior recruiter and resume writer.

Rewrite the following resume bullet for a ${jobRole || "Software Developer"} role.

Requirements:
- Make it stronger and more professional
- Make it impact-driven
- Make it ATS-friendly
- Add metrics only if they are realistic from the context
- Do not invent absurd numbers
- Keep it concise
- Output only one improved bullet
- Do not return explanations
- Do not use markdown
- Do not add multiple options

Original Bullet:
${text}

Return only the improved bullet.
`;

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    });

    const improved =
      completion?.choices?.[0]?.message?.content?.trim() || "Rewrite failed";

    return NextResponse.json({ improved });
  } catch (e) {
    console.error("Rewrite Bullet Error:", e);

    return NextResponse.json(
      { error: "Rewrite failed" },
      { status: 500 }
    );
  }
}