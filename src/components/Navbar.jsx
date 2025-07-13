import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Collection", href: "#fleet" },
    { name: "Process", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
    { name: "Reviews", href: "#testimonials" },
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
          ? "bg-neutral-warm-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-gentle border-b border-neutral-muted-grey/20 dark:border-dark-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => handleLinkClick("#home")}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-800 dark:text-dark-primary-text hover:text-primary-700 dark:hover:text-dark-accent transition-colors"
            >
              EasyDrive
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.href)}
                className="text-neutral-charcoal dark:text-dark-primary-text hover:text-primary-700 dark:hover:text-dark-accent font-medium transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-neutral-soft-grey dark:bg-neutral-medium-grey hover:bg-neutral-muted-grey dark:hover:bg-neutral-warm-grey text-neutral-charcoal dark:text-neutral-beige transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 sm:p-2.5 rounded-lg bg-neutral-soft-grey dark:bg-neutral-medium-grey hover:bg-neutral-muted-grey dark:hover:bg-neutral-warm-grey text-neutral-charcoal dark:text-neutral-beige transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 sm:p-3 rounded-lg bg-neutral-soft-grey dark:bg-neutral-medium-grey hover:bg-neutral-muted-grey dark:hover:bg-neutral-warm-grey text-neutral-charcoal dark:text-neutral-beige transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden absolute top-full left-0 right-0 z-40 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 mx-4 space-y-1 bg-dark-bg dark:bg-dark-bg rounded-2xl shadow-soft border border-dark-card-border dark:border-dark-card-border">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.href)}
                className="block w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-dark-primary-text dark:text-dark-primary-text hover:bg-dark-card-border-alt dark:hover:bg-dark-card-border-alt hover:text-dark-accent dark:hover:text-dark-accent font-medium transition-colors first:rounded-t-2xl last:rounded-b-2xl"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
