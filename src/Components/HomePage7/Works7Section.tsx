import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const worksData = [
  {
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails.",
    img1Src: "src/assets/img/all-images/works-img3.png",
    img2Src: "src/assets/img/bg/work-bg3.png",
    duration: 800,
  },
  {
    title: "Competitor Analysis",
    description:
      "If you send a lot of bounced or unwanted emails this will leave a negative mark on your sender history.",
    img1Src: "src/assets/img/all-images/works-img4.png",
    img2Src: "src/assets/img/bg/work-bg4.png",
    duration: 1000,
  },
  {
    title: "Revenue Monitoring",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails.",
    img1Src: "src/assets/img/all-images/works-img5.png",
    img2Src: "src/assets/img/bg/work-bg5.png",
    duration: 1200,
  },
];

const Works7Section: React.FC = () => {
  return (
    <div className="works7-section-area sp2" id="solution">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="works7-header heading12 text-center">
              <h5>SEO Solution</h5>
              <h2 className="text-anime-style-3">
                An Amazing Family Of SEO Solution For Every Need
              </h2>
            </div>
          </Col>
        </Row>

        <Row>
          {worksData.map((work, index) => (
            <Col
              lg={4}
              md={6}
              data-aos="zoom-in"
              data-aos-duration={work.duration}
              key={index}
            >
              <div className="works-author-boxarea">
                <Link to="/">{work.title}</Link>
                <p>{work.description}</p>
                <div className="space24"></div>
                <div className="img1">
                  <img src={work.img1Src} alt={work.title} />
                </div>
                <div className="img2">
                  <img src={work.img2Src} alt={work.title} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Works7Section;
