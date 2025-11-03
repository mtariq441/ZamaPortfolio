import TeamMemberCard from "@/components/TeamMemberCard";

import tariqImage from "@assets/Untitled design (14)_1762167613183.jpg";
import ubaidImage from "@assets/M.Ubaid_1762167228593.jpg";
import wahidImage from "@assets/Wahid Ullah_1762167134792.jpg";
import ibrahimImage from "@assets/generated_images/Team_member_Muhammad_Ibrahim_73e4a6e7.png";

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
      role: "UI/UX & Marketing Assistant",
      image: ibrahimImage,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-team-title">
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
