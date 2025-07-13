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
      name: "Mercedes-Benz E-Class",
      type: "Executive Sedan",
      seats: 5,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1549399973-88d6b4d5d34d?w=600&h=400&fit=crop&auto=format&q=80",
      features: [
        "Automatic Transmission",
        "Premium Navigation",
        "Bluetooth Audio",
      ],
      price: "From $85/day",
      transmission: "Automatic",
    },
    {
      id: 2,
      name: "BMW X5",
      type: "Luxury SUV",
      seats: 7,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&auto=format&q=80",
      features: ["All-Wheel Drive", "Premium Interior", "Advanced Safety"],
      price: "From $120/day",
      transmission: "Automatic",
    },
    {
      id: 3,
      name: "Audi A4",
      type: "Premium Sedan",
      seats: 5,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop&auto=format&q=80",
      features: ["Quattro AWD", "Virtual Cockpit", "Premium Sound"],
      price: "From $75/day",
      transmission: "Automatic",
    },
    {
      id: 4,
      name: "Range Rover Sport",
      type: "Luxury SUV",
      seats: 7,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&auto=format&q=80",
      features: ["Terrain Response", "Luxury Seating", "Premium Audio"],
      price: "From $150/day",
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
    <section id="fleet" className="section-padding bg-neutral-cream">
      <div className="container">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-light text-primary-800">
            Premium
            <span className="font-semibold"> Collection</span>
          </h2>
          <p className="text-xl text-neutral-medium-grey max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium vehicles, each
            maintained to the highest standards for your comfort and safety.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel container */}
          <div
            className="overflow-hidden rounded-3xl"
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
                  <div className="card-premium">
                    <div className="relative mb-8">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} - ${vehicle.type} rental`}
                        className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                        loading="lazy"
                      />
                      <div className="absolute top-6 right-6">
                        <span className="px-4 py-2 bg-neutral-warm-white/95 backdrop-blur-sm rounded-xl text-sm font-medium text-primary-700 border border-neutral-muted-grey/30">
                          Climate Control
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="text-2xl lg:text-3xl font-semibold text-primary-800">
                            {vehicle.name}
                          </h3>
                          <p className="text-lg text-neutral-medium-grey">
                            {vehicle.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-semibold text-primary-700">
                            {vehicle.price}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-neutral-medium-grey">
                          <FiUsers size={18} />
                          <span className="text-sm">
                            {vehicle.seats} passengers
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-medium-grey">
                          <FiSettings size={18} />
                          <span className="text-sm">
                            {vehicle.transmission}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-medium-grey">
                          <FiWind size={18} />
                          <span className="text-sm">Climate Control</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary-800">
                          Premium Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {vehicle.features.map((feature, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 bg-neutral-beige rounded-xl text-sm text-neutral-charcoal border border-neutral-muted-grey/30"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="btn-primary w-full">
                        Reserve Vehicle
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-neutral-warm-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-300 border border-neutral-muted-grey/30 z-10"
            aria-label="Previous vehicle"
          >
            <FiChevronLeft size={24} className="text-primary-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neutral-warm-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-300 border border-neutral-muted-grey/30 z-10"
            aria-label="Next vehicle"
          >
            <FiChevronRight size={24} className="text-primary-700" />
          </button>

          {/* Elegant dot indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary-600"
                    : "w-2 bg-neutral-warm-grey hover:bg-primary-400"
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
