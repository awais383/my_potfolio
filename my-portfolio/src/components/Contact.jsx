"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import python from "../assets/python.png"
import django from "../assets/django.png"
import tailwind from "../assets/tailwind.png"
import mistral from "../assets/mistral.webp"
import ollama from "../assets/ollama.png"
import openai from "../assets/openai.png"
import groq from "../assets/groq.png"
import vscode from "../assets/vscode.webp"
import github from "../assets/github.png"
import vercel from "../assets/vercelnew.png"
import tensorflow from "../assets/tensorflow.png"
import pytorch from "../assets/pytorch.png"

const techs = [
  { name: "Python", icon: python, description: "A powerful programming language used for web development, data science, AI, and more." },
  { name: "Django", icon: django, description: "A high-level Python web framework that promotes rapid development." },
  { name: "Tailwind CSS", icon: tailwind, description: "A utility-first CSS framework for fast and responsive designs." },
  { name: "Mistral AI", icon: mistral, description: "Open-weight LLMs known for high performance and efficiency." },
  { name: "Ollama", icon: ollama, description: "Local LLM runtime that lets you run models like LLaMA and Mistral easily on your machine." },
  { name: "OpenAI", icon: openai, description: "Makers of ChatGPT and powerful AI models like GPT-4 and DALL·E." },
  { name: "Groq", icon: groq, description: "Ultra-fast LPU inference for AI applications and LLMs." },
  { name: "VS Code", icon: vscode, description: "A lightweight, powerful code editor used by developers everywhere." },
  { name: "GitHub", icon: github, description: "The world's largest platform for code hosting and version control." },
  { name: "Vercel", icon: vercel, description: "The fastest way to deploy modern frontends and fullstack apps." },
  { name: "TensorFlow", icon: tensorflow, description: "Google’s open-source ML framework for building and training models." },
  { name: "PyTorch", icon: pytorch, description: "An open-source ML framework developed by Facebook, popular for research." },
]

export default function Tech() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTech = techs[activeIndex]

  const handlePrev = () => setActiveIndex(prev => prev === 0 ? techs.length - 1 : prev - 1)
  const handleNext = () => setActiveIndex(prev => prev === techs.length - 1 ? 0 : prev + 1)

  return (
    <section className="pt-36 pb-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl sm:text-4xl text-[#FF6B00] font-bold font-serif text-center mb-6">
        Tech Stack
      </h2>
      <p className="text-center text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
        Just like any other dev, I also spend more time searching and experimenting tools than actually coding some senseful things.
      </p>

      {/* Description container */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg max-w-md sm:max-w-2xl mx-auto mb-16 flex items-center justify-between gap-3 sm:gap-4">
        <button onClick={handlePrev} aria-label="Previous Tech">
          <ChevronLeft size={28} className="text-teal-400 hover:scale-110 transition-transform" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTech.name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="flex-1 text-center"
          >
            <img
              src={activeTech.icon}
              alt={activeTech.name}
              className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 object-contain"
            />
            <h3 className="text-base sm:text-lg font-semibold mb-1 font-serif">{activeTech.name}</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans">{activeTech.description}</p>
          </motion.div>
        </AnimatePresence>

        <button onClick={handleNext} aria-label="Next Tech">
          <ChevronRight size={28} className="text-teal-400 hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Responsive Grid of Tech Icons */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] bg-gray-700 rounded-lg shadow-md flex items-center justify-center transition-transform"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
