"use client";
import { useState } from "react";
import { topics } from "./preparationStreet";
import { Poppins } from "next/font/google";

// Apply Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PreparationStreet() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div
      className={`flex h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white ${poppins.className}`}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-950 to-black p-6 flex flex-col gap-4 shadow-2xl border-r border-gray-800/60">
        <h1 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 tracking-tight">
          Preparation Street
        </h1>

        {topics.map((topic, i) => (
          <button
            key={i}
            onClick={() => setSelectedTopic(topic)}
            className={`text-left p-3 rounded-lg transition-all duration-300 
              hover:shadow-lg hover:translate-x-1 
              ${
                selectedTopic.name === topic.name
                  ? "bg-gradient-to-r from-purple-700 to-pink-600 shadow-lg"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
          >
            <span className="text-base font-medium">{topic.name}</span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto backdrop-blur-sm space-y-8 bg-black/30 shadow-inner">
        {/* Title */}
        <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]">
          {selectedTopic.name}
        </h2>

        {/* Video Section */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)] border border-gray-800/70 bg-black/60 backdrop-blur-sm">
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
              className="bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800/70 rounded-2xl p-5 flex flex-col items-center 
                         shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              {sheet.endsWith(".pdf") ? (
                <a
                  href={sheet.startsWith("http") ? sheet : `${sheet}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline hover:text-pink-400 text-lg font-medium"
                >
                  View PDF Cheat Sheet
                </a>
              ) : (
                <img
                  src={sheet}
                  alt="cheat sheet"
                  className="rounded-xl max-h-80 object-contain shadow-md hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-transform duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
