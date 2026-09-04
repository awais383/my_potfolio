import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-zinc-900 bg-black text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Monogram / Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-semibold text-white tracking-wide">
            Awais Hanif
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="font-mono text-zinc-500">
            AI Engineer (ML, NLP, CV) & Data Scientist
          </span>
        </div>

        {/* Center/Right: Social & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/awais383"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/awais-hanif-415381288"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:awaishanif0007@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+923250793007"
              className="hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-mono text-[11px] hidden sm:inline">Top</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-zinc-950 text-center sm:text-left text-[11px] text-zinc-600 font-mono flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Awais Hanif. All rights reserved.</p>
        <p>Built with React & Tailwind CSS • Optimized for performance</p>
      </div>
    </footer>
  );
}
