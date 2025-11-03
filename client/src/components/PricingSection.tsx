import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import PricingFormDialog from "@/components/PricingFormDialog";

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState<{
    service: string;
    price: string;
  } | null>(null);

  const pricingPackages = [
    {
      title: "Logo Design",
      price: "$50",
      description: "Professional logo design for your brand",
      features: [
        "3 initial concepts",
        "2 rounds of revisions",
        "High-resolution files",
        "Vector formats (AI, SVG)",
        "Social media sizes",
        "7-day delivery",
      ],
      popular: false,
      color: "primary",
    },
    {
      title: "Landing Page",
      price: "$100",
      description: "Custom landing page to convert visitors",
      features: [
        "Responsive design",
        "Modern UI/UX",
        "Contact form integration",
        "SEO optimized",
        "Mobile-first approach",
        "14-day delivery",
      ],
      popular: true,
      color: "accent",
    },
    {
      title: "Monthly Maintenance",
      price: "$300/mo",
      description: "Ongoing support and updates for your site",
      features: [
        "Regular updates",
        "Performance monitoring",
        "Security patches",
        "Content updates",
        "Bug fixes",
        "Priority support",
      ],
      popular: false,
      color: "primary",
    },
  ];

  const handlePackageSelect = (title: string, price: string) => {
    setSelectedPackage({ service: title, price });
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 uppercase tracking-tight" data-testid="text-pricing-title">
            Simple Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Choose the package that fits your needs. No hidden fees, transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto pt-6">
          {pricingPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-300 md:hover:-translate-y-2 ${
                pkg.popular ? "md:scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-accent text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-lg">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card
                className={`relative transition-all duration-300 hover:shadow-2xl border-2 h-full ${
                  pkg.popular
                    ? "border-accent shadow-xl bg-gradient-to-br from-accent/5 to-transparent"
                    : index === 0
                    ? "border-primary/20 hover:border-primary/40"
                    : "border-primary/20 hover:border-primary/40"
                }`}
                data-testid={`card-pricing-home-${index}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent rounded-t-lg"></div>
                )}

              <CardHeader className={`text-center pb-4 sm:pb-6 pt-8 sm:pt-10 px-4 sm:px-6 ${pkg.popular ? "bg-gradient-to-b from-accent/10 to-transparent" : ""}`}>
                <div className={`inline-flex mx-auto mb-4 p-4 rounded-2xl ${
                  pkg.color === "accent" 
                    ? "bg-gradient-to-br from-accent/20 to-accent/10" 
                    : "bg-gradient-to-br from-primary/20 to-primary/10"
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pkg.color === "accent"
                      ? "bg-accent/20 text-accent"
                      : "bg-primary/20 text-primary"
                  }`}>
                    {pkg.title === "Logo Design" && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    )}
                    {pkg.title === "Landing Page" && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {pkg.title === "Monthly Maintenance" && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-xl sm:text-2xl mb-2 font-bold" data-testid={`text-package-home-title-${index}`}>
                  {pkg.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-3 sm:mb-4 px-2">{pkg.description}</p>
                <div className="mt-3 sm:mt-4">
                  <span className={`text-4xl sm:text-5xl font-bold ${pkg.color === "accent" ? "text-accent" : "text-primary"}`} data-testid={`text-package-home-price-${index}`}>
                    {pkg.price.split("/")[0]}
                  </span>
                  {pkg.price.includes("/") && (
                    <span className="text-muted-foreground ml-1 text-sm">/month</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 pb-6 sm:pb-8 px-4 sm:px-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 p-0.5 rounded-full ${
                        pkg.color === "accent" ? "bg-accent/20" : "bg-primary/20"
                      }`}>
                        <Check className={`h-4 w-4 ${
                          pkg.color === "accent" ? "text-accent" : "text-primary"
                        }`} />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full font-semibold uppercase tracking-wide transition-all duration-300 ${
                    pkg.color === "accent"
                      ? "bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-accent/50"
                      : "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/50"
                  }`}
                  onClick={() => handlePackageSelect(pkg.title, pkg.price)}
                  data-testid={`button-select-package-home-${index}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-muted-foreground text-base sm:text-lg">
            Need a custom package?{" "}
            <a href="/contact" className="text-accent hover:text-accent/80 font-semibold hover:underline transition-colors">
              Contact us
            </a>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>

      {selectedPackage && (
        <PricingFormDialog
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          service={selectedPackage.service}
          price={selectedPackage.price}
        />
      )}
    </section>
  );
}
