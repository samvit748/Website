import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Award, Users, Target, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const Hero = () => {
  const handleCall = () => {
    window.open("tel:+917595977907", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917595977907?text=Hi%20I%20need%20tuition%20for%20my%20child", "_blank");
  };

  return (
    <section className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-primary to-primary/80">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Personalised Tuition for
            <span className="block text-secondary"> Classes 5-10</span>
            <span className="block text-2xl md:text-3xl font-medium mt-2">
              in Greenfield City, Kolkata
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-body">
            Maths • Science • English • Social Science
            <span className="block text-lg mt-2 text-secondary font-semibold">
              Specialist in Mathematics
            </span>
          </p>

          {/* USP Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            <div className="flex flex-col items-center text-center text-primary-foreground">
              <Award className="w-8 h-8 mb-2 text-secondary" />
              <span className="text-sm font-medium">Qualified Teachers</span>
            </div>
            <div className="flex flex-col items-center text-center text-primary-foreground">
              <Target className="w-8 h-8 mb-2 text-secondary" />
              <span className="text-sm font-medium">Topic-wise Tests</span>
            </div>
            <div className="flex flex-col items-center text-center text-primary-foreground">
              <Users className="w-8 h-8 mb-2 text-secondary" />
              <span className="text-sm font-medium">Special Attention</span>
            </div>
            <div className="flex flex-col items-center text-center text-primary-foreground">
              <BookOpen className="w-8 h-8 mb-2 text-secondary" />
              <span className="text-sm font-medium">Board Exam Focus</span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="text-primary-foreground">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm">Pass Rate</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm">Students Coached</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="call" 
              size="lg" 
              onClick={handleCall}
              className="text-lg px-8 py-4 gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 7595977907
            </Button>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-lg px-8 py-4 gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;