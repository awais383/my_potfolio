"use client"

import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  }

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons Centered */}
        <div className="flex justify-center items-center gap-10">
          <motion.a
            custom={0}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            href="mailto:awaishanif0007@gmail.com"
            aria-label="Email"
            className="hover:text-[#FF8B13] transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>

          <motion.a
            custom={1}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            href="tel:+923250793007"
            aria-label="Phone"
            className="hover:text-[#FF8B13] transition-colors"
          >
            <Phone className="w-6 h-6" />
          </motion.a>

          <motion.a
            custom={2}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            href="https://www.linkedin.com/in/awais-hanif-415381288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#FF8B13] transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            custom={3}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            href="https://github.com/awais383"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#FF8B13] transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
