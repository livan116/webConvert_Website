import React from "react";
import TeamMemberCard from "../Common/TeamMemberCard";
type TeamMember = {
  name: string;
  position: string;
  image: string;
  socials: { icon: string; link: string }[];
};

const TeamMembersSection: React.FC<{ title: string; data: TeamMember[] }> = ({
  title,
  data,
}) => {
  return (
    <div className="team-inner-section-area sp2 bg2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="team2-header-area heading2">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {data.map((member, index) => (
            <TeamMemberCard key={index} teamMember={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembersSection;
