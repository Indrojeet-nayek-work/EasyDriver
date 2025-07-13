import React from "react";
import { FiPhone, FiMessageSquare } from "react-icons/fi";

const Hero = () => {
  const handleScrollTo = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="car-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="2"
                  fill="currentColor"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#car-pattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          EasyDrive – Your Local{" "}
          <span className="text-accent-400">Car Rental Partner</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Book with ease via call or WhatsApp. Premium fleet with flexible
          options for every journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => handleScrollTo("#contact")}
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            <FiPhone size={20} />
            Book Now
          </button>

          <button
            onClick={() => handleScrollTo("#fleet")}
            className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
          >
            <FiMessageSquare size={20} />
            View Fleet
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Premium Fleet
            </h3>
            <p className="text-gray-200">
              Well-maintained vehicles for every need
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Easy Booking
            </h3>
            <p className="text-gray-200">Quick booking via call or WhatsApp</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Trusted Service
            </h3>
            <p className="text-gray-200">
              Reliable and customer-focused service
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleScrollTo("#fleet")}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to fleet section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
