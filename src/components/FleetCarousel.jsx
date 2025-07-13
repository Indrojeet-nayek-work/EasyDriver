import React, { useState, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiWind,
  FiSettings,
} from "react-icons/fi";

const FleetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const vehicles = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Comfortable Sedan",
      seats: 5,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1549399973-88d6b4d5d34d?w=600&h=400&fit=crop&auto=format&q=80",
      features: ["Automatic Transmission", "GPS Navigation", "Bluetooth Audio"],
      price: "From $45/day",
      transmission: "Automatic",
    },
    {
      id: 2,
      name: "Honda CR-V",
      type: "Spacious SUV",
      seats: 7,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&h=400&fit=crop&auto=format&q=80",
      features: ["All-Wheel Drive", "Family Friendly", "Safety Features"],
      price: "From $65/day",
      transmission: "Automatic",
    },
    {
      id: 3,
      name: "Nissan Altima",
      type: "Efficient Sedan",
      seats: 5,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop&auto=format&q=80",
      features: ["Fuel Efficient", "Modern Interior", "Great Value"],
      price: "From $40/day",
      transmission: "Automatic",
    },
    {
      id: 4,
      name: "Jeep Grand Cherokee",
      type: "Adventure SUV",
      seats: 7,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&auto=format&q=80",
      features: ["4WD Capable", "Comfortable Seating", "Reliable Performance"],
      price: "From $75/day",
      transmission: "Automatic",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vehicles.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="fleet"
      className="section-padding bg-neutral-cream dark:bg-neutral-charcoal"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary-800 dark:text-primary-200">
            Affordable
            <span className="font-semibold"> Collection</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-medium-grey dark:text-neutral-warm-grey max-w-3xl mx-auto leading-relaxed">
            Discover our carefully selected vehicles, each maintained to high
            standards for your comfort and safety at competitive rates.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel container */}
          <div
            className="overflow-hidden rounded-2xl sm:rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="w-full flex-shrink-0">
                  <div className="card-premium dark:bg-neutral-deep-brown dark:border-neutral-medium-grey/30">
                    <div className="relative mb-6 sm:mb-8">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} - ${vehicle.type} rental`}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl"
                        loading="lazy"
                      />
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-warm-white/95 dark:bg-neutral-charcoal/95 backdrop-blur-sm rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-primary-700 dark:text-primary-400 border border-neutral-muted-grey/30 dark:border-neutral-medium-grey/30">
                          Climate Control
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
                        <div className="space-y-1 sm:space-y-2">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-800 dark:text-primary-200">
                            {vehicle.name}
                          </h3>
                          <p className="text-base sm:text-lg text-neutral-medium-grey dark:text-neutral-warm-grey">
                            {vehicle.type}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-xl sm:text-2xl font-semibold text-primary-700 dark:text-primary-400">
                            {vehicle.price}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2 text-neutral-medium-grey dark:text-neutral-warm-grey">
                          <FiUsers size={16} />
                          <span className="text-sm">
                            {vehicle.seats} passengers
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-medium-grey dark:text-neutral-warm-grey">
                          <FiSettings size={16} />
                          <span className="text-sm">
                            {vehicle.transmission}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-medium-grey dark:text-neutral-warm-grey">
                          <FiWind size={16} />
                          <span className="text-sm">Climate Control</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary-800 dark:text-primary-200">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                          {vehicle.features.map((feature, index) => (
                            <div
                              key={index}
                              className="px-3 sm:px-4 py-2 bg-neutral-beige dark:bg-neutral-medium-grey/30 rounded-lg sm:rounded-xl text-sm text-neutral-charcoal dark:text-neutral-beige border border-neutral-muted-grey/30 dark:border-neutral-medium-grey/30"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="btn-primary w-full">
                        Book Vehicle
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-neutral-warm-white/95 dark:bg-neutral-charcoal/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-300 border border-neutral-muted-grey/30 dark:border-neutral-medium-grey/30 z-10"
            aria-label="Previous vehicle"
          >
            <FiChevronLeft
              size={20}
              className="text-primary-700 dark:text-primary-400"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-neutral-warm-white/95 dark:bg-neutral-charcoal/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-300 border border-neutral-muted-grey/30 dark:border-neutral-medium-grey/30 z-10"
            aria-label="Next vehicle"
          >
            <FiChevronRight
              size={20}
              className="text-primary-700 dark:text-primary-400"
            />
          </button>

          {/* Elegant dot indicators */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 sm:w-8 bg-primary-600 dark:bg-primary-400"
                    : "w-2 bg-neutral-warm-grey dark:bg-neutral-medium-grey hover:bg-primary-400 dark:hover:bg-primary-500"
                }`}
                aria-label={`Go to vehicle ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetCarousel;
