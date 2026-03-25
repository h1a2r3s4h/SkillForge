import ResumeAnalyzerForm from "@/components/ai-shield/ResumeAnalyzerForm";

export default function AIShieldPage() {
  return (
    <div className="min-h-screen px-4 pt-28 pb-10 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">AI Shield</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Resume Analyzer powered by caching, rate limiting, retry handling,
            and duplicate request protection.
          </p>
        </div>

        <ResumeAnalyzerForm />
      </div>
    </div>
  );
}