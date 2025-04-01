import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    imgSrc: "src/assets/img/all-images/team-img1.png",
    name: "John Doe",
    role: "CEO & Founder",
    socialLinks: [
      { imgSrc: "src/assets/img/icons/facebook1.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/instagram2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/linkedin2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/twitter1.svg", link: "#" },
    ],
    teamLink: "/team",
    aosDuration: 800,
  },
  {
    id: 2,
    imgSrc: "src/assets/img/all-images/team-img2.png",
    name: "Jane Smith",
    role: "Digital Marketing Officer",
    socialLinks: [
      { imgSrc: "src/assets/img/icons/facebook1.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/instagram2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/linkedin2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/twitter1.svg", link: "#" },
    ],
    teamLink: "/team",
    aosDuration: 1000,
  },
  {
    id: 3,
    imgSrc: "src/assets/img/all-images/team-img3.png",
    name: "Sarah Thompson",
    role: "Web Designer",
    socialLinks: [
      { imgSrc: "src/assets/img/icons/facebook1.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/instagram2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/linkedin2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/twitter1.svg", link: "#" },
    ],
    teamLink: "/team",
    aosDuration: 1200,
  },
  {
    id: 4,
    imgSrc: "src/assets/img/all-images/team-img4.png",
    name: "David Garcia",
    role: "Content Writer",
    socialLinks: [
      { imgSrc: "src/assets/img/icons/facebook1.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/instagram2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/linkedin2.svg", link: "#" },
      { imgSrc: "src/assets/img/icons/twitter1.svg", link: "#" },
    ],
    teamLink: "/team",
    aosDuration: 1400,
  },
];

const TeamSection = () => {
  return (
    <div className="team10-section-area sp2" id="team">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="team2-header-area text-center heading15">
              <h5>Our Team</h5>
              <h2 className="text-anime-style-3">Meet With Our Expert Team</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member) => (
            <Col
              lg={3}
              md={6}
              key={member.id}
              data-aos="zoom-in"
              data-aos-duration={member.aosDuration}
            >
              <div className="team-boxarea">
                <div className="img1">
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <ul>
                  {member.socialLinks.map((social, index) => (
                    <li key={index}>
                      <Link to={social.link}>
                        <img src={social.imgSrc} alt="" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="content">
                  <Link to={member.teamLink}>{member.name}</Link>
                  <p>{member.role}</p>
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
