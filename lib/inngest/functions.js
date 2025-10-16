import { db } from "@/lib/prisma";
import { inngest } from "./client";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // Every Sunday at midnight
  async ({ step }) => {
    const industries = await step.run("Fetch industries", async () => {
      return db.industryInsight.findMany({ select: { industry: true } });
    });

    for (const { industry } of industries) {
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

      const res = await step.ai.wrap(
        "gemini",
        async (p) => {
          const result = await genAI.generate({
            model: "gemini-2.0-flash",
            input: p,
          });
          return result.outputText || "";
        },
        prompt
      );

      const cleanedText = res.replace(/```(?:json)?\n?/g, "").trim();

      let insights;
      try {
        insights = JSON.parse(cleanedText);
      } catch (err) {
        console.warn(`Failed to parse insights for ${industry}:`, err.message);
        insights = {
          salaryRanges: [{ role: "Example Role", min: 0, max: 0, median: 0, location: "Unknown" }],
          growthRate: 0,
          demandLevel: "Medium",
          topSkills: [],
          marketOutlook: "Neutral",
          keyTrends: [],
          recommendedSkills: [],
        };
      }

      await step.run(`Update ${industry} insights`, async () => {
        await db.industryInsight.update({
          where: { industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      });
    }
  }
);
