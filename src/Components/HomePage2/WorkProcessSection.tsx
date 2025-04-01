import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Define the type for process step
interface ProcessStepProps {
  iconSrc: string;
  title: string;
  description: string;
  link: string;
  aosDuration: number;
}

// Array of process steps
const processSteps: ProcessStepProps[] = [
  {
    iconSrc: "assets/img/icons/works-icon1.png",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop customized digital marketing strategy tailored objective.",
    link: "/case-single",
    aosDuration: 1200,
  },
  {
    iconSrc: "assets/img/icons/works-icon2.png",
    title: "Monitoring & Optimization",
    description:
      "We believe in the power of data-driven decision-making. Throughout the campaign,",
    link: "/case-single",
    aosDuration: 1400,
  },
  {
    iconSrc: "assets/img/icons/works-icon3.png",
    title: "Continuous Improvement",
    description:
      "Digital marketing is an ever-evolving field, and we're committed to staying ahead of the curve.",
    link: "/case-single",
    aosDuration: 1600,
  },
];

// ProcessStep component
const ProcessStep: React.FC<ProcessStepProps> = ({
  iconSrc,
  title,
  description,
  link,
  aosDuration,
}) => {
  return (
    <div
      className="work-process-area"
      data-aos="fade-left"
      data-aos-duration={aosDuration}
    >
      <div className="icons">
        <img src={`src/${iconSrc}`} alt={title} />
      </div>
      <div className="content-area">
        <Link to={link}>{title}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Main component
const WorkProcessSection: React.FC = () => {
  return (
    <div className="work2-section-area" id="work">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="work2-header text-center heading4">
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
              <img
                src="src/assets/img/all-images/work-img1.png"
                alt="Work Process"
              />
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}>
            <div className="all-boxes-area">
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <ProcessStep {...step} />
                  {index < processSteps.length - 1 && (
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

export default WorkProcessSection;
