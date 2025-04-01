import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorSection: React.FC = () => {
  return (
    <div className="error-section-area sp1">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="heading2 text-center">
              <Image
                src="src/assets/img/all-images/error-img1.png"
                alt="Error Image"
              />
              <div className="space50"></div>
              <h2>Sorry! Page Not Found!</h2>
              <div className="space16"></div>
              <p>
                Sorry, the page you are looking for doesn’t exist or has
                <br className="d-lg-block d-none" />
                been moved. Here are some helpful links.
              </p>
              <div className="space24"></div>
              <div className="btn-area1">
                <Link to="/" className="header-btn1">
                  Back To Home{" "}
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

export default ErrorSection;
