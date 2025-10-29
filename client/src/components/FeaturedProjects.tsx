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
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Explore our latest work and see how we transform ideas into reality
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f)}
                data-testid={`button-filter-${f.toLowerCase().replace(' ', '-')}`}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate group cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-full px-8" data-testid="button-view-portfolio">
            See Full Portfolio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
