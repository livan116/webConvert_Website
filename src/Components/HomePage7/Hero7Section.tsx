import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero7Section: React.FC = () => {
  return (
    <div className="hero7-section-area">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="hero7-header heading3">
              <h1 className="text-anime-style-3">
                Achieve Digital Excellence with Our Tailored Solutions
              </h1>
              <p>
                Boost your business with our cutting-edge digital marketing and
                SEO services. Our experienced team is committed to helping you
                reach your target audience.
              </p>
              <div className="space32"></div>
              <form>
                <span>
                  <i className="fa-solid fa-globe"></i>
                </span>
                <input type="text" placeholder="yourwebsite.com" />
                <button type="submit" className="header-btn14">
                  Subscribe <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
              <div className="space32"></div>
              <div className="author-images">
                <div className="img1">
                  <img
                    src="src/assets/img/all-images/author-img1.png"
                    alt="Author"
                  />
                </div>
                <div className="stars">
                  <ul>
                    {Array.from({ length: 5 }, (_, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    ))}
                  </ul>
                  <p>850+ Reviews</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="header7-images">
              <div className="img1">
                <img
                  src="src/assets/img/all-images/header-img9.png"
                  alt="Header Image 9"
                  className="header-img9"
                />
              </div>
              <div className="img2">
                <img
                  src="src/assets/img/all-images/header-img10.png"
                  alt="Header Image 10"
                  className="header-img10"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero7Section;
