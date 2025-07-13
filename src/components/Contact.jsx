import React from "react";
import {
  FiPhone,
  FiMail,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      description: "Call us for super quick help! 📞",
      bgColor: "bg-fun-green/80",
      emoji: "📞",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
        </svg>
      ),
      title: "WhatsApp",
      details: "+1 (555) 123-4567",
      action:
        "https://wa.me/15551234567?text=Hi! I want to rent a cool car! 🚗",
      description: "Quick car rental via WhatsApp! 💬",
      bgColor: "bg-fun-blue/80",
      emoji: "💬",
    },
    {
      icon: <FiMail size={24} />,
      title: "Email",
      details: "hello@easydrive.com",
      action:
        "mailto:hello@easydrive.com?subject=Car Rental Inquiry - Let's Get Rolling! 🚗",
      description: "Send us your questions! 📧",
      bgColor: "bg-fun-yellow/80",
      emoji: "📧",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM", emoji: "🌅" },
    { day: "Saturday", hours: "7:00 AM - 10:00 PM", emoji: "🌞" },
    { day: "Sunday", hours: "8:00 AM - 9:00 PM", emoji: "😴" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FiInstagram size={24} />,
      url: "https://instagram.com/easydrive",
      color: "hover:text-pink-500",
      bgColor: "bg-fun-pink/60",
    },
    {
      name: "Facebook",
      icon: <FiFacebook size={24} />,
      url: "https://facebook.com/easydrive",
      color: "hover:text-blue-500",
      bgColor: "bg-fun-blue/60",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={24} />,
      url: "https://twitter.com/easydrive",
      color: "hover:text-blue-400",
      bgColor: "bg-fun-green/60",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-fun-yellow/20 to-fun-green/20"
    >
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">📞💬✨</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Contact EasyDrive
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to rent your awesome ride? Get in touch with us through any of
            these super convenient ways! 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-2">
              <span className="text-3xl">👋</span>
              Get In Touch!
            </h3>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  target={
                    contact.action.startsWith("http") ? "_blank" : "_self"
                  }
                  rel={
                    contact.action.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                  className={`flex items-start p-6 ${contact.bgColor} backdrop-blur-sm rounded-3xl hover:scale-105 transition-all duration-300 group shadow-lg border-2 border-white`}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-white/80 text-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors shadow-lg">
                    {contact.icon}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg text-gray-800">
                        {contact.title}
                      </h4>
                      <span className="text-2xl">{contact.emoji}</span>
                    </div>
                    <p className="text-gray-800 font-bold mb-1">
                      {contact.details}
                    </p>
                    <p className="text-gray-700 text-sm font-medium">
                      {contact.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                Follow Our Adventures!
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${social.bgColor} backdrop-blur-sm rounded-2xl text-gray-700 ${social.color} transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Business Hours & Quick Rental CTA */}
          <div>
            <div className="bg-gradient-to-br from-fun-pink/60 to-fun-blue/60 backdrop-blur-sm rounded-3xl p-8 border-4 border-white shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/80 text-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <FiClock size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    When We're Available!
                  </h3>
                  <span className="text-2xl">⏰</span>
                </div>
              </div>

              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-white/60 rounded-2xl border-2 border-white/80"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{schedule.emoji}</span>
                      <span className="font-bold text-gray-800">
                        {schedule.day}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/50 rounded-2xl border-2 border-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🚨</span>
                  <h4 className="font-bold text-gray-800">Emergency Contact</h4>
                </div>
                <p className="text-sm text-gray-700 mb-2 font-medium">
                  24/7 roadside assistance available for our renters! 🆘
                </p>
                <a
                  href="tel:+15551234567"
                  className="text-primary-600 font-bold hover:underline flex items-center gap-1"
                >
                  📞 +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Quick Rental CTA */}
            <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white text-center shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🚗💨</div>
              <h3 className="text-2xl font-bold mb-4">Ready to Rent?</h3>
              <p className="mb-6 opacity-90 text-lg">
                Start your awesome adventure with EasyDrive today! Quick, easy,
                and super reliable car rentals! ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="bg-white text-primary-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  <FiPhone size={20} />
                  Call Now! 📞
                </a>
                <a
                  href="https://wa.me/15551234567?text=Hi! I want to rent a cool car! 🚗"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="text-xl">💬</span>
                  WhatsApp Us!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
