import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Resume from "./components/resume";

// Inside your Routes:
<Route path="/resume" element={<Resume />} />


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0F172A] overflow-x-hidden">
        <Header />

        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
