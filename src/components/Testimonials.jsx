import React, { useState, useEffect } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      rating: 5,
      review:
        "Amazing service! The rental process was super smooth and the car was in perfect condition. EasyDrive made my business trip totally stress-free! 🌟",
      location: "Business Executive",
      color: "bg-fun-pink",
      emoji: "💼",
    },
    {
      id: 2,
      name: "Michael Chen",
      initials: "MC",
      rating: 5,
      review:
        "Best car rental experience ever! WhatsApp rental is so convenient, and the team is super responsive. The car was clean and fuel-efficient! ⭐",
      location: "Travel Enthusiast",
      color: "bg-fun-blue",
      emoji: "✈️",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      initials: "ER",
      rating: 5,
      review:
        "Professional and reliable service! Rented for a family vacation and everything went perfectly. Great rates and super friendly customer service! 🎉",
      location: "Family Traveler",
      color: "bg-fun-green",
      emoji: "👨‍👩‍👧‍👦",
    },
    {
      id: 4,
      name: "David Kumar",
      initials: "DK",
      rating: 5,
      review:
        "Outstanding experience! Quick response times, transparent pricing, and well-maintained vehicles. Will definitely rent from EasyDrive again! 🚗",
      location: "Frequent Renter",
      color: "bg-fun-yellow",
      emoji: "🔄",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        size={20}
        className={`${
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-fun-pink/20 to-fun-yellow/20"
    >
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">💬⭐🎉</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            What Our Happy Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it! Here's what our awesome customers
            have to say about their super fun EasyDrive experience! ✨
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view - show multiple testimonials */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-white"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 ${testimonial.color}/80 rounded-full flex items-center justify-center text-gray-800 font-bold text-xl mr-4 shadow-lg border-2 border-white`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <p className="text-gray-600 text-sm">
                        {testimonial.location}
                      </p>
                      <span className="text-lg">{testimonial.emoji}</span>
                    </div>
                  </div>
                </div>

                <div className="flex mb-4 justify-center bg-fun-yellow/50 rounded-full py-2">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-gray-700 italic leading-relaxed font-medium bg-gray-50/80 rounded-2xl p-4 border-2 border-fun-blue/20">
                  "{testimonial.review}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Mobile carousel view */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 mx-2 border-4 border-white">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-20 h-20 ${testimonial.color}/80 rounded-full flex items-center justify-center text-gray-800 font-bold text-2xl mr-4 shadow-lg border-2 border-white`}
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-800">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center gap-1">
                            <p className="text-gray-600">
                              {testimonial.location}
                            </p>
                            <span className="text-xl">{testimonial.emoji}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex mb-6 justify-center bg-fun-yellow/50 rounded-full py-3">
                        {renderStars(testimonial.rating)}
                      </div>

                      <blockquote className="text-gray-700 italic leading-relaxed text-lg font-medium bg-gray-50/80 rounded-2xl p-4 border-2 border-fun-blue/20">
                        "{testimonial.review}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevTestimonial}
                className="bg-white/90 p-4 rounded-full shadow-xl hover:bg-white transition-colors hover:scale-110 duration-300 border-2 border-fun-blue/20"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={24} className="text-gray-700" />
              </button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentIndex
                        ? "bg-primary-600 shadow-lg scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white/90 p-4 rounded-full shadow-xl hover:bg-white transition-colors hover:scale-110 duration-300 border-2 border-fun-blue/20"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Fun trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-fun-green/60 backdrop-blur-sm rounded-3xl p-6 border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-2">🎉</div>
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            <div className="flex flex-col items-center bg-fun-yellow/60 backdrop-blur-sm rounded-3xl p-6 border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-2">⭐</div>
              <div className="text-4xl font-bold text-gray-800 mb-2">4.9★</div>
              <div className="text-gray-700 font-medium">Average Rating</div>
            </div>
            <div className="flex flex-col items-center bg-fun-pink/60 backdrop-blur-sm rounded-3xl p-6 border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-2">🏆</div>
              <div className="text-4xl font-bold text-gray-800 mb-2">3+</div>
              <div className="text-gray-700 font-medium">
                Years of Fun Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
