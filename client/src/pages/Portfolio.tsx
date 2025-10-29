import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import project1 from "@assets/generated_images/E-commerce_project_mockup_31d889c3.png";
import project2 from "@assets/generated_images/Corporate_website_project_2a352df3.png";
import project3 from "@assets/generated_images/Brand_identity_project_b3258a40.png";
import project4 from "@assets/generated_images/Mobile_app_UI_project_967efc3f.png";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with seamless checkout and inventory management",
      category: "Web Development",
      image: project1,
      tools: ["Webflow", "JavaScript", "Stripe API"],
      client: "RetailCo",
    },
    {
      title: "Corporate Website",
      description: "Professional business site with custom CMS and blog integration",
      category: "Web Development",
      image: project2,
      tools: ["React", "Node.js", "Tailwind CSS"],
      client: "Business Solutions Ltd",
    },
    {
      title: "Brand Identity System",
      description: "Complete visual identity including logo, colors, and brand guidelines",
      category: "Design",
      image: project3,
      tools: ["Figma", "Illustrator", "Photoshop"],
      client: "TechStart Inc",
    },
    {
      title: "Mobile App UI/UX",
      description: "Intuitive interface design for health and fitness tracking application",
      category: "Design",
      image: project4,
      tools: ["Figma", "Adobe XD", "Protopie"],
      client: "FitLife App",
    },
    {
      title: "Restaurant Website",
      description: "Beautiful menu showcase with online ordering capabilities",
      category: "Web Development",
      image: project1,
      tools: ["Webflow", "JavaScript", "Google Maps API"],
      client: "Taste of Karachi",
    },
    {
      title: "Social Media Branding",
      description: "Consistent visual templates and graphics for social platforms",
      category: "Design",
      image: project3,
      tools: ["Canva", "Photoshop", "Illustrator"],
      client: "Digital Marketing Pro",
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
                className="overflow-hidden hover-elevate group cursor-pointer"
                data-testid={`card-portfolio-project-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
