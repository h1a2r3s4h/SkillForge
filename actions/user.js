"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function getUserOnboardingStatus() {
  const { userId } = await auth();

  if (!userId) {
    return { isOnboarded: false };
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      industry: true,
    },
  });

  return {
    isOnboarded: !!user?.industry,
  };
}

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    console.log("ONBOARDING DATA:", data);

    let existingIndustryInsight = await db.industryInsight.findUnique({
      where: { industry: data.industry },
    });

    console.log("EXISTING INDUSTRY INSIGHT:", existingIndustryInsight);

    // 1. Create industry row first if it doesn't exist
    if (!existingIndustryInsight) {
      try {
        const insights = await generateAIInsights(data.industry);

        console.log("GENERATED AI INSIGHTS:", insights);

        existingIndustryInsight = await db.industryInsight.create({
          data: {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      } catch (aiError) {
        console.error("AI insights generation failed during onboarding:", aiError);

        // create a minimal placeholder row so FK works
        existingIndustryInsight = await db.industryInsight.create({
          data: {
            industry: data.industry,
            marketOutlook: "Pending",
            growthRate: 0,
            demandLevel: "Unknown",
            topSkills: [],
            salaryRanges: [],
            keyTrends: [],
            recommendedSkills: [],
            nextUpdate: new Date(Date.now() + 24 * 60 * 60 * 1000),
          },
        });
      }
    }

    // 2. Now update user after referenced row exists
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        industry: data.industry,
        experience: data.experience,
        bio: data.bio,
        skills: data.skills,
      },
    });

    revalidatePath("/");
    revalidatePath("/dashboard");

    return updatedUser;
  } catch (error) {
    console.error("REAL UPDATE USER ERROR:", error);
    throw new Error(error?.message || "Failed to update profile");
  }
}