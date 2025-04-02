import React, { useEffect, useState } from "react";
import TeamMemberCard from "../Common/TeamMemberCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "../assets/img/all-images/team-img1.png",
    socials: [
      { icon: "../assets/img/icons/facebook.svg", link: "#" },
      { icon: "../assets/img/icons/instagram.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin.svg", link: "#" },
      { icon: "../assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Jane Smith",
    position: "Digital Marketing Officer",
    image: "../assets/img/all-images/team-img2.png",
    socials: [
      { icon: "../assets/img/icons/facebook.svg", link: "#" },
      { icon: "../assets/img/icons/instagram.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin.svg", link: "#" },
      { icon: "../assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Sarah Thompson",
    position: "Web Designer",
    image: "../assets/img/all-images/team-img3.png",
    socials: [
      { icon: "../assets/img/icons/facebook.svg", link: "#" },
      { icon: "../assets/img/icons/instagram.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin.svg", link: "#" },
      { icon: "../assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "David Garcia",
    position: "Content Writer",
    image: "../assets/img/all-images/team-img4.png",
    socials: [
      { icon: "../assets/img/icons/facebook.svg", link: "#" },
      { icon: "../assets/img/icons/instagram.svg", link: "#" },
      { icon: "../assets/img/icons/linkedin.svg", link: "#" },
      { icon: "../assets/img/icons/youtube.svg", link: "#" },
    ],
  },
];

const TeamSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="team-inner-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="team2-header-area text-center heading2">
              <h5>Our Team</h5>
              <h2>Meet With Our Expert Team</h2>
            </div>
          </div>
        </div>

        {isMobile ? (
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-2">
                <TeamMemberCard teamMember={member} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="row">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} teamMember={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
