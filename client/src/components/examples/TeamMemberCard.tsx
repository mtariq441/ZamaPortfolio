import TeamMemberCard from "../TeamMemberCard";
import teamImage from "@assets/generated_images/Team_member_Muhammad_Tariq_cd319a3a.png";

export default function TeamMemberCardExample() {
  return (
    <div className="max-w-xs">
      <TeamMemberCard
        name="Muhammad Tariq"
        role="Webflow Developer & Team Lead"
        image={teamImage}
      />
    </div>
  );
}
