import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import harliStudio from "@assets/✅ (17)_1761999784024.jpg";
import kazoaCoffee from "@assets/✅ (16)_1761999784025.jpg";
import domexoBurger from "@assets/✅ (15)_1761999784025.jpg";
import islandProperty from "@assets/✅ (14)_1761999784025.jpg";
import mikPortfolio from "@assets/✅ (5)_1761999784026.png";
import dashboardDesign from "@assets/✅ (4)_1761999784026.png";
import usWoundCare from "@assets/✅ (2)_1761999784027.png";
import americanRoyal from "@assets/✅ (1)_1761999784027.png";

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "American Royal",
      description: "Premium luxury renovations website design",
      category: "Web Development",
      image: americanRoyal,
      tools: ["React", "Tailwind", "Responsive Design"],
    },
    {
      title: "US Wound Care",
      description: "Healthcare website for mobile in-home wound care services",
      category: "Web Development",
      image: usWoundCare,
      tools: ["Webflow", "Figma to Webflow"],
    },
    {
      title: "MIK Portfolio",
      description: "Personal portfolio website for digital solutions expert",
      category: "Web Development",
      image: mikPortfolio,
      tools: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Dashboard Design",
      description: "Modern business dashboard with advanced analytics",
      category: "Web Development",
      image: dashboardDesign,
      tools: ["React", "Chart.js", "Material UI"],
    },
    {
      title: "Harli Studio",
      description: "Elegant logo design for creative studio brand",
      category: "Design",
      image: harliStudio,
      tools: ["Illustrator", "Photoshop", "Logo Design"],
    },
    {
      title: "Kazoa Coffee",
      description: "Fresh coffee brand identity and logo design",
      category: "Design",
      image: kazoaCoffee,
      tools: ["Illustrator", "Brand Identity", "Typography"],
    },
    {
      title: "Domexo Burger",
      description: "Playful restaurant logo for burger franchise",
      category: "Design",
      image: domexoBurger,
      tools: ["Illustrator", "Logo Design", "Brand Assets"],
    },
    {
      title: "Island Property",
      description: "Sophisticated logo for luxury property services",
      category: "Design",
      image: islandProperty,
      tools: ["Illustrator", "Photoshop", "Logo Design"],
    },
  ];

  const filters = ["All", "Web Development", "Design"];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight" data-testid="text-projects-title">
            FEATURED PROJECTS
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Explore our latest work and see how we transform ideas into reality
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="lg"
                onClick={() => setFilter(f)}
                className={`rounded-full px-8 font-semibold uppercase tracking-wider border-2 ${filter === f ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}
                data-testid={`button-filter-${f.toLowerCase().replace(' ', '-')}`}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3 uppercase tracking-tight" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <Badge key={idx} variant={idx === 0 ? "default" : "secondary"} className={`transition-all hover:scale-110 text-sm px-3 py-1 font-medium ${idx === 0 ? "bg-accent/20 text-accent border-accent/30" : ""}`}>
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-full px-10 py-6 text-base font-semibold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 hover:shadow-2xl group" data-testid="button-view-portfolio">
            See Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
