"use client";

import { useMemo, useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import {
  Shield,
  Loader2,
  AlertTriangle,
  Database,
  FileText,
  Upload,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Target,
  ArrowRight,
  ScanSearch,
  BadgeCheck,
  BarChart3,
  FileUp,
  WandSparkles,
  Check,
  X,
  Lightbulb,
  PencilLine,
} from "lucide-react";

// ✅ KEEP THIS OUTSIDE OR INSIDE COMPONENT (both fine)
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied 🚀");
  } catch {
    toast("Failed to copy");
  }
};

function SectionBlock({ title, items, color, type = "list" }) {
  const colorMap = {
    emerald: "bg-emerald-400",
    red: "bg-red-400",
    cyan: "bg-cyan-400",
    yellow: "bg-yellow-400",
  };

  const textColorMap = {
    emerald: "text-emerald-300",
    red: "text-red-300",
    cyan: "text-cyan-300",
    yellow: "text-yellow-300",
  };

  const borderMap = {
    emerald: "border-emerald-500/20 bg-emerald-500/[0.05]",
    red: "border-red-500/20 bg-red-500/[0.05]",
    cyan: "border-cyan-500/20 bg-cyan-500/[0.05]",
    yellow: "border-yellow-500/20 bg-yellow-500/[0.05]",
  };

  return (
    <div className={`rounded-3xl border p-5 ${borderMap[color]}`}>
      <h4 className={`mb-4 text-base font-semibold ${textColorMap[color]}`}>
        {title}
      </h4>

      {!items?.length ? (
        <p className="text-sm text-zinc-500">No data available</p>
      ) : type === "chips" ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-white/6 bg-black/25 p-3"
            >
              <div
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${colorMap[color]}`}
              />
              <p className="text-sm leading-6 text-zinc-300">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ScoreCard({ title, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
        {title}
      </p>

      <div className="mt-3 flex items-end gap-1">
        <p className="text-3xl font-bold text-white">{value ?? 0}</p>
        <span className="pb-1 text-sm text-zinc-500">/100</span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500"
          style={{ width: `${Math.min(Number(value || 0), 100)}%` }}
        />
      </div>
    </div>
  );
}

function ResultCard({ title, subtitle, children, icon: Icon }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-6">
      <div className="mb-5 flex items-start gap-3">
        {Icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-zinc-200 ring-1 ring-white/10">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}

        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
          ) : null}
        </div>
      </div>

      {children}
    </div>
  );
}

export default function ResumeAnalyzerForm() {
  const [resumeText, setResumeText] = useState("");
  const [jobRole, setJobRole] = useState("Software Developer");
  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isCached, setIsCached] = useState(false);
  const [error, setError] = useState("");
  const [rewrittenFixes, setRewrittenFixes] = useState({});
  const [rewritingIndex, setRewritingIndex] = useState(null);
  // const [editableResume, setEditableResume] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (text, index) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };
  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);
      setIsCached(false);
      setRewrittenFixes({});
      setRewritingIndex(null);

      let finalText = resumeText;

      if (file) {
        const formData = new FormData();
        formData.append("resume", file);

        const parseRes = await fetch("/api/parse-resume", {
          method: "POST",
          body: formData,
        });

        const parseData = await parseRes.json();

        if (!parseRes.ok) {
          setError(parseData.message || "Failed to parse resume.");
          return;
        }

        finalText = parseData.text;
      }

      if (!finalText || !finalText.trim()) {
        setError("Please upload a resume or paste text.");
        return;
      }

      const res = await fetch("/api/resume-analyzer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resumeText: finalText,
          jobRole,
          jobDescription,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || data.error || "Analysis failed.");
        return;
      }

      setResult(data.data);
      setIsCached(Boolean(data.cached));
      // setEditableResume(finalText);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRewriteBullet = async (fix, i) => {
    try {
      setRewritingIndex(i);

      const res = await fetch("/api/rewrite-bullet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: fix.before,
          jobRole,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to rewrite bullet");
      }

      setRewrittenFixes((prev) => ({
        ...prev,
        [i]: data.improved,
      }));
    } catch (err) {
      setRewrittenFixes((prev) => ({
        ...prev,
        [i]: "Failed to rewrite. Please try again.",
      }));
    } finally {
      setRewritingIndex(null);
    }
  };

  const scoreBreakdown = result?.scoreBreakdown;
  const jdMatch = result?.jdMatch;

  const isButtonDisabled = loading || (!resumeText.trim() && !file);

  const overallScore = Number(result?.score || 0);

  const scoreColor = useMemo(() => {
    if (overallScore >= 80) return "text-emerald-400";
    if (overallScore >= 60) return "text-yellow-400";
    return "text-red-400";
  }, [overallScore]);

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0f] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <Shield className="h-3.5 w-3.5" />
              AI Shield Protected
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-black shadow-lg shadow-emerald-500/20">
                <ScanSearch className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Resume Analyzer
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">
                  Analyze resumes with AI, get ATS-style scoring, smart
                  feedback, and resume vs job description matching in one
                  premium flow.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-zinc-300">
                  <BadgeCheck className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium">ATS Feedback</span>
                </div>
                <p className="text-xs leading-5 text-zinc-500">
                  Resume quality analysis with practical improvement points.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-zinc-300">
                  <BarChart3 className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium">Score Breakdown</span>
                </div>
                <p className="text-xs leading-5 text-zinc-500">
                  See ATS, projects, skills, and impact scores separately.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-zinc-300">
                  <WandSparkles className="h-4 w-4 text-violet-400" />
                  <span className="text-sm font-medium">JD Matching</span>
                </div>
                <p className="text-xs leading-5 text-zinc-500">
                  Compare your resume against a target role instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              Quick Tips
            </p>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                  <FileUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Upload PDF or DOCX
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Best results come from clean, updated resume files.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Add target role + JD
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    This helps produce stronger and more relevant analysis.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Review missing keywords
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Great for improving shortlisting chances quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Input Details
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Fill the fields below and start AI analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-400">
              Smart analysis powered by AI
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200">
                Target Role
              </label>
              <input
                type="text"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                placeholder="Enter target role"
                className="w-full rounded-2xl border border-white/10 bg-[#101017] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 transition focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200">
                Upload Resume
              </label>

              <label className="group relative flex cursor-pointer flex-col gap-4 rounded-[24px] border border-dashed border-white/15 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 transition hover:border-emerald-400/40 hover:bg-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 text-emerald-300 ring-1 ring-white/10">
                    <Upload className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-white">
                      {file ? file.name : "Choose your resume file"}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Drag and drop or click to browse
                    </p>
                    <p className="mt-2 text-xs text-zinc-500">
                      Supported formats: PDF, DOCX
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-zinc-200 transition group-hover:border-emerald-400/30">
                    Browse
                  </div>
                </div>

                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200">
                Resume Text
              </label>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                rows={10}
                placeholder="Paste resume text here..."
                className="w-full resize-none rounded-[24px] border border-white/10 bg-[#101017] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-zinc-500 transition focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
              />
              <div className="mt-2 flex items-center justify-between text-xs">
                <p className="text-zinc-500">
                  Use either uploaded file or pasted resume text.
                </p>
                <p className="text-zinc-500">{resumeText.length} chars</p>
              </div>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Briefcase className="h-4 w-4 text-cyan-400" />
                Job Description
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={10}
                placeholder="Paste job description here for Resume vs JD matching..."
                className="w-full resize-none rounded-[24px] border border-white/10 bg-[#101017] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-zinc-500 transition focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Optional, but highly recommended for better matching results.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={handleAnalyze}
              disabled={isButtonDisabled}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-white to-zinc-200 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing Resume...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Analyze Resume
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-400">
              Instant AI feedback + score breakdown
            </div>
          </div>

          {isCached && (
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">
              <Database className="h-4 w-4" />
              Fast response served from cache.
            </div>
          )}

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">
              <AlertTriangle className="h-4 w-4" />
              {error}
            </div>
          )}
        </div>

        {!result ? (
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-6">
            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-black/20 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 text-emerald-300">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                Waiting for analysis
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Upload your resume, add your target role, and optionally paste a
                job description to unlock a full AI-powered analysis report.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <ResultCard
              title="Resume Insights"
              subtitle="Smart feedback generated from your resume content."
              icon={CheckCircle2}
            >
              <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-5">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Analysis Complete
                  </div>
                  <p className="text-sm leading-7 text-zinc-200">
                    {result.summary}
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/30 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Overall Score
                  </p>
                  <p className={`mt-3 text-5xl font-bold ${scoreColor}`}>
                    {result.score}
                    <span className="ml-1 text-base font-medium text-zinc-500">
                      /100
                    </span>
                  </p>
                </div>
              </div>
            </ResultCard>

            {scoreBreakdown && (
              <ResultCard
                title="Smart Score Breakdown"
                subtitle="See which areas are helping or hurting your resume."
                icon={BarChart3}
              >
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <ScoreCard title="ATS" value={scoreBreakdown.ats} />
                  <ScoreCard title="Projects" value={scoreBreakdown.projects} />
                  <ScoreCard title="Skills" value={scoreBreakdown.skills} />
                  <ScoreCard title="Impact" value={scoreBreakdown.impact} />
                </div>
              </ResultCard>
            )}

            <div className="space-y-4">
              <SectionBlock
                title="Strengths"
                color="emerald"
                items={result?.strengths}
              />
              <SectionBlock
                title="Weaknesses"
                color="red"
                items={result?.weaknesses}
              />
              <SectionBlock
                title="Suggestions"
                color="cyan"
                items={result?.suggestions}
              />
            </div>

            {result?.actionableFixes?.length > 0 && (
              <ResultCard
                title="Actionable Fixes"
                subtitle="Clear before/after rewrite suggestions for fast improvement."
                icon={Lightbulb}
              >
                <div className="space-y-4">
                  {result.actionableFixes.map((fix, i) => (
                    <div
                      key={i}
                      className="rounded-3xl border border-white/10 bg-black/20 p-4 md:p-5"
                    >
                      <div className="mb-4 flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
                          <X className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-red-300">
                            {fix.issue}
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            Improve this resume line for better ATS and
                            recruiter clarity.
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 xl:grid-cols-2">
                        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                            Before
                          </p>
                          <p className="text-sm leading-6 text-zinc-300">
                            {fix.before}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] p-4 relative">
  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
    Suggested After
  </p>

  <p className="text-sm leading-6 text-emerald-200 pr-10">
    {fix.after}
  </p>

  <button
    onClick={() => copyToClipboard(fix.after, i)}
    className="absolute top-3 right-3 px-2 py-1 text-xs rounded-lg bg-white/10 hover:bg-white/20 transition"
  >
    {copiedIndex === i ? "Copied ✓" : "Copy"}
  </button>
</div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.04] p-3">
                        <p className="text-sm text-cyan-300">💡 {fix.fix}</p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          onClick={() => handleRewriteBullet(fix, i)}
                          disabled={rewritingIndex === i}
                          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 px-3.5 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {rewritingIndex === i ? (
                            <>
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              Rewriting...
                            </>
                          ) : (
                            <>
                              <Sparkles className="h-3.5 w-3.5" />
                              Rewrite Better
                            </>
                          )}
                        </button>
                      </div>

                      {rewrittenFixes[i] && (
                        <div className="mt-4 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.04] p-4">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                            AI Rewrite
                          </p>
                          <p className="text-sm leading-6 text-zinc-200">
                            {rewrittenFixes[i]}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ResultCard>
            )}

            {/* {editableResume && (
              <ResultCard
                title="Editable Resume"
                subtitle="Apply AI fixes directly and continue editing manually."
                icon={PencilLine}
              >
                <textarea
                  value={editableResume}
                  onChange={(e) => setEditableResume(e.target.value)}
                  rows={14}
                  className="w-full resize-none rounded-[24px] border border-white/10 bg-[#101017] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
                />
              </ResultCard>
            )} */}

            {jdMatch && (
              <ResultCard
                title="Resume vs JD Match"
                subtitle="Alignment of your resume with the job description."
                icon={WandSparkles}
              >
                <div className="mb-5 flex flex-col gap-4 rounded-[24px] border border-white/10 bg-black/20 p-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Matching summary
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Review matched skills, missing skills, and missing
                      keywords.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Match Score
                    </p>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {jdMatch.matchScore ?? 0}
                      <span className="ml-1 text-base font-medium text-zinc-500">
                        /100
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <SectionBlock
                    title="Matched Skills"
                    color="emerald"
                    items={jdMatch.matchedSkills}
                    type="chips"
                  />

                  <SectionBlock
                    title="Missing Skills"
                    color="red"
                    items={jdMatch.missingSkills}
                    type="chips"
                  />

                  <SectionBlock
                    title="Missing Keywords"
                    color="yellow"
                    items={jdMatch.missingKeywords}
                    type="chips"
                  />
                </div>
              </ResultCard>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
