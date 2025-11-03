import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PricingFormDialog from "@/components/PricingFormDialog";

export default function Pricing() {
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
    },
  ];

  const handlePackageSelect = (title: string, price: string) => {
    setSelectedPackage({ service: title, price });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-pricing-title">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  pkg.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2" data-testid={`text-package-title-${index}`}>
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="mb-4">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold" data-testid={`text-package-price-${index}`}>
                      {pkg.price.split("/")[0]}
                    </span>
                    {pkg.price.includes("/") && (
                      <span className="text-muted-foreground ml-1">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => handlePackageSelect(pkg.title, pkg.price)}
                    data-testid={`button-select-package-${index}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Need a custom package?{" "}
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Contact us
              </a>{" "}
              for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {selectedPackage && (
        <PricingFormDialog
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          service={selectedPackage.service}
          price={selectedPackage.price}
        />
      )}
    </div>
  );
}
