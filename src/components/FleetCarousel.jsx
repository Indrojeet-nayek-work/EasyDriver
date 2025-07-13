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
      fun: "🌟",
      bgColor: "bg-fun-blue",
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
      fun: "🚙",
      bgColor: "bg-fun-green",
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
      fun: "⚡",
      bgColor: "bg-fun-yellow",
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
      fun: "👑",
      bgColor: "bg-fun-pink",
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
      fun: "🚐",
      bgColor: "bg-fun-green",
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
    <section
      id="fleet"
      className="section-padding bg-gradient-to-br from-fun-yellow/30 to-fun-pink/30"
    >
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🚗✨</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Amazing Car Collection!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick your perfect ride from our super cool collection of
            well-maintained vehicles! 🎉
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div
            className="overflow-hidden rounded-3xl shadow-2xl"
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
                  <div
                    className={`${vehicle.bgColor}/20 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border-4 border-white`}
                  >
                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} - ${vehicle.type} car rental`}
                        className="w-full h-64 sm:h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-4xl">{vehicle.fun}</span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                            vehicle.ac
                              ? "bg-fun-blue text-gray-800"
                              : "bg-fun-yellow text-gray-800"
                          }`}
                        >
                          {vehicle.ac ? "❄️ AC" : "🌬️ Non-AC"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 bg-white/80 backdrop-blur-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1 text-gray-800">
                            {vehicle.name}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {vehicle.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600 bg-fun-yellow px-3 py-1 rounded-full">
                            {vehicle.price}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1 text-gray-600 bg-fun-green/50 px-3 py-1 rounded-full">
                          <FiUsers size={18} />
                          <span className="font-medium">
                            {vehicle.seats} seats
                          </span>
                        </div>
                        {vehicle.ac && (
                          <div className="flex items-center gap-1 text-blue-600 bg-fun-blue/50 px-3 py-1 rounded-full">
                            <FiWind size={18} />
                            <span className="font-medium">Cool AC</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold mb-3 text-gray-800">
                          Awesome Features:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {vehicle.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-fun-pink/60 text-gray-800 rounded-full text-sm font-medium shadow-sm"
                            >
                              ✨ {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="btn-fun-green w-full text-lg font-bold">
                        🚗 Rent This Beauty!
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-xl hover:bg-white transition-colors z-10 hover:scale-110 duration-300"
            aria-label="Previous vehicle"
          >
            <FiChevronLeft size={28} className="text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-xl hover:bg-white transition-colors z-10 hover:scale-110 duration-300"
            aria-label="Next vehicle"
          >
            <FiChevronRight size={28} className="text-gray-700" />
          </button>

          {/* Fun dot indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex
                    ? "bg-primary-600 shadow-lg scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
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
