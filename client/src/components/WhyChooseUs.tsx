import { Users, Zap, Sparkles, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Creative Team",
      description: "Diverse perspectives bringing unique insights to every project",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Fast & Scalable Solutions",
      description: "Modern tech stack ensuring your website grows with your business",
      color: "accent",
    },
    {
      icon: Sparkles,
      title: "100% Custom Designs",
      description: "No templates. Every design is crafted specifically for your brand",
      color: "primary",
    },
    {
      icon: MessageCircle,
      title: "Friendly Support",
      description: "Clear communication and ongoing support throughout your journey",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight" data-testid="text-why-choose-title">
            WHY CHOOSE ZAMA SERVICES
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            We combine creativity, technology, and dedication to deliver exceptional results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colorClass = reason.color === "accent" ? "bg-accent/10" : "bg-primary/10";
            const iconColorClass = reason.color === "accent" ? "text-accent" : "text-primary";
            return (
              <Card key={index} className="p-8 text-center border" data-testid={`card-reason-${index}`}>
                <div className={`inline-flex p-5 rounded-full ${colorClass} mb-6`}>
                  <Icon className={`h-8 w-8 ${iconColorClass}`} />
                </div>
                <h3 className="font-bold text-xl mb-3 uppercase tracking-tight">{reason.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
