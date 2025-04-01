import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// Define the type for the service item
interface Service {
  id?: number;
  iconSrc: string;
  title: string;
  description: string;
  link: string;
  aosDuration: number;
}

// Array of services
const services: Service[] = [
  {
    id: 1,
    iconSrc: "src/assets/img/icons/service-icon5.svg",
    title: "Search Engine Optimization",
    description:
      "Elevate your online visibility and drive organic traffic with our comprehensive SEO solutions. We employ proven strategies to...",
    link: "/service1",
    aosDuration: 800,
  },
  {
    id: 2,
    iconSrc: "src/assets/img/icons/service-icon6.svg",
    title: "(PPC) Advertising",
    description:
      "Reach your target audience instantly and generate qualified leads with our strategic PPC advertising campaigns.",
    link: "/service1",
    aosDuration: 1000,
  },
  {
    id: 3,
    iconSrc: "src/assets/img/icons/service-icon7.svg",
    title: "Social Media Marketing",
    description:
      "Engage and connect with your audience on social media platforms with our result-driven SMM strategies.",
    link: "/service1",
    aosDuration: 1200,
  },
  {
    id: 4,
    iconSrc: "src/assets/img/icons/service-icon8.svg",
    title: "Content Marketing",
    description:
      "Our content marketing services encompass everything from blog posts and articles to infographics and videos, designed to boost.",
    link: "/service1",
    aosDuration: 800,
  },
  {
    id: 5,
    iconSrc: "src/assets/img/icons/service-icon9.svg",
    title: "Web Design & Development",
    description:
      "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development...",
    link: "/service1",
    aosDuration: 1000,
  },
  {
    id: 6,
    iconSrc: "src/assets/img/icons/service-icon10.svg",
    title: "Digital Marketing",
    description:
      "Digital marketing encompasses a vast array of strategies and tactics, ranging from search engine optimization (SEO)",
    link: "/service1",
    aosDuration: 1200,
  },
];

// ServiceCard component
const ServiceCard: React.FC<Service> = ({
  iconSrc,
  title,
  description,
  link,
  aosDuration,
}) => {
  return (
    <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration={aosDuration}>
      <div className="service2-boxarea">
        <div className="icons">
          <img src={iconSrc} alt="" />
        </div>
        <div className="space32"></div>
        <div className="content">
          <Link to={link}>{title}</Link>
          <p>{description}</p>
          <Link to={link} className="readmore">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </Col>
  );
};

// Main component
const ServiceSection: React.FC = () => {
  return (
    <div className="service1-section-area" id="service">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="service-header-area text-center heading4">
              <h5>Services</h5>
              <h2 className="text-anime-style-3">
                Elevating Your Online Presence With Expert SEO & Digital
                Marketing Services
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
              link={service.link}
              aosDuration={service.aosDuration}
            />
          ))}
          <Col lg={12}>
            <div className="space30"></div>
            <div
              className="btn-area1 text-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Link to="/service1" className="header-btn3">
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
