import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const workProcesses = [
  {
    id: 1,
    step: "01",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop a customized digital marketing strategy tailored to your objectives.",
    link: "/case-single",
  },
  {
    id: 2,
    step: "02",
    title: "Monitoring & Optimization",
    description:
      "We believe in the power of data-driven decision-making. Throughout the campaign, we continuously monitor and optimize.",
    link: "/case-single",
  },
  {
    id: 3,
    step: "03",
    title: "Continuous Improvement",
    description:
      "Digital marketing is an ever-evolving field, and we're committed to staying ahead of the curve.",
    link: "/case-single",
  },
];

const WorkProcessSection: React.FC = () => {
  return (
    <div className="work8-section-area sp1" id="work">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="work-header text-center heading13">
              <h5>Work Process</h5>
              <h2 className="text-anime-style-3">
                Why Partner With SEOC Your Path To{" "}
                <br className="d-lg-block d-none" /> SEO & Digital Marketing
                Success
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="img1">
              <img src="src/assets/img/all-images/work-img6.png" alt="" />
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}>
            <div className="head">
              <h4>SEOC Work Process</h4>
            </div>
            {workProcesses.map(({ id, step, title, description, link }) => (
              <div
                className={`works-boxarea ${id === 2 ? "auhtor" : ""}`}
                data-aos="fade-left"
                data-aos-duration={(id - 1) * 200 + 800}
                key={id}
              >
                <div className="list">
                  <h3>{step}</h3>
                </div>
                <div className="content">
                  <Link to={link}>{title}</Link>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorkProcessSection;
