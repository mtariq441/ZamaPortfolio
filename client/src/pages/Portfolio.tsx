import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import harliStudio from "@assets/✅ (17)_1761999784024.jpg";
import kazoaCoffee from "@assets/✅ (16)_1761999784025.jpg";
import domexoBurger from "@assets/✅ (15)_1761999784025.jpg";
import islandProperty from "@assets/✅ (14)_1761999784025.jpg";
import spinxJersey from "@assets/✅ (13)_1761999784025.jpg";
import mikPortfolio from "@assets/✅ (5)_1761999784026.png";
import dashboardDesign from "@assets/✅ (4)_1761999784026.png";
import dashboardDesign2 from "@assets/✅ (3)_1761999784026.png";
import usWoundCare from "@assets/✅ (2)_1761999784027.png";
import americanRoyal from "@assets/✅ (1)_1761999784027.png";
import luxuryRenovations from "@assets/✅ (29)_1762037945184.jpg";
import babaWaliKhan from "@assets/✅ (28)_1762037945185.jpg";
import aureliaAgency from "@assets/✅ (26)_1762037945185.jpg";
import youWelzAgency from "@assets/✅ (25)_1762037945185.jpg";
import sirpiMedical from "@assets/✅ (24)_1762037945185.jpg";
import viveHealth from "@assets/✅ (23)_1762037945186.jpg";
import footstepsGreatness from "@assets/✅ (22)_1762037945186.jpg";
import oryfiveAgency from "@assets/✅ (21)_1762037945186.jpg";
import electronicz from "@assets/✅ (20)_1762037945186.jpg";
import risaInfrastructure from "@assets/✅ (19)_1762037945187.jpg";
import proximityArchery from "@assets/✅ (18)_1762037945187.jpg";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "American Royal",
      description: "Premium luxury renovations website with modern design and compelling CTAs",
      category: "Web Development",
      image: americanRoyal,
      tools: ["React", "Tailwind CSS", "Responsive Design"],
      client: "American Royal Renovations",
    },
    {
      title: "US Wound Care",
      description: "Healthcare website for mobile in-home wound care services in Texas, Oklahoma, and Louisiana",
      category: "Web Development",
      image: usWoundCare,
      tools: ["Webflow", "Figma to Webflow"],
      client: "US Wound Care",
    },
    {
      title: "MIK Portfolio",
      description: "Personal portfolio website showcasing comprehensive digital solutions and security expertise",
      category: "Web Development",
      image: mikPortfolio,
      tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
      client: "Muhammad Irshad Khan",
    },
    {
      title: "Business Dashboard",
      description: "Modern business dashboard with advanced analytics and vendor management",
      category: "Web Development",
      image: dashboardDesign,
      tools: ["React", "Chart.js", "Material UI"],
      client: "Enterprise Solutions",
    },
    {
      title: "Analytics Dashboard",
      description: "Clean dashboard interface for business leadership and metrics tracking",
      category: "Web Development",
      image: dashboardDesign2,
      tools: ["React", "TypeScript", "D3.js"],
      client: "Business Analytics Pro",
    },
    {
      title: "Harli Studio",
      description: "Elegant and sophisticated logo design for creative studio brand identity",
      category: "Design",
      image: harliStudio,
      tools: ["Illustrator", "Photoshop", "Logo Design"],
      client: "Harli Studio",
    },
    {
      title: "Kazoa Coffee",
      description: "Fresh and modern coffee brand identity with distinctive logo design",
      category: "Design",
      image: kazoaCoffee,
      tools: ["Illustrator", "Brand Identity", "Typography"],
      client: "Kazoa Coffee",
    },
    {
      title: "Domexo Burger",
      description: "Playful and eye-catching restaurant logo for burger franchise",
      category: "Design",
      image: domexoBurger,
      tools: ["Illustrator", "Logo Design", "Brand Assets"],
      client: "Domexo Burger",
    },
    {
      title: "Island Property",
      description: "Sophisticated logo design for luxury property and real estate services",
      category: "Design",
      image: islandProperty,
      tools: ["Illustrator", "Photoshop", "Logo Design"],
      client: "Island Property",
    },
    {
      title: "Spinx Jersey",
      description: "Bold and dynamic sports brand logo for jersey and athletic wear",
      category: "Design",
      image: spinxJersey,
      tools: ["Illustrator", "Brand Design", "Sports Graphics"],
      client: "Spinx Jersey",
    },
    {
      title: "Luxury Renovations",
      description: "Premium NYC contractor website with modern design, compelling CTAs and showcase of 250+ projects",
      category: "Web Development",
      image: luxuryRenovations,
      tools: ["Webflow", "Responsive Design", "Custom Forms"],
      client: "American Royal Renovations",
    },
    {
      title: "Baba Wali Khan University",
      description: "Comprehensive educational institution website with admissions portal and academic information",
      category: "Web Development",
      image: babaWaliKhan,
      tools: ["Webflow", "CMS Integration", "Responsive Design"],
      client: "Baba Wali Khan University",
    },
    {
      title: "Aurelia Creative Agency",
      description: "Bold and vibrant creative agency website showcasing branding, graphic design, and web design services",
      category: "Web Development",
      image: aureliaAgency,
      tools: ["Webflow", "Animation", "Creative Design"],
      client: "Aurelia Creative Agency",
    },
    {
      title: "YouWelz Agency",
      description: "Marketing and creative agency website bringing action to brands through digital solutions",
      category: "Web Development",
      image: youWelzAgency,
      tools: ["Webflow", "Brand Design", "Marketing"],
      client: "YouWelz Marketing Agency",
    },
    {
      title: "Dr. Sirpi Medical",
      description: "Professional medical website for hair and skin specialist with Harvard credentials",
      category: "Web Development",
      image: sirpiMedical,
      tools: ["Webflow", "Medical Design", "Appointment System"],
      client: "Dr. Joe Mathew - Sirpi Clinic",
    },
    {
      title: "Vive Health",
      description: "Healthcare delivery platform website focused on transforming patient care with confidence and efficiency",
      category: "Web Development",
      image: viveHealth,
      tools: ["Webflow", "Healthcare UX", "Responsive Design"],
      client: "Vive Health",
    },
    {
      title: "Footsteps of Greatness",
      description: "Inspiring website celebrating Vienna's rich cultural heritage and historical achievements",
      category: "Web Development",
      image: footstepsGreatness,
      tools: ["Webflow", "Dark Theme", "Premium Design"],
      client: "Footsteps of Greatness",
    },
    {
      title: "Oryfive Creative Agency",
      description: "Creative agency website driving success with innovative solutions in strategy consulting and digital marketing",
      category: "Web Development",
      image: oryfiveAgency,
      tools: ["Webflow Template", "Agency Design", "Modern UI"],
      client: "Oryfive Creative Agency",
    },
    {
      title: "Electronicz E-commerce",
      description: "Modern e-commerce website for electronics with innovation meets excellence theme",
      category: "Web Development",
      image: electronicz,
      tools: ["Webflow", "E-commerce", "Product Catalog"],
      client: "Electronicz",
    },
    {
      title: "RISA Infrastructure",
      description: "Construction and infrastructure company website building Norway's future with 600+ employees",
      category: "Web Development",
      image: risaInfrastructure,
      tools: ["Webflow", "Corporate Design", "Project Showcase"],
      client: "RISA Infrastructure",
    },
    {
      title: "Proximity Archery",
      description: "Data analytics website unlocking customer data with modern design and bold orange accents",
      category: "Web Development",
      image: proximityArchery,
      tools: ["Webflow", "Data Visualization", "Modern UI"],
      client: "Proximity Archery",
    },
  ];

  const filters = ["All", "Web Development", "Design"];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-portfolio-title">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our work and see how we've helped businesses grow with creative digital solutions
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((f) => (
                <Button
                  key={f}
                  variant={filter === f ? "default" : "outline"}
                  onClick={() => setFilter(f)}
                  className={filter === f ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
                  data-testid={`button-filter-portfolio-${f.toLowerCase().replace(' ', '-')}`}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                data-testid={`card-portfolio-project-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-muted/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-sm text-primary-foreground">View Case Study →</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-xl" data-testid={`text-portfolio-title-${index}`}>
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="ml-2">
                      {project.category === "Web Development" ? "Dev" : "Design"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.client}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
