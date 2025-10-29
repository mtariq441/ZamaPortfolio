import { Card } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-team-${name.toLowerCase().replace(' ', '-')}`}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-semibold text-lg mb-1" data-testid={`text-team-name-${name.toLowerCase().replace(' ', '-')}`}>{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </Card>
  );
}
