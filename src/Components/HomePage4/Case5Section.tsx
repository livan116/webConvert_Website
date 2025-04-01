import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Case5Section: React.FC = () => {
  return (
    <div className="case5-section-area sp1" id="case">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="case5-header text-center heading10">
              <h5>
                <img src="src/assets/img/icons/logo-icons6.svg" alt="" />
                Case Study
              </h5>
              <h2 className="text-anime-style-3">
                Driving Growth Through Strategic SEO and Digital Marketing
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div
              className="case-widget-area"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="content-area">
                <span>01</span>
                <div className="main-content">
                  <Link to="/case-single">SEO Optimization</Link>
                  <p>
                    We began by optimizing [Client Name]'s website for relevant
                    keywords related
                    <br className="d-lg-block d-none" /> to their products and
                    target audience. This included on-page optimization,
                  </p>
                </div>
              </div>
              <div className="hidden-img img1">
                <Link to="/case-single">
                  <img src="src/assets/img/all-images/hidden-img.png" alt="" />
                </Link>
              </div>
              <div className="arrow-btn">
                <Link to="/case-single">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="case-widget-area"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="content-area">
                <span>02</span>
                <div className="main-content">
                  <Link to="/case-single">Content Marketing</Link>
                  <p>
                    We began by optimizing [Client Name]'s website for relevant
                    keywords related
                    <br className="d-lg-block d-none" /> to their products and
                    target audience. This included on-page optimization,
                  </p>
                </div>
              </div>
              <div className="hidden-img img2">
                <Link to="/case-single">
                  <img src="src/assets/img/all-images/hidden-img2.png" alt="" />
                </Link>
              </div>
              <div className="arrow-btn">
                <Link to="/case-single">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="case-widget-area"
              data-aos="fade-left"
              data-aos-duration="1400"
            >
              <div className="content-area">
                <span>03</span>
                <div className="main-content">
                  <Link to="/case-single">Social Media Marketing</Link>
                  <p>
                    We began by optimizing [Client Name]'s website for relevant
                    keywords related
                    <br className="d-lg-block d-none" /> to their products and
                    target audience. This included on-page optimization,
                  </p>
                </div>
              </div>
              <div className="hidden-img img3">
                <Link to="/case-single">
                  <img src="src/assets/img/all-images/hidden-img3.png" alt="" />
                </Link>
              </div>
              <div className="arrow-btn">
                <Link to="/case-single">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Case5Section;
