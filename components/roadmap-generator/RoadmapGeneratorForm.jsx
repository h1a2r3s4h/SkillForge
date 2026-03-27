"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  Sparkles,
  Target,
  Brain,
  Clock3,
  CalendarRange,
  TriangleAlert,
  Wand2,
  Copy,
  Download,
  CheckCircle2,
} from "lucide-react";

const initialForm = {
  targetRole: "",
  currentLevel: "",
  currentSkills: "",
  hoursPerDay: "",
  duration: "",
  weakAreas: "",
};

export default function RoadmapGeneratorForm() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [completedTasks, setCompletedTasks] = useState({});
  const [downloadingImage, setDownloadingImage] = useState(false);

  const roadmapRef = useRef(null);

  const weakAreaKeywords = useMemo(() => {
    return formData.weakAreas
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }, [formData.weakAreas]);

  useEffect(() => {
    try {
      const savedRoadmap = localStorage.getItem("forgepathai_result");
      const savedForm = localStorage.getItem("forgepathai_form");
      const savedProgress = localStorage.getItem("forgepathai_progress");

      if (savedRoadmap) {
        setResult(JSON.parse(savedRoadmap));
      }

      if (savedForm) {
        setFormData(JSON.parse(savedForm));
      }

      if (savedProgress) {
        setCompletedTasks(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to load saved ForgePathAI data:", error);
    }
  }, []);

  useEffect(() => {
    try {
      if (result) {
        localStorage.setItem("forgepathai_result", JSON.stringify(result));
      }
    } catch (error) {
      console.error("Failed to save roadmap:", error);
    }
  }, [result]);

  useEffect(() => {
    try {
      localStorage.setItem("forgepathai_form", JSON.stringify(formData));
    } catch (error) {
      console.error("Failed to save form:", error);
    }
  }, [formData]);

  useEffect(() => {
    try {
      localStorage.setItem(
        "forgepathai_progress",
        JSON.stringify(completedTasks)
      );
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  }, [completedTasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    setCopied(false);
    setCompletedTasks({});

    try {
      const response = await fetch("/api/roadmap-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to generate roadmap.");
      }

      setResult(data?.data || null);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const buildRoadmapText = () => {
    if (!result) return "";

    const weeklyText =
      result.weeklyRoadmap?.map((week) => {
        const tasks =
          week.tasks?.map((task, idx) => `   ${idx + 1}. ${task}`).join("\n") ||
          "";
        return `${week.week} - ${week.focus}\n${tasks}`;
      }) || [];

    return `
FORGEPATHAI ROADMAP

GOAL SUMMARY
${result.goalSummary || ""}

SKILL GAP ANALYSIS
${(result.skillGapAnalysis || [])
  .map((item, i) => `${i + 1}. ${item}`)
  .join("\n")}

WEEK-WISE ROADMAP
${weeklyText.join("\n\n")}

PROJECT SUGGESTIONS
${(result.projectSuggestions || [])
  .map((item, i) => `${i + 1}. ${item}`)
  .join("\n")}

INTERVIEW PREP
${(result.interviewPrep || [])
  .map((item, i) => `${i + 1}. ${item}`)
  .join("\n")}
    `.trim();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildRoadmapText());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setError("Failed to copy roadmap.");
    }
  };

  const handleDownload = () => {
    try {
      const content = buildRoadmapText();
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "forgepathai-roadmap.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
    } catch {
      setError("Failed to download roadmap.");
    }
  };

  const toggleTask = (weekIndex, taskIndex) => {
    const key = `${weekIndex}-${taskIndex}`;

    setCompletedTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClearSaved = () => {
    try {
      localStorage.removeItem("forgepathai_result");
      localStorage.removeItem("forgepathai_form");
      localStorage.removeItem("forgepathai_progress");

      setFormData(initialForm);
      setResult(null);
      setCompletedTasks({});
      setCopied(false);
      setError("");
    } catch {
      setError("Failed to clear saved roadmap.");
    }
  };

  const handleDownloadImage = async () => {
    if (!roadmapRef.current) return;

    try {
      setDownloadingImage(true);

      const dataUrl = await toPng(roadmapRef.current, {
        backgroundColor: "#09090b",
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "forgepathai-roadmap.png";
      link.click();
    } catch (error) {
      console.error(error);
      setError("Failed to download roadmap image.");
    } finally {
      setDownloadingImage(false);
    }
  };

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleGenerate}
        className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-violet-500/20 md:p-8"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 transition-transform duration-300 hover:scale-110">
            <Sparkles className="h-5 w-5 text-violet-300" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white md:text-2xl">
              Build your personalized roadmap
            </h2>
            <p className="text-sm text-zinc-400">
              Fill the details below and generate a focused learning path.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field
            icon={<Target className="h-4 w-4 text-violet-300" />}
            label="Target Role"
            name="targetRole"
            placeholder="e.g. Frontend Developer, SDE-1, MERN Developer"
            value={formData.targetRole}
            onChange={handleChange}
          />

          <Field
            icon={<Brain className="h-4 w-4 text-violet-300" />}
            label="Current Level"
            name="currentLevel"
            placeholder="e.g. Beginner, Intermediate, Final-year student"
            value={formData.currentLevel}
            onChange={handleChange}
          />

          <Field
            icon={<Clock3 className="h-4 w-4 text-violet-300" />}
            label="Hours Per Day"
            name="hoursPerDay"
            placeholder="e.g. 2, 4, 6"
            value={formData.hoursPerDay}
            onChange={handleChange}
          />

          <Field
            icon={<CalendarRange className="h-4 w-4 text-violet-300" />}
            label="Duration"
            name="duration"
            placeholder="e.g. 6 weeks, 2 months, 90 days"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4 grid gap-4">
          <TextAreaField
            label="Current Skills"
            name="currentSkills"
            placeholder="e.g. HTML, CSS, JavaScript, React basics, DSA arrays"
            value={formData.currentSkills}
            onChange={handleChange}
          />

          <TextAreaField
            label="Weak Areas"
            name="weakAreas"
            placeholder="e.g. system design, backend, DBMS, recursion, projects"
            value={formData.weakAreas}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-zinc-400">
            Output includes goal summary, skill gaps, week-wise roadmap,
            projects, and interview prep guidance.
          </p>

          <Button
  type="submit"
  disabled={loading}
  className="relative group overflow-hidden rounded-2xl px-7 py-3 font-semibold text-white 
  bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600
  shadow-[0_0_20px_rgba(139,92,246,0.5)] 
  transition-all duration-300 
  hover:shadow-[0_0_35px_rgba(139,92,246,0.9)] 
  hover:scale-[1.04] active:scale-[0.98]"
>
  {/* Glow Layer */}
  <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></span>

  {/* Shine Effect */}
  <span className="absolute inset-0 overflow-hidden">
    <span className="absolute -left-full top-0 h-full w-1/2 bg-white/20 blur-md rotate-12 group-hover:left-full transition-all duration-700"></span>
  </span>

  {/* Content */}
  <span className="relative flex items-center justify-center">
    {loading ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Generating...
      </>
    ) : (
      <>
        <Wand2 className="mr-2 h-4 w-4 group-hover:rotate-12 transition" />
        Generate Roadmap
      </>
    )}
  </span>
</Button>
        </div>

        {error ? (
          <div className="mt-5 flex animate-in fade-in items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        ) : null}
      </form>

      {result ? (
        <div
          ref={roadmapRef}
          style={{
            backgroundColor: "#09090b",
            color: "#ffffff",
          }}
          className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-500"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleCopy}
              className="rounded-xl border-violet-500/20 bg-violet-500/5 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500/10"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Roadmap
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleDownload}
              className="rounded-xl border-violet-500/20 bg-violet-500/5 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Text
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleDownloadImage}
              disabled={downloadingImage}
              className="rounded-xl border-violet-500/20 bg-violet-500/5 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500/10"
            >
              {downloadingImage ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download PNG
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleClearSaved}
              className="rounded-xl border-red-500/20 bg-red-500/5 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-red-500/10"
            >
              Clear Saved
            </Button>
          </div>

          <ResultCard
            title="Goal Summary"
            content={result.goalSummary}
            weakAreaKeywords={weakAreaKeywords}
          />

          <ListCard
            title="Skill Gap Analysis"
            items={result.skillGapAnalysis}
            weakAreaKeywords={weakAreaKeywords}
          />

          <WeeklyRoadmapCard
            items={result.weeklyRoadmap}
            weakAreaKeywords={weakAreaKeywords}
            completedTasks={completedTasks}
            toggleTask={toggleTask}
          />

          <ListCard
            title="Project Suggestions"
            items={result.projectSuggestions}
            weakAreaKeywords={weakAreaKeywords}
          />

          <ListCard
            title="Interview Prep Guidance"
            items={result.interviewPrep}
            weakAreaKeywords={weakAreaKeywords}
          />
        </div>
      ) : null}
    </div>
  );
}

function Field({ icon, label, ...props }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-violet-500/20 hover:bg-black/30">
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
        {icon}
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
  );
}

function TextAreaField({ label, ...props }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-violet-500/20 hover:bg-black/30">
      <label className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <textarea
        {...props}
        rows={4}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
  );
}

function ResultCard({ title, content, weakAreaKeywords = [] }) {
  if (!content) return null;

  return (
    <div className="rounded-3xl border border-violet-500/15 bg-gradient-to-br from-violet-500/[0.08] to-transparent p-6 shadow-xl transition-all duration-500 hover:border-violet-500/25 hover:shadow-violet-500/10">
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <div className="leading-7 text-zinc-300">
        <HighlightedText text={content} keywords={weakAreaKeywords} />
      </div>
    </div>
  );
}

function ListCard({ title, items, weakAreaKeywords = [] }) {
  if (!items?.length) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl transition-all duration-500 hover:border-violet-500/20">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-black/30 hover:translate-x-1"
          >
            <span className="mr-2 font-semibold text-violet-300">
              {index + 1}.
            </span>
            <HighlightedText text={item} keywords={weakAreaKeywords} />
          </div>
        ))}
      </div>
    </div>
  );
}

function WeeklyRoadmapCard({
  items,
  weakAreaKeywords = [],
  completedTasks = {},
  toggleTask,
}) {
  if (!items?.length) return null;

  const totalTasks = items.reduce(
    (sum, week) => sum + (week.tasks?.length || 0),
    0
  );

  const doneTasks = Object.values(completedTasks).filter(Boolean).length;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl transition-all duration-500 hover:border-violet-500/20">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Week-wise Roadmap</h3>
          <p className="mt-1 text-sm text-zinc-400">
            Your personalized execution flow
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          Progress: {doneTasks}/{totalTasks} tasks completed
        </div>
      </div>

      <div className="flex flex-col items-center">
        {items.map((weekItem, weekIndex) => (
          <React.Fragment key={weekIndex}>
            <div className="w-full max-w-3xl rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.10] to-transparent p-5 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:border-violet-500/30">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {weekItem.week}
                  </div>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    <HighlightedText
                      text={weekItem.focus}
                      keywords={weakAreaKeywords}
                    />
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300">
                  Focus Area
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {weekItem.tasks?.map((task, taskIndex) => {
                  const taskKey = `${weekIndex}-${taskIndex}`;
                  const isDone = !!completedTasks[taskKey];

                  return (
                    <button
                      key={taskIndex}
                      type="button"
                      onClick={() => toggleTask?.(weekIndex, taskIndex)}
                      className={`rounded-2xl border p-4 text-left text-sm leading-6 transition-all duration-300 ${
                        isDone
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                          : "border-white/10 bg-black/30 text-zinc-300 hover:border-violet-500/20 hover:bg-black/40"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                          Step {taskIndex + 1}
                        </span>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                            isDone
                              ? "border border-emerald-500/20 bg-emerald-500/20 text-emerald-300"
                              : "border border-white/10 bg-white/5 text-zinc-400"
                          }`}
                        >
                          {isDone ? "Done" : "Mark Done"}
                        </span>
                      </div>

                      <div className={isDone ? "line-through opacity-80" : ""}>
                        <HighlightedText
                          text={task}
                          keywords={weakAreaKeywords}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {weekIndex !== items.length - 1 && (
              <div className="flex flex-col items-center py-4">
                <div className="h-10 w-[2px] bg-gradient-to-b from-violet-400/80 to-violet-400/20" />
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 shadow-md transition-transform duration-300 hover:scale-110">
                  ↓
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function HighlightedText({ text, keywords = [] }) {
  if (!text) return null;
  if (!keywords.length) return text;

  const normalizedKeywords = keywords
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length > 1);

  if (!normalizedKeywords.length) return text;

  const escapedKeywords = normalizedKeywords.map((keyword) =>
    keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isMatch = normalizedKeywords.some(
      (keyword) => part.toLowerCase() === keyword.toLowerCase()
    );

    if (isMatch) {
      return (
        <span
          key={index}
          className="rounded-md border border-red-500/20 bg-red-500/10 px-1.5 py-0.5 font-medium text-red-300"
        >
          {part}
        </span>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
