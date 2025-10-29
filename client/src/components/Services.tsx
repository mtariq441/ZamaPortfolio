import { Code2, Palette, Search, Bot, Settings, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: Code2,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      features: [
        "Webflow Websites",
        "Custom-Coded Sites",
        "SEO Optimization",
        "AI Chatbot Integration",
        "Website Maintenance",
      ],
    },
    {
      title: "Graphic Design",
      icon: Palette,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      features: [
        "Brand Identity Design",
        "Logo & Visual Systems",
        "UI/UX Design",
        "Marketing Materials",
        "Social Media Graphics",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive online
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 hover-elevate" data-testid={`card-service-${index}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${service.iconBg}`}>
                    <Icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start" data-testid={`text-feature-${index}-${idx}`}>
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-full px-8" data-testid="button-explore-services">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
