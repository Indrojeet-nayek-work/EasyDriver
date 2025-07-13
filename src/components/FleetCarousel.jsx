import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiUsers, FiWind } from "react-icons/fi";

const FleetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const vehicles = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Sedan",
      seats: 5,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1549399973-88d6b4d5d34d?w=600&h=400&fit=crop",
      features: ["Automatic", "GPS Navigation", "Bluetooth"],
      price: "$45/day",
    },
    {
      id: 2,
      name: "Honda CR-V",
      type: "SUV",
      seats: 7,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&h=400&fit=crop",
      features: ["All-Wheel Drive", "4x4", "Spacious"],
      price: "$65/day",
    },
    {
      id: 3,
      name: "Ford Focus",
      type: "Compact",
      seats: 4,
      ac: false,
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      features: ["Fuel Efficient", "Manual", "City Friendly"],
      price: "$30/day",
    },
    {
      id: 4,
      name: "BMW X5",
      type: "Luxury SUV",
      seats: 7,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
      features: ["Luxury Interior", "Premium Sound", "Leather Seats"],
      price: "$95/day",
    },
    {
      id: 5,
      name: "Toyota Hiace",
      type: "Van",
      seats: 12,
      ac: true,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      features: ["Large Capacity", "Group Travel", "Comfortable"],
      price: "$80/day",
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="fleet" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our diverse collection of well-maintained vehicles for
            every occasion
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="w-full flex-shrink-0">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} - ${vehicle.type} car rental`}
                        className="w-full h-64 sm:h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            vehicle.ac
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {vehicle.ac ? "AC" : "Non-AC"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">
                            {vehicle.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {vehicle.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {vehicle.price}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                          <FiUsers size={18} />
                          <span>{vehicle.seats} seats</span>
                        </div>
                        {vehicle.ac && (
                          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                            <FiWind size={18} />
                            <span>Air Conditioning</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {vehicle.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="btn-primary w-full">
                        Book This Vehicle
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Previous vehicle"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Next vehicle"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary-600 dark:bg-primary-400"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
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
