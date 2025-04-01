import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <div className="about8-section-area" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={2}>
            <div className="counter-area heading13">
              <Row>
                <Col
                  lg={12}
                  md={6}
                  sm={6}
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="counter-box">
                    <h3>
                      <span>500</span>+
                    </h3>
                    <p>Campaigns</p>
                  </div>
                </Col>

                <Col
                  lg={12}
                  md={6}
                  sm={6}
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="counter-box">
                    <h3>
                      <span>98</span>%
                    </h3>
                    <p>Client Satisfaction</p>
                  </div>
                </Col>

                <Col
                  lg={12}
                  md={6}
                  sm={6}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="counter-box">
                    <h3>
                      <span>25</span>+
                    </h3>
                    <p>Country Reach</p>
                  </div>
                </Col>

                <Col
                  lg={12}
                  md={6}
                  sm={6}
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="counter-box after">
                    <h3>
                      <span>15</span>+
                    </h3>
                    <p>Certified Experts</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={4}>
            <div className="images" data-aos="zoom-in" data-aos-duration="1000">
              <img
                src="src/assets/img/all-images/about-img9.png"
                alt="About Us"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="about8-header heading13">
              <h5 data-aos="fade-right" data-aos-duration="800">
                About Us
              </h5>
              <h2 className="text-anime-style-3">
                Meet the Experts Behind Your Online Success
              </h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                SEOC is more than just an SEO and digital marketing agency – we
                are a team of passionate professionals committed to your
                success. Our journey began with a simple goal: to help
                businesses navigate the complex digital landscape and achieve
                measurable growth.
              </p>
              <div className="space32"></div>
              <div
                className="btn-area1"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Link to="/about" className="header-btn15">
                  Discover More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
