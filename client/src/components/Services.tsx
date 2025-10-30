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
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight" data-testid="text-services-title">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive online
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-10 md:p-12 hover-elevate transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2" data-testid={`card-service-${index}`}>
                <div className="flex items-center space-x-5 mb-8">
                  <div className={`p-4 rounded-xl ${service.iconBg}`}>
                    <Icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start" data-testid={`text-feature-${index}-${idx}`}>
                      <span className="text-accent mr-3 text-xl font-bold">•</span>
                      <span className="text-muted-foreground text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base font-semibold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-xl border-2" data-testid="button-explore-services">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
