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
        "Excellent service! The booking process was incredibly smooth, and the car was in perfect condition. EasyDrive made my business trip stress-free.",
      location: "Business Executive",
      color: "bg-pink-500",
    },
    {
      id: 2,
      name: "Michael Chen",
      initials: "MC",
      rating: 5,
      review:
        "Best car rental experience I've had. WhatsApp booking is so convenient, and the team is very responsive. The vehicle was clean and fuel-efficient.",
      location: "Travel Enthusiast",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      initials: "ER",
      rating: 5,
      review:
        "Professional and reliable service. Rented for a family vacation and everything went perfectly. Great rates and friendly customer service.",
      location: "Family Traveler",
      color: "bg-green-500",
    },
    {
      id: 4,
      name: "David Kumar",
      initials: "DK",
      rating: 5,
      review:
        "Outstanding experience! Quick response times, transparent pricing, and well-maintained vehicles. Will definitely use EasyDrive again.",
      location: "Frequent Renter",
      color: "bg-purple-500",
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
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their EasyDrive experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view - show multiple testimonials */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Mobile carousel view */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mx-2">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-lg">
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
                className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary-600 dark:bg-primary-400"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                500+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Happy Customers
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                4.9★
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Average Rating
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years of Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
