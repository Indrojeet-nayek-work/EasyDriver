import React from "react";
import { FiSearch, FiPhone, FiCheck, FiArrowRight } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FiSearch size={32} />,
      title: "Explore Collection",
      description:
        "Browse our quality fleet and discover the perfect vehicle for your journey. Each car is well-maintained and equipped with modern amenities.",
      color: "bg-primary-100 dark:bg-primary-900/20",
      textColor: "text-primary-700 dark:text-primary-400",
    },
    {
      id: 2,
      icon: <FiPhone size={32} />,
      title: "Connect With Us",
      description:
        "Contact our friendly team via phone or WhatsApp. Our team will assist you in selecting the ideal vehicle and handling your booking.",
      color: "bg-primary-100 dark:bg-primary-900/20",
      textColor: "text-primary-700 dark:text-primary-400",
    },
    {
      id: 3,
      icon: <FiCheck size={32} />,
      title: "Begin Your Journey",
      description:
        "Complete your booking, receive confirmation details, and enjoy a seamless, affordable driving experience with our reliable support.",
      color: "bg-primary-100 dark:bg-primary-900/20",
      textColor: "text-primary-700 dark:text-primary-400",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section-padding bg-neutral-warm-white dark:bg-neutral-charcoal"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary-800 dark:text-primary-200">
            Simple
            <span className="font-semibold"> Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-medium-grey dark:text-neutral-warm-grey max-w-3xl mx-auto leading-relaxed">
            Experience our streamlined approach to affordable car rental. Three
            simple steps to your perfect vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                {/* Icon container - Only logo, no numbers */}
                <div
                  className={`inline-flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 ${step.color} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 ${step.textColor} shadow-gentle`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 dark:text-primary-200">
                    {step.title}
                  </h3>
                  <p className="text-neutral-medium-grey dark:text-neutral-warm-grey leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support section */}
        <div className="mt-12 sm:mt-20 bg-neutral-warm-white dark:bg-neutral-deep-brown rounded-xl sm:rounded-2xl shadow-soft border border-neutral-muted-grey/30 dark:border-neutral-medium-grey/30 p-6 sm:p-8 hover:shadow-warm transition-all duration-300 max-w-4xl mx-auto text-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-800 dark:text-primary-200">
              Need Assistance?
            </h3>
            <p className="text-base sm:text-lg text-neutral-medium-grey dark:text-neutral-warm-grey leading-relaxed max-w-2xl mx-auto">
              Our dedicated customer service team is available throughout your
              entire journey. From vehicle selection to return, we ensure your
              experience exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
              <a
                href="tel:+1234567890"
                className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-300 text-neutral-warm-white dark:text-neutral-charcoal font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3"
              >
                <FiPhone size={18} />
                Contact Us
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-warm-white hover:bg-neutral-beige dark:bg-neutral-medium-grey/30 dark:hover:bg-neutral-medium-grey/50 text-primary-700 dark:text-primary-200 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 border border-neutral-warm-grey dark:border-neutral-medium-grey/30"
              >
                WhatsApp Support
                <FiArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
