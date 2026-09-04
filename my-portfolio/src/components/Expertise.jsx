import React from "react";
import { Brain, MessageSquareCode, ScanEye, Database, Sparkles, Filter, BarChart3, CheckCircle2, ArrowRight, GitFork } from "lucide-react";

export default function Expertise() {
  const aiPillars = [
    {
      icon: <Brain className="w-5 h-5 text-zinc-300" />,
      title: "Machine Learning & Deep Learning",
      tagline: "Statistical predictive pipelines engineered for high precision, recall, and low latency.",
      capabilities: [
        "Gradient boosted decision trees with XGBoost, LightGBM, and Scikit-learn",
        "Hyperparameter optimization, cross-validation, and ROC-AUC / F1 evaluation",
        "Deep neural network training and transfer learning using PyTorch & TensorFlow",
        "Production model serialization and microservice deployment via FastAPI and Flask"
      ],
      techBadge: "Scikit-Learn • XGBoost • PyTorch • TensorFlow • FastAPI"
    },
    {
      icon: <ScanEye className="w-5 h-5 text-zinc-300" />,
      title: "NLP & Computer Vision",
      tagline: "State-of-the-art vision backbones and high-speed LLM generative architectures.",
      capabilities: [
        "LLM orchestration with LLaMA 3, Mistral AI, and ultra-low latency Groq LPU inference",
        "Retrieval-Augmented Generation (RAG) using vector embeddings and similarity search",
        "CNN architectures (MobileNet, ResNet) for edge classification and object detection",
        "Real-time image manipulation, contouring, and video frame preprocessing with OpenCV"
      ],
      techBadge: "LLaMA 3 • Mistral AI • Groq • MobileNet • OpenCV • RAG"
    }
  ];

  const dataScientistChildren = [
    {
      childId: "Class 01",
      name: "Data Scraping",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      tagline: "Automated Web Crawling & Ingestion",
      description:
        "Extracting high-volume unstructured web data from dynamic, JavaScript-heavy SPAs with anti-bot evasion, proxy rotation, and resilient headless automation.",
      tools: ["Scrapy", "Playwright", "Selenium", "BeautifulSoup4", "AsyncIO"],
    },
    {
      childId: "Class 02",
      name: "Data Cleaning",
      icon: <Filter className="w-4 h-4 text-cyan-400" />,
      tagline: "Sanitation & Preprocessing",
      description:
        "Transforming raw web streams into deterministic datasets via outlier mitigation, missing value imputation, schema validation, and normalization.",
      tools: ["Pandas", "NumPy", "Regex", "Schema Validation", "ETL Pipelines"],
    },
    {
      childId: "Class 03",
      name: "Data Visualizing",
      icon: <BarChart3 className="w-4 h-4 text-violet-400" />,
      tagline: "Exploratory Analytics & Insights",
      description:
        "Translating complex multi-dimensional data into intuitive visual distributions, correlation heatmaps, feature impact plots, and actionable insights.",
      tools: ["Matplotlib", "Seaborn", "Plotly", "EDA Dashboards", "Statistical Plots"],
    },
  ];

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Technical Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            AI Engineering & Data Science Pillars
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-400">
            Delivering end-to-end intelligent systems: from AI model engineering (ML, NLP, CV) to full-lifecycle Data Science (Data Scraping, Data Cleaning, and Data Visualizing).
          </p>
        </div>

        {/* AI Engineering Pillars (Row 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {aiPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40 group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    AI Engineering
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  {pillar.tagline}
                </p>

                <div className="space-y-2.5 mb-6">
                  {pillar.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5 group-hover:text-zinc-300 transition-colors" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 font-mono text-[11px] text-zinc-400">
                {pillar.techBadge}
              </div>
            </div>
          ))}
        </div>

        {/* Data Scientist (Parent Class) & Child Classes Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-2xl relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-zinc-800/20 blur-[100px] pointer-events-none rounded-full" />

          {/* Parent Class Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
                <GitFork className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                    Parent Discipline
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    Full Lifecycle
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Data Scientist
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-sans">
              Treating data not as a passive input, but as an active engineering pipeline through three specialized child classes:
            </p>
          </div>

          {/* Child Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dataScientistChildren.map((child, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-850 hover:border-zinc-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      ↳ Child {child.childId}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {child.icon}
                    </div>
                  </div>

                  <h4 className="text-base font-semibold text-white mb-1 group-hover:text-zinc-100 transition-colors">
                    {child.name}
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400 block mb-3">
                    {child.tagline}
                  </span>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-sans">
                    {child.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-1">
                    {child.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-850"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
