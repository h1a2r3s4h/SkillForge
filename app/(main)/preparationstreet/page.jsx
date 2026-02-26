"use client";
import { useState } from "react";
import { topics } from "./preparationStreet";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PreparationStreet() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div
      className={`flex h-screen bg-black text-white overflow-hidden relative ${poppins.className}`}
    >
      {/* Red Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.12),transparent_60%)] pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-72 bg-black/90 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-2xl border-r border-white/10 relative z-10">
        {/* Title */}
        <h1
          className="text-3xl font-extrabold mb-6 tracking-tight 
          text-red-400 drop-shadow-[0_2px_10px_rgba(220,38,38,0.5)]
          transition-all duration-500 hover:scale-105 hover:text-red-300"
        >
          Preparation <span className="text-white">Street</span>
        </h1>

        {/* Sidebar Buttons */}
        {topics.map((topic, i) => (
          <button
            key={i}
            onClick={() => setSelectedTopic(topic)}
            className={`text-left p-3 rounded-xl transition-all duration-300 
              hover:shadow-lg hover:translate-x-1 border ${
                selectedTopic.name === topic.name
                  ? "bg-red-600/90 text-white shadow-lg shadow-red-600/30 border-red-500/30"
                  : "bg-white/5 hover:bg-white/10 border-white/10"
              }`}
          >
            <span className="text-base font-medium">{topic.name}</span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto relative z-10 space-y-8">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-red-400 drop-shadow-[0_2px_10px_rgba(220,38,38,0.35)] transition-all duration-500 hover:scale-[1.02]">
          {selectedTopic.name}
        </h2>

        {/* Video Section */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/50">
          <iframe
            className="w-full h-full"
            src={selectedTopic.video}
            title={selectedTopic.name}
            allowFullScreen
          ></iframe>
        </div>

        {/* Cheat Sheets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedTopic.cheatSheets.map((sheet, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center 
              shadow-xl shadow-black/40 hover:shadow-red-600/10 backdrop-blur-xl transition-all duration-300"
            >
              {sheet.endsWith(".pdf") ? (
                <a
                  href={sheet.startsWith("http") ? sheet : `${sheet}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-red-300 hover:text-red-200 transition-all duration-300"
                >
                  View PDF Cheat Sheet
                </a>
              ) : (
                <img
                  src={sheet}
                  alt="cheat sheet"
                  className="rounded-xl max-h-80 object-contain shadow-md hover:scale-105 hover:shadow-red-600/20 transition-transform duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
