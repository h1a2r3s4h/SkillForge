"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = imageRef.current;
      if (!imageElement) return; // ✅ prevent null access

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

        {/* <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-4 rounded-xl font-semibold text-lg 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             text-white shadow-lg shadow-pink-500/30
             transition-all duration-300 ease-in-out
             hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 
             active:scale-95 active:shadow-md active:shadow-pink-500/30"
            >
              Get Started
            </Button>
          </Link>
        </div> */}
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
          content: '';
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
        <div className="hero-image-wrapper mt-5 md:mt-0">
          {/* ✅ ref attached directly */}
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
