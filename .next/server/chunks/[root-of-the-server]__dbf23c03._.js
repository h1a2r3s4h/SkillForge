module.exports = [
"[project]/.next-internal/server/app/api/inngest/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:module [external] (node:module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:module", () => require("node:module"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/lib/inngest/client.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inngest",
    ()=>inngest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/inngest/components/Inngest.js [app-route] (ecmascript)");
;
const inngest = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Inngest"]({
    id: "my-app",
    name: "SkillForge"
});
}),
"[project]/lib/inngest/functions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { db } from "@/lib/prisma";
// import { inngest } from "./client";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
// export const generateIndustryInsights = inngest.createFunction(
//   { name: "Generate Industry Insights" },
//   { cron: "0 0 * * 0" }, // Run every Sunday at midnight
//   async ({ event, step }) => {
//     const industries = await step.run("Fetch industries", async () => {
//       return await db.industryInsight.findMany({
//         select: { industry: true },
//       });
//     });
//     for (const { industry } of industries) {
//       const prompt = `
//           Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format:
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
//       const res = await step.ai.wrap(
//         "gemini",
//         async (p) => {
//           return await model.generateContent(p);
//         },
//         prompt
//       );
//       const text = res.response.candidates[0].content.parts[0].text || "";
//       const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
//       const insights = JSON.parse(cleanedText);
//       await step.run(`Update ${industry} insights`, async () => {
//         await db.industryInsight.update({
//           where: { industry },
//           data: {
//             ...insights,
//             lastUpdated: new Date(),
//             nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//           },
//         });
//       });
//     }
//   }
// );
__turbopack_context__.s([
    "helloWorld",
    ()=>helloWorld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/inngest/client.js [app-route] (ecmascript)");
;
const helloWorld = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"].createFunction({
    id: "hello-world"
}, {
    event: "test/hello.world"
}, async ({ event, step })=>{
    await step.sleep("wait-a-moment", "1s");
    return {
        message: `Hello ${event.data.email}!`
    };
});
}),
"[project]/app/api/inngest/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/inngest/next.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/inngest/client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inngest$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/inngest/functions.js [app-route] (ecmascript)");
;
;
;
const { GET, POST, PUT } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serve"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"],
    functions: []
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbf23c03._.js.map