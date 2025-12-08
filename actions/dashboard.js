"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai"; // ✅ latest SDK

// Initialize Gemini
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// --- Safe Gemini insights generation ---
export const generateAIInsights = async (industry) => {
  const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format:
    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "High" | "Medium" | "Low",
      "topSkills": ["skill1", "skill2"],
      "marketOutlook": "Positive" | "Neutral" | "Negative",
      "keyTrends": ["trend1", "trend2"],
      "recommendedSkills": ["skill1", "skill2"]
    }
    IMPORTANT: Return ONLY the JSON. Include at least 5 roles and 5 skills/trends. No notes or markdown.
  `;

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const text = result.text || "";
    if (!text) return getDefaultInsights();

    const cleanText = text.replace(/```(?:json)?\n?/g, "").trim();

    try {
      return JSON.parse(cleanText);
    } catch {
      return getDefaultInsights();
    }
  } catch {
    return getDefaultInsights();
  }
};

// Default fallback if Gemini fails
const getDefaultInsights = () => ({
  salaryRanges: [{ role: "Example Role", min: 0, max: 0, median: 0, location: "Unknown" }],
  growthRate: 0,
  demandLevel: "Medium",
  topSkills: [],
  marketOutlook: "Neutral",
  keyTrends: [],
  recommendedSkills: [],
});



export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: { industryInsight: true },
  });
  if (!user) throw new Error("User not found");

  let industryInsight = await db.industryInsight.findUnique({
    where: { industry: user.industry },
  });

  if (!industryInsight || new Date() >= new Date(industryInsight.nextUpdate)) {
    const insights = await generateAIInsights(user.industry);

    if (!industryInsight) {
      industryInsight = await db.industryInsight.create({
        data: {
          industry: user.industry,
          ...insights,
          nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    } else {
      industryInsight = await db.industryInsight.update({
        where: { industry: user.industry },
        data: {
          ...insights,
          nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    }
  }

  return industryInsight;
}


// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { GoogleGenAI } from "@google/genai"; // ✅ latest SDK

// // Initialize Gemini
// const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// // --- Safe Gemini insights generation ---
// export const generateAIInsights = async (industry) => {
//   const prompt = `
//     Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format:
//     {
//       "salaryRanges": [
//         { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
//       ],
//       "growthRate": number,
//       "demandLevel": "High" | "Medium" | "Low",
//       "topSkills": ["skill1", "skill2"],
//       "marketOutlook": "Positive" | "Neutral" | "Negative",
//       "keyTrends": ["trend1", "trend2"],
//       "recommendedSkills": ["skill1", "skill2"]
//     }
//     IMPORTANT: Return ONLY the JSON. Include at least 5 roles and 5 skills/trends. No notes or markdown.
//   `;

//   try {
//     const result = await genAI.generate({
//       model: "gemini-2.0-flash",
//       input: prompt,
//     });

//     const text = result.outputText || "";
//     if (!text) return getDefaultInsights();

//     const cleanText = text.replace(/```(?:json)?\n?/g, "").trim();

//     try {
//       return JSON.parse(cleanText);
//     } catch (err) {
//       console.warn("Failed to parse Gemini JSON:", err.message);
//       return getDefaultInsights();
//     }
//   } catch (err) {
//     console.error("Gemini API error:", err.message);
//     return getDefaultInsights();
//   }
// };

// // Default fallback if Gemini fails
// const getDefaultInsights = () => ({
//   salaryRanges: [{ role: "Example Role", min: 0, max: 0, median: 0, location: "Unknown" }],
//   growthRate: 0,
//   demandLevel: "Medium",
//   topSkills: [],
//   marketOutlook: "Neutral",
//   keyTrends: [],
//   recommendedSkills: [],
// });



// export async function getIndustryInsights() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     include: { industryInsight: true },
//   });

//   if (!user) throw new Error("User not found");

//   if (!user.industryInsight) {
//     // ✅ Generate BEFORE DB call (no Prisma transaction timeout risk)
//     const insights = await generateAIInsights(user.industry);

//     const industryInsight = await db.industryInsight.create({
//       data: {
//         industry: user.industry,
//         ...insights,
//         nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//       },
//     });

//     return industryInsight;
//   }

//   return user.industryInsight;
// }

