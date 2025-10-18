(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(main)/roadmaps/frontend.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const frontendRoadmap = {
    "HTML & CSS": {
        title: "Spider-Man 🕸 – HTML & CSS",
        objective: "Learn the foundations of web design by mastering HTML and CSS, creating the structure and styling that powers the web.",
        sections: [
            {
                title: "1. HTML Basics – The Web’s Skeleton",
                points: [
                    "Introduction to HTML (HyperText Markup Language) and its role in web development",
                    "Understanding HTML tags and elements",
                    "Building a simple webpage using HTML: html, head, body, header, footer",
                    "Working with text elements: h1, p, a, ul, ol, li",
                    "Structuring content with semantic HTML: section, article, nav, main, aside",
                    "Key Concepts: Elements, Tags, Nesting, Attributes, Semantic HTML"
                ]
            },
            {
                title: "2. HTML Forms and Inputs – User Interaction",
                points: [
                    "Creating forms with form, input, textarea, select, button",
                    "Understanding form submission, GET and POST methods",
                    "Using input types (text, email, number, password)",
                    "Validating form data with attributes like required, min, max",
                    "Key Concepts: Form elements, Input validation, Method types, Accessibility in forms"
                ]
            },
            {
                title: "3. CSS Basics – Styling the Web",
                points: [
                    "Introduction to CSS (Cascading Style Sheets) and its purpose",
                    "Understanding the CSS box model: margin, border, padding, content",
                    "Styling text, colors, and fonts with color, font-family, font-size, line-height",
                    "Understanding the concept of specificity and how CSS selectors work",
                    "Applying styles to HTML elements using selectors, classes, and IDs",
                    "Key Concepts: Box model, Selectors, Specificity, Inline vs external CSS"
                ]
            },
            {
                title: "4. CSS Layouts – Building Responsive Pages",
                points: [
                    "Introduction to layout techniques in CSS: display, position, float, flexbox, grid",
                    "Building layouts with Flexbox: Aligning items, creating rows and columns",
                    "Introduction to CSS Grid: Creating complex grid-based layouts",
                    "Media queries: Making websites responsive to different screen sizes",
                    "Key Concepts: Flexbox, Grid layout, Responsive design, Mobile-first approach"
                ]
            },
            {
                title: "5. Advanced CSS Styling",
                points: [
                    "Using pseudo-classes and pseudo-elements: :hover, :focus, :nth-child",
                    "Animations and transitions: Making elements move or change on user interaction",
                    "Styling links, buttons, and forms for better UX",
                    "Key Concepts: Pseudo-classes, Pseudo-elements, Animations, Transitions"
                ]
            },
            {
                title: "6. CSS Frameworks – Speeding Up Development",
                points: [
                    "Introduction to popular CSS frameworks: Bootstrap, TailwindCSS",
                    "How to use a CSS framework to quickly style pages",
                    "Customizing and overriding default styles in a framework",
                    "Key Concepts: Grid systems, Utility-first design, Responsive frameworks"
                ]
            },
            {
                title: "7. HTML5 & CSS3 Features",
                points: [
                    "HTML5 semantic elements: header, footer, main, article, section",
                    "New input types in HTML5: date, email, tel, range, color",
                    "CSS3 properties: border-radius, box-shadow, gradient, transitions",
                    "Key Concepts: Modern HTML5 elements, Advanced CSS3 techniques, Cross-browser compatibility"
                ]
            }
        ]
    },
    JavaScript: {
        title: "JavaScript Surgeons 🩺",
        objective: "Master the fundamentals and advanced concepts of JavaScript, as well as the DOM, in scripting dynamic web pages.",
        sections: [
            {
                title: "1. JavaScript Basics – The Language of the Web",
                points: [
                    "Introduction to JavaScript and its role in web development",
                    "Understanding variables and data types: string, number, boolean, object, array, null, undefined",
                    "Declaring variables with var, let, const",
                    "Understanding scope (Global, Local, Block Scope) and hoisting",
                    "Basic operators: +, -, *, /, %, ==, ===, !==",
                    "Control flow statements: if, else, else if, switch, ternary operator",
                    "Key Concepts: Variables, Data Types, Operators, Conditionals"
                ]
            },
            {
                title: "2. JavaScript Functions – Reusable Code",
                points: [
                    "What are JavaScript functions? Why are they important?",
                    "Declaring functions with the function keyword",
                    "Understanding parameters, arguments, and return values",
                    "Arrow functions: A modern way to define functions",
                    "Function scope and closures",
                    "Key Concepts: Function Declaration, Function Expression, Parameters vs Arguments, Return Value, Scope, Closures"
                ]
            },
            {
                title: "3. JavaScript Loops – Automating Repetitive Tasks",
                points: [
                    "Introduction to loops: for, while, and do...while loops",
                    "Looping through arrays",
                    "Loop control statements: break and continue",
                    "Using for...in and for...of loops",
                    "Key Concepts: Iteration, Loop control, Array iteration"
                ]
            },
            {
                title: "4. JavaScript Arrays – Working with Collections of Data",
                points: [
                    "What is an array?",
                    "Creating arrays, accessing elements by index",
                    "Array methods: push, pop, shift, unshift, splice, slice, indexOf, etc.",
                    "Using loops to iterate through arrays",
                    "Multi-dimensional arrays",
                    "Key Concepts: Array indices, Array methods, Array iteration"
                ]
            },
            {
                title: "5. JavaScript Objects – Working with Key-Value Pairs",
                points: [
                    "What is an object?",
                    "Creating objects with literal notation and constructor functions",
                    "Accessing object properties",
                    "Adding, updating, and deleting object properties",
                    "Object methods",
                    "Key Concepts: Object properties, Object methods, Object iteration"
                ]
            },
            {
                title: "6. DOM Manipulation – Interacting with the Webpage",
                points: [
                    "Introduction to the DOM (Document Object Model)",
                    "Selecting elements in the DOM: getElementById, getElementsByClassName, querySelector, querySelectorAll",
                    "Modifying element content: innerHTML, textContent",
                    "Modifying element attributes",
                    "Creating and appending new elements to the DOM",
                    "Key Concepts: DOM tree, Element selection, Content manipulation, Dynamic HTML"
                ]
            },
            {
                title: "7. JavaScript Events – Responding to User Actions",
                points: [
                    "Introduction to events: click, mouseover, keypress, submit, etc.",
                    "Adding event listeners to elements",
                    "Event handlers and callback functions",
                    "Event bubbling and capturing",
                    "Preventing default event behavior",
                    "Key Concepts: Event listeners, Event handlers, Event propagation"
                ]
            },
            {
                title: "8. Asynchronous JavaScript – Handling Delays",
                points: [
                    "Introduction to asynchronous programming and why it's important",
                    "Callbacks and callback hell",
                    "Promises: a better way to handle asynchronous operations",
                    "Async/Await syntax: A cleaner way to handle promises",
                    "Making API requests with fetch",
                    "Key Concepts: Asynchronous operations, Callbacks, Promises, Async/Await"
                ]
            },
            {
                title: "9. ES6+ Features – Modern JavaScript",
                points: [
                    "Introduction to ECMAScript 6 (ES6) and beyond",
                    "Let and const: improved variable declarations",
                    "Arrow functions: concise function syntax",
                    "Template literals: string interpolation",
                    "Destructuring: extracting values from arrays and objects",
                    "Spread and Rest operators",
                    "Classes: a more object-oriented approach",
                    "Modules: organizing code",
                    "Key Concepts: Modern JS syntax, improved code organization, new language features"
                ]
            },
            {
                title: "10. Working with APIs – Fetching Data from Servers",
                points: [
                    "What are APIs?",
                    "Introduction to RESTful APIs",
                    "Making API requests with fetch",
                    "Handling API responses",
                    "Working with JSON data",
                    "Key Concepts: API endpoints, HTTP methods, JSON parsing, Asynchronous data fetching"
                ]
            },
            {
                title: "11. Error Handling – Debugging JavaScript",
                points: [
                    "What are JavaScript errors?",
                    "Try...catch statements: handling errors gracefully",
                    "Throwing custom errors",
                    "Debugging tools and techniques: console.log, browser debugger",
                    "Key Concepts: Error types, try...catch, Debugging"
                ]
            },
            {
                title: "12. JavaScript Testing – Ensuring Code Quality",
                points: [
                    "Introduction to JavaScript testing",
                    "Unit testing basics",
                    "Testing frameworks: Jest, Mocha",
                    "Writing tests for functions and modules",
                    "Key Concepts: Unit tests, Test frameworks, Code Quality"
                ]
            },
            {
                title: "13. JavaScript Best Practices and Patterns",
                points: [
                    "Code organization and structure",
                    "Writing clean and maintainable code",
                    "Design patterns: common solutions to recurring problems",
                    "Avoiding common mistakes",
                    "Key Concepts: Code maintainability, Design patterns, Code quality"
                ]
            }
        ]
    },
    React: {
        title: "React Alchemist 🧪",
        objective: "Master the art of building dynamic, interactive, and scalable web applications using React.js, Next.js, Tailwind CSS, ShadCN, and other modern technologies. Learn best practices, performance optimizations, and advanced patterns for building professional-grade React applications.",
        sections: [
            {
                title: "1. Introduction to React – The Modern JavaScript Library",
                points: [
                    "What is React and why it’s the go-to library for building UIs",
                    "Understanding the virtual DOM and how React improves performance",
                    "Setting up a React project using create-react-app or Vite",
                    "JSX: A syntax extension for JavaScript that allows writing HTML in JS",
                    "Rendering elements and basic React components",
                    "Key Concepts: React, JSX, Virtual DOM, Components"
                ]
            },
            {
                title: "2. Components and Props – The Building Blocks of React",
                points: [
                    "Understanding functional and class components",
                    "Passing data between components using props",
                    "How to use children and default props",
                    "Breaking down UI into smaller reusable components",
                    "Key Concepts: Components, Props, Reusability, State vs Props"
                ]
            },
            {
                title: "3. State Management – React's Core Mechanism",
                points: [
                    "Understanding state in React and how it drives component re-renders",
                    "Managing state within functional components using useState",
                    "Lifting state up to parent components for sharing data",
                    "Conditional rendering based on component state",
                    "Key Concepts: State, useState, Re-rendering, Lifting state up"
                ]
            },
            {
                title: "4. React Lifecycle Methods – Understanding Component Lifecycles",
                points: [
                    "Introduction to component lifecycle in class components",
                    "Exploring React's lifecycle methods (componentDidMount, componentWillUnmount)",
                    "Using useEffect hook for side effects in functional components",
                    "How React’s lifecycle methods help manage data fetching, cleanup, and DOM manipulation",
                    "Key Concepts: Lifecycle methods, useEffect, Mounting, Unmounting, Side effects"
                ]
            },
            {
                title: "5. Event Handling – Interactivity in React",
                points: [
                    "Handling events like clicks, form submissions, and user input",
                    "Binding event handlers in React components",
                    "Using event.preventDefault() and event.stopPropagation() for event flow control",
                    "Creating controlled and uncontrolled form components",
                    "Key Concepts: Event handling, Forms, event.preventDefault(), event.stopPropagation()"
                ]
            },
            {
                title: "6. React Hooks – Bringing Functionality to Components",
                points: [
                    "Introduction to React Hooks and their importance in functional components",
                    "Using useState for state management and useEffect for side effects",
                    "Exploring other hooks: useContext, useReducer, useCallback, useMemo",
                    "Best practices for working with hooks",
                    "Key Concepts: Hooks, useState, useEffect, useContext, useReducer, useCallback, useMemo"
                ]
            },
            {
                title: "7. React Router – Navigating Between Pages",
                points: [
                    "Introduction to React Router for client-side routing",
                    "Setting up React Router for multiple views (pages) in a single-page application (SPA)",
                    "Using Link and Route to navigate between components",
                    "Dynamic routing with URL parameters and query strings",
                    "Key Concepts: React Router, Link, Route, Dynamic routing, SPA"
                ]
            },
            {
                title: "8. State Management with Context API – Global State for Your App",
                points: [
                    "What is the Context API and when to use it for global state management",
                    "Creating a context, providing it, and consuming it in components",
                    "Using useContext to access and update global state",
                    "Avoiding prop drilling with the Context API",
                    "Key Concepts: Context API, Global state, useContext, Prop drilling"
                ]
            },
            {
                title: "9. Forms in React – Building Dynamic Forms",
                points: [
                    "Controlled vs uncontrolled forms in React",
                    "Handling form submissions and form validation",
                    "Building complex forms with multiple input fields",
                    "Using third-party libraries like Formik or React Hook Form for easier form management",
                    "Key Concepts: Forms, Controlled inputs, Validation, Formik, React Hook Form"
                ]
            },
            {
                title: "10. Styling in React – From CSS to Styled Components",
                points: [
                    "Styling React components using traditional CSS, CSS Modules, and styled-components",
                    "Introduction to CSS-in-JS libraries like Emotion and styled-components",
                    "Managing responsive designs in React apps",
                    "Best practices for CSS architecture in React (BEM, CSS Modules)",
                    "Key Concepts: CSS, CSS-in-JS, styled-components, Responsive design"
                ]
            },
            {
                title: "11. Performance Optimization – Making Your App Fast",
                points: [
                    "Understanding React’s rendering behavior and performance bottlenecks",
                    "Techniques to optimize performance in React apps (memoization, lazy loading)",
                    "Using React.memo, useMemo, and useCallback hooks",
                    "Code splitting and lazy loading with React Suspense",
                    "Key Concepts: Performance, Memoization, React.memo, useMemo, useCallback, Code splitting"
                ]
            },
            {
                title: "12. Deploying Your React Application – Going Live",
                points: [
                    "Deployment options for React apps: Netlify, Vercel, Heroku, AWS, etc.",
                    "Configuring environment variables for different deployment environments",
                    "Building the React app for production using npm run build",
                    "Setting up continuous deployment for automatic updates",
                    "Key Concepts: Deployment, Continuous integration, Production build, Environment variables"
                ]
            },
            {
                title: "13. React Advanced Patterns – Enhancing Your Skills",
                points: [
                    "Introduction to higher-order components (HOCs) and render props",
                    "Understanding compound components for reusable logic",
                    "Custom hooks: Creating your own hooks for code reuse",
                    "Using context providers and consumers for state management",
                    "Key Concepts: Higher-order components, Render props, Custom hooks, Compound components"
                ]
            },
            {
                title: "14. Building Scalable React Applications – Architecture and Design",
                points: [
                    "Structuring large-scale React applications using component-based design",
                    "Organizing components, hooks, and utilities for maintainability",
                    "Breaking the application into features for better scalability",
                    "Using state management tools like Redux or Zustand for advanced state management",
                    "Key Concepts: Scalability, Component-based design, Architecture, Redux, Zustand"
                ]
            },
            {
                title: "15. NextJS – The React Framework for Full-Stack Applications",
                points: [
                    "Introduction to Next.js and why it’s an essential tool for React developers",
                    "Setting up a Next.js project and understanding its file-based routing",
                    "Static Site Generation (SSG) and Server-Side Rendering (SSR) in Next.js",
                    "API Routes in Next.js for backend functionality within a React app",
                    "Dynamic routing and how Next.js handles URL parameters",
                    "Key Concepts: Next.js, File-based Routing, SSR, SSG, API Routes"
                ]
            }
        ]
    }
};
const __TURBOPACK__default__export__ = frontendRoadmap;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/roadmaps/backend.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const backendRoadmap = {
    "Node.js Basics": {
        title: "Node Ninja 🥷 – Node.js Backend Fundamentals",
        objective: "Learn the foundations of Node.js, event-driven architecture, and asynchronous programming to build scalable backend applications.",
        sections: [
            {
                title: "1. Introduction to Node.js – The Power of JavaScript on the Server",
                points: [
                    "What is Node.js and how it differs from traditional server-side languages",
                    "Understanding the Node.js runtime environment",
                    "The event-driven, non-blocking I/O model in Node.js",
                    "Setting up a simple Node.js application",
                    "Installing and using Node.js with npm (Node Package Manager)",
                    "Key Concepts: Event-driven architecture, Non-blocking I/O, npm, Modules"
                ]
            },
            {
                title: "2. Understanding the Event Loop – Node.js Architecture",
                points: [
                    "What is the event loop and how Node.js handles concurrency",
                    "How Node.js uses the event loop to process requests asynchronously",
                    "Blocking vs Non-blocking code execution",
                    "The importance of callbacks and promises in managing asynchronous code",
                    "Key Concepts: Event loop, Asynchronous processing, Callbacks, Promises"
                ]
            },
            {
                title: "3. Creating a Basic HTTP Server",
                points: [
                    "How to create a basic HTTP server with Node.js using the http module",
                    "Setting up routes to handle different HTTP requests (GET, POST, PUT, DELETE)",
                    "Sending and receiving data with the server",
                    "Working with request and response objects",
                    "Key Concepts: HTTP server, Request/Response objects, Routing"
                ]
            },
            {
                title: "4. Express.js – Simplifying Backend Development",
                points: [
                    "Introduction to Express.js and how it simplifies Node.js backend development",
                    "Setting up an Express app and defining routes",
                    "Handling dynamic data with URL parameters and query strings",
                    "Middleware in Express: What is middleware and how to use it",
                    "Built-in Express middleware functions (e.g., body-parser, cookie-parser)",
                    "Key Concepts: Express.js, Routing, Middleware, Request handling"
                ]
            },
            {
                title: "5. RESTful API Design – Building APIs with Express",
                points: [
                    "What is a RESTful API and how to structure it",
                    "Designing endpoints and handling HTTP methods (GET, POST, PUT, DELETE)",
                    "Using query parameters and request bodies for passing data",
                    "Returning JSON data and handling status codes in API responses",
                    "Key Concepts: REST API design, CRUD operations, Status codes, JSON responses"
                ]
            }
        ]
    },
    "Databases & ORMs": {
        title: "Database Mastery – Connecting Node.js to Databases",
        objective: "Learn to connect Node.js applications to SQL and NoSQL databases, perform CRUD operations, and use ORMs for efficiency.",
        sections: [
            {
                title: "6. Working with Databases – Connecting Node.js to Databases",
                points: [
                    "Introduction to databases (SQL vs NoSQL)",
                    "Using MongoDB with Node.js (Setting up MongoDB, connecting via Mongoose)",
                    "Working with CRUD operations in MongoDB (Create, Read, Update, Delete)",
                    "Introduction to SQL databases (using MySQL/PostgreSQL with Node.js)",
                    "Using ORMs like Drizzle, Prisma, or Sequelize",
                    "Key Concepts: MongoDB, SQL, NoSQL, CRUD, Mongoose, ORMs"
                ]
            }
        ]
    },
    "Authentication & Security": {
        title: "Secure Ninja – Authentication and Authorization",
        objective: "Implement user authentication, role-based access, and secure your Node.js applications using JWT and bcrypt.",
        sections: [
            {
                title: "7. Authentication and Authorization – Securing Your Application",
                points: [
                    "User authentication and authorization concepts",
                    "Using JWT (JSON Web Tokens) for stateless authentication",
                    "Setting up user login and registration endpoints",
                    "Password hashing with bcrypt.js",
                    "Role-based access control and securing routes with middleware",
                    "Key Concepts: Authentication, Authorization, JWT, bcrypt, Role-based access control"
                ]
            }
        ]
    },
    "File Systems & Real-time Apps": {
        title: "File & Realtime Mastery – Working with Files and WebSockets",
        objective: "Handle file operations and build real-time applications with WebSockets and Socket.io.",
        sections: [
            {
                title: "8. Working with File Systems – Reading and Writing Files",
                points: [
                    "Using the fs module for file system operations",
                    "Reading and writing files asynchronously and synchronously",
                    "Handling file uploads with multer",
                    "Key Concepts: File system module, File reading/writing, File uploads"
                ]
            },
            {
                title: "9. Building Real-time Applications – WebSockets with Socket.io",
                points: [
                    "What are WebSockets and how they enable real-time communication",
                    "Setting up a WebSocket server using ws or Socket.io",
                    "Sending and receiving real-time data between the client and server",
                    "Use cases like chat apps, live notifications",
                    "Key Concepts: WebSockets, Real-time communication, Socket.io"
                ]
            }
        ]
    },
    "Deployment & Monitoring": {
        title: "Deployment & Monitoring – Going Live and Staying Healthy",
        objective: "Deploy your Node.js apps to production, monitor performance, and protect your APIs with rate limiting.",
        sections: [
            {
                title: "10. Deploying Your Node.js Application",
                points: [
                    "Deploying Node.js apps on Heroku, AWS, or DigitalOcean",
                    "Setting environment variables for production and development",
                    "Configuring reverse proxies with Nginx or Apache",
                    "Key Concepts: Deployment, Cloud services, Reverse proxies, Environment variables"
                ]
            },
            {
                title: "11. API Rate Limiting – Protecting Your Endpoints",
                points: [
                    "What is API rate limiting and why it's important",
                    "Implementing rate limiting using express-rate-limit",
                    "Configuring custom rate limiters for different endpoints",
                    "Handling rate limit exceeded errors and responses",
                    "Key Concepts: Rate limiting, Throttling, API protection"
                ]
            },
            {
                title: "12. Logging & Monitoring – Tracking Application Health",
                points: [
                    "Using logging libraries like Winston and Morgan",
                    "Setting up logging levels (info, warn, error)",
                    "Integrating monitoring tools like PM2 for process management",
                    "Key Concepts: Logging, Winston, Morgan, PM2, Monitoring"
                ]
            },
            {
                title: "13. GraphQL",
                points: [
                    "Introduction to GraphQL and how it differs from REST",
                    "GraphQL architecture: schema, queries, mutations, and subscriptions",
                    "Setting up Apollo Server",
                    "Writing queries, mutations, and subscriptions",
                    "Handling errors and schema design",
                    "Key Concepts: GraphQL, Apollo Server, Queries, Mutations, Resolvers"
                ]
            },
            {
                title: "14. Monitoring with PM2",
                points: [
                    "Using PM2 for process management",
                    "Auto-restarting apps on crashes",
                    "Monitoring performance with PM2 logs and stats",
                    "Setting up log rotations",
                    "Key Concepts: PM2, Monitoring, Log management"
                ]
            }
        ]
    }
};
const __TURBOPACK__default__export__ = backendRoadmap;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/roadmaps/fullstack.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const fullstackRoadmap = [
    "Frontend + Backend",
    "API Integration",
    "Deployment (Vercel, Heroku)",
    "CI/CD Pipelines",
    "Testing & Monitoring"
];
const __TURBOPACK__default__export__ = fullstackRoadmap;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/roadmaps/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$frontend$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/roadmaps/frontend.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$backend$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/roadmaps/backend.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$fullstack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/roadmaps/fullstack.jsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './deployAI'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const roadmapData = {
    Frontend: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$frontend$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Backend: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$backend$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Full Stack": __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$fullstack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Deploy & AI Squad": deployAI
};
const __TURBOPACK__default__export__ = roadmapData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/roadmaps/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/roadmaps/index.jsx [app-client] (ecmascript)"); // ✅ import your roadmaps
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Page() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Frontend");
    const [selectedTopic, setSelectedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Get all top-level roadmap categories (Frontend, Backend, etc.)
    const categories = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    // Get topics for the currently selected category
    const topics = typeof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][selected] === "object" ? Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][selected]) : [];
    // Automatically select the first topic when category changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            setSelectedTopic(topics[0] || "");
        }
    }["Page.useEffect"], [
        selected
    ]);
    // Get content for the currently selected topic
    const selectedContent = selectedTopic && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][selected] ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$roadmaps$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][selected][selectedTopic] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 p-6 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold mb-10 text-indigo-400 tracking-wide",
                        children: [
                            "Skill",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white",
                                children: "Forge"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                lineNumber: 35,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/roadmaps/page.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "mb-3 p-3 text-left rounded-xl font-medium transition-all duration-200 ".concat(selected === category ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "bg-gray-900 hover:bg-gray-800"),
                            onClick: ()=>setSelected(category),
                            children: category
                        }, category, false, {
                            fileName: "[project]/app/(main)/roadmaps/page.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)),
                    topics.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-col gap-2",
                        children: topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-2 rounded-lg text-sm font-semibold transition-all text-left ".concat(selectedTopic === topic ? "bg-indigo-600 text-white" : "bg-gray-800 hover:bg-gray-700"),
                                onClick: ()=>setSelectedTopic(topic),
                                children: topic
                            }, topic, false, {
                                fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/roadmaps/page.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/roadmaps/page.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-10 py-8 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-6 text-indigo-400",
                        children: [
                            selected,
                            " Roadmap"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/roadmaps/page.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "space-y-6",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: selectedContent && selectedContent.sections ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/60 p-6 rounded-xl border border-gray-800 backdrop-blur-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-indigo-400 mb-2",
                                    children: selectedContent.title
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-6",
                                    children: selectedContent.objective
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                selectedContent.sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-semibold text-indigo-300 mb-2",
                                                children: section.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside text-gray-300 space-y-1",
                                                children: section.points.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: p
                                                    }, i, false, {
                                                        fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                                        lineNumber: 99,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/(main)/roadmaps/page.jsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/roadmaps/page.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "No roadmap content available."
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/roadmaps/page.jsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/roadmaps/page.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/roadmaps/page.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/roadmaps/page.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Page, "Jk9viEP1vvH1fi+qvW3JMbVK7Js=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28main%29_roadmaps_b63ed25b._.js.map