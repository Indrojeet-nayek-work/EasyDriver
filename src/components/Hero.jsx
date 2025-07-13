import React from "react";
import { FiArrowRight } from "react-icons/fi";

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
      className="min-h-screen flex items-center gradient-warm dark:bg-gradient-to-br dark:from-neutral-charcoal dark:to-neutral-deep-brown"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 pt-20 sm:pt-16">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-800 dark:text-primary-200 leading-tight">
              Affordable Car
              <span className="block font-semibold text-gradient">
                Rental Experience
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-medium-grey dark:text-neutral-warm-grey leading-relaxed max-w-3xl mx-auto">
              Discover quality vehicles and personalized service at competitive
              rates. Your journey begins with our carefully selected fleet.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => handleScrollTo("#contact")}
              className="btn-primary inline-flex items-center justify-center gap-3 group"
            >
              Book Now
              <FiArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => handleScrollTo("#fleet")}
              className="btn-secondary inline-flex items-center justify-center gap-3"
            >
              View Collection
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-primary-700 dark:text-primary-400 mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm text-neutral-medium-grey dark:text-neutral-warm-grey uppercase tracking-wide">
                Satisfied Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-primary-700 dark:text-primary-400 mb-2">
                4.9
              </div>
              <div className="text-xs sm:text-sm text-neutral-medium-grey dark:text-neutral-warm-grey uppercase tracking-wide">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-primary-700 dark:text-primary-400 mb-2">
                5+
              </div>
              <div className="text-xs sm:text-sm text-neutral-medium-grey dark:text-neutral-warm-grey uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
