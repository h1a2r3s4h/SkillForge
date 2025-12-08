"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// --- 🛠️ JSON Schema for Structured Output ---
// This schema strictly defines the expected structure of the quiz response,
// forcing the model to return valid, predictable JSON.
const quizSchema = {
  type: "object",
  properties: {
    questions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          question: { type: "string" },
          options: {
            type: "array",
            items: { type: "string" },
            minItems: 4,
            maxItems: 4,
          },
          correctAnswer: { type: "string" },
          explanation: { type: "string" },
        },
        required: [
          "question",
          "options",
          "correctAnswer",
          "explanation",
        ],
      },
      minItems: 10,
      maxItems: 10,
    },
  },
  required: ["questions"],
};

// ====================================================================
// GENERATE QUIZ FUNCTION (IMPROVED WITH STRUCTURED OUTPUT)
// ====================================================================
// ====================================================================
// GENERATE QUIZ FUNCTION (IMPROVED WITH STRUCTURED OUTPUT)
// ====================================================================
export async function generateQuiz() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true, skills: true },
  });

  if (!user) throw new Error("User not found");

  // 1. 🚀 UPDATED PROMPT FOR EASIER, USER-FRIENDLY, AND TRENDY QUESTIONS
  const prompt = `
    Generate exactly 10 engaging and easy-to-understand multiple-choice quiz questions
    for a ${user.industry} professional${
      user.skills?.length ? ` with knowledge in ${user.skills.join(", ")}` : ""
    }.
    
    The questions should focus on **current industry trends, popular tools, fundamental concepts, and general knowledge**
    relevant to the user's profile to create a fun, user-friendly, and trendy quiz.
    
    Each question must be multiple choice with 4 distinct options, a single correct answer, and a concise explanation.
  `;

  try {
    const result = await genAI.models.generateContent({
      // Use a model that supports structured output (e.g., gemini-2.5-flash or gemini-1.5-flash)
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        // Enforce JSON output conforming to the schema
        responseMimeType: "application/json",
        responseSchema: quizSchema,
      },
    });

    // The .text accessor is the correct way to get the response string.
    // It is guaranteed to be valid JSON by the model configuration.
    const text = result.text.trim();

    if (!text) {
      console.error("Gemini returned empty response:", result);
      throw new Error("Empty response from Gemini");
    }

    let quiz;
    try {
      // Directly parse the JSON string
      quiz = JSON.parse(text);
    } catch (err) {
      // Fallback in case of parsing error, though rare with structured output
      console.error("Failed to parse guaranteed JSON:", text, err);
      throw new Error("AI returned an unparsable structure");
    }

    if (!quiz?.questions || !Array.isArray(quiz.questions) || quiz.questions.length !== 10) {
      throw new Error("Invalid quiz structure or question count returned by AI");
    }

    return quiz.questions;
  } catch (error) {
    console.error("❌ Error generating quiz:", error.message);
    // console.error(error.stack); // Uncomment for full stack trace in dev
    throw new Error("Failed to generate quiz questions. Please try again.");
  }
}

// ====================================================================
// SAVE QUIZ RESULT FUNCTION
// ====================================================================
export async function saveQuizResult(questions, answers, score) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  const questionResults = questions.map((q, index) => ({
    question: q.question,
    answer: q.correctAnswer,
    userAnswer: answers[index],
    isCorrect: q.correctAnswer === answers[index],
    explanation: q.explanation,
  }));

  const wrongAnswers = questionResults.filter((q) => !q.isCorrect);

  let improvementTip = null;
  if (wrongAnswers.length > 0) {
    const wrongQuestionsText = wrongAnswers
      .map(
        (q) =>
          `Question: "${q.question}"\nCorrect Answer: "${q.answer}"\nUser Answer: "${q.userAnswer}"`
      )
      .join("\n\n");

    const improvementPrompt = `
      The user is a ${user.industry} professional. They got the following technical interview questions wrong:

      ${wrongQuestionsText}

      Based on these mistakes, provide a concise, specific improvement tip.
      Focus on the knowledge gaps revealed by these wrong answers (e.g., "Review asynchronous programming concepts..." or "Practice object-oriented design patterns...").
      Keep the response under 2 sentences and make it encouraging.
      Do not explicitly mention the mistakes or the number of incorrect answers.
    `;

    try {
      const tipResult = await genAI.models.generateContent({
        model: "gemini-2.0-flash", // Using 2.0-flash for speed/cost on simple text gen
        contents: [{ role: "user", parts: [{ text: improvementPrompt }] }],
      });

      improvementTip = tipResult.text.trim();
    } catch (error) {
      console.error("Error generating improvement tip:", error);
      improvementTip = "Keep practicing! Reviewing the concepts from your incorrect answers is a great next step.";
    }
  }

  try {
    const assessment = await db.assessment.create({
      data: {
        userId: user.id,
        quizScore: score,
        questions: questionResults,
        category: "Technical",
        improvementTip,
      },
    });

    return assessment;
  } catch (error) {
    console.error("Error saving quiz result:", error);
    throw new Error("Failed to save quiz result");
  }
}

// ====================================================================
// GET ASSESSMENTS FUNCTION
// ====================================================================
export async function getAssessments() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const assessments = await db.assessment.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" }, // Changed to 'desc' to show latest first
    });

    return assessments;
  } catch (error) {
    console.error("Error fetching assessments:", error);
    throw new Error("Failed to fetch assessments");
  }
}