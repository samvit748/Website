import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Award, Users, Target, BookOpen, MapPin, Star } from "lucide-react";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-classroom.jpg";

const Hero = () => {
  const handleCall = () => {
    window.open("tel:+918777688171", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918777688171?text=Hi%20I%20need%20tuition%20for%20my%20child%20in%20Kolkata", "_blank");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yourwebsite.com/#localbusiness",
    "name": "Sourabh Coaching Centre - Best Tutor in Kolkata",
    "description": "Expert Math & Science tutor in Kolkata with 10+ years experience. Specialized tuition for Classes 5-10 CBSE & ICSE curriculum in Greenfield City.",
    "url": "https://yourwebsite.com",
    "telephone": "+918777688171",
    "priceRange": "$$",
    "image": ["https://yourwebsite.com/hero-classroom.jpg"],
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
      "latitude": 22.5726,
      "longitude": 88.3639
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "15:00",
        "closes": "21:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Kolkata"
      },
      {
        "@type": "Place", 
        "name": "Greenfield City"
      },
      {
        "@type": "Place",
        "name": "New Town Kolkata"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tuition Services in Kolkata",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Mathematics Tuition for Classes 5-10",
            "description": "Expert math tutor in Kolkata specializing in CBSE and ICSE curriculum"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEO 
        title="Best Math & Science Tutor in Kolkata | Sourabh Sir | 10+ Years Experience"
        description="#1 rated tutor in Kolkata for Classes 5-10. Expert Math & Science tuition in Greenfield City. 100% pass rate, 500+ students coached. Call 7595977907 now!"
        keywords="best tutor in kolkata, math tutor kolkata, science tutor kolkata, tutor in greenfield city, CBSE tutor kolkata, home tuition kolkata, experienced tutor kolkata"
        structuredData={structuredData}
      />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="text-center text-white space-y-8">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Serving Kolkata • Greenfield City </span>
              </div>

              {/* Main Heading with Local SEO */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                  Best Tutor in
                  <span className="block text-secondary"> Kolkata</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-body text-white/90 max-w-4xl mx-auto">
                  Expert Mathematics & Science Tuition for Classes 5-10 CBSE & ICSE in Greenfield City
                </h2>
              </div>

              {/* Key Services */}
              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
                <span className="bg-secondary/20 px-4 py-2 rounded-full">Mathematics Specialist</span>
                <span className="bg-secondary/20 px-4 py-2 rounded-full">Science Expert</span>
                <span className="bg-secondary/20 px-4 py-2 rounded-full">CBSE & ICSE</span>
                <span className="bg-secondary/20 px-4 py-2 rounded-full">10+ Years Experience</span>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 (150+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>100% Pass Rate</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button 
                  onClick={handleCall}
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Best Tutor: 8777688171
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline"
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
                <div className="text-sm md:text-base opacity-90">Pass Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
                <div className="text-sm md:text-base opacity-90">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">500+</div>
                <div className="text-sm md:text-base opacity-90">Students Coached</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">24/7</div>
                <div className="text-sm md:text-base opacity-90">WhatsApp Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
