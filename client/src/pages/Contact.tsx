import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { SiInstagram, SiLinkedin, SiBehance } from "react-icons/si";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight" data-testid="text-contact-title">
              LET'S BRING YOUR VISION TO LIFE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Ready to start your next project? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-3">
              <Card className="p-10 border-2">
                <h2 className="font-display text-3xl font-black mb-8 uppercase tracking-tight">Send us a Message</h2>
                <ContactForm />
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8 border-2">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-tight">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@zamaservices.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-email"
                      >
                        info@zamaservices.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-muted-foreground">Available 9 AM - 6 PM PKT</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-tight">Follow Us</h3>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all hover:translate-x-2"
                    data-testid="link-contact-instagram"
                  >
                    <SiInstagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all hover:translate-x-2"
                    data-testid="link-contact-linkedin"
                  >
                    <SiLinkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all hover:translate-x-2"
                    data-testid="link-contact-behance"
                  >
                    <SiBehance className="h-5 w-5" />
                    <span>Behance</span>
                  </a>
                </div>
              </Card>

              <Card className="p-8 bg-accent text-accent-foreground border-2 border-accent">
                <h3 className="font-bold text-xl mb-3 uppercase tracking-tight">Quick Response</h3>
                <p className="text-base mb-6 text-accent-foreground/90">
                  We typically respond to all inquiries within 24 hours
                </p>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/", "_blank")}
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
