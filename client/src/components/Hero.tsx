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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[1.1]" data-testid="text-hero-headline">
            WE BUILD DIGITAL EXPERIENCES THAT CONVERT
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-light" data-testid="text-hero-subtext">
            Zama Services is a creative digital agency specializing in Web Development and Graphic Design. 
            We craft smart, modern websites and visuals that help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base font-semibold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border transition-all hover:scale-105 hover:shadow-2xl"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-work"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-base font-semibold uppercase tracking-wider backdrop-blur-md bg-background/80 transition-all hover:scale-105 hover:shadow-2xl"
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
