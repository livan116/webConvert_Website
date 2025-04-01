import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BoostSection: React.FC = () => {
  return (
    <div className="boost-section-area sp1">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="boost-header heading12">
              <h5 data-aos="fade-right" data-aos-duration="800">
                Boost
              </h5>
              <h2 className="text-anime-style-3">Boost Google Search</h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                Unlock the full potential of your website with our expert SEO
                services designed to boost your Google search rankings. In
                today's digital age, being visible on search engines is crucial
                for driving organic traffic and growing your business.
              </p>
              <div className="space32"></div>
              <div
                className="btn-area1"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Link to="/about" className="header-btn13">
                  Let's Find Out <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div
              className="images image-anime"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src="src/assets/img/all-images/boost-img1.png"
                alt="Boost Google Search"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoostSection;
