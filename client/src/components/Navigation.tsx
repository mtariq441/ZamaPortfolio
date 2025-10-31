import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/ZAMA LOGO-1_1_1@500x_1761945924134.png";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center transition-transform hover:scale-105 flex-shrink-0">
            <img src={logoImage} alt="Zama Services Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full whitespace-nowrap ${
                  location === link.href ? "text-primary after:w-full" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex flex-shrink-0">
            <Button asChild className="rounded-full px-6 py-2 font-semibold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105" data-testid="button-get-quote">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            className="lg:hidden flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="flex flex-col space-y-4 px-4 sm:px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-all hover:text-primary hover:translate-x-2 ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full font-semibold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground" data-testid="button-mobile-quote">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
