import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Hemali Lalit Firke
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105 transform"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Social Links & CTA */}
          <div className=" hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com/Hemali15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400  hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/firke-hemali-159588257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="/hemali_resume.pdf" download>
              <button className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 transform hover:shadow-lg  flex items-center gap-2">
                <Download className="h-4 w-4" />
                Resume
              </button>
            </a>


          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://github.com/Hemali15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hemali-firke-159588257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}