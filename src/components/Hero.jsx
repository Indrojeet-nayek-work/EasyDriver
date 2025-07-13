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
      {/* Fun colorful background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-fun-blue via-fun-green to-fun-yellow">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Floating fun elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-fun-pink rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-fun-yellow rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-white rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-fun-green rounded-full opacity-30 animate-pulse"></div>

        {/* Car pattern overlay */}
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
                <text
                  x="50"
                  y="50"
                  fontSize="30"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  opacity="0.3"
                >
                  🚗
                </text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#car-pattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-6xl animate-bounce inline-block">🚗</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          EasyDrive – Your Fun{" "}
          <span className="text-primary-700 bg-fun-yellow px-4 py-2 rounded-2xl inline-block transform rotate-2 shadow-lg">
            Car Rental
          </span>{" "}
          Adventure!
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
          Rent with ease via call or WhatsApp! 🎉 Premium wheels for every
          journey, every adventure! ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => handleScrollTo("#contact")}
            className="btn-fun-green flex items-center gap-2 text-lg px-8 py-4 animate-pulse"
          >
            <FiPhone size={20} />
            Rent Now! 🚗
          </button>

          <button
            onClick={() => handleScrollTo("#fleet")}
            className="btn-fun-blue flex items-center gap-2 text-lg px-8 py-4"
          >
            <span className="text-2xl">👀</span>
            See Cool Cars
          </button>
        </div>

        {/* Fun Features with emojis */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-fun-pink/80 backdrop-blur-sm rounded-3xl p-6 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Premium Fleet
            </h3>
            <p className="text-gray-700">
              Shiny, well-maintained rides for every vibe!
            </p>
          </div>

          <div className="bg-fun-yellow/80 backdrop-blur-sm rounded-3xl p-6 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Super Easy Rental
            </h3>
            <p className="text-gray-700">
              Quick rental via call or WhatsApp - no hassle!
            </p>
          </div>

          <div className="bg-fun-green/80 backdrop-blur-sm rounded-3xl p-6 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Awesome Service
            </h3>
            <p className="text-gray-700">
              Fun, friendly, and customer-focused experience!
            </p>
          </div>
        </div>
      </div>

      {/* Fun scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleScrollTo("#fleet")}
          className="text-gray-800 hover:text-gray-600 transition-colors bg-white/70 rounded-full p-3 shadow-lg"
          aria-label="Scroll to fleet section"
        >
          <span className="text-2xl">👇</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
