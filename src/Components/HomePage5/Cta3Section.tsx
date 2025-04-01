import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cta3Section: React.FC = () => {
  return (
    <div className="cta3-section-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="cta-author-area">
              <Row>
                <Col lg={5}>
                  <div className="cta2-header heading6">
                    <h2 className="text-anime-style-3">
                      Ready to Take Your SEO To The Next Level
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="1200">
                      Effective SEO strategies not only elevate a website's
                      visibility but also drive targeted traffic, enhance user
                      experience,
                    </p>
                    <div className="space24"></div>
                    <div
                      className="btn-area"
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      <Link to="/contact" className="header-btn5">
                        Get Started Now
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={2}></Col>
                <Col lg={4}>
                  <div className="images">
                    <img
                      src="src/assets/img/elements/elements8.png"
                      alt=""
                      className="elements6 animation-key-2"
                    />
                    <img
                      src="src/assets/img/elements/star6.png"
                      alt=""
                      className="elements7 keyframe5"
                    />
                    <img
                      src="src/assets/img/bg/cta-bg3.png"
                      alt=""
                      className="bg1 animation-key-5"
                    />
                    <img
                      src="src/assets/img/all-images/cta-img1.png"
                      alt=""
                      className="cta-img1"
                    />
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

export default Cta3Section;
