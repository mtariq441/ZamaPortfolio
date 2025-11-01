import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import project1 from "@assets/generated_images/E-commerce_project_mockup_31d889c3.png";
import project2 from "@assets/generated_images/Corporate_website_project_2a352df3.png";
import project3 from "@assets/generated_images/Brand_identity_project_b3258a40.png";
import project4 from "@assets/generated_images/Mobile_app_UI_project_967efc3f.png";

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with seamless checkout experience",
      category: "Web Development",
      image: project1,
      tools: ["Webflow", "JavaScript", "Stripe"],
    },
    {
      title: "Corporate Website",
      description: "Professional business site with custom CMS integration",
      category: "Web Development",
      image: project2,
      tools: ["React", "Node.js", "Tailwind"],
    },
    {
      title: "Brand Identity System",
      description: "Complete visual identity for tech startup",
      category: "Design",
      image: project3,
      tools: ["Figma", "Illustrator", "Photoshop"],
    },
    {
      title: "Mobile App UI/UX",
      description: "Intuitive interface design for fitness app",
      category: "Design",
      image: project4,
      tools: ["Figma", "Adobe XD", "Protopie"],
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
