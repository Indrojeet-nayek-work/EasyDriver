import React from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

const Hero = () => {
  const handleScrollTo = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-warm">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-primary-800 leading-tight">
                Premium Car
                <span className="block font-semibold text-gradient">
                  Rental Experience
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-neutral-medium-grey leading-relaxed max-w-2xl">
                Discover exceptional vehicles and personalized service. Your
                journey begins with our carefully curated fleet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScrollTo("#contact")}
                className="btn-primary inline-flex items-center gap-3 group"
              >
                Reserve Now
                <FiArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => handleScrollTo("#fleet")}
                className="btn-secondary inline-flex items-center gap-3"
              >
                View Collection
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary-700 mb-2">
                  500+
                </div>
                <div className="text-sm text-neutral-medium-grey uppercase tracking-wide">
                  Satisfied Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary-700 mb-2">
                  4.9
                </div>
                <div className="text-sm text-neutral-medium-grey uppercase tracking-wide">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary-700 mb-2">
                  24/7
                </div>
                <div className="text-sm text-neutral-medium-grey uppercase tracking-wide">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-warm">
              <img
                src="https://images.unsplash.com/photo-1549399973-88d6b4d5d34d?w=800&h=600&fit=crop&auto=format&q=80"
                alt="Premium car rental vehicle"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating feature card */}
            <div className="absolute -bottom-8 -left-8 bg-neutral-warm-white rounded-2xl shadow-warm p-6 border border-neutral-muted-grey/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FiPhone size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-primary-800">
                    Instant Support
                  </div>
                  <div className="text-sm text-neutral-medium-grey">
                    24/7 assistance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
