import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const workProcesses = [
  {
    id: 1,
    imgSrc: "../assets/img/icons/works-icon4.svg",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop customized digital marketing strategy tailored objective.",
    link: "/case-single",
    duration: 800,
  },
  {
    id: 2,
    imgSrc: "../assets/img/icons/works-icon5.svg",
    title: "Monitoring & Optimization",
    description:
      "We believe in the power of data-driven decision-making. Throughout the campaign.",
    link: "/case-single",
    duration: 1000,
  },
  {
    id: 3,
    imgSrc: "../assets/img/icons/works-icon6.svg",
    title: "Continuous Improvement",
    description:
      "Digital marketing is an ever-evolving field, and we're committed to staying ahead of the SEOC curve.",
    link: "/case-single",
    duration: 1200,
  },
];

const WorkProcessSection: React.FC<{ btnClass?: string }> = ({ btnClass }) => {
  return (
    <div className="works4-section-area sp2" id="works">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="works4-header heading8">
              <h5 data-aos="fade-up" data-aos-duration="800">
                <img
                  src="../assets/img/icons/logo-icons3.svg"
                  alt="Logo Icon"
                />
                Work Process
              </h5>
              <h2 className="text-anime-style-1">
                SEOC Your Path to SEO & Digital{" "}
                <span>
                  Marketing Success{" "}
                  <img
                    src="../assets/img/elements/line-img1.png"
                    alt="Line Element"
                  />
                </span>
              </h2>
              <div className="space10 d-lg-block d-none"></div>
              <p data-aos="fade-up" data-aos-duration="1000">
                From increasing your website's visibility on search engines to
                engaging with your audience on social media,
              </p>
              <div className="space32"></div>
              <div
                className="btn-area1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link
                  to="/case"
                  className={btnClass ? btnClass : "header-btn12"}
                >
                  Learn More{" "}
                  {!btnClass && <i className="fa-solid fa-arrow-right"></i>}
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={7}>
            <div className="case-images">
              <figure className="image-anime">
                <img
                  src="../assets/img/all-images/case-img8.png"
                  alt="Case Image"
                />
              </figure>
            </div>
          </Col>
          <div className="space50"></div>
        </Row>
        <Row>
          {workProcesses.map((process) => (
            <Col
              lg={4}
              md={6}
              key={process.id}
              data-aos="zoom-in"
              data-aos-duration={process.duration}
            >
              <div className="works-author-boxarea">
                <div className="icons">
                  <img src={process.imgSrc} alt={`${process.title} Icon`} />
                </div>
                <div className="space24"></div>
                <div className="content-area">
                  <Link to={process.link}>{process.title}</Link>
                  <p>{process.description}</p>
                  <Link to={process.link} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WorkProcessSection;
