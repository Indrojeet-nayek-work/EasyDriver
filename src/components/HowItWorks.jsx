import React from "react";
import { FiSearch, FiPhone, FiCheck } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FiSearch size={40} />,
      title: "Explore Cool Cars",
      description:
        "Browse our awesome fleet and find the perfect ride for your adventure! Check out all the cool features and availability. 🚗✨",
      color: "bg-fun-blue",
      bgGradient: "from-fun-blue to-fun-blue-dark",
      emoji: "👀",
    },
    {
      id: 2,
      icon: <FiPhone size={40} />,
      title: "Call or WhatsApp Us",
      description:
        "Hit us up via phone or WhatsApp! Our super friendly team will help you rent your dream car and answer all your questions. 📱💬",
      color: "bg-fun-green",
      bgGradient: "from-fun-green to-fun-green-dark",
      emoji: "📞",
    },
    {
      id: 3,
      icon: <FiCheck size={40} />,
      title: "Confirm & Drive Away!",
      description:
        "Complete your rental, get your confirmation, and enjoy your amazing hassle-free ride with EasyDrive! Ready for adventure! 🎉🚗",
      color: "bg-fun-pink",
      bgGradient: "from-fun-pink to-fun-pink-dark",
      emoji: "🎉",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section-padding bg-gradient-to-br from-fun-green/20 to-fun-blue/20"
    >
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">⚡🚗⚡</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your perfect rental car is super easy! Just 3 simple steps
            to your dream ride! 🎯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Fun connection line - hidden on mobile, visible on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-2 bg-gradient-to-r from-fun-yellow to-fun-pink rounded-full z-0 transform rotate-1">
                  <div
                    className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-6 h-6 bg-fun-yellow rounded-full shadow-lg animate-bounce"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  ></div>
                </div>
              )}

              <div className="relative z-10 text-center transform hover:scale-105 transition-transform duration-300">
                {/* Fun step number */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-fun-yellow to-fun-yellow-dark rounded-full mb-6 relative shadow-lg border-4 border-white">
                  <span className="text-3xl font-bold text-gray-800">
                    {step.id}
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>

                {/* Fun emoji */}
                <div
                  className="text-5xl mb-4 animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {step.emoji}
                </div>

                {/* Fun icon container */}
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${step.bgGradient} rounded-3xl mb-6 text-gray-800 shadow-xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-fun-yellow/30">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun additional info */}
        <div className="mt-16 bg-gradient-to-r from-fun-pink/80 to-fun-yellow/80 backdrop-blur-sm rounded-3xl p-8 text-center border-4 border-white shadow-2xl">
          <div className="text-5xl mb-4">🤔💡</div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Need Some Help?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
            Our super awesome customer service team is here to help you through
            the entire rental process! From picking your ride to returning it,
            we'll make your experience totally smooth and fun! 🌟
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="btn-fun-green inline-flex items-center gap-2 text-lg"
            >
              <FiPhone size={20} />
              Call Us Now! 📞
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fun-blue inline-flex items-center gap-2 text-lg"
            >
              <span className="text-2xl">💬</span>
              WhatsApp Us!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
