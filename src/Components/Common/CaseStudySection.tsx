import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    imgSrc: "../assets/img/all-images/case-img1.png",
    title: "Website Design & Development",
    description: "Digital Art. Illustrations",
    link: "/case-single",
  },
  {
    id: 2,
    imgSrc: "../assets/img/all-images/case-img2.png",
    title: "SEO",
    description: "Digital Art. Illustrations",
    link: "/case-single",
  },
  {
    id: 3,
    imgSrc: "../assets/img/all-images/case-img3.png",
    title: "PPC Advertising",
    description: "Digital Art. Illustrations",
    link: "/case-single",
  },
  {
    id: 4,
    imgSrc: "../assets/img/all-images/case-img4.png",
    title: "Social Media Marketing",
    description: "Digital Art. Illustrations",
    link: "/case-single",
  },
];

const CaseStudySection: React.FC<{ btnClass?: string }> = ({ btnClass }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="case4-section-area sp1 overflow-hidden" id="case">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="case4-header heading8 text-center">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                <img
                  src="../assets/img/icons/logo-icons3.svg"
                  alt="Logo Icon"
                />
                Case Study
              </h5>
              <h2 className="text-anime-style-1">
                Our Handpicked Digital Marketing{" "}
                <span>
                  Case Study{" "}
                  <img
                    src="../assets/img/elements/line-img2.png"
                    alt="Line Element"
                  />
                </span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} data-aos="fade-up" data-aos-duration="1200">
            <div className="cs_case_study_1_list">
              {caseStudies.map((study, index) => (
                <div
                  className={`cs_case_study cs_style_1 cs_hover_active ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Link
                    to="/case-single"
                    className={`cs_case_study_thumb cs_bg_filed cs_case_study_thumb${study.id}`}
                    data-src={study.imgSrc}
                  ></Link>
                  <div className="content-area1">
                    <Link to="/case-single">{study.title}</Link>
                  </div>
                  <div className="content-area">
                    <img src="../assets/img/icons/case-icon1.svg" alt="" />
                    <div className="space16"></div>
                    <Link to="/case-single">{study.title}</Link>
                    <p>{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space60 d-lg-block d-none"></div>
            <div className="space34 d-lg-none d-block"></div>
            <div
              className="btn-area1 text-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Link to="/case" className={btnClass ? btnClass : "header-btn12"}>
                View More Case Study{" "}
                {!btnClass && <i className="fa-solid fa-arrow-right"></i>}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudySection;
