import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Award, Users } from "lucide-react";

const About = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917595977907?text=Hi%20I%20want%20to%20know%20more%20about%20your%20teaching%20methods", "_blank");
  };

  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            About Sourabh Sir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing quality education with personalized attention for every student
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-primary">
                      Mathematics Specialist
                    </h3>
                    <p className="text-muted-foreground">10+ Years Teaching Experience</p>
                  </div>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  With over a decade of experience in teaching CBSE and ICSE curricula, 
                  Sourabh Sir has helped hundreds of students achieve academic excellence. 
                  His unique approach combines conceptual clarity with practical problem-solving techniques.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>B.Sc. Mathematics with teaching certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Specialized training in CBSE & ICSE methodologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Expert in weak student transformation</span>
                  </div>
                </div>

                <Button variant="cta" onClick={handleWhatsApp} className="w-full">
                  Learn About Our Teaching Methods
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-primary mb-2">500+</h4>
                  <p className="text-muted-foreground">Students Taught</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-primary mb-2">95%</h4>
                  <p className="text-muted-foreground">Score Above 85%</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 bg-primary text-primary-foreground">
              <CardContent className="p-0">
                <h4 className="text-xl font-heading font-semibold mb-4">Our Teaching Philosophy</h4>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• Every student learns at their own pace</li>
                  <li>• Conceptual understanding over rote learning</li>
                  <li>• Regular assessment and feedback</li>
                  <li>• Building confidence through small victories</li>
                  <li>• Parent-teacher collaboration for best results</li>
                </ul>
              </CardContent>
            </Card>

            {/* Testimonial Preview */}
            <Card className="p-6 border-l-4 border-l-secondary">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground italic mb-3">
                  "Sourabh Sir transformed my son's approach to mathematics. 
                  From failing grades to scoring 92% in Class 10 boards!"
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  - Mrs. Priya Sharma, Parent of Arjun (Class 10)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;