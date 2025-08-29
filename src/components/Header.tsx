import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.open("tel:+918777688171", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918777688171?text=Hi%20I%20need%20tuition%20for%20my%20child", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-heading font-bold text-primary">
              Sourabh Coaching Centre
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#classes" className="text-foreground hover:text-primary transition-colors">Classes</a>
            <a href="#subjects" className="text-foreground hover:text-primary transition-colors">Subjects</a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">Results</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button variant="call" size="sm" onClick={handleCall} className="gap-1">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button variant="cta" size="sm" onClick={handleWhatsApp} className="gap-1">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">About</a>
              <a href="#classes" className="text-foreground hover:text-primary transition-colors py-2">Classes</a>
              <a href="#subjects" className="text-foreground hover:text-primary transition-colors py-2">Subjects</a>
              <a href="#results" className="text-foreground hover:text-primary transition-colors py-2">Results</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">Contact</a>
              <div className="flex space-x-3 pt-3">
                <Button variant="call" size="sm" onClick={handleCall} className="gap-1 flex-1">
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
                <Button variant="cta" size="sm" onClick={handleWhatsApp} className="gap-1 flex-1">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;