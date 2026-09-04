import React, { useState } from "react";
import { Mail, Phone, Send, Copy, Check, MessageSquare } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "AI & Machine Learning",
    message: "",
  });

  const email = "awaishanif0007@gmail.com";
  const phone = "+92 325 0793007";
  const linkedin = "https://www.linkedin.com/in/awais-hanif-415381288";
  const github = "https://github.com/awais383";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Awais,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let's Build Something Exceptional
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-zinc-400">
            Have a machine learning problem, complex web scraping requirement, or computer vision challenge? Reach out directly or send an inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-850 hover:border-zinc-700 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block">Direct Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-medium text-white hover:text-zinc-300 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(email, "email")}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-850 hover:border-zinc-700 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block">Direct Phone / WhatsApp</span>
                  <a
                    href={`tel:${phone}`}
                    className="text-sm font-medium text-white hover:text-zinc-300 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(phone, "phone")}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
                title="Copy Phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social profiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 hover:border-zinc-700 transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-300 group-hover:text-white">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block">LinkedIn</span>
                  <span className="text-xs font-medium text-white group-hover:underline">
                    Awais Hanif
                  </span>
                </div>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 hover:border-zinc-700 transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-300 group-hover:text-white">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block">GitHub</span>
                  <span className="text-xs font-medium text-white group-hover:underline">
                    @awais383
                  </span>
                </div>
              </a>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 text-xs text-zinc-400 flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
              <span>
                Based in Pakistan, collaborating with clients and technical teams worldwide across multiple time zones.
              </span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-zinc-850 shadow-2xl">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-zinc-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the project details below to automatically trigger a pre-formatted inquiry email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Project Focus Area
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  >
                    <option value="AI & Machine Learning">AI & Machine Learning Modeling</option>
                    <option value="Data Science (Scraping, Cleaning, Visualizing)">Data Science (Scraping, Cleaning, Visualizing)</option>
                    <option value="NLP, RAG & LLM Application">NLP, RAG & LLM Application</option>
                    <option value="Computer Vision System">Computer Vision / Object Detection</option>
                    <option value="Python Backend Engineering">Python / Django Backend API</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Project Overview / Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your target requirements, dataset, or problem statement..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>

                {formSubmitted && (
                  <p className="text-xs text-emerald-400 mt-2 font-mono">
                    Draft prepared! If your email client didn't open automatically, please reach out directly at {email}.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
