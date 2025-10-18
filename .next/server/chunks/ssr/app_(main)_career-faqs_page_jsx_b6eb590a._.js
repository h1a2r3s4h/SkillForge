module.exports = [
"[project]/app/(main)/career-faqs/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareerFaqs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CareerFaqs() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const faqsData = [
        // Year-wise data with a `year` property
        {
            year: "First Year",
            question: "Which programming language should I focus on first? C++ or Python?",
            answer: "Focus on the language that helps you learn programming fundamentals quickly. C++ is great for understanding memory and performance, Python is easier for problem-solving and AI/ML."
        },
        {
            year: "First Year",
            question: "How important are math subjects like Discrete Math, Linear Algebra?",
            answer: "Math is crucial, especially for algorithms, AI/ML, and graphics. Discrete Math helps in understanding logic and computation; Linear Algebra is essential for AI/ML."
        },
        {
            year: "First Year",
            question: "Should I start learning coding outside college?",
            answer: "Yes. Practice coding on platforms like LeetCode, Codeforces, HackerRank to build strong problem-solving skills."
        },
        {
            year: "First Year",
            question: "How do I manage time between college labs and learning coding?",
            answer: "Allocate short daily sessions for coding and practice during weekends. Prioritize understanding concepts over just completing assignments."
        },
        {
            year: "First Year",
            question: "Which online platforms are good for coding practice?",
            answer: "LeetCode, Codeforces, HackerRank, GeeksforGeeks, and CodeChef are excellent for practicing algorithms and DSA."
        },
        {
            year: "First Year",
            question: "How do I start learning Competitive Programming?",
            answer: "Start with easy problems on Codeforces, CodeChef, or HackerRank. Learn basic loops, arrays, strings, and sorting algorithms first."
        },
        {
            year: "First Year",
            question: "Which programming language is best for CP?",
            answer: "C++ is preferred for speed, STL, and better control of memory. Python can be used for easier syntax but may be slower in contests."
        },
        {
            year: "First Year",
            question: "How much time should I dedicate to CP daily?",
            answer: "Even 30–60 minutes daily is effective if consistent. Gradually increase difficulty over time."
        },
        {
            year: "First Year",
            question: "What are the must-learn data structures for CP?",
            answer: "Arrays, Strings, HashMaps, Stacks, Queues, Heaps, Trees, Graphs, and basic DP (Dynamic Programming)."
        },
        {
            year: "First Year",
            question: "Do I need math for CP?",
            answer: "Yes. Number theory, combinatorics, probability basics, and modular arithmetic are commonly used."
        },
        {
            year: "Second Year",
            question: "Should I learn Web Development, App Development, or Data Science?",
            answer: "Choose based on your interest: Web/App for product building, Data Science for analytics/AI. All are growing fields, but each needs different skills."
        },
        {
            year: "Second Year",
            question: "What projects should I do for my portfolio?",
            answer: "Start small projects like websites, apps, or AI models. Showcase completed projects on GitHub to impress recruiters."
        },
        {
            year: "Second Year",
            question: "How to start competitive programming or DSA seriously?",
            answer: "Learn basic algorithms and data structures, solve problems daily on coding platforms, participate in contests to improve speed and logic."
        },
        {
            year: "Second Year",
            question: "Do internships matter now or can I focus on learning?",
            answer: "Early internships are optional but help in experience. Focus on learning fundamentals first; internships become more important in 3rd year."
        },
        {
            year: "Second Year",
            question: "Which electives to choose for AI, ML, Cybersecurity, or Cloud?",
            answer: "Choose electives aligned with your career interest. AI/ML needs probability/statistics, Cybersecurity needs networking/security fundamentals."
        },
        {
            year: "Third Year",
            question: "How to prepare for internships in top tech companies?",
            answer: "Strengthen DSA, build projects, contribute to open source, and prepare for behavioral interviews. Start applying early."
        },
        {
            year: "Third Year",
            question: "Which programming language/technology should I master?",
            answer: "Depends on your interest: Python for AI/ML, JavaScript/TypeScript for Web Dev, C++/Java for system-level or competitive programming."
        },
        {
            year: "Third Year",
            question: "Should I focus on DSA or practical projects?",
            answer: "Balance both. DSA is key for interviews; projects demonstrate practical skills and initiative."
        },
        {
            year: "Third Year",
            question: "Is research important or should I just focus on industry skills?",
            answer: "Research is optional unless you plan for higher studies or AI roles. Industry skills are more important for software development jobs."
        },
        {
            year: "Third Year",
            question: "How do I prepare my GitHub and resume professionally?",
            answer: "Upload clean, well-documented projects on GitHub. Resume should highlight skills, projects, internships, and achievements concisely."
        },
        {
            year: "Third Year",
            question: "Should I start learning advanced topics like ML, Blockchain, Cloud?",
            answer: "Yes, if interested. Start with small projects or courses to get hands-on experience; don’t overwhelm yourself."
        },
        {
            year: "Third Year",
            question: "How to improve my CP rating quickly?",
            answer: "Solve problems consistently, participate in contests, analyze editorials, and learn from mistakes."
        },
        {
            year: "Third Year",
            question: "How to balance CP practice with projects and DSA?",
            answer: "Set dedicated time blocks: 1–2 hours of CP, DSA for interviews, projects for portfolio. Consistency beats cramming."
        },
        {
            year: "Third Year",
            question: "Should I focus on CP if I want a job in AI/ML?",
            answer: "CP improves problem-solving skills but for AI/ML also focus on Python, NumPy, Pandas, ML algorithms, and projects."
        },
        {
            year: "Third Year",
            question: "Which platforms are best for CP?",
            answer: "Codeforces, AtCoder, CodeChef, LeetCode, HackerRank, and TopCoder."
        },
        {
            year: "Fourth Year",
            question: "How to prepare for placements efficiently?",
            answer: "Focus on DSA, system design, and mock interviews. Revise past projects and practice behavioral questions."
        },
        {
            year: "Fourth Year",
            question: "Should I go for higher studies (MTech/MS) or job?",
            answer: "Depends on your long-term goal. Job if you want industry experience, MS/MTech if you want research or specialized roles."
        },
        {
            year: "Fourth Year",
            question: "How to choose between core CS roles, Web/AI/ML, or product-based roles?",
            answer: "Align choice with your interest, skills, and career goals. Try internships to understand the work before final decisions."
        },
        {
            year: "Fourth Year",
            question: "What are the important interview skills to focus on?",
            answer: "DSA, system design, problem-solving, coding efficiency, and behavioral skills."
        },
        {
            year: "Fourth Year",
            question: "How to do a final year project that is impressive but feasible?",
            answer: "Pick a topic you’re passionate about, use existing libraries/tools, keep scope realistic, and document everything properly."
        },
        {
            year: "General",
            question: "C++ vs Python vs Java for DSA & interviews — which to choose?",
            answer: "C++ for performance & competitive programming, Python for AI/ML, Java for readability & large-scale projects. Choose based on interest & job role."
        },
        {
            year: "General",
            question: "Web Development vs AI/ML vs App Development — which is best for career?",
            answer: "All are good. Web/App for product roles, AI/ML for analytics/intelligence, pick based on your interest & strength in math/logic."
        },
        {
            year: "General",
            question: "Do I need to be an expert in all CS subjects or focus on specialization?",
            answer: "Focus on fundamentals, DSA, and your chosen specialization. Depth is better than shallow knowledge everywhere."
        },
        {
            year: "General",
            question: "How to balance coding practice, projects, and learning new tech?",
            answer: "Time-block your week: daily coding, weekly projects, and monthly new tech exploration. Consistency is key."
        },
        {
            year: "General",
            question: "Should I focus on competitive programming or real-world projects?",
            answer: "Both matter. CP strengthens problem-solving; projects show practical skills. Balance based on career goals."
        },
        {
            year: "General",
            question: "How to choose electives wisely for career goals?",
            answer: "Pick electives that strengthen your desired skill set or domain knowledge relevant to jobs or higher studies."
        },
        {
            year: "General",
            question: "Is it too late to switch fields in final year?",
            answer: "Not too late. Focused learning and small projects can help you switch to Web, AI/ML, or other domains if needed."
        }
    ];
    // Filter based on search query
    const filteredFaqs = faqsData.filter((faq)=>faq.question.toLowerCase().includes(searchQuery.toLowerCase()));
    // Group by year
    const faqsByYear = filteredFaqs.reduce((acc, faq)=>{
        if (!acc[faq.year]) acc[faq.year] = [];
        acc[faq.year].push(faq);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-[#0A0A0A] text-white flex flex-col items-center px-6 pt-28 pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm uppercase tracking-widest",
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/career-faqs/page.jsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold mt-2",
                        children: "BTech CS Career & Academic FAQs"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/career-faqs/page.jsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm md:text-base mt-4",
                        children: "Search questions by keyword and find answers for all 4 years and career guidance."
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/career-faqs/page.jsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search questions...",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        className: "mt-6 w-full md:w-3/4 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/career-faqs/page.jsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/career-faqs/page.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl w-full mt-10 space-y-8",
                children: [
                    Object.keys(faqsByYear).map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl md:text-2xl font-semibold text-indigo-400 mb-4",
                                    children: year
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: faqsByYear[year].map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex justify-between items-center w-full text-left px-5 py-4 focus:outline-none",
                                                    onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base md:text-lg font-medium",
                                                            children: faq.question
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            className: `transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6 9l6 6 6-6",
                                                                stroke: "white",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `transition-all duration-500 px-5 overflow-hidden ${openIndex === index ? "max-h-60 pb-4 opacity-100" : "max-h-0 opacity-0"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-300 text-sm md:text-base leading-relaxed",
                                                        children: faq.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                                    lineNumber: 329,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/career-faqs/page.jsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, year, true, {
                            fileName: "[project]/app/(main)/career-faqs/page.jsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)),
                    filteredFaqs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-center mt-6",
                        children: [
                            'No questions found for "',
                            searchQuery,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/career-faqs/page.jsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/career-faqs/page.jsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/career-faqs/page.jsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28main%29_career-faqs_page_jsx_b6eb590a._.js.map