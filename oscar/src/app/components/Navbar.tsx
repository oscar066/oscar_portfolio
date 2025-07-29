export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Oscar Karuga</h1>
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#articles"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Articles
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
