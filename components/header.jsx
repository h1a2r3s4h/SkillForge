import React from "react";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  Activity,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  Map,
  HelpCircle,
  BookOpen,
  MessagesSquare,
  FileText,
  Shield,
  Sparkles,
  Bot,
  Mic,
  BadgeHelp,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center">
            <span className="text-white transition-colors duration-300 group-hover:text-gray-200">
              Skill
            </span>
            <span
              className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 
              transition-all duration-500 group-hover:from-indigo-400 group-hover:via-blue-400 group-hover:to-sky-300"
            >
              Forge
            </span>
          </h1>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            {/* Dashboard Button */}
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* Career Copilot */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2 border-sky-500/30 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all"
                >
                  <div className="flex items-center gap-1.5">
  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/20">
    <Bot className="h-3.5 w-3.5 text-sky-400" />
  </div>
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20">
    <Sparkles className="h-3 w-3 text-indigo-400" />
  </div>
</div>
                  Career Copilot
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="center"
                className="w-72 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl p-2"
              >
                <div className="px-3 py-2 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/20">
    <Bot className="h-3.5 w-3.5 text-sky-400" />
  </div>
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20">
    <Sparkles className="h-3 w-3 text-indigo-400" />
  </div>
</div>
                    <p className="text-sm font-semibold">Career Copilot</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your AI-powered career workspace
                  </p>
                </div>

                <DropdownMenuItem asChild>
                  <Link
                    href="https://forge-bot-git-main-h1a2r3s4hs-projects.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl px-3 py-2"
                  >
                    <MessagesSquare className="h-4 w-4 text-sky-500" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">ForgeBot</span>
                      <span className="text-xs text-muted-foreground">
                        AI assistant for guidance
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
  <Link
    href="https://vox-hire-voice-agent.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-xl px-3 py-2"
  >
    <Bot className="h-4 w-4 text-sky-500" />

    <div className="flex flex-col">
      <span className="text-sm font-medium">
        AI Voice Interview Agent
      </span>

      <span className="text-xs text-muted-foreground">
        Practice real-time AI voice interviews
      </span>
    </div>
  </Link>
</DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="https://resume-builder-2i4b.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl px-3 py-2"
                  >
                    <FileText className="h-4 w-4 text-indigo-500" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Resume Builder</span>
                      <span className="text-xs text-muted-foreground">
                        Build ATS-friendly resumes
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-shield"
                    className="flex items-center gap-3 rounded-xl px-3 py-2"
                  >
                    <Shield className="h-4 w-4 text-green-500" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">AI Shield</span>
                      <span className="text-xs text-muted-foreground">
                        Analyze resume and get fixes
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/roadmap-generator"
                    className="flex items-center gap-3 rounded-xl px-3 py-2"
                  >
                    <Map className="h-4 w-4 text-violet-400" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">ForgePathAI</span>
                      <span className="text-xs text-muted-foreground">
                        Generate smart learning roadmaps
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/system-health"
                    className="flex items-center gap-3 rounded-xl px-3 py-2"
                  >
                    <Activity className="h-4 w-4 text-purple-500" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">System Health</span>
                      <span className="text-xs text-muted-foreground">
                        Track AI performance and reliability
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Career Copilot */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <div className="relative flex items-center justify-center">
                    <Bot className="h-4 w-4 text-sky-400" />
                    <Sparkles className="h-3 w-3 text-indigo-400 absolute -top-1 -right-1" />
                  </div>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-72 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl p-2"
              >
                <div className="px-3 py-2 border-b border-white/10 mb-2">
                  <p className="text-sm font-semibold">Career Copilot</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your AI-powered career workspace
                  </p>
                </div>

                <DropdownMenuItem asChild>
                  <Link
                    href="https://forge-bot-git-main-h1a2r3s4hs-projects.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <MessagesSquare className="h-4 w-4 text-sky-500" />
                    ForgeBot
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
  <Link
    href="https://vox-hire-voice-agent.vercel.app/dashboard#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-xl px-3 py-2"
  >
    <Mic className="h-4 w-4 text-sky-500" />

    <div className="flex flex-col">
      <span className="text-sm font-medium">
        AI Voice Interview Agent
      </span>

      <span className="text-xs text-muted-foreground">
        Practice real-time AI voice interviews
      </span>
    </div>
  </Link>
</DropdownMenuItem>


                <DropdownMenuItem asChild>
                  <Link
                    href="https://resume-builder-2i4b.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <FileText className="h-4 w-4 text-indigo-500" />
                    Resume Builder
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/ai-shield" className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-green-500" />
                    AI Shield
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/roadmap-generator"
                    className="flex items-center gap-3"
                  >
                    <Map className="h-4 w-4 text-violet-400" />
                    ForgePathAI
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/system-health" className="flex items-center gap-3">
                    <Activity className="h-4 w-4 text-purple-500" />
                    System Health
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/career-faqs" className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4" />
                    Career FAQs
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/roadmaps" className="flex items-center gap-2">
                    <Map className="h-4 w-4" />
                    Roadmaps
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/preparationstreet"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    PreparationStreet
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}