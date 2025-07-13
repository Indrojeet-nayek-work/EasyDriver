import React from "react";
import { FiSearch, FiPhone, FiCheck, FiArrowRight } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FiSearch size={32} />,
      title: "Explore Collection",
      description:
        "Browse our premium fleet and discover the perfect vehicle for your journey. Each car is meticulously maintained and equipped with modern amenities.",
      color: "bg-primary-100",
      textColor: "text-primary-700",
    },
    {
      id: 2,
      icon: <FiPhone size={32} />,
      title: "Connect With Us",
      description:
        "Contact our dedicated team via phone or WhatsApp. Our specialists will assist you in selecting the ideal vehicle and handling your reservation.",
      color: "bg-primary-100",
      textColor: "text-primary-700",
    },
    {
      id: 3,
      icon: <FiCheck size={32} />,
      title: "Begin Your Journey",
      description:
        "Complete your reservation, receive confirmation details, and enjoy a seamless, premium driving experience with our comprehensive support.",
      color: "bg-primary-100",
      textColor: "text-primary-700",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section-padding bg-neutral-warm-white"
    >
      <div className="container">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-light text-primary-800">
            Seamless
            <span className="font-semibold"> Process</span>
          </h2>
          <p className="text-xl text-neutral-medium-grey max-w-3xl mx-auto leading-relaxed">
            Experience our streamlined approach to premium car rental. Three
            simple steps to your perfect vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection line - hidden on mobile, visible on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-neutral-warm-grey via-neutral-muted-grey to-transparent z-0">
                  <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 w-2 h-2 bg-neutral-warm-grey rounded-full"></div>
                </div>
              )}

              <div className="relative z-10 text-center space-y-6">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-beige rounded-2xl border border-neutral-muted-grey/30 mb-6">
                  <span className="text-2xl font-semibold text-primary-800">
                    {step.id}
                  </span>
                </div>

                {/* Icon container */}
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 ${step.color} rounded-2xl mb-6 ${step.textColor} shadow-gentle`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary-800">
                    {step.title}
                  </h3>
                  <p className="text-neutral-medium-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support section */}
        <div className="mt-20 card-premium max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary-800">
              Need Assistance?
            </h3>
            <p className="text-lg text-neutral-medium-grey leading-relaxed max-w-2xl mx-auto">
              Our dedicated customer service team is available throughout your
              entire journey. From vehicle selection to return, we ensure your
              experience exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+1234567890"
                className="btn-primary inline-flex items-center gap-3"
              >
                <FiPhone size={20} />
                Contact Us
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-3"
              >
                WhatsApp Support
                <FiArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
