import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, class: studentClass, phone, message } = formData;
    
    if (!name || !studentClass || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = `Hi, I'm ${name}. I need tuition for Class ${studentClass}. Contact: ${phone}. ${message ? `Message: ${message}` : ''}`;
    window.open(`https://wa.me/917595977907?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly via WhatsApp",
    });
    
    setFormData({ name: "", class: "", phone: "", message: "" });
  };

  const handleCall = () => {
    window.open("tel:+917595977907", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917595977907?text=Hi%20I%20want%20to%20enquire%20about%20tuition%20classes", "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your academic journey? Get in touch with us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <MapPin className="w-6 h-6" />
                  Visit Our Centre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-2">
                  Sourabh Coaching Centre
                </p>
                <p className="text-muted-foreground">
                  55-2C, Greenfield City<br />
                  Jote Shibrampur<br />
                  Kolkata - 700141<br />
                  West Bengal, India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Clock className="w-6 h-6" />
                  Class Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-medium">Monday - Saturday:</span> 3:00 PM - 9:00 PM
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Flexible timing available based on student requirements
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="call" size="lg" onClick={handleCall} className="h-16 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Call Now</div>
                  <div className="text-sm">7595977907</div>
                </div>
              </Button>
              
              <Button variant="cta" size="lg" onClick={handleWhatsApp} className="h-16 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm">9330841968</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <Mail className="w-6 h-6" />
                Quick Enquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Student Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter student's name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Class *
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    type="tel"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or questions?"
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Send Enquiry via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you'll be redirected to WhatsApp to complete your enquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;