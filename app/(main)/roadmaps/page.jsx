"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import roadmapData from "./index"; // ✅ import all roadmaps

export default function Page() {
  const [selected, setSelected] = useState("Frontend");
  const [selectedTopic, setSelectedTopic] = useState("HTML & CSS");

  const items = Object.keys(roadmapData);
  const frontendTopics =
    typeof roadmapData[selected] === "object"
      ? Object.keys(roadmapData[selected])
      : [];

  const selectedContent =
    typeof roadmapData[selected] === "object"
      ? roadmapData[selected][selectedTopic]
      : roadmapData[selected];

  return (
    <div className="flex w-full h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 p-6 flex flex-col">
        <h1 className="text-3xl font-extrabold mb-10 text-indigo-400 tracking-wide">
          Skill<span className="text-white">Forge</span>
        </h1>
        {items.map((item) => (
          <button
            key={item}
            className={`mb-3 p-3 text-left rounded-xl font-medium transition-all duration-200 ${
              selected === item
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-gray-900 hover:bg-gray-800"
            }`}
            onClick={() => {
              setSelected(item);
              setSelectedTopic(
                Object.keys(roadmapData[item])[0] || roadmapData[item][0]
              );
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 px-10 py-8 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">
          {selected} Roadmap
        </h2>

        {selected === "Frontend" && (
          <div className="flex gap-3 mb-6 flex-wrap">
            {frontendTopics.map((topic) => (
              <button
                key={topic}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedTopic === topic
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        )}

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedContent && typeof selectedContent === "object" && selectedContent.sections ? (
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-indigo-400 mb-2">
                {selectedContent.title}
              </h3>
              <p className="text-gray-300 mb-6">{selectedContent.objective}</p>
              {selectedContent.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-semibold text-indigo-300 mb-2">
                    {section.title}
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {section.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : Array.isArray(selectedContent) ? (
            <ul className="space-y-3">
              {selectedContent.map((step, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-900/70 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all"
                >
                  {step}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No roadmap content available.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
