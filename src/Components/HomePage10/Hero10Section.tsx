import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero10Section: React.FC = () => {
  return (
    <div className="hero10-section-area">
      <img
        src="src/assets/img/elements/elements18.png"
        alt=""
        className="elements18"
      />
      <div className="bg1">
        <img
          src="src/assets/img/elements/elements19.png"
          alt=""
        />
      </div>
      <div className="bg2-elements">
        <img
          src="src/assets/img/elements/elements20.png"
          alt=""
        />
      </div>

      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="hero-header-area heading15">
              <h1 className="text-anime-style-3">Grow Your Business Online</h1>
              <p data-aos="fade-left" data-aos-duration="800">
                At SEOC, we specialize in driving targeted traffic, and boosting
                conversions with our expert SEO and digital marketing services.
              </p>
              <div className="space32" />
              <div
                className="btn-area1"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Link to="/contact" className="header-btn17">
                  Get Started{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=Y8XpQpW5OVY"
                  className="video-btn popup-youtube"
                >
                  <span className="play">
                    <i className="fa-solid fa-play" />
                  </span>
                  <span className="text">Play Videos</span>
                </a>
              </div>
              <div className="space32" />
              <div className="auhtor-area">
                <div className="img1">
                  <img
                    src="src/assets/img/all-images/author-img2.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <ul className="m-0 p-0">
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                  </ul>
                  <p className="m-0">850+ Reviews</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={1} />
          <Col lg={6}>
            <div className="imges">
              <img
                src="src/assets/img/all-images/header-img13.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero10Section;
