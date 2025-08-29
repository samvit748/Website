import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why is Sourabh Sir the best tutor in Kolkata?",
      answer: "Sourabh Sir is recognized as the best tutor in Kolkata due to his 10+ years of teaching experience, 100% pass rate, specialized expertise in Mathematics and Science for CBSE & ICSE curricula, and personalized attention to each student in Greenfield City, Kolkata."
    },
    {
      question: "What subjects does the best math tutor in Kolkata teach?", 
      answer: "Our expert tutor in Kolkata specializes in Mathematics, Science, English, and Social Science for Classes 5-10, with particular expertise in CBSE and ICSE board curricula. Math tutoring is our specialty in Kolkata."
    },
    {
      question: "How to choose the best tutor in Kolkata for my child?",
      answer: "When selecting a tutor in Kolkata, look for: 10+ years experience, proven track record (100% pass rate), subject specialization (especially Math & Science), personalized teaching approach, convenient location in Greenfield City, and positive parent testimonials."
    },
    {
      question: "What makes Sourabh Coaching Centre different from other tutors in Kolkata?",
      answer: "Unlike other tuition centers in Kolkata, we offer: Personalized one-on-one attention, topic-wise testing, 10+ years specialized experience, 100% pass rate, convenient Greenfield City location, flexible timing, and dedicated WhatsApp support for parents."
    },
    {
      question: "What is the fee structure for the best tutor in Kolkata?",
      answer: "Our tuition fees in Kolkata are competitive and vary based on class and subjects. Contact us at 8777688171 for detailed fee information. We offer quality education at affordable rates in Greenfield City, Kolkata."
    },
    {
      question: "Do you provide home tuition services in Kolkata?",
      answer: "Yes, we provide both center-based classes in Greenfield City and home tuition services across Kolkata including New Town, Salt Lake, and surrounding areas. Our tutor travels to student homes for convenient learning."
    },
    {
      question: "How to contact the best Math tutor in Kolkata?",
      answer: "You can contact Kolkata's best math tutor by calling 8777688171 or WhatsApp us for immediate response. Visit our center at 55-2C, Greenfield City, Jote Shibrampur, Kolkata - 700141."
    },
    {
      question: "What are the class timings for tuition in Kolkata?",
      answer: "Our tuition classes in Kolkata run Monday to Saturday from 3:00 PM to 9:00 PM. We also offer flexible timing based on student requirements. Sunday is reserved for doubt clearing sessions."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Frequently Asked Questions - Best Tutor in Kolkata
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions parents ask about finding the best tutor in Kolkata
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
