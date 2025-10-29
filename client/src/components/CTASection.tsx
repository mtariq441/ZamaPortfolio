import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-cta-title">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Ready to take your business to the next level? Get in touch and let's create something amazing.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8 mt-4"
            onClick={() => window.location.href = "/contact"}
            data-testid="button-start-project"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
