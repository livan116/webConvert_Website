import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Build a strong brand presence & engage with your audience on social media platforms. We create strategic social media campaigns.",
    imgSrc: "src/assets/img/all-images/service-img2.png",
    link: "/service1",
    aosDuration: 800,
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    description:
      "Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.",
    imgSrc: "src/assets/img/all-images/service-img3.png",
    link: "/service1",
    aosDuration: 1000,
  },
  {
    id: 3,
    title: "Website Design & Development",
    description:
      "Make a lasting impression with professionally designed and user-friendly website. Our web design and development services website.",
    imgSrc: "src/assets/img/all-images/service-img4.png",
    link: "/service1",
    aosDuration: 1200,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <div className="service5-section-area sp1" id="service">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="service-header text-center heading10">
              <h5>
                <img src="src/assets/img/icons/logo-icons6.svg" alt="" />
                Our SEO Services
              </h5>
              <h2 className="text-anime-style-3">
                Elevating Your Online Presence with Expert SEO & Digital
                Marketing Services
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service) => (
            <Col
              lg={4}
              md={6}
              key={service.id}
              data-aos="zoom-in"
              data-aos-duration={service.aosDuration}
            >
              <div
                className={`service-author-boxarea ${
                  service.id === 2 ? "box2" : service.id === 3 ? "box3" : ""
                }`}
              >
                <h4>{service.id.toString().padStart(2, "0")}</h4>
                <div className="space40"></div>
                <div className="img1 image-anime">
                  <img src={service.imgSrc} alt={service.title} />
                </div>
                <div className="space40"></div>
                <div className="content-area">
                  <Link to={service.link}>{service.title}</Link>
                  <p>{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
          <Col lg={12}>
            <div className="space30"></div>
            <div
              className="btn-area1 text-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Link to="/contact" className="header-btn11">
                Get Started Now <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSection;
