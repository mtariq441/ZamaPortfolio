import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Card } from "@/components/ui/card";
import { Target, Eye, Sparkles } from "lucide-react";

import tariqImage from "@assets/generated_images/Team_member_Muhammad_Tariq_cd319a3a.png";
import ubaidImage from "@assets/generated_images/Team_member_Muhammad_Ubaid_2bbebdfd.png";
import wahidImage from "@assets/generated_images/Team_member_Wahid_Graphix_62981481.png";
import ibrahimImage from "@assets/generated_images/Team_member_Muhammad_Ibrahim_73e4a6e7.png";

export default function About() {
  const team = [
    {
      name: "Muhammad Tariq",
      role: "Webflow Developer & Team Lead",
      image: tariqImage,
    },
    {
      name: "Muhammad Ubaid",
      role: "Full Stack / Frontend Developer",
      image: ubaidImage,
    },
    {
      name: "Wahid Graphix",
      role: "Graphic & Brand Designer",
      image: wahidImage,
    },
    {
      name: "Muhammad Ibrahim",
      role: "UI/UX & Marketing Assistant",
      image: ibrahimImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-about-title">
              About Zama Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four creative minds from Pakistan, united by a passion for digital excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 mt-1">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Zama Services was born from a simple idea: combining diverse creative talents 
                    to deliver exceptional digital solutions. Our four-member team brings together 
                    expertise in web development, design, and user experience to create impactful 
                    projects that drive real results.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 mt-1">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To help businesses stand out through smart design and functional web 
                    experiences that convert visitors into customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 mt-1">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a leading Pashtoon-led global creative agency, known for innovative 
                    solutions and exceptional client relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12" data-testid="text-team-title">
              Meet Our Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
          </div>

          <div className="mt-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description: "We never compromise on the quality of our work. Every project receives our full attention and expertise.",
                },
                {
                  title: "Client Partnership",
                  description: "Your success is our success. We work closely with clients to understand and achieve their goals.",
                },
                {
                  title: "Continuous Growth",
                  description: "We stay updated with the latest trends and technologies to deliver cutting-edge solutions.",
                },
              ].map((value, index) => (
                <Card key={index} className="p-8 text-center hover-elevate transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
