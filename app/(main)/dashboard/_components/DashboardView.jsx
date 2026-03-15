"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
  const safeInsights = insights || {
    marketOutlook: "Neutral",
    growthRate: 0,
    demandLevel: "Medium",
    topSkills: [],
    salaryRanges: [],
    keyTrends: [],
    recommendedSkills: [],
    lastUpdated: new Date(),
    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };

  const salaryData =
    safeInsights.salaryRanges?.map((range) => ({
      name: range.role || "N/A",
      min: (range.min || 0) / 1000,
      median: (range.median || 0) / 1000,
      max: (range.max || 0) / 1000,
    })) || [];

  const getDemandLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook?.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const { icon: OutlookIcon, color: outlookColor } = getMarketOutlookInfo(
    safeInsights.marketOutlook
  );

  const lastUpdatedDate = safeInsights.lastUpdated
    ? format(new Date(safeInsights.lastUpdated), "dd/MM/yyyy")
    : "-";

  const nextUpdateDistance = safeInsights.nextUpdate
    ? formatDistanceToNow(new Date(safeInsights.nextUpdate), {
        addSuffix: true,
      })
    : "-";

  const growthPercentage = Number(safeInsights.growthRate || 0) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
            <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {safeInsights.marketOutlook || "-"}
            </div>
            <p className="text-xs text-muted-foreground">
              Next update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Industry Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {growthPercentage.toFixed(1)}%
            </div>
            <Progress value={Math.min(growthPercentage, 100)} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {safeInsights.demandLevel || "-"}
            </div>
            <div
              className={`mt-2 h-2 w-full rounded-full ${getDemandLevelColor(
                safeInsights.demandLevel || ""
              )}`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {safeInsights.topSkills?.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {safeInsights.topSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                No skills available
              </span>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Salary Ranges by Role</CardTitle>
          <CardDescription>
            Displaying minimum, median, and maximum salaries (in thousands)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full min-w-0">
            {salaryData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-md">
                            <p className="font-medium">{label}</p>
                            {payload.map((item, index) => (
                              <p key={`${item.name}-${index}`} className="text-sm">
                                {item.name}: ${Number(item.value).toLocaleString()}K
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="min" fill="#94a3b8" name="Min Salary" />
                  <Bar dataKey="median" fill="#64748b" name="Median Salary" />
                  <Bar dataKey="max" fill="#475569" name="Max Salary" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                No salary data available
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Industry Trends</CardTitle>
            <CardDescription>
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            {safeInsights.keyTrends?.length > 0 ? (
              <ul className="space-y-4">
                {safeInsights.keyTrends.map((trend, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{trend}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                No trends available
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>
              Skills to consider developing
            </CardDescription>
          </CardHeader>
          <CardContent>
            {safeInsights.recommendedSkills?.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {safeInsights.recommendedSkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                No recommended skills
              </span>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;