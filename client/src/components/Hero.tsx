import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Creative_agency_workspace_hero_ac65e607.png";

export default function Hero() {
  const [, setLocation] = useLocation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-tight" data-testid="text-hero-headline">
            WE BUILD DIGITAL
            <br />
            EXPERIENCES THAT
            <br />
            CONVERT
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtext">
            Zama Services excels in strategy, design, and technology to deliver
            world-class digital experiences designed to boost growth across 
            industries. Transform your ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-bold uppercase tracking-wide bg-accent hover:bg-accent/90 text-white"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-work"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-bold uppercase tracking-wide border-2"
              onClick={() => setLocation("/contact")}
              data-testid="button-get-quote"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
