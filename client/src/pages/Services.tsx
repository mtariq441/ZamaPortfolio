import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Search, Bot, Settings, Rocket, Pen, Smartphone, FileText, Megaphone } from "lucide-react";

export default function ServicesPage() {
  const webDevFeatures = [
    { icon: Code2, title: "Webflow & Custom Websites", description: "Professional websites built with modern tools" },
    { icon: Search, title: "SEO Integration", description: "Optimized for search engines from day one" },
    { icon: FileText, title: "CMS & Dynamic Content", description: "Easy-to-manage content systems" },
    { icon: Bot, title: "AI Chatbot + Automation", description: "Smart integrations for better user experience" },
    { icon: Settings, title: "Website Optimization", description: "Fast, secure, and reliable performance" },
    { icon: Rocket, title: "Ongoing Maintenance", description: "Keep your site running smoothly" },
  ];

  const designFeatures = [
    { icon: Palette, title: "Logo & Brand Identity", description: "Memorable visual identities that stand out" },
    { icon: Smartphone, title: "UI/UX Design for Apps", description: "Intuitive interfaces users love" },
    { icon: Megaphone, title: "Marketing & Social Media", description: "Eye-catching graphics for all platforms" },
    { icon: FileText, title: "Print & Digital Ads", description: "Professional materials for any medium" },
    { icon: Pen, title: "Custom Illustrations", description: "Unique visuals tailored to your brand" },
    { icon: Sparkles, title: "Brand Guidelines", description: "Consistent visual systems for growth" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-services-page-title">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to help your business thrive in the modern world
            </p>
          </div>

          <div className="space-y-24">
            <div>
              <div className="mb-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold">Web Development</h2>
                    <p className="text-muted-foreground text-lg mt-2">
                      Build powerful, scalable websites that drive results
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webDevFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-6 hover-elevate" data-testid={`card-webdev-${index}`}>
                      <Icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-lg bg-accent/10">
                    <Palette className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold">Graphic Design</h2>
                    <p className="text-muted-foreground text-lg mt-2">
                      Create stunning visuals that capture attention and build trust
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-6 hover-elevate" data-testid={`card-design-${index}`}>
                      <Icon className="h-8 w-8 text-accent mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  );
}
