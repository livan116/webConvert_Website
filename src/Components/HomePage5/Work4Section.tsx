import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const workProcesses = [
  {
    title: "Strategy Development",
    description: `Based on our findings, we develop customized digital marketing strategy tailored objective.`,
    iconSrc: "assets/img/icons/works-icon1.png",
    link: "/case-single",
  },
  {
    title: "Monitoring & Optimization",
    description: `We believe in the power of data-driven decision-making. Throughout the campaign,`,
    iconSrc: "assets/img/icons/works-icon2.png",
    link: "/case-single",
  },
  {
    title: "Continuous Improvement",
    description: `Digital marketing is an ever-evolving field, and we're committed to staying ahead of the curve.`,
    iconSrc: "assets/img/icons/works-icon3.png",
    link: "/case-single",
  },
];

const Work4Section: React.FC = () => {
  return (
    <div className="work4-section-area sp1" id="work">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="work2-header text-center heading6">
              <h5>Work Process</h5>
              <h2 className="text-anime-style-3">
                Why Partner with SEOC Your Path to SEO & Digital Marketing
                Success
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="work-images">
              <img src="src/assets/img/all-images/work-img2.png" alt="" />
            </div>
          </Col>
          <Col lg={1} />
          <Col lg={5}>
            <div className="all-boxes-area">
              {workProcesses.map((process, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`work-process-area ${index === 1 ? "work2" : ""}`}
                    data-aos="fade-up"
                    data-aos-duration={(800 + index * 200).toString()}
                  >
                    <div className="icons">
                      <img src={`src/${process.iconSrc}`} alt="" />
                    </div>
                    <div className="content-area">
                      <Link to={process.link}>{process.title}</Link>
                      <p>{process.description}</p>
                    </div>
                  </div>
                  {index < workProcesses.length - 1 && (
                    <div className="space30"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work4Section;
