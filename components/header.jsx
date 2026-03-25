import React from "react";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  Map,
  HelpCircle,
  BookOpen,
  MessagesSquare,
  FileText,
  Shield,
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

        {/* Action Buttons */}
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

            {/* ForgeBot Button */}
            <Link
              href="https://forge-bot-git-main-h1a2r3s4hs-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2"
              >
                <MessagesSquare className="h-4 w-4 text-sky-500" />
                ForgeBot
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <MessagesSquare className="h-4 w-4 text-sky-500" />
              </Button>
            </Link>

            {/* Resume Builder Button (LIKE FORGEBOT) */}
            <Link
              href="https://resume-builder-2i4b.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2"
              >
                <FileText className="h-4 w-4 text-indigo-500" />
                Resume Builder
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <FileText className="h-4 w-4 text-indigo-500" />
              </Button>
            </Link>

            {/* AI Shield Button */}
<Link href="/ai-shield">
  <Button
    variant="outline"
    className="hidden md:inline-flex items-center gap-2 border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10"
  >
    <Shield className="h-4 w-4 text-green-500" />
    AI Shield
  </Button>

  <Button
    variant="ghost"
    className="md:hidden w-10 h-10 p-0 hover:bg-green-500/10"
  >
    <Shield className="h-4 w-4 text-green-500" />
  </Button>
</Link>

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

          {/* Sign In Button */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          {/* User Button */}
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