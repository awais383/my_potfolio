import React, { useState } from "react";
import { ExternalLink, Code2, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

const projectsData = [
  {
    title: "High-Throughput Web Scraping & Data Extraction Engine",
    category: "datascience",
    categoryLabel: "Data Science (Scraping • Cleaning)",
    description:
      "Enterprise-grade scraping engine built for resilient, distributed data extraction from complex JavaScript-rendered web applications. Features automated proxy rotation, headless browser management, anti-bot bypass strategies, and an automated data cleaning pipeline exporting validated datasets into SQL and JSON schemas.",
    architecture: [
      "Data Scraping: Headless automation via Playwright & Scrapy with anti-bot bypass",
      "Data Cleaning: Automated schema validation, outlier filtering & deduplication with Pandas",
      "Data Visualizing: Extraction coverage analytics, rate monitoring & validation metrics",
    ],
    skills: ["Python", "Playwright", "Scrapy", "Pandas", "Matplotlib", "PostgreSQL"],
    codeLink: "https://github.com/awais383",
    demoLink: null, // Placeholder ready for user link
    featured: true,
  },
  {
    title: "VisionGuard: Real-Time MobileNet Object Classifier",
    category: "cv",
    categoryLabel: "Computer Vision & Deep Learning",
    description:
      "A high-speed Convolutional Neural Network (CNN) image classification pipeline powered by MobileNet architecture. Trained with custom transfer learning routines to deliver sub-50ms inference times on edge hardware, wrapped in a production-ready Flask inference microservice with OpenCV preprocessing.",
    architecture: [
      "Custom transfer learning & fine-tuning with MobileNet",
      "OpenCV real-time image augmentation and normalization",
      "Flask REST API for lightweight image inference serving",
    ],
    skills: ["Python", "TensorFlow/Keras", "MobileNet", "OpenCV", "Flask"],
    codeLink: "https://github.com/awais383/MobNet",
    demoLink: null,
    featured: true,
  },
  {
    title: "GenAI Knowledge Assistant & Semantic RAG Pipeline",
    category: "nlp",
    categoryLabel: "NLP & Generative AI",
    description:
      "Context-aware generative AI system orchestrating open-weights LLMs (LLaMA 3 and Mistral) with ultra-low latency Groq LPU inference. Utilizes vector embeddings, semantic chunking, and Retrieval-Augmented Generation (RAG) to eliminate hallucinations and query domain document repositories with precision.",
    architecture: [
      "LLaMA 3 & Mistral integration via Groq LPU inference",
      "Retrieval-Augmented Generation (RAG) with vector similarity search",
      "Local quantized model execution testing with Ollama",
    ],
    skills: ["Python", "LLaMA 3", "Mistral AI", "Groq LPU", "Ollama", "RAG"],
    codeLink: "https://github.com/awais383",
    demoLink: null,
    featured: true,
  },
  {
    title: "Clinical Heart Disease Predictive ML System",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "End-to-end predictive healthcare machine learning model utilizing gradient boosted trees (XGBoost) to evaluate cardiovascular disease risk based on clinical biomarkers. Employs rigorous exploratory data analysis, outlier mitigation, feature correlation scoring, and cross-validation.",
    architecture: [
      "XGBoost gradient boosting with hyperparameter optimization",
      "Feature importance evaluation and correlation heatmaps",
      "Model serialization and evaluation via Scikit-learn metrics",
    ],
    skills: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "NumPy"],
    codeLink: "https://github.com/awais383/heart_Disease_XGboost",
    demoLink: null,
    featured: false,
  },
  {
    title: "TweetHub: Scalable Social Micro-Platform",
    category: "backend",
    categoryLabel: "Python & Web Engineering",
    description:
      "Full-stack web application built on Django implementing RESTful endpoints, robust session management, user authentication, and relational persistence. Styled with modern utility-first CSS for responsive cross-device performance.",
    architecture: [
      "Django MVC architecture with modular apps",
      "Relational schema modeling and CRUD operations",
      "Responsive, clean UI styling with Tailwind CSS",
    ],
    skills: ["Python", "Django", "SQLite/PostgreSQL", "Tailwind CSS"],
    codeLink: "https://github.com/awais383/TweetHub",
    demoLink: null,
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "datascience", label: "Data Science (Scraping • Cleaning • Viz)" },
    { id: "cv", label: "Computer Vision" },
    { id: "nlp", label: "NLP & GenAI" },
    { id: "ml", label: "Machine Learning" },
    { id: "backend", label: "Python Web" },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Engineering Projects
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-400">
            A selection of production-grade implementations spanning intelligent computer vision, high-speed LLM orchestration, automated scraping engines, and predictive modeling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === cat.id
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50 group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="mb-6 space-y-1.5 bg-zinc-900/40 p-3 rounded-xl border border-zinc-900">
                  <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                    Key Architecture:
                  </span>
                  {project.architecture.map((item, aIdx) => (
                    <div key={aIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-zinc-500 font-mono">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-lg transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Source</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>

                {project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-black bg-white hover:bg-zinc-200 px-4 py-2 rounded-lg transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-400 italic">
                    Live Demo Ready on Request
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* User Link placeholder prompt / note */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-850 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-white mb-1">
              Have specific data scraping targets or AI models in mind?
            </h4>
            <p className="text-xs text-zinc-400">
              I build custom extraction pipelines and bespoke ML architectures tailored to unique data sources.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors shrink-0"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
