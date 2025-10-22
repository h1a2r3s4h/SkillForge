(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(main)/preparationstreet/preparationStreet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "topics",
    ()=>topics
]);
const topics = [
    {
        name: "HTML & CSS",
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
    {
        name: "shadcn/ui",
        video: "https://www.youtube.com/embed/Mg93safD9ss?si=8bAwJjS_x2O1yPjf",
        cheatSheets: []
    },
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
            "/cheatSheets/expressJS.pdf"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/poppins_ad34f933.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "poppins_ad34f933-module__z61lNW__className",
});
}),
"[next]/internal/font/google/poppins_ad34f933.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ad34f933$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_ad34f933.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ad34f933$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ad34f933$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ad34f933$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/(main)/preparationstreet/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreparationStreet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$preparationstreet$2f$preparationStreet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/preparationstreet/preparationStreet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ad34f933$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_ad34f933.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PreparationStreet() {
    _s();
    const [selectedTopic, setSelectedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$preparationstreet$2f$preparationStreet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topics"][0]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white ".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ad34f933$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-gradient-to-b from-gray-950 to-black p-6 flex flex-col gap-4 shadow-2xl border-r border-gray-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 tracking-tight",
                        children: "Preparation Street"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$preparationstreet$2f$preparationStreet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topics"].map((topic, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedTopic(topic),
                            className: "text-left p-3 rounded-lg transition-all duration-300 \n              hover:shadow-lg hover:translate-x-1 \n              ".concat(selectedTopic.name === topic.name ? "bg-gradient-to-r from-purple-700 to-pink-600 shadow-lg" : "bg-gray-900 hover:bg-gray-800"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-medium",
                                children: topic.name
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-8 overflow-y-auto backdrop-blur-sm space-y-8 bg-black/30 shadow-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]",
                        children: selectedTopic.name
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)] border border-gray-800/70 bg-black/60 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            className: "w-full h-full",
                            src: selectedTopic.video,
                            title: selectedTopic.name,
                            allowFullScreen: true
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: selectedTopic.cheatSheets.map((sheet, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800/70 rounded-2xl p-5 flex flex-col items-center  shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300",
                                children: sheet.endsWith(".pdf") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: sheet.startsWith("http") ? sheet : "".concat(sheet),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-purple-400 underline hover:text-pink-400 text-lg font-medium",
                                    children: "View PDF Cheat Sheet"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: sheet,
                                    alt: "cheat sheet",
                                    className: "rounded-xl max-h-80 object-contain shadow-md hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/preparationstreet/page.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/preparationstreet/page.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(PreparationStreet, "VSlN2z8dW8IRpans5BliYyy3WdA=");
_c = PreparationStreet;
var _c;
__turbopack_context__.k.register(_c, "PreparationStreet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__b68d5f3c._.js.map