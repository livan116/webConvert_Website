import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection: React.FC = () => {
  return (
    <div className="hero8-section-area">
      <img
        src="src/assets/img/elements/elements16.png"
        alt=""
        className="elements16 keyframe5"
      />
      <img
        src="src/assets/img/elements/elements17.png"
        alt=""
        className="elements17 aniamtion-key-2"
      />
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="hero8-header text-center heading1">
              <h1 className="text-anime-style-3">
                Drive Traffic, Boost Sales, Grow Your Brand
              </h1>
              <p>
                Experience unparalleled growth with comprehensive SEO and
                digital marketing services.
              </p>
              <div className="space32"></div>
              <form>
                <span className="global">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <input type="text" placeholder="Enter Your Website URL" />
                <div className="btn-area1">
                  <button className="header-btn15" type="submit">
                    Get Instant Result{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src="src/assets/img/elements/star8.png"
        alt=""
        className="star8 keyframe6"
      />
      <img
        src="src/assets/img/elements/star8.png"
        alt=""
        className="star9 keyframe6"
      />
      <div className="space80"></div>
      <div className="bottom-img">
        <img src="src/assets/img/all-images/header-img11.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
