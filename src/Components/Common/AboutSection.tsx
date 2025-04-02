import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutSection: React.FC<{ btnClass?: string }> = ({ btnClass }) => {
  return (
    <div className="about4-section-area sp6" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div className="about-images">
              <figure className="image-anime">
                <img
                  src="../assets/img/all-images/about-img1.png"
                  alt="About Image 1"
                />
              </figure>
              <img
                src="../assets/img/elements/star1.png"
                alt="Star Element"
                className="star1 keyframe5"
              />
            </div>
          </Col>
          <Col lg={5}>
            <div className="about-content-area heading8">
              <div className="arrow-circle">
                <Link to="/about">
                  <img
                    src="../assets/img/elements/elements4.png"
                    alt="Arrow Element"
                    className="elements4 keyframe5"
                  />
                  <img
                    src="../assets/img/icons/arrow.svg"
                    alt="Arrow Icon"
                    className="arrow"
                  />
                </Link>
              </div>
              <br />
              <h5>
                <img
                  src="../assets/img/icons/logo-icons3.svg"
                  alt="Logo Icon"
                />
                About SEOC
              </h5>
              <h2 className="text-anime-style-2">
                Comprehensive SEO &{" "}
                <span>
                  Digital Marketing{" "}
                  <img
                    src="../assets/img/elements/line-img2.png"
                    alt="Line Element"
                  />
                </span>{" "}
                Solutions.
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Welcome to SEOC your trusted partner for comprehensive SEO and
                digital marketing solutions. With our proven expertise and
                innovative strategies the digital landscape.
              </p>
              <div
                className="btn-area"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link
                  to="/about"
                  className={btnClass ? btnClass : "header-btn12"}
                >
                  Learn More{" "}
                  {!btnClass && <i className="fa-solid fa-arrow-right"></i>}
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="about-auhtor-images">
              <img
                src="../assets/img/elements/elements5.png"
                alt="Elements 5"
                className="elements5 keyframe5"
              />
              <figure className="image-anime">
                <img
                  src="../assets/img/all-images/about-img2.png"
                  alt="About Image 2"
                />
              </figure>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
