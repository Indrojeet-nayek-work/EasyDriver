import React from "react";
import { FiMapPin, FiNavigation, FiClock, FiPhone } from "react-icons/fi";

const FindUs = () => {
  const address = {
    street: "123 Main Street",
    city: "Downtown",
    state: "State",
    zip: "12345",
    country: "USA",
  };

  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}, ${address.country}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const locationFeatures = [
    {
      icon: <FiMapPin size={24} />,
      title: "Prime Location",
      description:
        "Centrally located for easy access from anywhere in the city",
    },
    {
      icon: <FiNavigation size={24} />,
      title: "Easy to Find",
      description: "Clear signage and accessible parking available",
    },
    {
      icon: <FiClock size={24} />,
      title: "Convenient Hours",
      description: "Open 6 AM to 10 PM daily for your convenience",
    },
  ];

  return (
    <section
      id="find-us"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Find Us on Google Maps</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visit our convenient location or use our pickup and delivery
            services for added convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-2">
                      Street Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {address.street}
                      <br />
                      {address.city}, {address.state} {address.zip}
                      <br />
                      {address.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="mb-8">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center inline-flex items-center gap-2 text-lg"
                >
                  📍 Open in Google Maps
                </a>
              </div>

              {/* Contact for Directions */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Need Directions?</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our team is happy to provide detailed directions or arrange
                  pickup/delivery services.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  <FiPhone size={18} />
                  Call for Assistance
                </a>
              </div>
            </div>
          </div>

          {/* Location Features & Services */}
          <div>
            <div className="space-y-6">
              {locationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="mt-8 bg-gradient-to-r from-accent-500 to-orange-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Additional Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚗</span>
                  <span>Vehicle Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏠</span>
                  <span>Home Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✈️</span>
                  <span>Airport Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏨</span>
                  <span>Hotel Pickup</span>
                </div>
              </div>
              <p className="mt-4 text-sm opacity-90">
                *Additional charges may apply for delivery services. Contact us
                for details.
              </p>
            </div>

            {/* Nearby Landmarks */}
            <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-lg mb-4">Nearby Landmarks</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    City Mall
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    0.3 miles
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    Metro Station
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    0.5 miles
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    Airport
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    15 miles
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    Downtown
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    2 miles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder/Instructions */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Interactive Map</h3>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-12 mb-6">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Click the button above to view our exact location on Google Maps
              with turn-by-turn directions.
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FiNavigation size={20} />
              Get Directions
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            For the most accurate directions and real-time traffic updates, we
            recommend using Google Maps or your preferred navigation app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
