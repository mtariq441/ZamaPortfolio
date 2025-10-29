import { Users, Zap, Sparkles, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Creative Pashtoon Team",
      description: "Diverse perspectives bringing unique cultural insights to every project",
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="text-why-choose-title">
            Why Choose Zama Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine creativity, technology, and dedication to deliver exceptional results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colorClass = reason.color === "accent" ? "bg-accent/10" : "bg-primary/10";
            const iconColorClass = reason.color === "accent" ? "text-accent" : "text-primary";
            return (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-reason-${index}`}>
                <div className={`inline-flex p-4 rounded-full ${colorClass} mb-4`}>
                  <Icon className={`h-6 w-6 ${iconColorClass}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
