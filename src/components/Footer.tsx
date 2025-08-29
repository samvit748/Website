import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const handleCall = () => {
    window.open("tel:+918777688171", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918777688171?text=Hi%20I%20want%20to%20enquire%20about%20tuition%20classes", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-secondary">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sourabh Coaching Centre</p>
                  <p className="text-primary-foreground/80 text-sm">
                    55-2C, Greenfield City<br />
                    Jote Shibrampur, Kolkata - 700141
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <button 
                    onClick={handleCall}
                    className="hover:text-secondary transition-colors"
                  >
                    7595977907 / 8777688171
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary" />
                <div className="text-sm">
                  <p>Mon-Sat: 3:00 PM - 9:00 PM</p>
                  <p className="text-primary-foreground/80">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-secondary">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• CBSE & ICSE Curriculum</li>
              <li>• Mathematics Specialist Coaching</li>
              <li>• Science & English Tuition</li>
              <li>• Social Science Classes</li>
              <li>• Board Exam Preparation</li>
              <li>• Individual Attention</li>
              <li>• Regular Assessments</li>
              <li>• Homework Support</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-secondary">
              Get Started Today!
            </h3>
            <p className="text-primary-foreground/90 text-sm mb-6">
              Book a demo class and see the difference our personalized teaching approach can make.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={handleCall}
                className="w-full bg-success hover:bg-success/90 text-success-foreground px-4 py-3 rounded-md flex items-center justify-center gap-2 transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                Call for Demo Class
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 rounded-md flex items-center justify-center gap-2 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Sourabh Coaching Centre. All rights reserved.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Personalised CBSE/ICSE Tuition in Greenfield City, Kolkata
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;