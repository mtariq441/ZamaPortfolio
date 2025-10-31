import { Link } from "wouter";
import { SiInstagram, SiLinkedin, SiBehance } from "react-icons/si";
import logoImage from "@assets/ZAMA LOGO-1_1_1@500x_1761945924134.png";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Web Development",
    "Graphic Design",
    "Brand Identity",
    "SEO Optimization",
    "UI/UX Design",
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center transition-transform hover:scale-105">
              <img src={logoImage} alt="Zama Services Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creative digital agency specializing in Web Development and Graphic Design.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
                data-testid="link-behance"
                aria-label="Behance"
              >
                <SiBehance className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              info@zamaservices.com
            </p>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Zama Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
