import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const services = [
  {
    image: "src/assets/img/all-images/service-img12.png",
    link: "/service5",
    title: "Search Engine Optimization",
    description:
      "Elevate your online visibility and drive organic traffic with our comprehensive SEO solutions. We employ proven strategies..",
    aosDuration: 800,
  },
  {
    image: "src/assets/img/all-images/service-img13.png",
    link: "/service3",
    title: "(PPC) Advertising",
    description:
      "Reach your target audience instantly and generate qualified leads with our strategic PPC advertising campaigns.",
    aosDuration: 900,
  },
  {
    image: "src/assets/img/all-images/service-img14.png",
    link: "/service4",
    title: "Social Media Marketing",
    description:
      "Engage and connect with your audience on social media platforms with our result-driven SMM strategies.",
    aosDuration: 1000,
  },
  {
    image: "src/assets/img/all-images/service-img15.png",
    link: "/service4",
    title: "Content Marketing",
    description:
      "Our content marketing services encompass everything from blog posts and articles to infographics and videos, designed to boost.",
    aosDuration: 1100,
  },
  {
    image: "src/assets/img/all-images/service-img16.png",
    link: "/service5",
    title: "Web Design & Development",
    description:
      "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development...",
    aosDuration: 1200,
  },
  {
    image: "src/assets/img/all-images/service-img17.png",
    link: "/service4",
    title: "Digital Marketing",
    description:
      "Digital marketing encompasses a vast array of strategies and tactics, ranging from search engine optimization (SEO)",
    aosDuration: 1300,
  },
];

const Service10SectionArea = () => {
  return (
    <div className="service10-section-area sp1" id="service">
      <Container>
        <Row>
          <Col lg={10} className="m-auto">
            <div className="service-header text-center heading15">
              <h5>Our Service</h5>
              <h2 className="text-anime-style-3">
                Transforming Your Digital Presence{" "}
                <br className="d-lg-block d-none" />
                Comprehensive & Innovative Marketing Solutions
              </h2>
            </div>
          </Col>
        </Row>
        {services.map((service, index) => (
          <div
            className="all-service-box"
            data-aos="fade-up"
            data-aos-duration={service.aosDuration}
            key={index}
          >
            <Row>
              <Col lg={12}>
                <div className="service-main-boxarea gap-4">
                  <div className="service-images flex-grow-1">
                    <div className="img1">
                      <img src={service.image} alt={service.title} />
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
        <Row>
          <Col lg={12}>
            <div className="space50"></div>
            <div className="btn-area1 text-center">
              <Link to="/service1" className="header-btn17">
                View Our Services{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service10SectionArea;
