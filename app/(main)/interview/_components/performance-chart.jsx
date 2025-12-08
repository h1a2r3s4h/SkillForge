"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function PerformanceChart({ assessments }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments && assessments.length > 0) {
      // 1. Sort assessments by date ascending
      const sortedAssessments = [...assessments].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

      const formattedData = sortedAssessments.map((assessment) => ({
        // 🔑 FIX 1: Use a number (UNIX timestamp) as the X-axis key.
        // This is necessary for the line to connect correctly over time.
        time: new Date(assessment.createdAt).getTime(), 
        // Use the formatted string only for the Tooltip payload
        dateLabel: format(new Date(assessment.createdAt), "MMM dd, hh:mm a"), 
        score: assessment.quizScore,
      }));
      setChartData(formattedData);
    }
  }, [assessments]);

  // Function to format the UNIX timestamp back to a readable date for the X-Axis
  const formatXAxisTick = (tickValue) => {
    // Only show the Month/Day on the axis to keep it clean, but use the full timestamp for plotting
    return format(new Date(tickValue), "MMM dd"); 
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle className="gradient-title text-3xl md:text-4xl">
          Performance Trend
        </CardTitle>
        <CardDescription>Your quiz scores over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              {/* 🔑 FIX 2: Set dataKey to the 'time' number AND set type to 'number' */}
              <XAxis 
                dataKey="time"
                type="number" // Treat the axis as a chronological scale
                domain={['auto', 'auto']}
                tickFormatter={formatXAxisTick} // Use the custom function to format the display label
                angle={-15} 
                textAnchor="end"
                height={40}
                interval="preserveStartEnd"
              />
              <YAxis domain={[0, 100]} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-background border rounded-lg p-2 shadow-md">
                        <p className="text-sm font-medium">
                          Score: {payload[0].value}%
                        </p>
                        {/* Get the full date label from the payload's original data */}
                        <p className="text-xs text-muted-foreground">
                          {payload[0].payload.dateLabel}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}