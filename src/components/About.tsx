import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Award, Users, ChevronLeft, ChevronRight, Play, Pause, TrendingUp, BookOpen } from "lucide-react";

import { useState, useEffect, useRef } from "react";

const About = () => {
  // State for dynamic features
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ students: 0, success: 0 });
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [expandedPhilosophy, setExpandedPhilosophy] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  
  const statsRef = useRef(null);
  const testimonialInterval = useRef(null);

  // Dynamic testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Sourabh Sir transformed my son's approach to mathematics. From failing grades to scoring 92% in Class 10 boards!",
      author: "Mrs. Priya Sharma",
      student: "Arjun (Class 10)",
      rating: 5,
      subject: "Mathematics",
      improvement: "+45 marks"
    },
    {
      id: 2,
      text: "The personalized attention and innovative teaching methods helped my daughter excel in competitive exams.",
      author: "Mr. Rajesh Kumar",
      student: "Sneha (Class 12)",
      rating: 5,
      subject: "Physics & Math",
      improvement: "+38 marks"
    },
    {
      id: 3,
      text: "Amazing results! My child went from being scared of numbers to actually enjoying math problems.",
      author: "Mrs. Anjali Patel",
      student: "Rohan (Class 8)",
      rating: 5,
      subject: "Mathematics",
      improvement: "+52 marks"
    }
  ];

  // Animated achievements data
  const achievements = [
    { icon: Users, value: 500, label: "Students Taught", suffix: "+", color: "text-blue-500" },
    { icon: TrendingUp, value: 95, label: "Score Above 85%", suffix: "%", color: "text-green-500" },
    { icon: BookOpen, value: 10, label: "Years Experience", suffix: "+", color: "text-purple-500" },
    { icon: Award, value: 98, label: "Parent Satisfaction", suffix: "%", color: "text-orange-500" }
  ];

  // Handle WhatsApp contact
  const handleWhatsApp = () => {
    window.open("https://wa.me/917595977907?text=Hi%20I%20want%20to%20know%20more%20about%20your%20teaching%20methods", "_blank");
  };

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isStatsVisible]);

  // Animate statistics counters
  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setAnimatedStats({
        students: Math.round(500 * easeOutQuart),
        success: Math.round(95 * easeOutQuart)
      });
      
      currentStep++;
      if (currentStep > steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlay) {
      testimonialInterval.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    } else {
      clearInterval(testimonialInterval.current);
    }

    return () => clearInterval(testimonialInterval.current);
  }, [isAutoPlay, testimonials.length]);

  // Manual testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-muted/30 to-muted/60 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 animate-fade-in">
            About Sourabh Sir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
            Dedicated to providing quality education with personalized attention for every student
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Info */}
          <div className="space-y-8">
            <Card className="p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
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
                  {[
                    "B.Sc. Mathematics with teaching certification",
                    "Specialized training in CBSE & ICSE methodologies", 
                    "Expert in weak student transformation"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 transform hover:translate-x-1 transition-transform duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-success animate-bounce" style={{animationDelay: `${index * 200}ms`}} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="cta" 
                  onClick={handleWhatsApp} 
                  className="w-full transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                >
                  Learn About Our Teaching Methods
                </Button>
              </CardContent>
            </Card>

            {/* Dynamic Teaching Philosophy */}
            <Card className="p-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-heading font-semibold">Our Teaching Philosophy</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedPhilosophy(!expandedPhilosophy)}
                    className="text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    {expandedPhilosophy ? "Show Less" : "Show More"}
                  </Button>
                </div>
                
                <ul className={`space-y-2 text-primary-foreground/90 transition-all duration-500 ${
                  expandedPhilosophy ? 'max-h-96 opacity-100' : 'max-h-40 opacity-75'
                } overflow-hidden`}>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                    Every student learns at their own pace
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                    Conceptual understanding over rote learning
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                    Regular assessment and feedback
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                    Building confidence through small victories
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                    Parent-teacher collaboration for best results
                  </li>
                  {expandedPhilosophy && (
                    <>
                      <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                        <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                        Interactive problem-solving sessions
                      </li>
                      <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                        <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                        Technology-enhanced learning methods
                      </li>
                      <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                        <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                        Exam strategy and time management
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats & Testimonials */}
          <div className="space-y-8">
            {/* Animated Statistics */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card 
                    key={index}
                    className={`text-center p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                      hoveredAchievement === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onMouseEnter={() => setHoveredAchievement(index)}
                    onMouseLeave={() => setHoveredAchievement(null)}
                  >
                    <CardContent className="p-0">
                      <Icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color} transform transition-transform duration-300 ${
                        hoveredAchievement === index ? 'rotate-12 scale-110' : ''
                      }`} />
                      <h4 className="text-2xl font-bold text-primary mb-2">
                        {index < 2 ? 
                          (index === 0 ? animatedStats.students : animatedStats.success) : 
                          achievement.value
                        }{achievement.suffix}
                      </h4>
                      <p className="text-muted-foreground text-sm">{achievement.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Dynamic Testimonials Carousel */}
            <Card className="p-6 border-l-4 border-l-secondary relative overflow-hidden">
              <CardContent className="p-0">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-secondary text-secondary animate-pulse" 
                            style={{animationDelay: `${star * 100}ms`}} />
                    ))}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Button variant="ghost" size="sm" onClick={toggleAutoPlay}>
                      {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={prevTestimonial}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={nextTestimonial}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="relative min-h-[120px]">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentTestimonial 
                          ? 'opacity-100 transform translate-x-0' 
                          : 'opacity-0 transform translate-x-4'
                      }`}
                    >
                      <p className="text-foreground italic mb-3">
                        "{testimonial.text}"
                      </p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">
                            - {testimonial.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Parent of {testimonial.student}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                            {testimonial.improvement}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1">
                            {testimonial.subject}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-secondary w-6' 
                          : 'bg-secondary/30 hover:bg-secondary/60'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
