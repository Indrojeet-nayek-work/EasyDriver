import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home", emoji: "🏠" },
    { name: "Fleet", href: "#fleet", emoji: "🚗" },
    { name: "How It Works", href: "#how-it-works", emoji: "⚡" },
    { name: "Contact", href: "#contact", emoji: "📞" },
    { name: "Testimonials", href: "#testimonials", emoji: "⭐" },
    { name: "Find Us", href: "#find-us", emoji: "📍" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-b-4 border-fun-yellow/50"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Fun Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleLinkClick("#home")}
              className={`text-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                scrolled
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-800 bg-white/80 px-4 py-2 rounded-full shadow-lg"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="text-3xl animate-bounce">🚗</span>
                EasyDrive
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.href)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-fun-blue/20 hover:text-primary-600 dark:hover:text-primary-400"
                    : "text-gray-800 bg-white/80 hover:bg-fun-blue/80 shadow-lg hover:shadow-xl"
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}

            {/* Fun Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                scrolled
                  ? "bg-fun-yellow/80 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-fun-yellow dark:hover:bg-gray-700"
                  : "bg-white/90 text-gray-600 hover:bg-fun-yellow/80 shadow-lg hover:shadow-xl"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                scrolled
                  ? "bg-fun-yellow/80 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-fun-yellow dark:hover:bg-gray-700"
                  : "bg-white/90 text-gray-600 hover:bg-fun-yellow/80 shadow-lg"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                scrolled
                  ? "bg-fun-pink/80 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-fun-pink dark:hover:bg-gray-700"
                  : "bg-white/90 text-gray-600 hover:bg-fun-pink/80 shadow-lg hover:shadow-xl"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Fun Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-gradient-to-br from-fun-blue/90 to-fun-green/90 backdrop-blur-md rounded-3xl shadow-2xl mt-2 border-4 border-white">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.href)}
                className="flex items-center gap-3 w-full text-left px-6 py-4 text-gray-800 hover:bg-white/50 font-bold transition-all duration-300 transform hover:scale-105 rounded-2xl mx-2"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
