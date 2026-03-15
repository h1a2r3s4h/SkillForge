import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_components/DashboardView";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const onboarded = await getUserOnboardingStatus();

  if (!onboarded.isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();

  return <DashboardView insights={insights} />;
}