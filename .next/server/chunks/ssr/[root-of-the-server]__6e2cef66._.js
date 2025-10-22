module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/actions/dashboard.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00fd9a76538e46ac505176edc3af2d903147fc5155":"getIndustryInsights","7fc8da251ab711352b964e6b75fa839b8b17bd9ddd":"generateAIInsights"},"",""] */ __turbopack_context__.s([
    "generateAIInsights",
    ()=>generateAIInsights,
    "getIndustryInsights",
    ()=>getIndustryInsights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-rsc] (ecmascript)"); // ✅ latest SDK
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
// Initialize Gemini
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
    apiKey: process.env.GEMINI_API_KEY
});
const generateAIInsights = async (industry)=>{
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
            contents: prompt
        });
        const text = result.text || "";
        if (!text) return getDefaultInsights();
        const cleanText = text.replace(/```(?:json)?\n?/g, "").trim();
        try {
            return JSON.parse(cleanText);
        } catch  {
            return getDefaultInsights();
        }
    } catch  {
        return getDefaultInsights();
    }
};
// Default fallback if Gemini fails
const getDefaultInsights = ()=>({
        salaryRanges: [
            {
                role: "Example Role",
                min: 0,
                max: 0,
                median: 0,
                location: "Unknown"
            }
        ],
        growthRate: 0,
        demandLevel: "Medium",
        topSkills: [],
        marketOutlook: "Neutral",
        keyTrends: [],
        recommendedSkills: []
    });
async function getIndustryInsights() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId: userId
        },
        include: {
            industryInsight: true
        }
    });
    if (!user) throw new Error("User not found");
    let industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.findUnique({
        where: {
            industry: user.industry
        }
    });
    if (!industryInsight || new Date() >= new Date(industryInsight.nextUpdate)) {
        const insights = await generateAIInsights(user.industry);
        if (!industryInsight) {
            industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.create({
                data: {
                    industry: user.industry,
                    ...insights,
                    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            });
        } else {
            industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.update({
                where: {
                    industry: user.industry
                },
                data: {
                    ...insights,
                    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            });
        }
    }
    return industryInsight;
} // "use server";
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
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateAIInsights,
    getIndustryInsights
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateAIInsights, "7fc8da251ab711352b964e6b75fa839b8b17bd9ddd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getIndustryInsights, "00fd9a76538e46ac505176edc3af2d903147fc5155", null);
}),
"[project]/actions/user.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00570153b607cd55ffce061a4c828156986064cca3":"getUserOnboardingStatus","402eaa9fcf95938e36ed1a74dee53d5f9cc7ac199d":"updateUser"},"",""] */ __turbopack_context__.s([
    "getUserOnboardingStatus",
    ()=>getUserOnboardingStatus,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dashboard.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function updateUser(data) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId: userId
        }
    });
    if (!user) throw new Error("User not found");
    try {
        // Generate AI insights BEFORE transaction
        let insights = null;
        let industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.findUnique({
            where: {
                industry: data.industry
            }
        });
        if (!industryInsight) {
            insights = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAIInsights"])(data.industry);
        }
        // Only DB operations inside transaction
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
            if (!industryInsight) {
                industryInsight = await tx.industryInsight.create({
                    data: {
                        industry: data.industry,
                        ...insights,
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    }
                });
            }
            const updatedUser = await tx.user.update({
                where: {
                    id: user.id
                },
                data: {
                    industry: data.industry,
                    experience: data.experience,
                    bio: data.bio,
                    skills: data.skills
                }
            });
            return {
                updatedUser,
                industryInsight
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return result.updatedUser;
    } catch (error) {
        console.error("Error updating user and industry:", error);
        throw new Error("Failed to update profile");
    }
}
async function getUserOnboardingStatus() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            },
            select: {
                industry: true
            }
        });
        return {
            isOnboarded: !!user?.industry
        };
    } catch (error) {
        console.error("Error checking onboarding status:", error);
        throw new Error("Failed to check onboarding status");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateUser,
    getUserOnboardingStatus
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUser, "402eaa9fcf95938e36ed1a74dee53d5f9cc7ac199d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserOnboardingStatus, "00570153b607cd55ffce061a4c828156986064cca3", null);
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/data/industries.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "industries",
    ()=>industries
]);
const industries = [
    {
        id: "tech",
        name: "Technology",
        subIndustries: [
            "Software Development",
            "IT Services",
            "Cybersecurity",
            "Cloud Computing",
            "Artificial Intelligence/Machine Learning",
            "Data Science & Analytics",
            "Internet & Web Services",
            "Robotics",
            "Quantum Computing",
            "Blockchain & Cryptocurrency",
            "IoT (Internet of Things)",
            "Virtual/Augmented Reality",
            "Semiconductor & Electronics"
        ]
    },
    {
        id: "finance",
        name: "Financial Services",
        subIndustries: [
            "Banking",
            "Investment Banking",
            "Insurance",
            "FinTech",
            "Wealth Management",
            "Asset Management",
            "Real Estate Investment",
            "Private Equity",
            "Venture Capital",
            "Cryptocurrency & Digital Assets",
            "Risk Management",
            "Payment Processing",
            "Credit Services"
        ]
    },
    {
        id: "healthcare",
        name: "Healthcare & Life Sciences",
        subIndustries: [
            "Healthcare Services",
            "Biotechnology",
            "Pharmaceuticals",
            "Medical Devices",
            "Healthcare IT",
            "Telemedicine",
            "Mental Health Services",
            "Genomics",
            "Clinical Research",
            "Healthcare Analytics",
            "Elder Care Services",
            "Veterinary Services",
            "Alternative Medicine"
        ]
    },
    {
        id: "manufacturing",
        name: "Manufacturing & Industrial",
        subIndustries: [
            "Automotive",
            "Aerospace & Defense",
            "Electronics Manufacturing",
            "Industrial Manufacturing",
            "Chemical Manufacturing",
            "Consumer Goods",
            "Food & Beverage Processing",
            "Textile Manufacturing",
            "Metal Fabrication",
            "3D Printing/Additive Manufacturing",
            "Machinery & Equipment",
            "Packaging",
            "Plastics & Rubber"
        ]
    },
    {
        id: "retail",
        name: "Retail & E-commerce",
        subIndustries: [
            "E-commerce Platforms",
            "Retail Technology",
            "Fashion & Apparel",
            "Consumer Electronics",
            "Grocery & Food Retail",
            "Luxury Goods",
            "Sports & Recreation",
            "Home & Garden",
            "Beauty & Personal Care",
            "Pet Products",
            "Specialty Retail",
            "Direct-to-Consumer (D2C)",
            "Department Stores"
        ]
    },
    {
        id: "media",
        name: "Media & Entertainment",
        subIndustries: [
            "Digital Media",
            "Gaming & Esports",
            "Streaming Services",
            "Social Media",
            "Digital Marketing",
            "Film & Television",
            "Music & Audio",
            "Publishing",
            "Advertising",
            "Sports Entertainment",
            "News & Journalism",
            "Animation",
            "Event Management"
        ]
    },
    {
        id: "education",
        name: "Education & Training",
        subIndustries: [
            "EdTech",
            "Higher Education",
            "Professional Training",
            "Online Learning",
            "K-12 Education",
            "Corporate Training",
            "Language Learning",
            "Special Education",
            "Early Childhood Education",
            "Career Development",
            "Educational Publishing",
            "Educational Consulting",
            "Vocational Training"
        ]
    },
    {
        id: "energy",
        name: "Energy & Utilities",
        subIndustries: [
            "Renewable Energy",
            "Clean Technology",
            "Oil & Gas",
            "Nuclear Energy",
            "Energy Management",
            "Utilities",
            "Smart Grid Technology",
            "Energy Storage",
            "Carbon Management",
            "Waste Management",
            "Water & Wastewater",
            "Mining",
            "Environmental Services"
        ]
    },
    {
        id: "consulting",
        name: "Professional Services",
        subIndustries: [
            "Management Consulting",
            "IT Consulting",
            "Strategy Consulting",
            "Digital Transformation",
            "Business Advisory",
            "Legal Services",
            "Accounting & Tax",
            "Human Resources",
            "Marketing Services",
            "Architecture",
            "Engineering Services",
            "Research & Development",
            "Business Process Outsourcing (BPO)"
        ]
    },
    {
        id: "telecom",
        name: "Telecommunications",
        subIndustries: [
            "Wireless Communications",
            "Network Infrastructure",
            "Telecom Services",
            "5G Technology",
            "Internet Service Providers",
            "Satellite Communications",
            "Data Centers",
            "Fiber Optics",
            "Mobile Technology",
            "VoIP Services",
            "Network Security",
            "Telecom Equipment",
            "Cloud Communications"
        ]
    },
    {
        id: "transportation",
        name: "Transportation & Logistics",
        subIndustries: [
            "Electric Vehicles",
            "Autonomous Vehicles",
            "Logistics & Supply Chain",
            "Aviation",
            "Railways",
            "Maritime Transport",
            "Urban Mobility",
            "Fleet Management",
            "Last-Mile Delivery",
            "Warehousing",
            "Freight & Cargo",
            "Public Transportation",
            "Space Transportation"
        ]
    },
    {
        id: "agriculture",
        name: "Agriculture & Food",
        subIndustries: [
            "AgTech",
            "Farming",
            "Food Production",
            "Sustainable Agriculture",
            "Precision Agriculture",
            "Aquaculture",
            "Vertical Farming",
            "Agricultural Biotechnology",
            "Food Processing",
            "Organic Farming",
            "Plant-Based Foods",
            "Agricultural Equipment",
            "Indoor Farming"
        ]
    },
    {
        id: "construction",
        name: "Construction & Real Estate",
        subIndustries: [
            "Commercial Construction",
            "Residential Construction",
            "Real Estate Development",
            "Property Management",
            "Construction Technology",
            "Building Materials",
            "Infrastructure Development",
            "Smart Buildings",
            "Interior Design",
            "Facilities Management",
            "Real Estate Technology",
            "Sustainable Building",
            "Urban Planning"
        ]
    },
    {
        id: "hospitality",
        name: "Hospitality & Tourism",
        subIndustries: [
            "Hotels & Resorts",
            "Restaurants & Food Service",
            "Travel Technology",
            "Tourism",
            "Event Planning",
            "Vacation Rentals",
            "Cruise Lines",
            "Catering",
            "Theme Parks",
            "Travel Agencies",
            "Hospitality Management",
            "Online Travel Booking",
            "Cultural Tourism"
        ]
    },
    {
        id: "nonprofit",
        name: "Non-Profit & Social Services",
        subIndustries: [
            "Charitable Organizations",
            "Social Services",
            "Environmental Conservation",
            "Humanitarian Aid",
            "Education Non-Profits",
            "Healthcare Non-Profits",
            "Arts & Culture",
            "Community Development",
            "International Development",
            "Animal Welfare",
            "Youth Organizations",
            "Social Enterprise",
            "Advocacy Organizations"
        ]
    }
];
}),
"[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/onboarding/_components/onboarding-form.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/onboarding/_components/onboarding-form.jsx <module evaluation>", "default");
}),
"[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/onboarding/_components/onboarding-form.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/onboarding/_components/onboarding-form.jsx", "default");
}),
"[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(main)/onboarding/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$industries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/industries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/user.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function OnboardingPage() {
    // Check if user is already onboarded
    const { isOnboarded } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserOnboardingStatus"])();
    if (isOnboarded) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            industries: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$industries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["industries"]
        }, void 0, false, {
            fileName: "[project]/app/(main)/onboarding/page.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(main)/onboarding/page.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/onboarding/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/onboarding/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6e2cef66._.js.map