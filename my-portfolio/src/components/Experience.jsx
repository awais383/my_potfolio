import React from "react";
import { Database, Cpu, CheckCircle, ShieldCheck, GitBranch, Gauge } from "lucide-react";

export default function Experience() {
  const steps = [
    {
      step: "01",
      icon: <Database className="w-5 h-5 text-zinc-300" />,
      title: "Data Scraping & Ingestion",
      tagline: "Data Scientist • Step 1",
      description:
        "Building resilient scraping crawlers that systematically extract, parse, and ingest millions of unstructured web records from dynamic, anti-bot protected endpoints.",
    },
    {
      step: "02",
      icon: <Gauge className="w-5 h-5 text-zinc-300" />,
      title: "Data Cleaning & Visualizing",
      tagline: "Data Scientist • Step 2",
      description:
        "Sanitizing raw datasets through outlier mitigation and schema validation, then performing exploratory data analysis (EDA) and distribution plotting to identify critical signals.",
    },
    {
      step: "03",
      icon: <Cpu className="w-5 h-5 text-zinc-300" />,
      title: "AI & ML Architecture",
      tagline: "AI Engineering • Step 3",
      description:
        "Training gradient boosted trees, specialized CNN vision backbones, or RAG-augmented LLMs with rigorous hyperparameter tuning and stratified cross-validation.",
    },
    {
      step: "04",
      icon: <ShieldCheck className="w-5 h-5 text-zinc-300" />,
      title: "Production Serving & Automation",
      tagline: "Deployment • Step 4",
      description:
        "Containerizing systems with Docker, deploying low-latency FastAPI/Flask microservices, and scheduling automated extraction and retraining pipelines.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative border-t border-zinc-900 bg-[#060608]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            How I Build Production Systems
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-400">
            A disciplined, production-first approach ensuring AI models and data extraction pipelines operate reliably under real-world conditions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-850 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-500 font-bold">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-500 block mb-2">
                  {item.tagline}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
