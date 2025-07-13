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
      description: "Call us for immediate assistance",
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
        "https://wa.me/15551234567?text=Hello! I would like to inquire about car rental.",
      description: "Quick booking via WhatsApp",
    },
    {
      icon: <FiMail size={24} />,
      title: "Email",
      details: "info@easydrive.com",
      action: "mailto:info@easydrive.com?subject=Car Rental Inquiry",
      description: "Send us your questions",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 9:00 PM" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FiInstagram size={24} />,
      url: "https://instagram.com/easydrive",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: <FiFacebook size={24} />,
      url: "https://facebook.com/easydrive",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={24} />,
      url: "https://twitter.com/easydrive",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact EasyDrive</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to book your ride? Get in touch with us through any of these
            convenient methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

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
                  className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                    {contact.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {contact.details}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-colors hover:bg-gray-200 dark:hover:bg-gray-700`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Business Hours & Additional Info */}
          <div>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                  <FiClock size={24} />
                </div>
                <h3 className="text-2xl font-bold ml-4">Business Hours</h3>
              </div>

              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600 last:border-b-0"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Emergency Contact</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  24/7 roadside assistance available
                </p>
                <a
                  href="tel:+15551234567"
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Quick Booking CTA */}
            <div className="mt-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="mb-6 opacity-90">
                Start your journey with EasyDrive today. Quick, easy, and
                reliable car rentals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FiPhone size={20} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/15551234567?text=Hello! I would like to book a car rental."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                  </svg>
                  WhatsApp
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
