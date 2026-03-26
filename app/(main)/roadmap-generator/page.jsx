import React from "react";
import RoadmapGeneratorForm from "@/components/roadmap-generator/RoadmapGeneratorForm";

export default function RoadmapGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
              ForgePathAI
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              AI Roadmap Generator
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Generate a personalized roadmap based on your target role,
              current level, existing skills, weak areas, available time, and
              learning duration.
            </p>
          </div>

          <RoadmapGeneratorForm />
        </div>
      </div>
    </div>
  );
}