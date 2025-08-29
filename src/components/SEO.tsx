import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Best Tutor in Kolkata | Sourabh Coaching Centre | CBSE & ICSE Math Science",
  description = "Top-rated tutor in Kolkata with 10+ years experience. Expert Math & Science tuition for Classes 5-10 CBSE & ICSE in Greenfield City. 100% pass rate. Call 7595977907",
  keywords = "tutor in kolkata, best tutor kolkata, math tutor kolkata, science tutor kolkata, CBSE tutor, ICSE tutor, home tuition kolkata, greenfield city tutor",
  image = "/og-image.jpg",
  url = "https://yourwebsite.com",
  type = "website",
  structuredData
}: SEOProps) => {
  const jsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sourabh Coaching Centre",
    "description": "Expert tuition for Classes 5-10 in Math, Science, English & Social Science",
    "url": url,
    "telephone": "+917595977907",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "55-2C, Greenfield City, Jote Shibrampur",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700141",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5726",
      "longitude": "88.3639"
    },
    "areaServed": "Kolkata",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tuition Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Mathematics Tuition Classes 5-10"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Course",
            "name": "Science Tuition Classes 5-10"
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sourabh Coaching Centre" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Local Business */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Kolkata" />
      <meta name="geo.position" content="22.5726;88.3639" />
      <meta name="ICBM" content="22.5726, 88.3639" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
