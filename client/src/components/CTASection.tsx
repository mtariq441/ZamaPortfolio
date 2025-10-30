import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-40 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.1]" data-testid="text-cta-title">
            LET'S BUILD SOMETHING GREAT TOGETHER
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed font-light max-w-3xl mx-auto">
            Ready to take your business to the next level? Get in touch and let's create something amazing.
          </p>
          <Button
            size="lg"
            className="rounded-full px-12 py-7 mt-6 text-base font-semibold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 hover:shadow-2xl group"
            onClick={() => window.location.href = "/contact"}
            data-testid="button-start-project"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
