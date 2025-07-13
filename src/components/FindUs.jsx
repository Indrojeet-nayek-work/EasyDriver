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
      title: "Super Easy to Find!",
      description: "Right in the heart of the city - you can't miss us! 🎯",
      bgColor: "bg-fun-blue/80",
      emoji: "🎯",
    },
    {
      icon: <FiNavigation size={24} />,
      title: "Crystal Clear Directions",
      description: "Big fun signs and plenty of parking spots available! 🅿️",
      bgColor: "bg-fun-green/80",
      emoji: "🅿️",
    },
    {
      icon: <FiClock size={24} />,
      title: "Awesome Hours",
      description: "Open super early to late night for your convenience! ⏰",
      bgColor: "bg-fun-yellow/80",
      emoji: "⏰",
    },
  ];

  const nearbySpots = [
    { name: "City Mall", distance: "0.3 miles", emoji: "🛍️" },
    { name: "Metro Station", distance: "0.5 miles", emoji: "🚇" },
    { name: "Airport", distance: "15 miles", emoji: "✈️" },
    { name: "Downtown", distance: "2 miles", emoji: "🏙️" },
  ];

  return (
    <section
      id="find-us"
      className="section-padding bg-gradient-to-br from-fun-blue/20 to-fun-pink/20"
    >
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">📍🗺️✨</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Find Us on Google Maps!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come visit our awesome location or use our pickup and delivery
            services for extra convenience! 🚗💨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📍</span>
                <h3 className="text-2xl font-bold text-gray-800">
                  Our Cool Location
                </h3>
              </div>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-fun-green/80 text-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FiMapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">
                      Street Address
                    </h4>
                    <div className="bg-fun-yellow/50 rounded-2xl p-4 border-2 border-white">
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {address.street}
                        <br />
                        {address.city}, {address.state} {address.zip}
                        <br />
                        {address.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="mb-8">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fun-blue w-full justify-center inline-flex items-center gap-2 text-xl font-bold"
                >
                  📍 Open in Google Maps!
                </a>
              </div>

              {/* Contact for Directions */}
              <div className="bg-fun-pink/50 rounded-3xl p-6 border-2 border-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🤔</span>
                  <h4 className="font-bold text-gray-800">Need Directions?</h4>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  Our super helpful team is ready to give you detailed
                  directions or arrange pickup/delivery services! 🚗💨
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 text-primary-600 font-bold hover:underline bg-white/80 px-4 py-2 rounded-full"
                >
                  <FiPhone size={18} />
                  Call for Help! 📞
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
                  className={`${feature.bgColor} backdrop-blur-sm rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-white`}
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-white/80 text-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg text-gray-800">
                          {feature.title}
                        </h4>
                        <span className="text-2xl">{feature.emoji}</span>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nearby Landmarks */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border-4 border-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🏢</span>
                <h4 className="font-bold text-lg text-gray-800">
                  Cool Nearby Spots
                </h4>
              </div>
              <div className="space-y-3">
                {nearbySpots.map((spot, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-fun-green/40 rounded-2xl border-2 border-white"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{spot.emoji}</span>
                      <span className="text-gray-800 font-medium">
                        {spot.name}
                      </span>
                    </div>
                    <span className="text-gray-600 text-sm font-bold bg-white/80 px-3 py-1 rounded-full">
                      {spot.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder/Instructions */}
        <div className="mt-16 bg-gradient-to-r from-fun-yellow/80 to-fun-pink/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border-4 border-white">
          <div className="text-6xl mb-4">🗺️📱</div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Interactive Map Adventure!
          </h3>
          <div className="bg-white/60 rounded-3xl p-8 mb-6 border-2 border-white">
            <div className="text-8xl mb-4">📍</div>
            <p className="text-gray-700 mb-6 text-lg font-medium max-w-2xl mx-auto">
              Click the button above to view our exact location on Google Maps
              with super easy turn-by-turn directions! 🧭✨
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fun-green inline-flex items-center gap-2 text-lg font-bold"
            >
              <FiNavigation size={20} />
              Get Directions Now! 🚗
            </a>
          </div>
          <p className="text-sm text-gray-600 font-medium bg-white/50 rounded-full px-6 py-3 border-2 border-white">
            💡 For the most accurate directions and real-time traffic updates,
            we recommend using Google Maps or your favorite navigation app!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
