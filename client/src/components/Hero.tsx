import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import heroImage from "@assets/generated_images/Creative_agency_workspace_hero_ac65e607.png";
import PremiumStats from "./PremiumStats";

export default function Hero() {
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    setIsVisible(true);
  }, []);
  
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
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className={`space-y-6 ${prefersReducedMotion ? '' : 'transform transition-all duration-1000'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 backdrop-blur-sm">
              <Sparkles className={`w-4 h-4 text-accent ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
              <span className="text-sm font-semibold tracking-wider uppercase text-accent">Premium Digital Solutions</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black tracking-tight uppercase leading-[0.95]" data-testid="text-hero-headline">
              WE BUILD{" "}
              <span className="relative inline-block">
                <span className={`bg-gradient-to-r from-accent via-primary to-purple-500 text-transparent bg-clip-text ${prefersReducedMotion ? '' : 'animate-pulse'}`}>
                  DIGITAL
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl -z-10"></div>
              </span>
              <br />
              EXPERIENCES
              <br />
              THAT{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  CONVERT
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-pink-500/20 blur-xl -z-10"></div>
              </span>
            </h1>
          </div>
          
          <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-light ${prefersReducedMotion ? '' : 'transform transition-all duration-1000 delay-200'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} data-testid="text-hero-subtext">
            Zama Services is a creative digital agency specializing in{" "}
            <span className="font-semibold text-accent">Web Development</span> and{" "}
            <span className="font-semibold text-primary">Graphic Design</span>. 
            We craft smart, modern websites and visuals that help your business grow.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 ${prefersReducedMotion ? '' : 'transform transition-all duration-1000 delay-300'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button
              size="lg"
              className="group rounded-full px-10 py-7 text-base font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white border-0 transition-all hover:scale-110 hover:shadow-2xl hover:shadow-accent/50"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-work"
            >
              <Sparkles className={`mr-2 h-5 w-5 ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-base font-bold uppercase tracking-wider backdrop-blur-md bg-background/90 border-2 border-accent/30 hover:border-accent transition-all hover:scale-110 hover:shadow-2xl hover:bg-background"
              onClick={() => setLocation("/contact")}
              data-testid="button-get-quote"
            >
              Get a Free Quote
            </Button>
          </div>

          <PremiumStats />
        </div>
      </div>
    </section>
  );
}
