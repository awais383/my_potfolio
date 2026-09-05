import React from "react";
import { ArrowRight, Terminal, Download, Sparkles, Database, Eye, Cpu, BrainCircuit } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 sm:pt-44 pb-20 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden"
    >

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 items-center mb-16">
          <div className="flex flex-col items-center lg:items-start lg:text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-8 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for AI Engineering & Data Science Projects</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.2] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
          AI Engineering & Data Science
        </h1>

        {/* Subtitle / Positioning statement */}
        <p className="hidden">
          I build intelligent, production-ready systems using <span className="text-zinc-200 font-medium">Machine Learning</span>, 
          <span className="text-zinc-200 font-medium"> NLP</span>, and 
          <span className="text-zinc-200 font-medium"> Computer Vision</span> models, while driving complete data pipelines — from high-throughput 
          <span className="text-zinc-200 font-medium"> Data Scraping</span> and rigorous 
          <span className="text-zinc-200 font-medium"> Data Cleaning</span>, to insightful 
          <span className="text-zinc-200 font-medium"> Data Visualization</span>.
        </p>
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-10">
          I build <span className="text-white font-medium">end-to-end AI engineering solutions</span> — from collecting and transforming raw data to training, deploying, and scaling intelligent models in production. Have an ambitious idea? Let&apos;s turn it into an AI product people can rely on.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
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
            href={`${import.meta.env.BASE_URL}AwaisHanifAI.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-medium text-sm border border-zinc-800/70 transition-all"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Curriculum Vitae</span>
          </a>
        </div>
          </div>

          {/* Code Profile Card */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 text-left rounded-2xl bg-[#0c0c0f]/95 border border-zinc-800 shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-800 bg-zinc-900/60">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-[11px] sm:text-xs font-mono text-zinc-500">~/portfolio/profile.js</span>
            </div>
            <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm leading-7 overflow-x-auto">
              <p><span className="text-fuchsia-400">const</span> <span className="text-sky-400">engineer</span> <span className="text-zinc-500">=</span> <span className="text-zinc-300">{'{'}</span></p>
              <p className="pl-5"><span className="text-sky-400">name</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Awais Hanif&quot;</span><span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-400">role</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;AI Engineer&quot;</span><span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-400">expertise</span><span className="text-zinc-500">:</span> <span className="text-zinc-300">[</span><span className="text-emerald-400">&quot;GenAI&quot;</span><span className="text-zinc-500">,</span> <span className="text-emerald-400">&quot;CV&quot;</span><span className="text-zinc-500">,</span> <span className="text-emerald-400">&quot;NLP&quot;</span><span className="text-zinc-300">]</span><span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-400">stack</span><span className="text-zinc-500">:</span> <span className="text-zinc-300">[</span><span className="text-emerald-400">&quot;Python&quot;</span><span className="text-zinc-500">,</span> <span className="text-emerald-400">&quot;FastAPI&quot;</span><span className="text-zinc-500">,</span> <span className="text-emerald-400">&quot;PyTorch&quot;</span><span className="text-zinc-300">]</span><span className="text-zinc-500">,</span></p>
              <p className="pl-5"><span className="text-sky-400">focus</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Production AI Systems&quot;</span><span className="text-zinc-500">,</span></p>
              <p className="text-zinc-300">{'}'}<span className="text-zinc-500">;</span></p>
              <p className="mt-5 whitespace-nowrap"><span className="text-fuchsia-400">await</span> <span className="text-sky-400">engineer</span><span className="text-zinc-500">.</span><span className="text-amber-300">build</span><span className="text-zinc-300">(</span><span className="text-emerald-400">&quot;your next AI product&quot;</span><span className="text-zinc-300">)</span><span className="text-zinc-500">;</span></p>
            </div>
          </div>
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
