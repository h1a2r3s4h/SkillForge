"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function saveResume(content) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const resume = await db.resume.upsert({
      where: { userId: user.id },
      update: { content },
      create: { userId: user.id, content },
    });

    revalidatePath("/resume");
    return resume;
  } catch (error) {
    console.error("Error saving resume:", error);
    throw new Error("Failed to save resume");
  }
}

export async function getResume() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    return await db.resume.findUnique({
      where: { userId: user.id },
    });
  } catch (error) {
    console.error("Error fetching resume:", error);
    throw new Error("Failed to fetch resume");
  }
}

export async function improveWithAI({ current, type }) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true },
  });

  if (!user) throw new Error("User not found");

  const prompt = `
As an expert resume writer, improve the following ${type} description for a ${
    user.industry || "general"
  } professional.

Current content: "${current}"

Requirements:
1. Use action verbs
2. Include metrics and results where possible
3. Highlight relevant technical skills
4. Keep it concise but detailed
5. Focus on achievements over responsibilities
6. Use industry-specific keywords

Return ONLY the improved paragraph. No markdown. No explanation.
`;

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const improvedContent = (result.text || "").trim();

    if (!improvedContent) {
      throw new Error("Empty response from Gemini");
    }

    return improvedContent;
  } catch (error) {
    console.error("Error improving content:", error);
    throw new Error("Failed to improve content");
  }
}

export async function generateAIInsights(industry) {
  if (!industry) throw new Error("Industry is required");

  const prompt = `
You are an expert industry analyst.

Generate detailed industry insights for the ${industry} industry.

Return ONLY valid JSON with this exact structure:
{
  "marketOutlook": "Positive",
  "growthRate": 12,
  "demandLevel": "High",
  "topSkills": ["Skill 1", "Skill 2", "Skill 3"],
  "salaryRanges": [
    {
      "role": "Entry Level",
      "min": 40000,
      "median": 60000,
      "max": 80000
    },
    {
      "role": "Mid Level",
      "min": 70000,
      "median": 95000,
      "max": 120000
    }
  ],
  "keyTrends": ["Trend 1", "Trend 2", "Trend 3"],
  "recommendedSkills": ["Skill A", "Skill B", "Skill C"]
}
`;

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = (result.text || "").trim();

    console.log("RAW GEMINI RESPONSE:", text);

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    const cleanedText = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    const parsed = JSON.parse(cleanedText);

    return {
      marketOutlook: parsed.marketOutlook || "Neutral",
      growthRate: Number(parsed.growthRate || 0),
      demandLevel: parsed.demandLevel || "Medium",
      topSkills: Array.isArray(parsed.topSkills) ? parsed.topSkills : [],
      salaryRanges: Array.isArray(parsed.salaryRanges) ? parsed.salaryRanges : [],
      keyTrends: Array.isArray(parsed.keyTrends) ? parsed.keyTrends : [],
      recommendedSkills: Array.isArray(parsed.recommendedSkills)
        ? parsed.recommendedSkills
        : [],
    };
  } catch (error) {
    console.error("Error generating AI insights:", error);
    throw new Error("Failed to generate AI insights");
  }
}

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      industry: true,
    },
  });

  if (!user) throw new Error("User not found");
  if (!user.industry) return null;

  try {
    let insights = await db.industryInsight.findUnique({
      where: { industry: user.industry },
    });

    if (!insights) {
      try {
        const generatedInsights = await generateAIInsights(user.industry);

        insights = await db.industryInsight.create({
          data: {
            industry: user.industry,
            ...generatedInsights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      } catch (aiError) {
        console.error("Could not generate industry insights:", aiError);
        return null;
      }
    }

    return insights;
  } catch (error) {
    console.error("Error fetching industry insights:", error);
    throw new Error("Failed to fetch industry insights");
  }
}