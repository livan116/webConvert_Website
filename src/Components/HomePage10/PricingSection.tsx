import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan - Starter",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$999",
    period: "/monthly",
    link: "/pricing",
    services: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    additionalInfo:
      "Small businesses or startups looking to establish their online presence.",
    imgSrc: "src/assets/img/icons/check12.svg",
    imgSrcAlt: "src/assets/img/icons/check5.svg",
    aosDuration: 800,
  },
  {
    id: 2,
    title: "Standard Plan - Growth",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$1999",
    period: "/monthly",
    link: "/pricing",
    services: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    additionalInfo:
      "Growing businesses seeking to expand their reach and drive more traffic & conversions.",
    imgSrc: "src/assets/img/icons/check13.svg",
    imgSrcAlt: "src/assets/img/icons/check13.svg",
    aosDuration: 1000,
    active: true,
  },
  {
    id: 3,
    title: "Premium Plan - Pro",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$2999",
    period: "/monthly",
    link: "/pricing",
    services: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    additionalInfo:
      "Established businesses looking to dominate their industry online achieve maximum ROI.",
    imgSrc: "src/assets/img/icons/check12.svg",
    imgSrcAlt: "src/assets/img/icons/check5.svg",
    aosDuration: 1200,
  },
];

const PricingSection = () => {
  return (
    <div className="pricing10-section-area sp2" id="pricing">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="pricing-header text-center heading15">
              <h5>Pricing Plan</h5>
              <h2 className="text-anime-style-3">SEOC Pricing Plan</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {pricingPlans.map((plan) => (
            <Col
              lg={4}
              md={6}
              key={plan.id}
              data-aos="fade-up"
              data-aos-duration={plan.aosDuration}
            >
              <div className={`pricing-boxarea ${plan.active ? "active" : ""}`}>
                <h4>{plan.title}</h4>
                <p>{plan.description}</p>
                <h1>
                  {plan.price} <span>{plan.period}</span>
                </h1>
                <div className="btn-area1">
                  <Link to={plan.link} className="header-btn17">
                    Choose Your Plan{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="space32"></div>
                <div className="list-area">
                  <h5>Service Include:</h5>
                  <ul>
                    {plan.services.map((service, index) => (
                      <li key={index}>
                        <img src={plan.imgSrc} alt="" className="check2" />
                        <img src={plan.imgSrcAlt} alt="" className="check3" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space24"></div>
                <p className="pera">{plan.additionalInfo}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PricingSection;
