import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Experience from "./components/Experience";
import ContactSection from "./components/ContactSection";
import Footer from "./components/footer";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-zinc-800 selection:text-white relative">
      {/* Global animated constellation background */}
      <ParticleBackground />

      {/* Sticky Header */}
      <Header />

      {/* Main Single-Page Content */}
      <main className="relative z-10">
        <Hero />
        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;