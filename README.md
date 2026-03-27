## 📜 Overview

**SkillForge** is a next-generation **AI-powered career preparation platform** designed for students and professionals.  
It combines **AI intelligence, automation, and real-time insights** to help users:

- Build ATS-optimized resumes  
- Practice AI-driven interviews  
- Analyze resumes with smart feedback  
- Explore structured career roadmaps  
- Generate personalized AI learning roadmaps  

👉 All in one unified platform — acting as a **24×7 AI career mentor**.

---

## 🚀 Core Features

### 🛡️ AI Shield (Resume Analyzer)
- Upload or paste resume → get **AI-powered analysis**
- **Score breakdown** (ATS, Skills, Impact, Structure)
- **Actionable suggestions (Before → After)**
- **Resume vs Job Description matching**
- Built with **Redis caching + rate limiting + duplicate protection**

---

### 🎤 AI Mock Interview System
- Role-based interview generation  
- Real-time Q&A simulation  
- AI-generated feedback & evaluation  

---

### 📄 AI Resume Builder
- Generate ATS-friendly resumes  
- Smart bullet rewriting  
- Keyword optimization for target roles  

---

### 🗺️ AI Roadmap Generator
- Generate **personalized learning roadmaps** based on role, skills, and goals  
- Supports domains like **Web Development, DSA, AI, Full Stack, and more**
- Creates **step-by-step progression** from beginner to advanced
- Displays roadmap in a **clean visual flowchart-style UI**
- Includes **copy, download, and local save support**
- Built for **fast generation with reusable AI + caching architecture**

---

### 💬 ForgeBot (AI Assistant)
- Instant career guidance  
- Tech stack suggestions  
- Doubt solving (DSA, Web, Career paths)  

---

### 🧭 Career Intelligence Dashboard
- Weekly skill demand trends  
- Salary insights  
- Industry-based recommendations  

---

### 🗺️ Structured Roadmaps
- Role-based learning paths  
- Beginner → Advanced progression  
- Web, DSA, AI, and more  

---

### 🎓 Preparation Street
- Curated learning resources  
- Videos + practical content  

---

## 🧠 System Architecture

### AI Shield Flow
```text
User Input → Parse Resume → AI Shield Middleware → Cache/Rate Limit → AI Analysis → Store Cache → UI Response
```

### ⚙️ AI Shield Internals
- **File Parsing:** pdf-parse + mammoth  
- **Rate Limiting:** Redis-based request control  
- **Caching:** Hash-based response caching (reduces AI cost)  
- **Duplicate Protection:** Prevents parallel duplicate requests  
- **Retry Logic:** Ensures reliability on AI failures  

👉 Designed as a **production-ready AI middleware system**, not just a simple API call.

---

## 🧰 Tech Stack

| Category | Technologies Used |
|----------|------------------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS, Shadcn UI |
| **Backend** | Next.js API Routes, Inngest |
| **Database** | NeonDB (PostgreSQL), Prisma ORM |
| **Roadmap Persistence** | localStorage |
| **Authentication** | Clerk |
| **AI Layer** | Gemini API (via OpenRouter) |
| **Caching & Control** | Redis (Rate Limiting + Cache + Locks) |
| **Hosting** | Vercel + Neon Cloud |
| **Version Control** | Git & GitHub |

---

## ⚙️ Installation & Setup

```bash
# 1️⃣ Clone repository
git clone https://github.com/h1a2r3s4h/SkillForge.git
cd skillforge

# 2️⃣ Install dependencies
npm install

# 3️⃣ Setup environment variables
# Create `.env.local` file and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
DATABASE_URL=your_db_url
GEMINI_API_KEY=your_api_key
REDIS_URL=your_redis_url

# 4️⃣ Run development server
npm run dev

# 5️⃣ Open in browser
http://localhost:3000
```

---

## 🔥 Key Engineering Highlights

- Built **AI Shield middleware** for scalable AI systems  
- Reduced redundant AI calls using **hash-based caching**  
- Implemented **rate limiting & duplicate request locks**  
- Designed **structured AI JSON outputs** for UI rendering  
- Built an **AI Roadmap Generator** with structured generation + visual roadmap UI
- Enabled **copy, download, and local persistence** for generated roadmaps
- Developed **modular full-stack architecture (Next.js App Router)**  

---

## 🎯 Why SkillForge Stands Out

Unlike typical AI tools, SkillForge:

- Combines **multiple AI systems into one platform**  
- Focuses on **real-world career workflows**  
- Implements **production-grade backend optimizations**  
- Delivers **actionable insights, not just raw AI output**  
- Converts user goals into **clear visual learning roadmaps**

---

## 🚀 Future Enhancements

- Resume → Interview auto-generation pipeline  
- Multi-agent AI system (Career Planner + Interviewer + Reviewer)  
- Personalized career tracking dashboard  
- AI-powered skill gap analysis  
- Shareable roadmap links and progress tracking
---

## 👨‍💻 Author

**Harshit Gangwar**  
CSIT’27 | Full-Stack Developer | AI Builder  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share with others!