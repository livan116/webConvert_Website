import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "SEO Optimization",
    description: "We began by optimizing Steve Jons website for relevant...",
    imageUrl: "src/assets/img/all-images/case-img19.png",
    link: "/case-single",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "We began by optimizing Steve Jons website for relevant...",
    imageUrl: "src/assets/img/all-images/case-img20.png",
    link: "/case-single",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "We began by optimizing Steve Jons website for relevant...",
    imageUrl: "src/assets/img/all-images/case-img21.png",
    link: "/case-single",
  },
];

const CaseStudySection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="case8-section-area sp1" id="case">
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div className="case-header heading13">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                Case Study
              </h5>
              <h2 className="text-anime-style-3">Our Case Studies</h2>
              <div
                className="btn-area1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link to="/case" className="header-btn15">
                  Schedule a Consultation{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <Slider {...settings} className="case-study-sliderarea">
              {caseStudies.map(({ id, title, description, imageUrl, link }) => (
                <div className="author-case-area" key={id}>
                  <div className="img1 image-anime">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <div className="content-area">
                    <div className="content">
                      <Link to={link}>{title}</Link>
                      <div className="space16"></div>
                      <p className="m-0">{description}</p>
                    </div>
                    <div className="arrow">
                      <Link to={link}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudySection;
