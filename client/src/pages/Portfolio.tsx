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
      tools: ["HTML", "CSS", "JavaScript"],
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
