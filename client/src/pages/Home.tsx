import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMini from "@/components/AboutMini";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutMini />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
