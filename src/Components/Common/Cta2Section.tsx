import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cta2Section: React.FC<{ btnClass?: string }> = ({ btnClass }) => {
  return (
    <div className="cta4-section-area">
      <img
        src="../assets/img/bg/cta-bg5.png"
        alt="Background 1"
        className="cta-bg1 animation-key-2"
      />
      <img
        src="../assets/img/bg/cta-bg4.png"
        alt="Background 2"
        className="cta-bg2 animation-key-1"
      />
      <Container>
        <Row>
          <Col lg={12} className="m-auto">
            <div className="cta-header-area text-center sp4 heading2">
              <h2 className="text-anime-style-1">
                Ready To Take Your SEO To
                <br className="d-md-block d-none" />
                The Next Level
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Effective SEO strategies not only elevate a website's visibility
                but also drive
                <br className="d-md-block d-none" />
                targeted traffic, enhance user experience.
              </p>
              <div
                className="btn-area text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link
                  to="/contact"
                  className={btnClass ? btnClass : "header-btn12"}
                >
                  Get A Free Consultation{" "}
                  {!btnClass && <i className="fa-solid fa-arrow-right"></i>}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta2Section;
