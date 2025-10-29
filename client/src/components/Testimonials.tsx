import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Zama Services transformed our online presence. The website they built is not only beautiful but also drives real results for our business.",
      author: "Sarah Johnson",
      company: "TechStart Inc",
    },
    {
      quote: "Working with the team was a breeze. They understood our vision perfectly and delivered beyond our expectations. Highly recommend!",
      author: "Ahmed Khan",
      company: "GreenLeaf Co",
    },
    {
      quote: "The branding work they did for us was exceptional. Our new visual identity has helped us stand out in a crowded market.",
      author: "Emily Chen",
      company: "Wellness Hub",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const quoteColor = index % 2 === 0 ? "text-primary" : "text-accent";
            return (
              <Card key={index} className="p-8 hover-elevate transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-testid={`card-testimonial-${index}`}>
                <Quote className={`h-8 w-8 ${quoteColor} mb-4`} />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold" data-testid={`text-testimonial-author-${index}`}>{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
