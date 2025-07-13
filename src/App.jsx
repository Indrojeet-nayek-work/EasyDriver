import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FleetCarousel from "./components/FleetCarousel";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FindUs from "./components/FindUs";
import SEOWrapper from "./components/SEOWrapper";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <SEOWrapper>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <FleetCarousel />
            <HowItWorks />
            <Contact />
            <Testimonials />
            <FindUs />
          </main>
        </div>
      </div>
    </SEOWrapper>
  );
}

export default App;
