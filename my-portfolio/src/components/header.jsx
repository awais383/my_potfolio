import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-fit px-4 py-3 rounded-xl shadow-lg backdrop-blur-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70">
      <nav className="flex items-center gap-6 px-3 py-2 text-gray-800 dark:text-gray-200">
        <Link to="/" className="hover:text-gray-600 font-medium">Home</Link>

        {/* About -> Resume in new tab */}
        <a
          href="/MUHAMMAD_AWAIS.pdfx" // disguised PDF file in public folder
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 font-medium"
        >
          Resume
        </a>

        <Link to="/projects" className="hover:text-gray-600 font-medium">Projects</Link>
        <Link to="/contact" className="hover:text-gray-600 font-medium">Tech</Link>
      </nav>
    </header>
  );
}
