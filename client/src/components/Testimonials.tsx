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
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight" data-testid="text-testimonials-title">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const quoteColor = index % 2 === 0 ? "text-primary" : "text-accent";
            return (
              <Card key={index} className="p-10 hover-elevate transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2" data-testid={`card-testimonial-${index}`}>
                <Quote className={`h-10 w-10 ${quoteColor} mb-6`} />
                <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-lg uppercase tracking-tight" data-testid={`text-testimonial-author-${index}`}>{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.company}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
