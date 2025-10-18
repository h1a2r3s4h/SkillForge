const backendRoadmap = {
  "Node.js Basics": {
    title: "Node Ninja 🥷 – Node.js Backend Fundamentals",
    objective: "Learn the foundations of Node.js, event-driven architecture, and asynchronous programming to build scalable backend applications.",
    pdf: "/pdfs/backend.pdf",
    sections: [
      {
        title: "1. Introduction to Node.js – The Power of JavaScript on the Server",
        points: [
          "What is Node.js and how it differs from traditional server-side languages",
          "Understanding the Node.js runtime environment",
          "The event-driven, non-blocking I/O model in Node.js",
          "Setting up a simple Node.js application",
          "Installing and using Node.js with npm (Node Package Manager)",
          "Key Concepts: Event-driven architecture, Non-blocking I/O, npm, Modules",
        ],
      },
      {
        title: "2. Understanding the Event Loop – Node.js Architecture",
        points: [
          "What is the event loop and how Node.js handles concurrency",
          "How Node.js uses the event loop to process requests asynchronously",
          "Blocking vs Non-blocking code execution",
          "The importance of callbacks and promises in managing asynchronous code",
          "Key Concepts: Event loop, Asynchronous processing, Callbacks, Promises",
        ],
      },
      {
        title: "3. Creating a Basic HTTP Server",
        points: [
          "How to create a basic HTTP server with Node.js using the http module",
          "Setting up routes to handle different HTTP requests (GET, POST, PUT, DELETE)",
          "Sending and receiving data with the server",
          "Working with request and response objects",
          "Key Concepts: HTTP server, Request/Response objects, Routing",
        ],
      },
      {
        title: "4. Express.js – Simplifying Backend Development",
        points: [
          "Introduction to Express.js and how it simplifies Node.js backend development",
          "Setting up an Express app and defining routes",
          "Handling dynamic data with URL parameters and query strings",
          "Middleware in Express: What is middleware and how to use it",
          "Built-in Express middleware functions (e.g., body-parser, cookie-parser)",
          "Key Concepts: Express.js, Routing, Middleware, Request handling",
        ],
      },
      {
        title: "5. RESTful API Design – Building APIs with Express",
        points: [
          "What is a RESTful API and how to structure it",
          "Designing endpoints and handling HTTP methods (GET, POST, PUT, DELETE)",
          "Using query parameters and request bodies for passing data",
          "Returning JSON data and handling status codes in API responses",
          "Key Concepts: REST API design, CRUD operations, Status codes, JSON responses",
        ],
      },
    ],
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
          "Key Concepts: MongoDB, SQL, NoSQL, CRUD, Mongoose, ORMs",
        ],
      },
    ],
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
          "Key Concepts: Authentication, Authorization, JWT, bcrypt, Role-based access control",
        ],
      },
    ],
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
          "Key Concepts: File system module, File reading/writing, File uploads",
        ],
      },
      {
        title: "9. Building Real-time Applications – WebSockets with Socket.io",
        points: [
          "What are WebSockets and how they enable real-time communication",
          "Setting up a WebSocket server using ws or Socket.io",
          "Sending and receiving real-time data between the client and server",
          "Use cases like chat apps, live notifications",
          "Key Concepts: WebSockets, Real-time communication, Socket.io",
        ],
      },
    ],
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
          "Key Concepts: Deployment, Cloud services, Reverse proxies, Environment variables",
        ],
      },
      {
        title: "11. API Rate Limiting – Protecting Your Endpoints",
        points: [
          "What is API rate limiting and why it's important",
          "Implementing rate limiting using express-rate-limit",
          "Configuring custom rate limiters for different endpoints",
          "Handling rate limit exceeded errors and responses",
          "Key Concepts: Rate limiting, Throttling, API protection",
        ],
      },
      {
        title: "12. Logging & Monitoring – Tracking Application Health",
        points: [
          "Using logging libraries like Winston and Morgan",
          "Setting up logging levels (info, warn, error)",
          "Integrating monitoring tools like PM2 for process management",
          "Key Concepts: Logging, Winston, Morgan, PM2, Monitoring",
        ],
      },
      {
        title: "13. GraphQL",
        points: [
          "Introduction to GraphQL and how it differs from REST",
          "GraphQL architecture: schema, queries, mutations, and subscriptions",
          "Setting up Apollo Server",
          "Writing queries, mutations, and subscriptions",
          "Handling errors and schema design",
          "Key Concepts: GraphQL, Apollo Server, Queries, Mutations, Resolvers",
        ],
      },
      {
        title: "14. Monitoring with PM2",
        points: [
          "Using PM2 for process management",
          "Auto-restarting apps on crashes",
          "Monitoring performance with PM2 logs and stats",
          "Setting up log rotations",
          "Key Concepts: PM2, Monitoring, Log management",
        ],
      },
    ],
  },
};

export default backendRoadmap;
