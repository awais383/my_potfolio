import React, { useState } from "react";
import python from "../assets/python.png";
import pytorch from "../assets/pytorch.png";
import mistral from "../assets/mistral.webp";
import django from "../assets/django.png";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Core Stack" },
    { id: "aiml", name: "AI & Machine Learning" },
    { id: "datascience", name: "Data Science (Scrape • Clean • Viz)" },
    { id: "backend", name: "FastAPI & Django" },
  ];

  const curatedSkills = [
    // Backend & Languages
    {
      name: "Python",
      category: "backend",
      icon: python,
      level: "Core Language",
      desc: "Advanced async architecture, OOP, mathematical computation, and end-to-end algorithmic scripting.",
    },
    {
      name: "FastAPI",
      category: "backend",
      fallbackText: "API",
      level: "Model Serving API",
      desc: "High-throughput asynchronous REST microservices with Pydantic validation for sub-50ms ML inference.",
    },
    {
      name: "Django",
      category: "backend",
      icon: django,
      level: "Web Framework",
      desc: "Scalable MVC architecture, ORM query optimization, database migrations, and robust REST APIs.",
    },

    // AI & Machine Learning
    {
      name: "PyTorch & Deep Learning",
      category: "aiml",
      icon: pytorch,
      level: "Neural Networks & CV",
      desc: "CNN backbones, MobileNet transfer learning, computer vision inference, and tensor computation.",
    },
    {
      name: "Scikit-Learn & XGBoost",
      category: "aiml",
      fallbackText: "ML",
      level: "Predictive Modeling",
      desc: "Gradient boosted decision trees, feature engineering, stratified cross-validation, and ROC-AUC optimization.",
    },
    {
      name: "LLMs & GenAI (Mistral / LLaMA)",
      category: "aiml",
      icon: mistral,
      level: "NLP & RAG",
      desc: "Retrieval-Augmented Generation (RAG), vector similarity search, Groq acceleration, and prompt pipelines.",
    },

    // Data Science (Parent) -> Data Scraping, Data Cleaning, Data Visualizing (Children)
    {
      name: "Scrapy & Playwright",
      category: "datascience",
      fallbackText: "SCR",
      level: "Data Scraping",
      desc: "Headless browser automation, distributed crawlers, infinite-scroll handling, and anti-bot mitigation.",
    },
    {
      name: "Pandas & NumPy",
      category: "datascience",
      fallbackText: "PD",
      level: "Data Cleaning",
      desc: "Vectorized data sanitation, missing value imputation, outlier detection, and automated ETL validation.",
    },
    {
      name: "Matplotlib & Plotly",
      category: "datascience",
      fallbackText: "VIZ",
      level: "Data Visualizing",
      desc: "Exploratory data analysis (EDA), statistical distributions, correlation heatmaps, and interactive visual charts.",
    },
  ];

  const filteredSkills =
    activeTab === "all"
      ? curatedSkills
      : curatedSkills.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative border-t border-zinc-900 bg-[#070709]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Focused Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Core Technologies & Production Stack
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-zinc-400">
            A focused selection of essential tools powering AI & Machine Learning models, full-lifecycle Data Science, and robust Python backends.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === cat.id
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Curated Grid (3x3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-850 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 p-2.5 group-hover:border-zinc-700 transition-colors">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-mono text-xs font-bold text-zinc-300">
                      {skill.fallbackText}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-white truncate group-hover:text-zinc-100 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded">
                    {skill.level}
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
