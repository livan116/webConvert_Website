import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Campaigns", duration: 800 },
  { value: "98%", label: "Client Satisfaction", duration: 1000 },
  { value: "25+", label: "Country Reach", duration: 1100 },
  { value: "15+", label: "Certified Experts", duration: 1200 },
];

const About10SectionArea = () => {
  return (
    <div className="about10-section-area sp1" id="about">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="about-header text-center heading15">
              <h5>About Us</h5>
              <h2 className="text-anime-style-3">
                Your Trusted Partners for Innovative Strategies and Unmatched
                Success
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={4}>
            <div className="about-pera-list">
              <p data-aos="fade-right" data-aos-duration="800">
                We're not just another agency -{" "}
                <br className="d-lg-block d-none" />
                we're your digital growth partners.{" "}
                <br className="d-lg-block d-none" />
                With years of industry experience{" "}
                <br className="d-lg-block d-none" />
                and a passion for innovation.
              </p>
              <div className="space8"></div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <ul>
                  <li>
                    <img
                      src="src/assets/img/icons/check12.svg"
                      alt="Check Icon"
                    />{" "}
                    Digital Marketing
                  </li>
                  <li>
                    <img
                      src="src/assets/img/icons/check12.svg"
                      alt="Check Icon"
                    />{" "}
                    Marketing Agency
                  </li>
                  <li>
                    <img
                      src="src/assets/img/icons/check12.svg"
                      alt="Check Icon"
                    />{" "}
                    SEO Optimization
                  </li>
                  <li>
                    <img
                      src="src/assets/img/icons/check12.svg"
                      alt="Check Icon"
                    />{" "}
                    First Working Process
                  </li>
                </ul>
              </div>
              <div className="space32"></div>
              <div
                className="btn-area1"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Link to="/about" className="header-btn17">
                  More About Us{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="about-images">
              <img
                src="src/assets/img/all-images/about-img10.png"
                alt="About Us"
              />
            </div>
          </Col>

          <Col lg={3}>
            <div className="counter-boxarea text-center">
              <Row>
                {stats.map((stat, index) => (
                  <Col lg={12} md={6} key={index}>
                    <div
                      className="counter-box"
                      data-aos="zoom-out"
                      data-aos-duration={stat.duration}
                    >
                      <h2>
                        <span className="counter">{stat.value}</span>
                      </h2>
                      <p>{stat.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About10SectionArea;
