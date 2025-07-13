import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const Contact = () => {
  const address = {
    street: "123 Main Street",
    city: "Downtown",
    state: "State",
    zip: "12345",
    country: "USA",
  };

  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}, ${address.country}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const contactMethods = [
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      description: "Direct line for immediate assistance",
      bgColor: "bg-primary-50",
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
        "https://wa.me/15551234567?text=Hello, I would like to inquire about premium car rental services.",
      description: "Instant messaging support",
      bgColor: "bg-primary-50",
    },
    {
      icon: <FiMail size={24} />,
      title: "Email",
      details: "concierge@easydrive.com",
      action:
        "mailto:concierge@easydrive.com?subject=Premium Car Rental Inquiry",
      description: "Written inquiries and reservations",
      bgColor: "bg-primary-50",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FiInstagram size={20} />,
      url: "https://instagram.com/easydrive",
    },
    {
      name: "Facebook",
      icon: <FiFacebook size={20} />,
      url: "https://facebook.com/easydrive",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={20} />,
      url: "https://twitter.com/easydrive",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-cream">
      <div className="container">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-light text-primary-800">
            Get In
            <span className="font-semibold"> Touch</span>
          </h2>
          <p className="text-xl text-neutral-medium-grey max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium car rental? Connect with our dedicated
            team for personalized service and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary-800 mb-8">
              Contact Methods
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.action.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                  className="block card-premium hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 ${method.bgColor} rounded-2xl flex items-center justify-center text-primary-700 group-hover:bg-primary-100 transition-colors`}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-primary-800 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-primary-700 font-medium mb-2">
                        {method.details}
                      </p>
                      <p className="text-neutral-medium-grey text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-neutral-muted-grey/30">
              <h4 className="font-semibold text-lg text-primary-800 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-50 hover:bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700 transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Location & Emergency */}
          <div className="space-y-8">
            {/* Location */}
            <div className="card-premium">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <FiMapPin size={20} className="text-primary-700" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-800">
                  Location
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="text-neutral-medium-grey">
                  <p className="font-medium text-primary-800 mb-2">
                    Showroom Address
                  </p>
                  <p className="leading-relaxed">
                    {address.street}
                    <br />
                    {address.city}, {address.state} {address.zip}
                    <br />
                    {address.country}
                  </p>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full inline-flex items-center justify-center gap-3"
              >
                <FiMapPin size={20} />
                View on Maps
                <FiArrowRight size={16} />
              </a>
            </div>

            {/* Emergency Support */}
            <div className="card-premium">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent-warm-brown/10 rounded-2xl flex items-center justify-center">
                  <FiClock size={20} className="text-accent-warm-brown" />
                </div>
                <h3 className="text-xl font-semibold text-primary-800">
                  24/7 Support
                </h3>
              </div>

              <p className="text-neutral-medium-grey mb-4 leading-relaxed">
                Round-the-clock roadside assistance and customer support for our
                premium rental clients.
              </p>

              <a
                href="tel:+15551234567"
                className="text-primary-700 font-semibold hover:text-primary-800 transition-colors inline-flex items-center gap-2"
              >
                <FiPhone size={16} />
                Emergency: +1 (555) 123-4567
              </a>
            </div>

            {/* Reservation CTA */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-3xl p-8 text-center text-white shadow-warm">
              <h3 className="text-2xl font-semibold mb-4">Ready to Reserve?</h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                Experience premium car rental with personalized service and
                exceptional attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="bg-neutral-warm-white text-primary-800 font-semibold py-3 px-6 rounded-xl hover:bg-neutral-beige transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FiPhone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/15551234567?text=Hello, I would like to inquire about premium car rental services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-primary-200 text-primary-100 hover:bg-primary-200 hover:text-primary-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  WhatsApp
                  <FiArrowRight size={18} />
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
