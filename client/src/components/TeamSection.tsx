import TeamMemberCard from "@/components/TeamMemberCard";

import tariqImage from "@assets/Untitled design (16)_1762168396966.jpg";
import ubaidImage from "@assets/Untitled design (15)_1762168237403.jpg";
import wahidImage from "@assets/Untitled design (19)_1762169025570.jpg";
import ibrahimImage from "@assets/Untitled design (18)_1762168713462.jpg";

export default function TeamSection() {
  const team = [
    {
      name: "Muhammad Tariq",
      role: "Full Stack Developer & Project Manager",
      image: tariqImage,
    },
    {
      name: "Muhammad Ubaid",
      role: "Frontend Developer & Logo Designer",
      image: ubaidImage,
    },
    {
      name: "Wahid Ullah",
      role: "Senior Graphic Designer & UI/UX Designer",
      image: wahidImage,
    },
    {
      name: "Muhammad Ibrahim",
      role: "Full Stack .NET Developer",
      image: ibrahimImage,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-tight" data-testid="text-team-title">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four creative minds from Pakistan, united by a passion for digital excellence
          </p>
        </div>
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
    </section>
  );
}
