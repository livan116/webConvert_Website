import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "../assets/img/all-images/team-img1.png",
    socials: [
      { icon: "../assets/img/icons/facebook1.svg", link: "#" },
      { icon: "../assets/img/icons/instagram3.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin2.svg", link: "#" },
      { icon: "../assets/img/icons/twitter1.svg", link: "#" },
    ],
  },
  {
    name: "Jane Smith",
    position: "Digital Marketing Officer",
    image: "../assets/img/all-images/team-img2.png",
    socials: [
      { icon: "../assets/img/icons/facebook1.svg", link: "#" },
      { icon: "../assets/img/icons/instagram3.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin2.svg", link: "#" },
      { icon: "../assets/img/icons/twitter1.svg", link: "#" },
    ],
  },
  {
    name: "Sarah Thompson",
    position: "Web Designer",
    image: "../assets/img/all-images/team-img3.png",
    socials: [
      { icon: "../assets/img/icons/facebook1.svg", link: "#" },
      { icon: "../assets/img/icons/instagram3.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin2.svg", link: "#" },
      { icon: "../assets/img/icons/twitter1.svg", link: "#" },
    ],
  },
  {
    name: "David Garcia",
    position: "Content Writer",
    image: "../assets/img/all-images/team-img4.png",
    socials: [
      { icon: "../assets/img/icons/facebook1.svg", link: "#" },
      { icon: "../assets/img/icons/instagram3.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin2.svg", link: "#" },
      { icon: "../assets/img/icons/twitter1.svg", link: "#" },
    ],
  },
];

const Team2Section: React.FC<{ className?: string; heading?: string }> = ({
  className,
  heading,
}) => {
  return (
    <div
      className={`${className ? className : "team2-section-area"} sp2`}
      id="team"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div
              className={`team2-header-area text-center ${
                heading ? heading : "heading4"
              }`}
            >
              <h5>Our Team</h5>
              <h2>Meet With Our Expert Team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} teamMember={member} blurBackground />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team2Section;
