import { BrainCircuit, Briefcase, LineChart, ScrollText, ChartNoAxesGantt, CircleQuestionMark} from "lucide-react";

export const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Career Guidance",
    description:
      "Get personalized career advice and insights powered by advanced AI technology.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Interview Preparation",
    description:
      "Practice with role-specific questions and get instant feedback to improve your performance.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Insights",
    description:
      "Stay ahead with real-time industry trends, salary data, and market analysis.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Resume Creation",
    description: "Generate ATS-optimized resumes with AI assistance.",
  },
  {
    icon: <ChartNoAxesGantt className="w-10 h-10 mb-4 text-primary" />,
    title: "Career Roadmap",
    description:
      "Visualize your learning path and career milestones with a clear, actionable roadmap.",
  },
  {
    icon: <CircleQuestionMark className="w-10 h-10 mb-4 text-primary" />,
    title: "Answers & Common Doubts",
    description:
      "Get clarity on questions like C++ vs Java for DSA or Web vs AI/ML, with detailed pros/cons and expert guidance to make informed decisions.",
  }
];
