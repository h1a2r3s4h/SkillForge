import { Inngest } from "inngest";

// Initialize Inngest client
export const inngest = new Inngest({
  id: "my-app",
  name: "SkillForge",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY // ⬅️ your Inngest API key
    }
  }
});
