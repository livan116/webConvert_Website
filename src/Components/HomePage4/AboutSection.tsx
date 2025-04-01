import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <div className="about5-section-area sp1" id="about">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="about5-header text-center heading10">
              <h5>
                <img src="src/assets/img/icons/logo-icons6.svg" alt="Logo Icon" />
                Welcome to SEO Agency
              </h5>
              <h2 className="text-anime-style-3">
                Meet SEOC Your Trusted SEO & Digital Marketing Partner
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-all-images-area">
              <img src="src/assets/img/elements/elements12.png" alt="Element 12" className="elements12 keyframe5" />
              <img src="src/assets/img/elements/elements13.png" alt="Element 13" className="elements13 keyframe5" />
              <Row>
                <Col lg={6} md={6}>
                  <div className="img1 image-anime">
                    <img src="src/assets/img/all-images/about-img5.png" alt="About Image 5" />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="img2 image-anime">
                    <div className="space100"></div>
                    <img src="src/assets/img/all-images/about-img6.png" alt="About Image 6" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about5-content-area heading10">
              <h3 className="text-anime-style-3">
                Best SEO Experience & Professional Team To Grow Your Business
              </h3>
              <p data-aos="fade-left" data-aos-duration="1000">
                We're not just another agency – we're your digital growth partners. With years of industry experience and a passion for innovation, our team is dedicated to delivering measurable results to propel your business forward.
              </p>
              <div className="space32"></div>
              <div className="about5-boxarea">
                <Row>
                  <Col lg={12}>
                    <div className="about5-boxes" data-aos="fade-left" data-aos-duration="1200">
                      <h3>SEO Analysis</h3>
                      <div className="about5-bar">
                        <span className="about5-per">
                          <span className="per">85%</span>
                        </span>
                      </div>
                    </div>
                    <div className="space40"></div>
                  </Col>
                  <Col lg={12}>
                    <div className="about5-boxes" data-aos="fade-left" data-aos-duration="1300">
                      <h3>Marketing Strategy</h3>
                      <div className="about5-bar2">
                        <span className="about5-per2">
                          <span className="per">95%</span>
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="space32"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="1400">
                <Link to="/contact" className="header-btn11">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
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
