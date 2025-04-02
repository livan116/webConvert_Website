import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: "../assets/img/icons/service-icon11.svg",
    number: "01",
    title: "Search Engine Optimization",
    description:
      "Our team of experts will optimize your site's on-page elements, create high-quality content, and build authoritative backlinks to boost your rankings and attract.",
    link: "/service1",
  },
  {
    id: 2,
    icon: "../assets/img/icons/service-icon12.svg",
    number: "02",
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize your ROI with strategic PPC campaigns tailored to your business objectives. Whether you're looking to increase brand awareness.",
    link: "/service1",
  },
  {
    id: 3,
    icon: "../assets/img/icons/service-icon13.svg",
    number: "03",
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, and drive conversions through strategic social media marketing. From content creation and community management.",
    link: "/service1",
  },
  {
    id: 4,
    icon: "../assets/img/icons/service-icon14.svg",
    number: "04",
    title: "Content Marketing",
    description:
      "Nurture leads, drive conversions, and build customer loyalty with targeted email marketing campaigns. From automated drip campaigns to personalized newsletters.",
    link: "/service1",
  },
];

const ServiceSection: React.FC<{ btnClass?: string }> = ({ btnClass }) => {
  return (
    <div className="service4-section-area sp1" id="service">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="service4-header heading8 text-center">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                <img
                  src="../assets/img/icons/logo-icons3.svg"
                  alt="Logo Icon"
                />
                Our Service
              </h5>
              <h2 className="text-anime-style-1">
                Our Comprehensive Suite Of Digital Marketing{" "}
                <span>
                  Services.{" "}
                  <img
                    src="../assets/img/elements/line-img2.png"
                    alt="Line Element"
                  />
                </span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="service-auhtor-boxes-area">
              <div className="bg-images">
                <div className="img1">
                  <img
                    src="../assets/img/bg/service-bg1.png"
                    alt="Background Image"
                    className="pulse-border"
                  />
                </div>
                <div
                  className="icons"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img
                    src="../assets/img/icons/logo-icons4.svg"
                    alt="Logo Icon"
                  />
                </div>
              </div>
              <Row>
                {services.map((service, index) => (
                  <React.Fragment key={index}>
                    <Col
                      lg={5}
                      md={6}
                      key={service.id}
                      data-aos="zoom-out"
                      data-aos-duration={service.id === 1 ? "1000" : "1200"}
                    >
                      <div className="service-box-area">
                        <div className="icons-area">
                          <div className="icons">
                            <img
                              src={service.icon}
                              alt={`${service.title} Icon`}
                            />
                          </div>
                          <div className="number">
                            <h4>{service.number}</h4>
                          </div>
                        </div>
                        <div className="content-area">
                          <Link to={service.link}>{service.title}</Link>
                          <p>{service.description}</p>
                          <Link to={service.link} className="readmore">
                            Learn More{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    {(index === 0 || index === 2) && (
                      <Col lg={2} className="d-lg-block d-none"></Col>
                    )}
                    {index === 1 && (
                      <>
                        <div className="space100 d-md-block d-none"></div>
                        <div className="space100"></div>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="space50 d-md-block d-none"></div>
                  <div
                    className="btn-area1 text-center"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <Link
                      to="/service1"
                      className={btnClass ? btnClass : "header-btn12"}
                    >
                      View More Services{" "}
                      {!btnClass && <i className="fa-solid fa-arrow-right"></i>}
                    </Link>
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

export default ServiceSection;
