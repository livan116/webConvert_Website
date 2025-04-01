import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const services = [
  {
    imgSrc: "src/assets/img/all-images/service-img12.png",
    title: "Search Engine Optimization",
    description:
      "Elevate your online visibility and drive organic traffic with our comprehensive SEO solutions. We employ proven strategies.",
    link: "/service5",
    duration: 800,
  },
  {
    imgSrc: "src/assets/img/all-images/service-img13.png",
    title: "(PPC) Advertising",
    description:
      "Reach your target audience instantly and generate qualified leads with our strategic PPC advertising campaigns.",
    link: "/service3",
    duration: 900,
  },
  {
    imgSrc: "src/assets/img/all-images/service-img14.png",
    title: "Social Media Marketing",
    description:
      "Engage and connect with your audience on social media platforms with our result-driven SMM strategies.",
    link: "/service5",
    duration: 1000,
  },
  {
    imgSrc: "src/assets/img/all-images/service-img15.png",
    title: "Content Marketing",
    description:
      "Our content marketing services encompass everything from blog posts and articles to infographics and videos, designed to boost.",
    link: "/service2",
    duration: 1100,
  },
  {
    imgSrc: "src/assets/img/all-images/service-img16.png",
    title: "Web Design & Development",
    description:
      "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development...",
    link: "/service2",
    duration: 1200,
  },
  {
    imgSrc: "src/assets/img/all-images/service-img17.png",
    title: "Digital Marketing",
    description:
      "Digital marketing encompasses a vast array of strategies and tactics, ranging from search engine optimization (SEO).",
    link: "/service5",
    duration: 1300,
  },
];

const Service7Section: React.FC = () => {
  return (
    <div className="service7-section-area sp1" id="service">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="service-header text-center heading12">
              <h5>Our Service</h5>
              <h2 className="text-anime-style-3">
                Comprehensive Digital Marketing Solutions to Propel Business
                Forward
              </h2>
            </div>
          </Col>
        </Row>
        {services.map((service, index) => (
          <div
            className="all-service-box"
            data-aos="fade-up"
            data-aos-duration={service.duration}
            key={index}
          >
            <Row>
              <Col lg={12}>
                <div className="service-main-boxarea gap-5">
                  <div className="service-images flex-grow-1">
                    <div className="img1">
                      <img src={service.imgSrc} alt={service.title} />
                    </div>
                    <div className="text">
                      <Link to={service.link}>{service.title}</Link>
                    </div>
                  </div>
                  <div className="pera" style={{ maxWidth: 325 }}>
                    <p>{service.description}</p>
                  </div>
                  <div className="arrow">
                    <Link to={service.link}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Service7Section;
