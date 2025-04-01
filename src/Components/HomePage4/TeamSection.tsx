import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Jane Smith",
    position: "CEO & Founder",
    imgSrc: "src/assets/img/all-images/team-img5.png",
    socialIcons: [
      { src: "src/assets/img/icons/facebook5.svg", alt: "Facebook" },
      { src: "src/assets/img/icons/linkedin5.svg", alt: "LinkedIn" },
      { src: "src/assets/img/icons/instagram5.png", alt: "Instagram" },
      { src: "src/assets/img/icons/youtube1.svg", alt: "YouTube" },
    ],
    link: "/team",
  },
  {
    name: "John Doe",
    position: "Digital Marketing Officer",
    imgSrc: "src/assets/img/all-images/team-img6.png",
    socialIcons: [
      { src: "src/assets/img/icons/facebook5.svg", alt: "Facebook" },
      { src: "src/assets/img/icons/linkedin5.svg", alt: "LinkedIn" },
      { src: "src/assets/img/icons/instagram5.png", alt: "Instagram" },
      { src: "src/assets/img/icons/youtube1.svg", alt: "YouTube" },
    ],
    link: "/team",
  },
  {
    name: "Sarah Thompson",
    position: "Web Designer",
    imgSrc: "src/assets/img/all-images/team-img7.png",
    socialIcons: [
      { src: "src/assets/img/icons/facebook5.svg", alt: "Facebook" },
      { src: "src/assets/img/icons/linkedin5.svg", alt: "LinkedIn" },
      { src: "src/assets/img/icons/instagram5.png", alt: "Instagram" },
      { src: "src/assets/img/icons/youtube1.svg", alt: "YouTube" },
    ],
    link: "/team",
  },
  {
    name: "David Garcia",
    position: "Content Writer",
    imgSrc: "src/assets/img/all-images/team-img8.png",
    socialIcons: [
      { src: "src/assets/img/icons/facebook5.svg", alt: "Facebook" },
      { src: "src/assets/img/icons/linkedin5.svg", alt: "LinkedIn" },
      { src: "src/assets/img/icons/instagram5.png", alt: "Instagram" },
      { src: "src/assets/img/icons/youtube1.svg", alt: "YouTube" },
    ],
    link: "/team",
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="team5-section-area sp2" id="team">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <div className="team-header text-center heading10">
              <h5>
                <img
                  src="src/assets/img/icons/logo-icons6.svg"
                  alt="Team Icon"
                />
                Team
              </h5>
              <h2 className="text-anime-style-3">Meet Our Expert Team</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
            <Col
              lg={3}
              md={6}
              data-aos={index % 2 === 0 ? "zoom-in" : "zoom-out"}
              data-aos-duration={800 + index * 200}
              key={member.name}
            >
              <div className="team5-author-boxarea">
                <div className="imges image-anime">
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <div className="team-sociala-area">
                  <div className="icons">
                    <div className="plus">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="minus">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                  </div>
                  <div className="social-icons">
                    <ul>
                      {member.socialIcons.map((icon, idx) => (
                        <li key={idx}>
                          <Link to="/">
                            <img src={icon.src} alt={icon.alt} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="content-area">
                  <Link to={member.link}>{member.name}</Link>
                  <p>{member.position}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamSection;
