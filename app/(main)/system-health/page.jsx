"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Gauge,
  ShieldAlert,
  DatabaseZap,
  Sparkles,
  ServerCrash,
  AlertTriangle,
  RefreshCw,
  Cpu,
  BarChart3,
  CheckCircle2,
  CopyCheck,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function StatCard({ title, value, icon: Icon, hint, tone = "blue" }) {
  const toneStyles = {
    blue: "from-blue-500/20 via-cyan-500/10 to-transparent border-blue-500/20",
    purple:
      "from-purple-500/20 via-fuchsia-500/10 to-transparent border-purple-500/20",
    green:
      "from-emerald-500/20 via-green-500/10 to-transparent border-emerald-500/20",
    amber:
      "from-amber-500/20 via-yellow-500/10 to-transparent border-amber-500/20",
    red: "from-red-500/20 via-rose-500/10 to-transparent border-red-500/20",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]",
        "bg-gradient-to-br",
        toneStyles[tone]
      )}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl transition-all duration-300 group-hover:scale-125" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-white/60">{title}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
            {value}
          </h3>
          {hint ? <p className="mt-2 text-xs text-white/40">{hint}</p> : null}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <Icon className="h-5 w-5 text-white/80" />
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, total, colorClass }) {
  const percent = total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="font-medium text-white">{percent}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className={cn("h-full rounded-full transition-all duration-500", colorClass)}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function HealthBadge({ score }) {
  const config =
    score >= 85
      ? {
          label: "Excellent",
          cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        }
      : score >= 65
      ? {
          label: "Stable",
          cls: "border-blue-500/30 bg-blue-500/10 text-blue-300",
        }
      : score >= 40
      ? {
          label: "Needs Attention",
          cls: "border-amber-500/30 bg-amber-500/10 text-amber-300",
        }
      : {
          label: "Critical",
          cls: "border-red-500/30 bg-red-500/10 text-red-300",
        };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        config.cls
      )}
    >
      {config.label}
    </span>
  );
}

export default function SystemHealthPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMetrics = async (showRefresh = false) => {
    try {
      if (showRefresh) setRefreshing(true);

      const res = await fetch("/api/system-health", {
        cache: "no-store",
      });

      const json = await res.json();
      setData(json.data);
    } catch (error) {
      console.error("Failed to fetch system health:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const derived = useMemo(() => {
    if (!data) return null;

    const totalErrors =
      (data.aiErrors || 0) +
      (data.serverErrors || 0) +
      (data.badRequests || 0) +
      (data.rateLimitHits || 0);

    const apiCalls = data.apiCalls || 0;
    const successfulResponses = data.successfulResponses || 0;
    const successRate =
      apiCalls > 0 ? Math.round((successfulResponses / apiCalls) * 100) : 0;

    let score = 100;
    score -= Math.min(30, totalErrors * 3);
    score -= Math.min(20, Math.max(0, (data.avgLatency || 0) - 500) / 30);
    score += Math.min(10, Math.round((data.cacheHitRate || 0) / 10));
    score = Math.max(0, Math.min(100, Math.round(score)));

    return {
      totalErrors,
      successRate,
      healthScore: score,
    };
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="animate-pulse space-y-6">
            <div className="h-10 w-64 rounded-xl bg-white/10" />
            <div className="h-5 w-96 rounded-xl bg-white/5" />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-36 rounded-3xl border border-white/10 bg-white/5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || !derived) {
    return (
      <div className="min-h-screen bg-[#030712] px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-500/20 bg-red-500/10 p-8">
          <div className="flex items-center gap-3">
            <ServerCrash className="h-6 w-6 text-red-300" />
            <h1 className="text-2xl font-bold">Failed to load system health</h1>
          </div>
          <p className="mt-3 text-white/70">
            Check your <code>/api/system-health</code> route and Redis metrics.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              AI Infrastructure Observability
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              System Health
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 md:text-base">
              Monitor your AI Shield pipeline with live usage, caching, rate-limit,
              latency, and reliability metrics in one place.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex items-center gap-3">
              <HealthBadge score={derived.healthScore} />
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-white/50">Health Score</p>
                <p className="text-2xl font-bold">{derived.healthScore}/100</p>
              </div>
            </div>

            <button
              onClick={() => fetchMetrics(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              <RefreshCw
                className={cn("h-4 w-4", refreshing && "animate-spin")}
              />
              Refresh
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="API Calls"
            value={data.apiCalls}
            icon={Activity}
            hint="All incoming analyzer requests"
            tone="blue"
          />
          <StatCard
            title="Success Rate"
            value={`${derived.successRate}%`}
            icon={CheckCircle2}
            hint="Successful responses vs total calls"
            tone="green"
          />
          <StatCard
            title="Cache Hits"
            value={data.cacheHits}
            icon={DatabaseZap}
            hint={`${data.cacheHitRate}% cache efficiency`}
            tone="purple"
          />
          <StatCard
            title="Avg AI Latency"
            value={`${data.avgLatency} ms`}
            icon={Gauge}
            hint="Average recent model response time"
            tone="amber"
          />
          <StatCard
            title="Fresh AI Responses"
            value={data.freshAiResponses}
            icon={Cpu}
            hint="Responses generated without cache"
            tone="blue"
          />
          <StatCard
            title="Rate Limit Hits"
            value={data.rateLimitHits}
            icon={ShieldAlert}
            hint="Protected by AI Shield throttling"
            tone="amber"
          />
          <StatCard
            title="Duplicate Requests"
            value={data.duplicateRequests}
            icon={CopyCheck}
            hint="Blocked repeated identical requests"
            tone="purple"
          />
          <StatCard
            title="Total Errors"
            value={derived.totalErrors}
            icon={AlertTriangle}
            hint="AI + server + bad request issues"
            tone="red"
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-cyan-300" />
              <h2 className="text-xl font-bold">Pipeline Breakdown</h2>
            </div>

            <div className="space-y-5">
              <ProgressBar
                label="Successful Responses"
                value={data.successfulResponses}
                total={Math.max(data.apiCalls, 1)}
                colorClass="bg-gradient-to-r from-emerald-400 to-green-500"
              />
              <ProgressBar
                label="Cache Hits"
                value={data.cacheHits}
                total={Math.max(data.apiCalls, 1)}
                colorClass="bg-gradient-to-r from-violet-400 to-purple-500"
              />
              <ProgressBar
                label="Fresh AI Responses"
                value={data.freshAiResponses}
                total={Math.max(data.apiCalls, 1)}
                colorClass="bg-gradient-to-r from-sky-400 to-cyan-500"
              />
              <ProgressBar
                label="Rate Limited"
                value={data.rateLimitHits}
                total={Math.max(data.apiCalls, 1)}
                colorClass="bg-gradient-to-r from-amber-400 to-orange-500"
              />
              <ProgressBar
                label="Failures"
                value={derived.totalErrors}
                total={Math.max(data.apiCalls, 1)}
                colorClass="bg-gradient-to-r from-rose-400 to-red-500"
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-purple-300" />
              <h2 className="text-xl font-bold">Quick Insights</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Caching</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {data.cacheHitRate >= 40
                    ? "Good cache efficiency is reducing repeated model calls."
                    : "Cache hit rate is low. More repeated prompts can improve savings."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Latency</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {data.avgLatency <= 800
                    ? "Latency looks healthy for an AI-powered workflow."
                    : "Latency is getting high. Consider retry tuning or response caching."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Reliability</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {derived.totalErrors <= 3
                    ? "System is stable with low observable failure signals."
                    : "Errors are noticeable. Inspect AI failures and request validation."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}