module.exports = [
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
"[project]/app/(main)/roadmaps/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useState } from "react";
// import { Folder, ChevronDown, ChevronRight, LayoutDashboard } from "lucide-react";
// export default function DashboardPage() {
//   const [openSection, setOpenSection] = useState(null);
//   const [activePage, setActivePage] = useState("overview");
//   const handleToggle = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };
//   const renderContent = () => {
//     switch (activePage) {
//       case "overview":
//         return <div className="text-gray-300 text-lg">📊 Welcome to your dashboard overview!</div>;
//       case "frontend":
//         return <div className="text-gray-300 text-lg"><div className="text-gray-200 text-lg space-y-6 p-6 bg-gray-900 rounded-xl shadow-lg">
//   {/* Frontend Roadmap */}
//   <section>
//     <h2 className="text-3xl font-bold text-center mb-4">
//       🚀 Frontend Roadmap — HTML, CSS, JS, React! 🕸 Spider-Man Style
//     </h2>
//     <p className="text-gray-400 mb-4">
//       Objective: Learn the foundations of web design by mastering HTML, CSS, and JavaScript to build beautiful, interactive websites.
//     </p>
//     {/* HTML */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-purple-400">1️⃣ HTML Basics – The Web’s Skeleton</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Introduction to HTML & its role in web development</li>
//         <li>HTML tags & elements: html, head, body, header, footer</li>
//         <li>Text elements: h1, p, a, ul, ol, li</li>
//         <li>Semantic HTML: section, article, nav, main, aside</li>
//         <li><strong>Key Concepts:</strong> Elements, Tags, Nesting, Attributes, Semantic HTML</li>
//       </ul>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-purple-400">2️⃣ HTML Forms & Inputs – User Interaction</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Creating forms: form, input, textarea, select, button</li>
//         <li>Form submission methods: GET & POST</li>
//         <li>Input types & validation: text, email, number, password, required, min, max</li>
//         <li><strong>Key Concepts:</strong> Form elements, Input validation, Accessibility</li>
//       </ul>
//     </div>
//     {/* CSS */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-purple-400">3️⃣ CSS Basics – Styling the Web</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>CSS purpose & introduction</li>
//         <li>Box model: margin, border, padding, content</li>
//         <li>Text styling: color, font-family, font-size, line-height</li>
//         <li>Selectors & specificity: Inline vs External CSS</li>
//         <li><strong>Key Concepts:</strong> Box model, Selectors, Specificity</li>
//       </ul>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-purple-400">4️⃣ CSS Layouts – Building Responsive Pages</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Layout techniques: display, position, float, flexbox, grid</li>
//         <li>Flexbox & Grid for responsive layouts</li>
//         <li>Media queries for mobile-first design</li>
//         <li><strong>Key Concepts:</strong> Flexbox, Grid, Responsive design</li>
//       </ul>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-purple-400">5️⃣ Advanced CSS Styling</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Pseudo-classes & pseudo-elements: :hover, :focus, :nth-child</li>
//         <li>Animations & transitions for interactive UI</li>
//         <li><strong>Key Concepts:</strong> Animations, Transitions, Pseudo-elements</li>
//       </ul>
//     </div>
//     {/* JavaScript */}
//     <h2 className="text-3xl font-bold text-center mt-6 mb-4 text-blue-400">💻 JavaScript Surgeons</h2>
//     <p className="text-gray-400 mb-4">
//       Objective: Master JavaScript fundamentals, advanced concepts, DOM, and asynchronous programming to build dynamic web pages.
//     </p>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-blue-300">1️⃣ JavaScript Basics – The Language of the Web</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Variables & data types: string, number, boolean, object, array</li>
//         <li>Control flow: if, else, switch, ternary</li>
//         <li>Operators: +, -, *, /, %, ==, ===</li>
//         <li><strong>Key Concepts:</strong> Variables, Data Types, Operators, Conditionals</li>
//       </ul>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-blue-300">2️⃣ JavaScript Functions – Reusable Code</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Function declaration, parameters, arguments, return values</li>
//         <li>Arrow functions, closures, and scope</li>
//         <li><strong>Key Concepts:</strong> Function declaration, Expression, Scope, Closures</li>
//       </ul>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-blue-300">…and many more topics including Arrays, Objects, DOM, Events, Async JS, ES6+, APIs, Testing, Best Practices.</h3>
//     </div>
//     {/* React */}
//     <h2 className="text-3xl font-bold text-center mt-6 mb-4 text-pink-400">⚛ React Alchemist</h2>
//     <p className="text-gray-400 mb-4">
//       Objective: Master building dynamic, scalable web apps using React, Next.js, TailwindCSS, ShadCN, and modern best practices.
//     </p>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-pink-300">1️⃣ Introduction to React – Modern JS Library</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>React basics & virtual DOM</li>
//         <li>JSX & rendering elements</li>
//         <li>Project setup: Create-React-App or Vite</li>
//         <li><strong>Key Concepts:</strong> React, JSX, Virtual DOM, Components</li>
//       </ul>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-pink-300">2️⃣ Components & Props – Building Blocks</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Functional vs class components</li>
//         <li>Props, children, default props</li>
//         <li>Breaking UI into reusable components</li>
//       </ul>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-pink-300">…plus State Management, Lifecycle, Hooks, React Router, Context API, Forms, Styling, Performance, Deployment, Advanced Patterns, Scalable Architecture.</h3>
//     </div>
//   </section>
// </div>
// </div>;
//       case "backend":
//         return <div className="text-gray-300 text-lg"><div className="text-gray-200 text-lg space-y-6 p-6 bg-gray-900 rounded-xl shadow-lg">
//   {/* Backend Roadmap */}
//   <section>
//     <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400">
//       🥷 Node Ninja — Backend Roadmap
//     </h2>
//     <p className="text-gray-400 mb-4">
//       Objective: Master backend development with Node.js. Learn to build server-side applications, handle HTTP requests, connect databases, and create real-time apps.
//     </p>
//     {/* Node.js Introduction */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">1️⃣ Introduction to Node.js – Power on the Server</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Node.js vs traditional server-side languages</li>
//         <li>Understanding Node.js runtime & event-driven, non-blocking I/O</li>
//         <li>Setting up Node.js and npm</li>
//         <li>Simple Node.js application creation</li>
//         <li><strong>Key Concepts:</strong> Event-driven architecture, Non-blocking I/O, npm, Modules</li>
//       </ul>
//     </div>
//     {/* Event Loop */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">2️⃣ Understanding the Event Loop</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Event loop and concurrency in Node.js</li>
//         <li>Asynchronous processing with callbacks & promises</li>
//         <li>Blocking vs Non-blocking execution</li>
//         <li><strong>Key Concepts:</strong> Event loop, Async processing, Callbacks, Promises</li>
//       </ul>
//     </div>
//     {/* HTTP Server */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">3️⃣ Creating a Basic HTTP Server</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Using `http` module to handle GET, POST, PUT, DELETE</li>
//         <li>Sending & receiving data with request/response objects</li>
//         <li><strong>Key Concepts:</strong> HTTP server, Routing, Request/Response objects</li>
//       </ul>
//     </div>
//     {/* Express.js */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">4️⃣ Express.js – Simplifying Backend</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Setup Express app & define routes</li>
//         <li>Middleware & built-in functions (body-parser, cookie-parser)</li>
//         <li>Dynamic data handling with URL params & query strings</li>
//         <li><strong>Key Concepts:</strong> Express.js, Routing, Middleware</li>
//       </ul>
//     </div>
//     {/* RESTful API */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">5️⃣ RESTful API Design</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Design endpoints & handle HTTP methods</li>
//         <li>Return JSON data & handle status codes</li>
//         <li><strong>Key Concepts:</strong> REST API, CRUD operations, Status codes, JSON responses</li>
//       </ul>
//     </div>
//     {/* Databases */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">6️⃣ Working with Databases</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>SQL vs NoSQL overview</li>
//         <li>MongoDB with Mongoose for CRUD operations</li>
//         <li>SQL databases with ORMs like Prisma or Drizzle</li>
//         <li><strong>Key Concepts:</strong> MongoDB, SQL/NoSQL, CRUD, ORMs</li>
//       </ul>
//     </div>
//     {/* Authentication */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">7️⃣ Authentication & Authorization</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>JWT-based authentication</li>
//         <li>Password hashing with bcrypt.js</li>
//         <li>Role-based access control & middleware security</li>
//         <li><strong>Key Concepts:</strong> Auth, JWT, Bcrypt, RBAC</li>
//       </ul>
//     </div>
//     {/* File System */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">8️⃣ Working with File Systems</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Reading & writing files with `fs` module</li>
//         <li>Handling file uploads using `multer`</li>
//         <li><strong>Key Concepts:</strong> File system, File uploads, Async/Sync operations</li>
//       </ul>
//     </div>
//     {/* Real-time Apps */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">9️⃣ Building Real-time Applications</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>WebSockets & Socket.io for real-time communication</li>
//         <li>Use cases: chat apps, live notifications</li>
//         <li><strong>Key Concepts:</strong> WebSockets, Real-time apps, Socket.io</li>
//       </ul>
//     </div>
//     {/* Deployment & Monitoring */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">🔟 Deployment & Monitoring</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>Deploying on Heroku, AWS, DigitalOcean</li>
//         <li>Environment variables & reverse proxies (Nginx/Apache)</li>
//         <li>Logging with Winston/Morgan & process monitoring with PM2</li>
//         <li><strong>Key Concepts:</strong> Deployment, Logging, Monitoring, PM2</li>
//       </ul>
//     </div>
//     {/* Advanced Topics */}
//     <div className="space-y-2">
//       <h3 className="text-xl font-semibold text-yellow-300">1️⃣1️⃣ Advanced Topics</h3>
//       <ul className="list-disc list-inside text-gray-300">
//         <li>API Rate Limiting: Protect endpoints using `express-rate-limit`</li>
//         <li>GraphQL: Queries, Mutations, Subscriptions with Apollo Server</li>
//         <li>PM2 monitoring: Auto-restart, logs, performance stats</li>
//       </ul>
//     </div>
//   </section>
// </div>
// </div>;
//       case "auth":
//         return <div className="text-gray-300 text-lg">🔐 Authentication Roadmap — Master login systems and tokens!</div>;
//       default:
//         return <div className="text-gray-300 text-lg">Select an item from the sidebar.</div>;
//     }
//   };
//   return (
//   <div className="flex flex-col md:flex-row h-screen w-screen bg-black text-white m-0 p-0 font-sans">
//     {/* Sidebar */}
//     <aside className="w-full md:w-64 bg-black border-b md:border-b-0 md:border-r border-gray-800 p-4 flex flex-col">
//       <h1 className="text-2xl font-extrabold mb-6 flex items-center gap-2 text-purple-400 drop-shadow-lg">
//         <LayoutDashboard className="w-6 h-6 text-purple-400" /> My Dashboard
//       </h1>
//       <nav className="space-y-3">
//         {/* Overview */}
//         <button
//           onClick={() => setActivePage("overview")}
//           className={`w-full text-left px-3 py-2 rounded-lg transition transform hover:scale-105 ${
//             activePage === "overview"
//               ? "bg-purple-600 text-white shadow-[0_0_10px_rgba(128,0,255,0.7)]"
//               : "hover:bg-gray-800 text-gray-300"
//           }`}
//         >
//           Overview
//         </button>
//         {/* Roadmap Folder */}
//         <div>
//           <button
//             onClick={() => handleToggle("roadmap")}
//             className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 transition transform hover:scale-105"
//           >
//             <span className="flex items-center gap-2">
//               <Folder className="w-5 h-5 text-yellow-400" /> Roadmap
//             </span>
//             {openSection === "roadmap" ? (
//               <ChevronDown className="w-4 h-4" />
//             ) : (
//               <ChevronRight className="w-4 h-4" />
//             )}
//           </button>
//           {/* Dropdown */}
//           {openSection === "roadmap" && (
//             <div className="ml-6 mt-2 space-y-2">
//               {["frontend", "backend", "auth"].map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setActivePage(page)}
//                   className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition transform hover:scale-105 ${
//                     activePage === page
//                       ? "bg-purple-600 text-white shadow-[0_0_8px_rgba(128,0,255,0.6)]"
//                       : "hover:bg-gray-800 text-gray-400"
//                   }`}
//                 >
//                   {page.charAt(0).toUpperCase() + page.slice(1)}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>
//     </aside>
//     {/* Main Content */}
//     <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-black">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400 drop-shadow-md">
//         Dashboard
//       </h2>
//       <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-800 shadow-[0_0_20px_rgba(128,0,255,0.4)]">
//         {renderContent()}
//       </div>
//     </main>
//   </div>
// );
// }
}),
"[project]/app/(main)/roadmaps/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/roadmaps/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f092c268._.js.map