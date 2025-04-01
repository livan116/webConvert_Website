import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const serviceImages = [
  "src/assets/img/icons/service-icon5.svg",
  "src/assets/img/icons/service-icon6.svg",
  "src/assets/img/icons/service-icon7.svg",
  "src/assets/img/icons/service-icon8.svg",
  "src/assets/img/icons/service-icon9.svg",
  "src/assets/img/icons/service-icon10.svg",
];

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Elevate your online visibility and drive organic traffic with our comprehensive SEO solutions. We employ proven strategies to...",
    image: serviceImages[0],
    link: "/service1",
  },
  {
    title: "(PPC) Advertising",
    description:
      "Reach your target audience instantly and generate qualified leads with our strategic PPC advertising campaigns.",
    image: serviceImages[1],
    link: "/service1",
  },
  {
    title: "Social Media Marketing",
    description:
      "Engage and connect with your audience on social media platforms with our result-driven SMM strategies.",
    image: serviceImages[2],
    link: "/service1",
  },
  {
    title: "Content Marketing",
    description:
      "Our content marketing services encompass everything from blog posts and articles to infographics and videos, designed to boost.",
    image: serviceImages[3],
    link: "/service1",
  },
  {
    title: "Web Design & Development",
    description:
      "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development...",
    image: serviceImages[4],
    link: "/service1",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing encompasses a vast array of strategies and tactics, ranging from search engine optimization (SEO)",
    image: serviceImages[5],
    link: "/service1",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <div className="service3-section-area sp1" id="service">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="service-header-area text-center heading6">
              <h5>Services</h5>
              <h2 className="text-anime-style-3">
                Elevating Your Online Presence With Expert SEO & Digital
                Marketing Services
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col
              lg={4}
              md={6}
              key={index}
              data-aos="zoom-in"
              data-aos-duration={`${800 + index * 200}`}
            >
              <div className="service2-boxarea">
                <div className="icons">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="space32"></div>
                <div className="content">
                  <Link to={service.link}>{service.title}</Link>
                  <p>{service.description}</p>
                  <Link to={service.link} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
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
              <Link to="/service1" className="header-btn5">
                View More Services
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSection;
