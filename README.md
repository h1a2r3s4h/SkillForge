<div align="center">

# ⚡ SkillForge

### AI-Powered Career Preparation Platform

*Build smarter. Prepare faster. Land the role.*

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://upstash.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

---

## 📜 What is SkillForge?

**SkillForge** is a next-generation AI-powered career preparation platform designed for students and professionals.

Career tools are usually scattered across multiple platforms — one for resumes, one for interview prep, another for roadmaps. SkillForge brings everything together into a single, cohesive AI-powered experience.

> 💡 *Acting as a 24×7 AI career mentor — from resume to offer letter.*

---

## 🚀 Core Features

### 🛡️ AI Shield — Resume Analyzer
Upload or paste your resume and receive deep, structured AI-powered feedback:
- **Score breakdown** — ATS compatibility, Skills, Impact, Structure
- **Actionable suggestions** — Before → After improvements
- **Resume vs. Job Description matching**
- Protected by a production-grade **AI Shield middleware** (caching + rate limiting + duplicate protection + retry logic)

### 🎤 AI Mock Interview System
- Role-based interview question generation
- Real-time Q&A simulation
- AI-generated feedback and evaluation after each session

### 📄 AI Resume Builder
- Generate ATS-friendly resumes from scratch
- Smart bullet point rewriting for maximum impact
- Keyword optimization tailored to your target role

### 🗺️ AI Roadmap Generator
- Personalized learning roadmaps based on your role, current skills, and goals
- Supports Web Dev, DSA, Full Stack, AI/ML, and more
- Visual flowchart-style UI with copy, download, and local save support

### 💬 ForgeBot — AI Career Assistant
- Instant career guidance and tech stack suggestions
- Doubt solving across DSA, Web Dev, and career planning
- Conversational mentor available around the clock

### 🧭 Career Intelligence Dashboard
- Weekly skill demand trends
- Salary insights by role and industry
- Personalized recommendations based on your profile

### 🎓 Preparation Street
- Curated learning resources (videos + practical content)
- Structured paths for placement and interview readiness

---

## 🧠 System Architecture

### AI Shield Flow
```
User Input
    │
    ▼
Parse Resume (pdf-parse + mammoth)
    │
    ▼
AI Shield Middleware
    ├── Rate Limit Check (Redis)
    ├── Duplicate Request Lock (Redis)
    └── Cache Lookup (Hash-based)
         │
         ├── Cache HIT  ──► Return Cached Response
         │
         └── Cache MISS
                │
                ▼
           Gemini AI Analysis
                │
                ▼
           Store in Cache
                │
                ▼
           Structured JSON → UI
```

### Why This Matters
This isn't just an AI API call wrapped in a route handler. The AI Shield layer is a **production-grade middleware system** that:
- Reduces redundant AI calls using **hash-based caching**
- Protects expensive endpoints with **Redis rate limiting**
- Prevents parallel duplicate requests via **distributed locks**
- Ensures reliability on AI failures with **retry logic**
- Delivers **structured JSON outputs** for consistent frontend rendering

---

## 🧰 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS, Shadcn UI, Lucide React |
| **Backend** | Next.js API Routes (App Router), Inngest |
| **Database** | NeonDB (PostgreSQL), Prisma ORM |
| **Authentication** | Clerk |
| **AI Layer** | Google Gemini (via OpenRouter) |
| **Caching & Control** | Upstash Redis (Rate Limiting + Cache + Locks) |
| **Containerization** | Docker |
| **Version Control** | Git & GitHub |

---

## ⚙️ Installation & Setup

### Option 1 — Local Development

```bash
# 1. Clone the repository
git clone https://github.com/h1a2r3s4h/SkillForge.git
cd SkillForge

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file and add all required keys (see below)

# 4. Run database migrations
npx prisma migrate dev

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2 — Docker

```bash
# 1. Clone the repository
git clone https://github.com/h1a2r3s4h/SkillForge.git
cd SkillForge

# 2. Fill in your .env file (see below)

# 3. Build the Docker image
docker build \
  --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key \
  --build-arg CLERK_SECRET_KEY=your_clerk_secret_key \
  --build-arg UPSTASH_REDIS_REST_URL=https://your_url.upstash.io \
  --build-arg UPSTASH_REDIS_REST_TOKEN=your_token \
  --build-arg OPENROUTER_API_KEY=your_openrouter_key \
  -t skillforge .

# 4. Run the container
docker run -p 3000:3000 --env-file .env skillforge
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following (no quotes around values):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
DATABASE_URL=postgresql://user:password@host/dbname
GEMINI_API_KEY=your_gemini_api_key
UPSTASH_REDIS_REST_URL=https://your_url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token
OPENROUTER_API_KEY=your_openrouter_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
```

| Variable | Where to get it |
|----------|----------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | [dashboard.clerk.com](https://dashboard.clerk.com) |
| `CLERK_SECRET_KEY` | [dashboard.clerk.com](https://dashboard.clerk.com) |
| `DATABASE_URL` | [neon.tech](https://neon.tech) |
| `GEMINI_API_KEY` | [aistudio.google.com](https://aistudio.google.com) |
| `UPSTASH_REDIS_REST_URL` | [console.upstash.com](https://console.upstash.com) |
| `UPSTASH_REDIS_REST_TOKEN` | [console.upstash.com](https://console.upstash.com) |
| `OPENROUTER_API_KEY` | [openrouter.ai](https://openrouter.ai) |

---

## 📁 Project Structure

```
SkillForge/
├── app/
│   ├── (auth)/                  # Auth pages (Clerk)
│   ├── (main)/
│   │   ├── ai-shield/           # Resume Analyzer
│   │   ├── dashboard/           # Career Intelligence Dashboard
│   │   ├── interview/           # Mock Interview System
│   │   ├── roadmap-generator/   # AI Roadmap Generator
│   │   ├── roadmaps/            # Structured Roadmaps
│   │   ├── preparationstreet/   # Learning Resources
│   │   └── onboarding/
│   ├── api/
│   │   ├── resume-analyzer/     # AI Shield endpoint
│   │   ├── parse-resume/        # File parsing
│   │   ├── roadmap-generator/   # Roadmap API
│   │   ├── rewrite-bullet/      # Bullet optimizer
│   │   └── inngest/             # Background jobs
│   └── contact/
├── components/
│   ├── ai-shield/               # Resume analyzer UI components
│   ├── roadmap-generator/       # Roadmap UI components
│   └── ui/                      # Shared UI (Shadcn)
├── lib/
│   ├── ai-shield.js             # Core AI Shield middleware
│   ├── openrouter.js            # AI model client
│   ├── redis.js                 # Redis client + utilities
│   ├── hash.js                  # Cache key generation
│   ├── prompts/                 # AI prompt templates
│   └── prisma.js                # Prisma client
├── prisma/
│   └── schema.prisma
├── Dockerfile
└── public/
```

---

## 🔥 Key Engineering Highlights

- **AI Shield Middleware** — Scalable, production-ready AI request layer with caching, rate limiting, and duplicate protection
- **Hash-based Caching** — Identical resume inputs return cached results instantly, reducing AI API costs significantly
- **Distributed Locks** — Prevents race conditions on parallel duplicate submissions using Redis
- **Structured AI Outputs** — All AI responses return typed JSON schemas, enabling reliable frontend rendering
- **Modular Full-Stack Architecture** — Clean separation between AI logic, API routes, and UI components using Next.js App Router
- **Dockerized Deployment** — Fully containerized for consistent, reproducible production deployments

---

## 🎯 Why SkillForge Stands Out

| Feature | Typical AI Tools | SkillForge |
|---------|-----------------|------------|
| Resume Analysis | Raw AI output | Structured scores + actionable Before/After fixes |
| API Reliability | Direct AI calls | AI Shield with caching, retry, and rate limiting |
| Career Prep | Single feature | Resume + Interview + Roadmap + Guidance in one platform |
| Roadmaps | Static templates | AI-generated, personalized, visually rendered |
| Architecture | Basic CRUD | System design thinking with Redis-backed middleware |
| Deployment | Manual setup | Docker-ready containerized build |

---

## 🚀 Future Enhancements

- [ ] Resume → Interview auto-generation pipeline
- [ ] Multi-agent AI system (Career Planner + Interviewer + Reviewer)
- [ ] Personalized career tracking dashboard
- [ ] AI-powered skill gap analysis
- [ ] Resume vs. Job Description deep matching
- [ ] Shareable roadmap links and progress tracking
- [ ] Exportable roadmap PDFs

---

## 🎯 Use Cases

- 🎓 Students preparing for campus placements
- 📝 Freshers building their first ATS-optimized resume
- 💼 Job seekers improving interview readiness
- 🗺️ Developers looking for structured role-based learning paths
- 🤖 Anyone who wants practical, AI-powered career guidance in one place

---

## 👨‍💻 Author

**Harshit Gangwar**  
BTech CSIT'27 | Full-Stack Developer | AI-Powered Product Builder

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/h1a2r3s4h)

---

## ⭐ Support

If SkillForge helped you or you find it impressive, please consider giving it a ⭐ on GitHub and sharing it with others in your network!

---

<div align="center">

*Built with 💙 to solve a real problem for every student preparing for their career.*

</div>
