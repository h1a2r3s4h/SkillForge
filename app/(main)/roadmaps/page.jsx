"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import roadmapData from "./index"; // Import your roadmap

export default function Page() {
  const [selected, setSelected] = useState("Frontend");
  const [selectedTopic, setSelectedTopic] = useState(
    Object.keys(roadmapData["Frontend"])[0]
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 p-6 flex flex-col transform md:translate-x-0 transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-extrabold text-indigo-400 tracking-wide">
            Skill<span className="text-white">Forge</span>
          </h1>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
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
              setSidebarOpen(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-indigo-400">
          Skill<span className="text-white">Forge</span>
        </h1>
        <button
          className="text-gray-400 hover:text-white text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 md:px-10 py-6 md:py-8 overflow-y-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">
          {selected} Roadmap
        </h2>

        {/* Topics Buttons */}
        {topics.length > 0 && selected !== "4-Year B.Tech CSE" && (
          <div className="flex gap-2 md:gap-3 mb-6 flex-wrap">
            {topics.map((topic) => (
              <button
                key={topic}
                className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all ${
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
          {/* --- PDF for normal roadmaps --- */}
          {selectedContent?.pdf && selected !== "4-Year B.Tech CSE" && (
            <a
              href={selectedContent.pdf}
              download
              target="_blank"
              className="inline-block mb-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all"
            >
              Download PDF
            </a>
          )}

          {/* --- Regular Roadmap (Frontend/Backend/DSA) --- */}
          {selected !== "4-Year B.Tech CSE" && selectedContent?.sections ? (
            <div className="bg-gray-900/60 p-4 md:p-6 rounded-xl border border-gray-800 backdrop-blur-md">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-400 mb-2">
                {selectedContent.title}
              </h3>
              <p className="text-gray-300 mb-4 md:mb-6">
                {selectedContent.objective}
              </p>
              {selectedContent.sections.map((section, index) => (
                <div key={index} className="mb-4 md:mb-6">
                  <h4 className="text-lg md:text-xl font-semibold text-indigo-300 mb-2">
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
          ) : null}

          {/* --- Custom Rendering for 4-Year B.Tech CSE --- */}
          {selected === "4-Year B.Tech CSE" && (
            <div className="space-y-10">
              {Object.entries(roadmapData["4-Year B.Tech CSE"]).map(
                ([year, data]) => (
                  <div
                    key={year}
                    className="bg-gray-900/60 p-6 rounded-xl border border-gray-800"
                  >
                    <h3 className="text-2xl font-bold text-indigo-400 mb-3">
                      {year}
                    </h3>
                    <p className="text-gray-300 mb-4">{data.focus}</p>

                    <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                      🎯 Goals
                    </h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                      {data.goals.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>

                    {data.technicalLearning && (
                      <>
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                          💻 Technical Learning
                        </h4>
                        {Object.entries(data.technicalLearning).map(
                          ([topic, points]) => (
                            <div key={topic}>
                              <h5 className="font-medium mt-2">{topic}</h5>
                              <ul className="list-disc list-inside mb-4 text-gray-300">
                                {points.map((p, i) => (
                                  <li key={i}>{p}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </>
                    )}

                    {data.practicePlatforms && (
                      <>
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                          🧩 Practice Platforms
                        </h4>
                        {Object.entries(data.practicePlatforms).map(
                          ([cat, list]) => (
                            <div key={cat}>
                              <h5 className="font-medium mt-2">{cat}</h5>
                              <ul className="list-disc list-inside mb-4 text-gray-300">
                                {list.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </>
                    )}

                    {/* Optional Fields */}
                    {data.internships && (
                      <>
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                          💼 Internships
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300">
                          {data.internships.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {data.openSourceContribution && (
                      <>
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                          🌍 Open Source
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300">
                          {data.openSourceContribution.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {data.researchProjects && (
                      <>
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                          🧪 Research Projects
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300">
                          {data.researchProjects.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {data.summerVacationGoals && (
                      <>
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">
                          ☀️ Summer Vacation Goals
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300">
                          {data.summerVacationGoals.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
