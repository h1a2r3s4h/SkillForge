"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import roadmapData from "./index";

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
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white overflow-hidden relative">
      {/* Red Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.12),transparent_60%)] pointer-events-none" />

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 
        bg-black/90 border-r border-white/10 backdrop-blur-xl
        p-6 flex flex-col transform md:translate-x-0 transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <h1
            className="text-3xl font-extrabold tracking-wide 
             text-red-400 transition-all duration-500 
             hover:scale-105 hover:text-red-300 
             drop-shadow-[0_2px_8px_rgba(220,38,38,0.55)]"
          >
            {/* Skill<span className="text-white">Forge</span> */}
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
            className={`mb-3 p-3 text-left rounded-xl font-medium transition-all duration-200 border ${
              selected === category
                ? "bg-red-600/90 text-white shadow-lg shadow-red-600/30 border-red-500/30"
                : "bg-white/5 hover:bg-white/10 border-white/10"
            }`}
            onClick={() => {
              setSelected(category);
              setSelectedTopic(Object.keys(roadmapData[category])[0] || "");
              setSidebarOpen(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center p-4 bg-black/90 border-b border-white/10 backdrop-blur-xl relative z-40">
        <h1 className="text-2xl font-bold text-red-400">
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
      <div className="flex-1 px-4 md:px-10 py-6 md:py-8 overflow-y-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
          {selected} Roadmap
        </h2>

        {/* Topics Buttons */}
        {topics.length > 0 && selected !== "4-Year B.Tech CSE" && (
          <div className="flex gap-2 md:gap-3 mb-6 flex-wrap">
            {topics.map((topic) => (
              <button
                key={topic}
                className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all border ${
                  selectedTopic === topic
                    ? "bg-red-600/90 text-white border-red-500/30 shadow-md shadow-red-600/20"
                    : "bg-white/5 hover:bg-white/10 border-white/10"
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
          {/* PDF for normal roadmaps */}
          {selectedContent?.pdf && selected !== "4-Year B.Tech CSE" && (
            <a
              href={selectedContent.pdf}
              download
              target="_blank"
              className="inline-block mb-6 px-6 py-3 
              bg-red-600/90 hover:bg-red-500 text-white 
              rounded-2xl font-semibold transition-all 
              shadow-lg shadow-red-600/25 border border-red-500/20"
            >
              Download PDF
            </a>
          )}

          {/* Regular Roadmap */}
          {selected !== "4-Year B.Tech CSE" && selectedContent?.sections ? (
            <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40">
              <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-2">
                {selectedContent.title}
              </h3>
              <p className="text-gray-300 mb-4 md:mb-6">
                {selectedContent.objective}
              </p>

              {selectedContent.sections.map((section, index) => (
                <div key={index} className="mb-4 md:mb-6">
                  <h4 className="text-lg md:text-xl font-semibold text-red-300 mb-2">
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

          {/* Custom Rendering for 4-Year B.Tech CSE */}
          {selected === "4-Year B.Tech CSE" && (
            <div className="space-y-10">
              {Object.entries(roadmapData["4-Year B.Tech CSE"]).map(
                ([year, data]) => (
                  <div
                    key={year}
                    className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40"
                  >
                    <h3 className="text-2xl font-bold text-red-400 mb-3">
                      {year}
                    </h3>
                    <p className="text-gray-300 mb-4">{data.focus}</p>

                    <h4 className="text-lg font-semibold text-red-300 mb-2">
                      🎯 Goals
                    </h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                      {data.goals.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>

                    {data.technicalLearning && (
                      <>
                        <h4 className="text-lg font-semibold text-red-300 mb-2">
                          💻 Technical Learning
                        </h4>
                        {Object.entries(data.technicalLearning).map(
                          ([topic, points]) => (
                            <div key={topic}>
                              <h5 className="font-medium mt-2 text-gray-200">
                                {topic}
                              </h5>
                              <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
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
                        <h4 className="text-lg font-semibold text-red-300 mb-2">
                          🧩 Practice Platforms
                        </h4>
                        {Object.entries(data.practicePlatforms).map(
                          ([cat, list]) => (
                            <div key={cat}>
                              <h5 className="font-medium mt-2 text-gray-200">
                                {cat}
                              </h5>
                              <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                                {list.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </>
                    )}

                    {data.internships && (
                      <>
                        <h4 className="text-lg font-semibold text-red-300 mb-2">
                          💼 Internships
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                          {data.internships.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {data.openSourceContribution && (
                      <>
                        <h4 className="text-lg font-semibold text-red-300 mb-2">
                          🌍 Open Source
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                          {data.openSourceContribution.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {data.researchProjects && (
                      <>
                        <h4 className="text-lg font-semibold text-red-300 mb-2">
                          🧪 Research Projects
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                          {data.researchProjects.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {data.summerVacationGoals && (
                      <>
                        <h4 className="text-lg font-semibold text-red-300 mb-2">
                          ☀️ Summer Vacation Goals
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
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
