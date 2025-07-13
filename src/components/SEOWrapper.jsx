import React from "react";
import { Helmet } from "react-helmet";

const SEOWrapper = ({ children }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: "EasyDrive",
    description:
      "Your local car rental partner. Book with ease via call or WhatsApp.",
    url: window.location.origin,
    telephone: "+1-555-0123",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Your City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US",
    },
    openingHours: "Mo-Su 06:00-22:00",
    priceRange: "$$",
    offers: {
      "@type": "Offer",
      description: "Car rental services with AC and Non-AC vehicles",
    },
  };

  return (
    <>
      <Helmet>
        <title>EasyDrive - Your Local Car Rental Partner | Book Now</title>
        <meta
          name="description"
          content="Book your perfect car rental with EasyDrive. Easy booking via call or WhatsApp. Premium fleet with AC/Non-AC options. Available 6 AM to 10 PM daily."
        />
        <meta
          name="keywords"
          content="car rental, local car rental, easy booking, WhatsApp booking, AC cars, non-AC cars"
        />
        <meta name="author" content="EasyDrive" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content="EasyDrive - Your Local Car Rental Partner"
        />
        <meta
          property="og:description"
          content="Book your perfect car rental with EasyDrive. Easy booking via call or WhatsApp."
        />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta
          property="twitter:title"
          content="EasyDrive - Your Local Car Rental Partner"
        />
        <meta
          property="twitter:description"
          content="Book your perfect car rental with EasyDrive. Easy booking via call or WhatsApp."
        />
        <meta property="twitter:image" content="/twitter-image.jpg" />

        <link rel="canonical" href={window.location.href} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
