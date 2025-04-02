import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogTopArea: React.FC = () => {
  return (
    <div className="blog-top-area sp1">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="blog-top-boxarea">
              <Row className="align-items-center">
                <Col lg={5}>
                  <div className="content-area heading2">
                    <div className="tags-area">
                      <ul>
                        <li>
                          <Link to="#">
                            <img
                              src="../assets/img/icons/contact1.svg"
                              alt=""
                            />
                            Ben Stokes
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img
                              src="../assets/img/icons/calender1.svg"
                              alt=""
                            />
                            16 August 2023
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      The Power of PPC Advertising: How to Maximize Your ROI
                    </h2>
                    <div className="space8"></div>
                    <div className="btn-area">
                      <Link to="/blog" className="header-btn1">
                        Read Full Story{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={2}></Col>
                <Col lg={5}>
                  <div className="images image-anime">
                    <img src="../assets/img/all-images/blog-img19.png" alt="" />
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

export default BlogTopArea;
