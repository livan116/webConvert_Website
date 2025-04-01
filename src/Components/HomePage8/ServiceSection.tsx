import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceSection: React.FC = () => {
  return (
    <div className="service8-section-area sp1" id="service">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="service-header-area heading13 text-center">
              <h5>Our Service</h5>
              <h2 className="text-anime-style-3">
                Unveiling The Faces And Mission Of Our Digital Marketing Agency
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="service-all-boxes-area">
              <div
                className="service-boxarea"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <Link to="/service5">Search Engine Optimization (SEO)</Link>
                <div className="space40"></div>
                <img
                  src="src/assets/img/icons/service-icons19.svg"
                  alt="SEO Icon"
                />
                <div className="space40"></div>
                <p>
                  Enhance your online visibility & drive organic traffic with
                  our advanced SEO techniques. We optimize your website to rank
                  higher.
                </p>
              </div>

              <div
                className="service-boxarea box2"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Link to="/service3">Pay-Per-Click (PPC) Advertising</Link>
                <div className="space40"></div>
                <img
                  src="src/assets/img/icons/service-icons20.svg"
                  alt="PPC Icon"
                />
                <div className="space40"></div>
                <p>
                  Reach your audience instantly and drive qualified leads with
                  targeted PPC campaigns. Our experts craft compelling ad copy
                  and optimize.
                </p>
              </div>

              <div
                className="service-boxarea box3"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <Link to="/service2">Social Media Marketing</Link>
                <div className="space66"></div>
                <img
                  src="src/assets/img/icons/service-icons21.svg"
                  alt="Social Media Marketing Icon"
                />
                <div className="space40"></div>
                <p>
                  Build a strong brand presence and engage with your audience on
                  social media platforms. We create strategic social media
                  campaigns to boost brand.
                </p>
              </div>

              <div
                className="service-boxarea box4"
                data-aos="zoom-in"
                data-aos-duration="1400"
              >
                <Link to="/service4">Website Design and Development</Link>
                <div className="space40"></div>
                <img
                  src="src/assets/img/icons/service-icons22.svg"
                  alt="Website Design Icon"
                />
                <div className="space40"></div>
                <p>
                  Make a lasting impression with a professionally designed and
                  user-friendly website. Our web design and development services
                  ensure website.
                </p>
              </div>
            </div>
            <div className="space40"></div>
            <div className="btn-area1 text-center">
              <Link to="/service1" className="header-btn15">
                View More Service{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSection;
