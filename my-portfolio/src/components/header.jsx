import React, { useState, useEffect } from "react";
import { FileText, Menu, X, ArrowUpRight, Terminal } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 pt-4 pb-2">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-5 py-3.5 flex items-center justify-between border ${
          scrolled
            ? "bg-[#0a0a0c]/85 backdrop-blur-md border-white/10 shadow-2xl shadow-black/50"
            : "bg-[#0d0d0f]/60 backdrop-blur-sm border-white/5"
        }`}
      >
        {/* Brand / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-white font-medium tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/70 flex items-center justify-center text-xs font-mono text-zinc-200 group-hover:border-zinc-400 group-hover:text-white transition-all">
            <Terminal className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-wide text-zinc-100 group-hover:text-white transition-colors">
              Awais Hanif
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
              AI Engineer & Data Scientist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full opacity-70" />
            </a>
          ))}
        </nav>

        {/* Actions (Resume & CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}AwaisHanifAIML.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-medium bg-white text-black hover:bg-zinc-200 font-medium transition-all shadow-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={`${import.meta.env.BASE_URL}AwaisHanifAIML.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs flex items-center"
            title="Download CV"
          >
            <FileText className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0a0a0d] border border-zinc-800/80 shadow-2xl backdrop-blur-lg flex flex-col gap-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}