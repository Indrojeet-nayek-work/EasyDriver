import React, { useState, useEffect } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Richardson",
      initials: "SR",
      rating: 5,
      review:
        "Exceptional service from start to finish. The vehicle was immaculate and the staff went above and beyond to ensure our comfort. Truly a premium experience.",
      position: "Executive Director",
      company: "Fortune 500 Company",
    },
    {
      id: 2,
      name: "Michael Chen",
      initials: "MC",
      rating: 5,
      review:
        "Outstanding attention to detail and personalized service. The booking process was seamless and the vehicle exceeded our expectations for our special occasion.",
      position: "Entrepreneur",
      company: "Tech Startup",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      initials: "ER",
      rating: 5,
      review:
        "Professional, reliable, and luxurious. EasyDrive delivered exactly what they promised. The customer service team was incredibly helpful and responsive.",
      position: "Marketing Director",
      company: "Global Agency",
    },
    {
      id: 4,
      name: "David Kumar",
      initials: "DK",
      rating: 5,
      review:
        "Consistently excellent service with transparent pricing. The quality of vehicles and level of service sets them apart from other rental companies.",
      position: "Investment Manager",
      company: "Private Equity",
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
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        size={16}
        className={`${
          index < rating
            ? "text-accent-warm-brown fill-current"
            : "text-neutral-warm-grey"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-neutral-warm-white"
    >
      <div className="container">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-light text-primary-800">
            Client
            <span className="font-semibold"> Testimonials</span>
          </h2>
          <p className="text-xl text-neutral-medium-grey max-w-3xl mx-auto leading-relaxed">
            Discover why discerning clients choose EasyDrive for their premium
            car rental needs. Excellence in service, reflected in every review.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop view - show multiple testimonials */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="card-premium space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700 font-semibold text-lg">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-primary-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-medium-grey">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-neutral-medium-grey">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-neutral-charcoal leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Mobile carousel view */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="card-premium space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700 font-semibold text-xl">
                          {testimonial.initials}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-xl text-primary-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-neutral-medium-grey">
                            {testimonial.position}
                          </p>
                          <p className="text-sm text-neutral-medium-grey">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-1 justify-center">
                        {renderStars(testimonial.rating)}
                      </div>

                      <blockquote className="text-neutral-charcoal leading-relaxed text-lg">
                        "{testimonial.review}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-neutral-warm-white p-4 rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-300 border border-neutral-muted-grey/30"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} className="text-primary-700" />
              </button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary-600"
                        : "w-2 bg-neutral-warm-grey hover:bg-primary-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-neutral-warm-white p-4 rounded-2xl shadow-gentle hover:shadow-soft transition-all duration-300 border border-neutral-muted-grey/30"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} className="text-primary-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="text-4xl font-light text-primary-700">500+</div>
            <div className="text-sm text-neutral-medium-grey uppercase tracking-wider">
              Satisfied Clients
            </div>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl font-light text-primary-700">4.9</div>
            <div className="text-sm text-neutral-medium-grey uppercase tracking-wider">
              Average Rating
            </div>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl font-light text-primary-700">5</div>
            <div className="text-sm text-neutral-medium-grey uppercase tracking-wider">
              Years Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
