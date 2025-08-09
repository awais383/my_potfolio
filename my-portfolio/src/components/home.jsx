import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const handleViewCV = () => {
    window.open("/cv.pdf", "_blank");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    whileHover: { scale: 1.03 },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-900 px-4 sm:px-6 pt-28 sm:pt-28 md:pt-32 pb-10 flex items-center justify-center">
        {/* Match the "What I Do" card width on all devices */}
        <div className="w-full max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg sm:text-xl text-[#FF6B00] mb-3 tracking-widest uppercase font-mono">
                Hello, I'm
              </h2>
              <h1 className="text-4xl font-extrabold text-white mb-6 font-serif">
                Muhammad Awais
              </h1>
              <p className="text-gray-300 mb-8 text-base leading-relaxed font-sans">
                I'm a Computer Science student passionate about AI, Web
                Development, and building intelligent applications. My
                expertise includes developing full-stack web apps with React
                and Django, crafting engaging user interfaces, and training
                machine learning and deep learning models for real-world
                solutions. I actively explore cutting-edge technologies like
                LLaMA 3, Mistral AI, and Groq for generative applications. I’m
                also experienced in working with Computer Vision, NLP, and model
                deployment using tools like Streamlit and Flask.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section className="bg-gray-900 pt-0 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12 font-serif">
            What I Do
          </h2>

          <div className="flex flex-col items-center gap-10">
            {/* Web Development Card */}
            <motion.div
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden w-full max-w-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              viewport={{ once: true }}
            >
              <div className="h-56 sm:h-64 w-full overflow-hidden">
                <img
                  src="/web.webp"
                  alt="Web Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#FF6B00] mb-3 font-serif">
                  Web Development
                </h3>
                <p className="text-gray-300 mb-3 font-sans">
                  I build modern, responsive web apps using:
                </p>
                <ul className="text-gray-400 space-y-2 font-sans">
                  <li className="flex items-start">
                    <span className="mr-2">•</span> HTML, CSS, JavaScript
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> React.js
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> Django (Python)
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Generative AI Card */}
            <motion.div
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden w-full max-w-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              viewport={{ once: true }}
            >
              <div className="h-56 sm:h-64 w-full overflow-hidden">
                <img
                  src="/genai.png"
                  alt="Generative AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#FF6B00] mb-3 font-serif">
                  Generative AI
                </h3>
                <p className="text-gray-300 mb-3 font-sans">
                  I'm exploring and building with cutting-edge LLMs:
                </p>
                <ul className="text-gray-400 space-y-2 font-sans">
                  <li className="flex items-start">
                    <span className="mr-2">•</span> LLaMA 3
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> Mistral AI
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> Groq (Fast LLM inference)
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
