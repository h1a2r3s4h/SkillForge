const frontendRoadmap = {
  "HTML & CSS": {
    title: "Spider-Man 🕸 – HTML & CSS",
    objective:
      "Learn the foundations of web design by mastering HTML and CSS, creating the structure and styling that powers the web.",
    sections: [
      {
        title: "1. HTML Basics – The Web’s Skeleton",
        points: [
          "Introduction to HTML (HyperText Markup Language) and its role in web development",
          "Understanding HTML tags and elements",
          "Building a simple webpage using HTML: html, head, body, header, footer",
          "Working with text elements: h1, p, a, ul, ol, li",
          "Structuring content with semantic HTML: section, article, nav, main, aside",
          "Key Concepts: Elements, Tags, Nesting, Attributes, Semantic HTML",
        ],
      },
      {
        title: "2. HTML Forms and Inputs – User Interaction",
        points: [
          "Creating forms with form, input, textarea, select, button",
          "Understanding form submission, GET and POST methods",
          "Using input types (text, email, number, password)",
          "Validating form data with attributes like required, min, max",
          "Key Concepts: Form elements, Input validation, Method types, Accessibility in forms",
        ],
      },
      {
        title: "3. CSS Basics – Styling the Web",
        points: [
          "Introduction to CSS (Cascading Style Sheets) and its purpose",
          "Understanding the CSS box model: margin, border, padding, content",
          "Styling text, colors, and fonts with color, font-family, font-size, line-height",
          "Understanding the concept of specificity and how CSS selectors work",
          "Applying styles to HTML elements using selectors, classes, and IDs",
          "Key Concepts: Box model, Selectors, Specificity, Inline vs external CSS",
        ],
      },
      {
        title: "4. CSS Layouts – Building Responsive Pages",
        points: [
          "Introduction to layout techniques in CSS: display, position, float, flexbox, grid",
          "Building layouts with Flexbox: Aligning items, creating rows and columns",
          "Introduction to CSS Grid: Creating complex grid-based layouts",
          "Media queries: Making websites responsive to different screen sizes",
          "Key Concepts: Flexbox, Grid layout, Responsive design, Mobile-first approach",
        ],
      },
      {
        title: "5. Advanced CSS Styling",
        points: [
          "Using pseudo-classes and pseudo-elements: :hover, :focus, :nth-child",
          "Animations and transitions: Making elements move or change on user interaction",
          "Styling links, buttons, and forms for better UX",
          "Key Concepts: Pseudo-classes, Pseudo-elements, Animations, Transitions",
        ],
      },
      {
        title: "6. CSS Frameworks – Speeding Up Development",
        points: [
          "Introduction to popular CSS frameworks: Bootstrap, TailwindCSS",
          "How to use a CSS framework to quickly style pages",
          "Customizing and overriding default styles in a framework",
          "Key Concepts: Grid systems, Utility-first design, Responsive frameworks",
        ],
      },
      {
        title: "7. HTML5 & CSS3 Features",
        points: [
          "HTML5 semantic elements: header, footer, main, article, section",
          "New input types in HTML5: date, email, tel, range, color",
          "CSS3 properties: border-radius, box-shadow, gradient, transitions",
          "Key Concepts: Modern HTML5 elements, Advanced CSS3 techniques, Cross-browser compatibility",
        ],
      },
    ],
  },

  JavaScript: {
    title: "JavaScript Surgeons 🩺",
    objective:
      "Master the fundamentals and advanced concepts of JavaScript, as well as the DOM, in scripting dynamic web pages.",
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
          "Key Concepts: Variables, Data Types, Operators, Conditionals",
        ],
      },
      {
        title: "2. JavaScript Functions – Reusable Code",
        points: [
          "What are JavaScript functions? Why are they important?",
          "Declaring functions with the function keyword",
          "Understanding parameters, arguments, and return values",
          "Arrow functions: A modern way to define functions",
          "Function scope and closures",
          "Key Concepts: Function Declaration, Function Expression, Parameters vs Arguments, Return Value, Scope, Closures",
        ],
      },
      {
        title: "3. JavaScript Loops – Automating Repetitive Tasks",
        points: [
          "Introduction to loops: for, while, and do...while loops",
          "Looping through arrays",
          "Loop control statements: break and continue",
          "Using for...in and for...of loops",
          "Key Concepts: Iteration, Loop control, Array iteration",
        ],
      },
      {
        title: "4. JavaScript Arrays – Working with Collections of Data",
        points: [
          "What is an array?",
          "Creating arrays, accessing elements by index",
          "Array methods: push, pop, shift, unshift, splice, slice, indexOf, etc.",
          "Using loops to iterate through arrays",
          "Multi-dimensional arrays",
          "Key Concepts: Array indices, Array methods, Array iteration",
        ],
      },
      {
        title: "5. JavaScript Objects – Working with Key-Value Pairs",
        points: [
          "What is an object?",
          "Creating objects with literal notation and constructor functions",
          "Accessing object properties",
          "Adding, updating, and deleting object properties",
          "Object methods",
          "Key Concepts: Object properties, Object methods, Object iteration",
        ],
      },
      {
        title: "6. DOM Manipulation – Interacting with the Webpage",
        points: [
          "Introduction to the DOM (Document Object Model)",
          "Selecting elements in the DOM: getElementById, getElementsByClassName, querySelector, querySelectorAll",
          "Modifying element content: innerHTML, textContent",
          "Modifying element attributes",
          "Creating and appending new elements to the DOM",
          "Key Concepts: DOM tree, Element selection, Content manipulation, Dynamic HTML",
        ],
      },
      {
        title: "7. JavaScript Events – Responding to User Actions",
        points: [
          "Introduction to events: click, mouseover, keypress, submit, etc.",
          "Adding event listeners to elements",
          "Event handlers and callback functions",
          "Event bubbling and capturing",
          "Preventing default event behavior",
          "Key Concepts: Event listeners, Event handlers, Event propagation",
        ],
      },
      {
        title: "8. Asynchronous JavaScript – Handling Delays",
        points: [
          "Introduction to asynchronous programming and why it's important",
          "Callbacks and callback hell",
          "Promises: a better way to handle asynchronous operations",
          "Async/Await syntax: A cleaner way to handle promises",
          "Making API requests with fetch",
          "Key Concepts: Asynchronous operations, Callbacks, Promises, Async/Await",
        ],
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
          "Key Concepts: Modern JS syntax, improved code organization, new language features",
        ],
      },
      {
        title: "10. Working with APIs – Fetching Data from Servers",
        points: [
          "What are APIs?",
          "Introduction to RESTful APIs",
          "Making API requests with fetch",
          "Handling API responses",
          "Working with JSON data",
          "Key Concepts: API endpoints, HTTP methods, JSON parsing, Asynchronous data fetching",
        ],
      },
      {
        title: "11. Error Handling – Debugging JavaScript",
        points: [
          "What are JavaScript errors?",
          "Try...catch statements: handling errors gracefully",
          "Throwing custom errors",
          "Debugging tools and techniques: console.log, browser debugger",
          "Key Concepts: Error types, try...catch, Debugging",
        ],
      },
      {
        title: "12. JavaScript Testing – Ensuring Code Quality",
        points: [
          "Introduction to JavaScript testing",
          "Unit testing basics",
          "Testing frameworks: Jest, Mocha",
          "Writing tests for functions and modules",
          "Key Concepts: Unit tests, Test frameworks, Code Quality",
        ],
      },
      {
        title: "13. JavaScript Best Practices and Patterns",
        points: [
          "Code organization and structure",
          "Writing clean and maintainable code",
          "Design patterns: common solutions to recurring problems",
          "Avoiding common mistakes",
          "Key Concepts: Code maintainability, Design patterns, Code quality",
        ],
      },
    ],
  },

  React: {
    title: "React Alchemist 🧪",
    objective:
      "Master the art of building dynamic, interactive, and scalable web applications using React.js, Next.js, Tailwind CSS, ShadCN, and other modern technologies. Learn best practices, performance optimizations, and advanced patterns for building professional-grade React applications.",
    sections: [
      {
        title: "1. Introduction to React – The Modern JavaScript Library",
        points: [
          "What is React and why it’s the go-to library for building UIs",
          "Understanding the virtual DOM and how React improves performance",
          "Setting up a React project using create-react-app or Vite",
          "JSX: A syntax extension for JavaScript that allows writing HTML in JS",
          "Rendering elements and basic React components",
          "Key Concepts: React, JSX, Virtual DOM, Components",
        ],
      },
      {
        title: "2. Components and Props – The Building Blocks of React",
        points: [
          "Understanding functional and class components",
          "Passing data between components using props",
          "How to use children and default props",
          "Breaking down UI into smaller reusable components",
          "Key Concepts: Components, Props, Reusability, State vs Props",
        ],
      },
      {
        title: "3. State Management – React's Core Mechanism",
        points: [
          "Understanding state in React and how it drives component re-renders",
          "Managing state within functional components using useState",
          "Lifting state up to parent components for sharing data",
          "Conditional rendering based on component state",
          "Key Concepts: State, useState, Re-rendering, Lifting state up",
        ],
      },
      {
        title: "4. React Lifecycle Methods – Understanding Component Lifecycles",
        points: [
          "Introduction to component lifecycle in class components",
          "Exploring React's lifecycle methods (componentDidMount, componentWillUnmount)",
          "Using useEffect hook for side effects in functional components",
          "How React’s lifecycle methods help manage data fetching, cleanup, and DOM manipulation",
          "Key Concepts: Lifecycle methods, useEffect, Mounting, Unmounting, Side effects",
        ],
      },
      {
        title: "5. Event Handling – Interactivity in React",
        points: [
          "Handling events like clicks, form submissions, and user input",
          "Binding event handlers in React components",
          "Using event.preventDefault() and event.stopPropagation() for event flow control",
          "Creating controlled and uncontrolled form components",
          "Key Concepts: Event handling, Forms, event.preventDefault(), event.stopPropagation()",
        ],
      },
      {
        title: "6. React Hooks – Bringing Functionality to Components",
        points: [
          "Introduction to React Hooks and their importance in functional components",
          "Using useState for state management and useEffect for side effects",
          "Exploring other hooks: useContext, useReducer, useCallback, useMemo",
          "Best practices for working with hooks",
          "Key Concepts: Hooks, useState, useEffect, useContext, useReducer, useCallback, useMemo",
        ],
      },
      {
        title: "7. React Router – Navigating Between Pages",
        points: [
          "Introduction to React Router for client-side routing",
          "Setting up React Router for multiple views (pages) in a single-page application (SPA)",
          "Using Link and Route to navigate between components",
          "Dynamic routing with URL parameters and query strings",
          "Key Concepts: React Router, Link, Route, Dynamic routing, SPA",
        ],
      },
      {
        title: "8. State Management with Context API – Global State for Your App",
        points: [
          "What is the Context API and when to use it for global state management",
          "Creating a context, providing it, and consuming it in components",
          "Using useContext to access and update global state",
          "Avoiding prop drilling with the Context API",
          "Key Concepts: Context API, Global state, useContext, Prop drilling",
        ],
      },
      {
        title: "9. Forms in React – Building Dynamic Forms",
        points: [
          "Controlled vs uncontrolled forms in React",
          "Handling form submissions and form validation",
          "Building complex forms with multiple input fields",
          "Using third-party libraries like Formik or React Hook Form for easier form management",
          "Key Concepts: Forms, Controlled inputs, Validation, Formik, React Hook Form",
        ],
      },
      {
        title: "10. Styling in React – From CSS to Styled Components",
        points: [
          "Styling React components using traditional CSS, CSS Modules, and styled-components",
          "Introduction to CSS-in-JS libraries like Emotion and styled-components",
          "Managing responsive designs in React apps",
          "Best practices for CSS architecture in React (BEM, CSS Modules)",
          "Key Concepts: CSS, CSS-in-JS, styled-components, Responsive design",
        ],
      },
      {
        title: "11. Performance Optimization – Making Your App Fast",
        points: [
          "Understanding React’s rendering behavior and performance bottlenecks",
          "Techniques to optimize performance in React apps (memoization, lazy loading)",
          "Using React.memo, useMemo, and useCallback hooks",
          "Code splitting and lazy loading with React Suspense",
          "Key Concepts: Performance, Memoization, React.memo, useMemo, useCallback, Code splitting",
        ],
      },
      {
        title: "12. Deploying Your React Application – Going Live",
        points: [
          "Deployment options for React apps: Netlify, Vercel, Heroku, AWS, etc.",
          "Configuring environment variables for different deployment environments",
          "Building the React app for production using npm run build",
          "Setting up continuous deployment for automatic updates",
          "Key Concepts: Deployment, Continuous integration, Production build, Environment variables",
        ],
      },
      {
        title: "13. React Advanced Patterns – Enhancing Your Skills",
        points: [
          "Introduction to higher-order components (HOCs) and render props",
          "Understanding compound components for reusable logic",
          "Custom hooks: Creating your own hooks for code reuse",
          "Using context providers and consumers for state management",
          "Key Concepts: Higher-order components, Render props, Custom hooks, Compound components",
        ],
      },
      {
        title: "14. Building Scalable React Applications – Architecture and Design",
        points: [
          "Structuring large-scale React applications using component-based design",
          "Organizing components, hooks, and utilities for maintainability",
          "Breaking the application into features for better scalability",
          "Using state management tools like Redux or Zustand for advanced state management",
          "Key Concepts: Scalability, Component-based design, Architecture, Redux, Zustand",
        ],
      },
      {
        title: "15. NextJS – The React Framework for Full-Stack Applications",
        points: [
          "Introduction to Next.js and why it’s an essential tool for React developers",
          "Setting up a Next.js project and understanding its file-based routing",
          "Static Site Generation (SSG) and Server-Side Rendering (SSR) in Next.js",
          "API Routes in Next.js for backend functionality within a React app",
          "Dynamic routing and how Next.js handles URL parameters",
          "Key Concepts: Next.js, File-based Routing, SSR, SSG, API Routes",
        ],
      },
    ],
  },
};

export default frontendRoadmap;
