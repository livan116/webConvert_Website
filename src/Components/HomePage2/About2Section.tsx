import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const About2Section: React.FC = () => {
  return (
    <div className="about2-section-area sp1" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-images-area">
              <img src="src/assets/img/all-images/about-img3.png" alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-header-area heading4">
              <h5>About Us</h5>
              <h2 className="text-anime-style-3">
                Meet SEOC Your Trusted SEO & Digital Marketing Partner
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                We're not just another agency – we're your digital growth
                partners. With <br className="d-lg-block d-none" />
                years of industry experience and a passion for innovation, our
                team is <br className="d-lg-block d-none" />
                dedicated to delivering measurable results to propel your
                business forward.
              </p>
              <h3 data-aos="fade-left" data-aos-duration="1100">
                Our Best Service Benefits :
              </h3>
              <div
                className="list-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <ul>
                  <li>
                    <img src="src/assets/img/icons/check1.svg" alt="" />
                    Digital Marketing
                  </li>
                  <li>
                    <img src="src/assets/img/icons/check1.svg" alt="" />
                    Marketing Agency
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src="src/assets/img/icons/check1.svg" alt="" />
                    SEO Optimization
                  </li>
                  <li>
                    <img src="src/assets/img/icons/check1.svg" alt="" />
                    First Working Process
                  </li>
                </ul>
              </div>
              <div
                className="images-area"
                data-aos="fade-left"
                data-aos-duration="1400"
              >
                <div className="img">
                  <img src="src/assets/img/all-images/about-img4.png" alt="" />
                </div>
                <div className="content-area">
                  <Link to="team">John Doe</Link>
                  <p>Owner SEOC</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About2Section;
