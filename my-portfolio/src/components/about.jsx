export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Portfolio</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className="text-white hover:text-[#FF6B00] transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/MUHAMMAD AWAIS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B00] transition duration-300"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
