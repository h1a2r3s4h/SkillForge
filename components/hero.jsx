"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = imageRef.current;
      if (!imageElement) return;
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        {/* 🎉 Introducing Magic UI Badge */}
        <div className="flex justify-center">
          <Link
            href="https://forge-bot-git-main-h1a2r3s4hs-projects.vercel.app"
            className="flex items-center gap-2 rounded-full border bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 p-[1px] hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur-sm">
              <span className="text-xl">🎉</span>
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Meet Your AI Career Mentor
              </span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
          </Link>
        </div>

        {/* 🌟 Main Hero Title */}
        <div className="space-y-6 mx-auto">
          <h1
            className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient 
             transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
          >
            Forge skills, shape your future
            <br />
            Where careers are crafted with AI power
          </h1>

          <p className="mx-auto max-w-[650px] text-muted-foreground md:text-xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>

        {/* 🚀 Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 w-full max-w-md">
              <button className="w-full px-12 py-6 text-xl text-white rounded-full font-semibold bg-gray-900/80 backdrop-blur">
                Get Started
              </button>
            </div>
          </Link>

          <style jsx>{`
            @keyframes rotate {
              100% {
                transform: rotate(1turn);
              }
            }

            .rainbow::before {
              content: "";
              position: absolute;
              z-index: -2;
              left: -50%;
              top: -50%;
              width: 200%;
              height: 200%;
              background-position: 100% 50%;
              background-repeat: no-repeat;
              background-size: 50% 30%;
              filter: blur(6px);
              background-image: conic-gradient(
                from 0deg,
                red,
                orange,
                yellow,
                green,
                blue,
                indigo,
                violet,
                red
              );
              animation: rotate 4s linear infinite;
            }
          `}</style>
        </div>

        {/* 🖼️ Hero Image */}
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
