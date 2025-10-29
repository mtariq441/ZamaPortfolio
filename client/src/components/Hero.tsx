import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Creative_agency_workspace_hero_ac65e607.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight" data-testid="text-hero-headline">
            We Build Digital Experiences That Convert.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-subtext">
            Zama Services is a creative digital agency specializing in Web Development and Graphic Design. 
            We craft smart, modern websites and visuals that help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-work"
            >
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 backdrop-blur-md bg-background/80"
              onClick={() => window.location.href = "/contact"}
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
