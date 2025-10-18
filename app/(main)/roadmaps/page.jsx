"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import roadmapData from "./index"; // Import your roadmap

export default function Page() {
  const [selected, setSelected] = useState("Frontend");
  const [selectedTopic, setSelectedTopic] = useState(
    Object.keys(roadmapData["Frontend"])[0]
  );

  const categories = Object.keys(roadmapData);
  const topics =
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
        {categories.map((category) => (
          <button
            key={category}
            className={`mb-3 p-3 text-left rounded-xl font-medium transition-all duration-200 ${
              selected === category
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-gray-900 hover:bg-gray-800"
            }`}
            onClick={() => {
              setSelected(category);
              setSelectedTopic(
                Object.keys(roadmapData[category])[0] || ""
              );
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 px-10 py-8 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">
          {selected} Roadmap
        </h2>

        {/* Topics Buttons */}
        {topics.length > 0 && (
          <div className="flex gap-3 mb-6 flex-wrap">
            {topics.map((topic) => (
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

        {/* Roadmap Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* PDF Download Button */}
          {selectedContent?.pdf && (
            <a
              href={selectedContent.pdf}
              download
              target="_blank"
              className="inline-block mb-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all"
            >
              Download PDF
            </a>
          )}

          {/* Sections */}
          {selectedContent && selectedContent.sections ? (
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
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No roadmap content available.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
