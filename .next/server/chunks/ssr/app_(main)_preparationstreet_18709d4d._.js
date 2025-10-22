module.exports = [
"[project]/app/(main)/preparationstreet/preparationStreet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "topics",
    ()=>topics
]);
const topics = [
    {
        name: "HTML && CSS",
        video: "https://www.youtube.com/embed/HGTJBPNC-Gw",
        cheatSheets: [
            "/cheatSheets/html_basics.pdf"
        ]
    },
    {
        name: "JavaScript",
        video: "https://www.youtube.com/embed/lfmg-EJ8gm4",
        cheatSheets: [
            "/cheatSheets/js_basics.pdf"
        ]
    },
    {
        name: "TailwindCSS",
        video: "https://www.youtube.com/embed/6biMWgD6_JY",
        cheatSheets: [
            "/cheatSheets/tailwind_basics.pdf"
        ]
    },
    {
        name: "ReactJS",
        video: "https://www.youtube.com/embed/CgkZ7MvWUAA",
        cheatSheets: [
            "/cheatSheets/react_basics.pdf"
        ]
    },
    {
        name: "ReactJS Routing",
        video: "https://www.youtube.com/embed/943D7U74_sQ",
        cheatSheets: [
            "/cheatSheets/react_router.pdf"
        ]
    },
    // {
    //   name: "shadcn/ui Introduction",
    //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // replace with real one
    //   cheatSheets: ["/cheatSheets/shadcn_intro.pdf"],
    // },
    {
        name: "Node.js",
        video: "https://www.youtube.com/embed/FPJzYFgexJA?si=NR1JCRB-nDv_zO9n",
        cheatSheets: [
            "/cheatSheets/node_basics.pdf"
        ]
    },
    {
        name: "Express.js and Authentication",
        video: "https://www.youtube.com/embed/fBzm9zja2Y8",
        cheatSheets: [
            "/cheatSheets/express_basics.pdf"
        ]
    },
    {
        name: "MongoDB",
        video: "https://www.youtube.com/embed/c2M-rlkkT5o",
        cheatSheets: [
            "/cheatSheets/mongodb_basics.pdf"
        ]
    }
];
}),
"[project]/app/(main)/preparationstreet/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreparationStreet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$preparationstreet$2f$preparationStreet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/preparationstreet/preparationStreet.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function PreparationStreet() {
    const [selectedTopic, setSelectedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$preparationstreet$2f$preparationStreet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topics"][0]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-gradient-to-b from-gray-950 to-black p-6 flex flex-col gap-4 shadow-2xl border-r border-gray-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 tracking-tight",
                        children: "Preparation Street"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$preparationstreet$2f$preparationStreet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topics"].map((topic, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedTopic(topic),
                            className: `text-left p-3 rounded-lg transition-all duration-300 
              hover:shadow-lg hover:translate-x-1 
              ${selectedTopic.name === topic.name ? "bg-gradient-to-r from-purple-700 to-pink-600 shadow-lg" : "bg-gray-900 hover:bg-gray-800"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-medium",
                                children: topic.name
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-8 overflow-y-auto backdrop-blur-sm space-y-8 bg-black/30 shadow-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]",
                        children: selectedTopic.name
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)] border border-gray-800/70 bg-black/60 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            className: "w-full h-full",
                            src: selectedTopic.video,
                            title: selectedTopic.name,
                            allowFullScreen: true
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: selectedTopic.cheatSheets.map((sheet, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800/70 rounded-2xl p-5 flex flex-col items-center  shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300",
                                children: sheet.endsWith(".pdf") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: sheet,
                                    target: "_blank",
                                    className: "text-purple-400 underline hover:text-pink-400 text-lg font-medium",
                                    children: "View PDF Cheat Sheet"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: sheet,
                                    alt: "cheat sheet",
                                    className: "rounded-xl max-h-80 object-contain shadow-md hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28main%29_preparationstreet_18709d4d._.js.map