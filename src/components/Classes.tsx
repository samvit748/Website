import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Microscope, Globe, PenTool } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      grade: "Class 5",
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      focus: "Building strong fundamentals",
      description: "Creating a solid foundation for future academic success with engaging activities."
    },
    {
      grade: "Class 6",
      icon: <Calculator className="w-8 h-8 text-secondary" />,
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      focus: "Conceptual clarity",
      description: "Strengthening core concepts while introducing advanced problem-solving techniques."
    },
    {
      grade: "Class 7",
      icon: <Microscope className="w-8 h-8 text-secondary" />,
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      focus: "Critical thinking development",
      description: "Developing analytical skills and preparing for competitive academic challenges."
    },
    {
      grade: "Class 8",
      icon: <Globe className="w-8 h-8 text-secondary" />,
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      focus: "Pre-board preparation",
      description: "Intensive preparation for board examination patterns and advanced concepts."
    },
    {
      grade: "Classes 9-10",
      icon: <PenTool className="w-8 h-8 text-secondary" />,
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      focus: "Board exam mastery",
      description: "Complete board exam preparation with mock tests and intensive practice sessions."
    }
  ];

  const handleBookDemo = (grade: string) => {
    const message = `Hi, I want to book a demo class for ${grade}. Please let me know the available slots.`;
    window.open(`https://wa.me/917595977907?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="classes" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Classes We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tuition programs designed for CBSE & ICSE curriculum across all major subjects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.map((classInfo, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {classInfo.icon}
                </div>
                <CardTitle className="text-2xl font-heading text-primary">
                  {classInfo.grade}
                </CardTitle>
                <p className="text-secondary font-semibold">
                  {classInfo.focus}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-center">
                  {classInfo.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-center">Subjects Covered:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {classInfo.subjects.map((subject, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => handleBookDemo(classInfo.grade)}
                >
                  Book Demo Class
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-muted/50 rounded-xl p-8">
          <h3 className="text-2xl font-heading font-bold text-primary text-center mb-8">
            Our Teaching Methodology
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Diagnostic Test</h4>
              <p className="text-sm text-muted-foreground">Assess current knowledge level</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Concept Teaching</h4>
              <p className="text-sm text-muted-foreground">Clear explanation with examples</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Practice Assignments</h4>
              <p className="text-sm text-muted-foreground">Homework and problem solving</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">4</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Weekly Tests</h4>
              <p className="text-sm text-muted-foreground">Regular progress evaluation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;