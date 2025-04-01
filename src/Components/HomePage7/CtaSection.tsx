import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <div className="cta7-section-area sp1">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="cta-header heading11 text-center">
              <h2 className="text-anime-style-3">
                Ready to Take Your Digital Marketing to the Next Level?
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Effective SEO strategies not only elevate a website's visibility but also drive <br className="d-lg-block d-none" /> targeted traffic, enhance user experience,
              </p>
              <div className="bnt-area1" data-aos="fade-up" data-aos-duration="1200">
                <Link to="/contact" className="header-btn14">
                  Get Started Today <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to="/contact" className="header-btn14 btn2">
                  Request A Consultation <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CtaSection;
