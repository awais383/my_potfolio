import React from "react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer",
    company: "Neurovise AI Solutions",
    period: "Feb 2026 — Present",
    location: "Lahore, Pakistan · Hybrid",
    current: true,
    highlights: [
      "Architect and maintain production-grade AI voice calling systems using OpenAI Realtime API, ElevenLabs, and Twilio with sub-300ms end-to-end latency.",
      "Build real-time conversational AI pipelines with WebSocket streaming, connection pooling, and multilingual English and Urdu support.",
      "Integrate MongoDB and Google Calendar API for lead management and automated meeting scheduling.",
    ],
    skills: ["OpenAI Realtime API", "ElevenLabs", "Twilio", "WebSockets", "MongoDB"],
  },
  {
    role: "Data Engineer & AI Engineer",
    company: "BioICAW Technologies",
    period: "May 2025 — Feb 2026",
    location: "Rawalpindi, Pakistan",
    current: false,
    highlights: [
      "Led end-to-end AI projects from data collection and preprocessing through deployment and production maintenance.",
      "Delivered computer vision and NLP applications with sub-50ms inference latency using FastAPI, Docker, and automated CI/CD workflows.",
      "Designed web scraping, API integration, and automated annotation frameworks for scalable data collection.",
      "Reduced inference time by 40% through quantization, CUDA acceleration, and production-focused model optimization.",
      "Implemented MLflow experiment tracking, model versioning, and automated retraining workflows.",
    ],
    skills: ["FastAPI", "Docker", "CUDA", "MLflow", "CI/CD", "Computer Vision"],
  },
  {
    role: "Data Science Fellow",
    company: "Bytewise Limited",
    period: "May 2024 — Aug 2024",
    location: "Remote",
    current: false,
    highlights: [
      "Built classification and regression models achieving more than 90% accuracy with Scikit-learn and XGBoost.",
      "Developed a customer churn prediction system with advanced feature engineering, contributing to a 25% churn reduction.",
      "Conducted comprehensive data analysis and created interactive dashboards that translated complex findings into actionable insights.",
    ],
    skills: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Data Visualization"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative border-t border-zinc-900 bg-[#060608]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-400">
            Building reliable AI products and data systems—from raw information to optimized models running in production.
          </p>
        </div>

        <div className="relative space-y-6 before:absolute before:left-5 sm:before:left-6 before:top-5 before:bottom-5 before:w-px before:bg-zinc-800">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="relative pl-14 sm:pl-16">
              <div className={`absolute left-0 top-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center bg-zinc-950 ${experience.current ? "border-emerald-700/70 text-emerald-400" : "border-zinc-800 text-zinc-400"}`}>
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                      {experience.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wide text-emerald-400 bg-emerald-950/50 border border-emerald-800/60">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-zinc-300">{experience.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-1 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" />{experience.period}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{experience.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-zinc-900">
                  {experience.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
