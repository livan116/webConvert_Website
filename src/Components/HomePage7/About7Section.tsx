import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const About7Section: React.FC = () => {
  return (
    <div className="about7-section-area sp1" id="about">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="about-header text-center heading12">
              <h5>About Us</h5>
              <h2 className="text-anime-style-3">
                Unveiling the Faces And Mission Of Our Digital Marketing Agency
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <div className="about-pera-list">
              <p data-aos="fade-right" data-aos-duration="800">
                We're not just another agency – we're your digital growth
                partners. With years of industry experience and a passion for
                innovation.
              </p>
              <div className="space8"></div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <ul>
                  <li>
                    <img src="src/assets/img/icons/check11.svg" alt="Check" />{" "}
                    Digital Marketing
                  </li>
                  <li>
                    <img src="src/assets/img/icons/check11.svg" alt="Check" />{" "}
                    Marketing Agency
                  </li>
                  <li>
                    <img src="src/assets/img/icons/check11.svg" alt="Check" />{" "}
                    SEO Optimization
                  </li>
                  <li>
                    <img src="src/assets/img/icons/check11.svg" alt="Check" />{" "}
                    First Working Process
                  </li>
                </ul>
              </div>
              <div className="space32"></div>
              <div
                className="btn-area1"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Link to="/about" className="header-btn13">
                  More About Us <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="about-images">
              <Row>
                <Col lg={6} md={6}>
                  <div className="img1">
                    <img
                      src="src/assets/img/all-images/about-img7.png"
                      alt="About Image 7"
                    />
                    <div className="counter-area">
                      <h2>
                        <span className="counter">16</span>K+
                      </h2>
                      <p>Customer Satisfied</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration="1000">
                  <div className="space80 d-lg-block d-none"></div>
                  <div className="space30 d-lg-none d-block"></div>
                  <div className="img2">
                    <img
                      src="src/assets/img/all-images/about-img8.png"
                      alt="About Image 8"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={2}>
            <div className="counter-boxarea">
              <Row>
                <Col lg={12} md={6} xs={6}>
                  <div
                    className="counter-box"
                    data-aos="zoom-out"
                    data-aos-duration="800"
                  >
                    <h2>
                      <span className="counter">500</span>+
                    </h2>
                    <p>Campaigns</p>
                  </div>
                </Col>
                <Col lg={12} md={6} xs={6}>
                  <div
                    className="counter-box"
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                  >
                    <h2>
                      <span className="counter">98</span>%
                    </h2>
                    <p>Client Satisfaction</p>
                  </div>
                </Col>
                <Col lg={12} md={6} xs={6}>
                  <div
                    className="counter-box"
                    data-aos="zoom-out"
                    data-aos-duration="1100"
                  >
                    <h2>
                      <span className="counter">25</span>+
                    </h2>
                    <p>Country Reach</p>
                  </div>
                </Col>
                <Col lg={12} md={6} xs={6}>
                  <div
                    className="counter-box"
                    data-aos="zoom-out"
                    data-aos-duration="1200"
                  >
                    <h2>
                      <span className="counter">15</span>+
                    </h2>
                    <p>Certified Experts</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About7Section;
