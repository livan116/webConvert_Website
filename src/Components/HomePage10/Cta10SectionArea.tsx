import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cta10SectionArea = () => {
  return (
    <div className="cta10-section-area">
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div className="images image-anime">
              <img src="src/assets/img/all-images/cta-img2.png" alt="CTA" />
            </div>
          </Col>
          <Col lg={8}>
            <div className="cta-content-area">
              <h2 className="text-anime-style-3">
                Elevate Your Brand Online Partner with Us for Proven Digital
                Success
              </h2>
              <div className="space16"></div>
              <p>
                At SEOC, we believe that your brand has the potential to achieve
                greatness online. Our proven SEO and digital marketing
                strategies are designed to elevate your brand and drive
                significant growth.
              </p>
              <div className="space32"></div>
              <div className="btn-area1">
                <Link to="/contact" className="header-btn17">
                  Schedule A Consultation{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta10SectionArea;
