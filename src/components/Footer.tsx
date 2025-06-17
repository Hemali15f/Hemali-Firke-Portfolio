import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-screen mx-auto bg-gray-900 dark:bg-gray-950 text-white py-8 relative">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
        
        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-4 text-sm">
          <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
          <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">Experience</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skills</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 w-full text-center">
          <p className="text-gray-400 text-sm">© 2025 Hemali Firke.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
