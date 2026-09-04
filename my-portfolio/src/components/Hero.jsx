import React from "react";
import { ArrowRight, Terminal, Download, Sparkles, Database, Eye, Cpu, BrainCircuit } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 sm:pt-44 pb-20 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zinc-800/15 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-emerald-950/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-8 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for AI Engineering & Data Science Projects</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Architecting Intelligent AI & <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Full-Lifecycle Data Science
          </span>
        </h1>

        {/* Subtitle / Positioning statement */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-10">
          I am <span className="text-white font-medium">Awais Hanif</span>, an AI Engineer & Data Scientist. 
          I engineer robust <span className="text-zinc-200 font-medium">Machine Learning</span>, 
          <span className="text-zinc-200 font-medium"> NLP</span>, and 
          <span className="text-zinc-200 font-medium"> Computer Vision</span> models, while driving complete data pipelines — from high-throughput 
          <span className="text-zinc-200 font-medium"> Data Scraping</span> and rigorous 
          <span className="text-zinc-200 font-medium"> Data Cleaning</span>, to insightful 
          <span className="text-zinc-200 font-medium"> Data Visualization</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg hover:gap-3"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <span>Get in Touch</span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}AwaisHanifAIML.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-medium text-sm border border-zinc-800/70 transition-all"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Curriculum Vitae</span>
          </a>
        </div>

        {/* Quick Tech Highlights Banner */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2.5 text-zinc-300 text-xs font-mono mb-1.5">
              <BrainCircuit className="w-4 h-4 text-zinc-400" />
              <span>Machine Learning</span>
            </div>
            <p className="text-xs text-zinc-400 font-sans">
              Predictive modeling, XGBoost, Scikit-learn, tuning & production evaluation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2.5 text-zinc-300 text-xs font-mono mb-1.5">
              <Sparkles className="w-4 h-4 text-zinc-400" />
              <span>NLP & CV</span>
            </div>
            <p className="text-xs text-zinc-400 font-sans">
              LLMs (LLaMA 3, Mistral, Groq), RAG pipelines, CNNs, MobileNet & OpenCV.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2.5 text-zinc-300 text-xs font-mono mb-1.5">
              <Database className="w-4 h-4 text-zinc-400" />
              <span>Data Scraping</span>
            </div>
            <p className="text-xs text-zinc-400 font-sans">
              High-concurrency crawlers, Playwright, Scrapy, anti-bot bypass & dynamic SPAs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2.5 text-zinc-300 text-xs font-mono mb-1.5">
              <Eye className="w-4 h-4 text-zinc-400" />
              <span>Cleaning & Viz</span>
            </div>
            <p className="text-xs text-zinc-400 font-sans">
              ETL pipelines, schema validation, outlier imputation, and analytics dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
