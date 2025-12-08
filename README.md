# 🧠 SkillForge  
_Forge skills, shape your future — where careers are crafted with AI power._

---

![SkillForge Banner](https://github.com/h1a2r3s4h/SkillForge/blob/main/banner1.png?raw=true)

---

## 🌐 Live Demo  
🔗 **Website:** [https://skillforge.vercel.app](https://skill-forge-nrq9.vercel.app)  
📦 **GitHub Repo:** [https://github.com/h1a2r3s4h/SkillForge](https://github.com/h1a2r3s4h/SkillForge)

---

## 📜 Overview

**SkillForge** is a next-generation AI-powered career preparation platform designed for students and professionals.  
It combines **AI intelligence**, **automation**, and **real-time insights** to help users build resumes, practice interviews, explore career paths, and learn efficiently — all in one place.

---

## 🚀 Features

- 🧭 **Interactive Dashboard** – Weekly updates on skill demand & salary trends    
- 🧠 **Mock Interview Simulator** – Role-based Q&A + AI-powered feedback  
- 💬 **ForgeBot** – AI chatbot assistant for instant career guidance  
- ❓ **AI Career FAQs** – Clarifies common doubts (e.g., C++ vs Java, Web vs DSA)  
- 🎓 **Preparation Street** – Curated video hub for web development and tech learning  
- 🗺️ **Roadmaps** – Year-wise and role-based structured learning plans  

✨ Together, these make SkillForge a **24×7 intelligent career mentor**.

---

## 🧰 Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Frontend** | React 19, Next.js 15, Tailwind CSS, Shadcn UI |
| **Backend** | Next.js API Routes, Inngest |
| **Database** | NeonDB (PostgreSQL) + Prisma ORM |
| **Authentication** | Clerk |
| **AI Engine** | Gemini API |
| **Hosting** | Vercel + Neon Cloud |
| **Version Control** | Git & GitHub |

---

## ⚙️ Installation & Setup

Follow these steps to run SkillForge locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/h1a2r3s4h/SkillForge.git
cd skillforge

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create environment variables
# Add the following in `.env.local`
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgres_connection_string
GEMINI_API_KEY=your_gemini_api_key

# 4️⃣ Run the development server
npm run dev

# 5️⃣ Visit
http://localhost:3000
