import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Basic Plan - Starter",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$999",
    priceDuration: "/monthly",
    buttonText: "Choose Your Plan",
    buttonLink: "/pricing",
    features: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    imgSrc: "src/assets/img/icons/check9.svg",
    aosType: "flip-right",
    aosDuration: 800,
  },
  {
    title: "Standard Plan - Growth",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$1999",
    priceDuration: "/monthly",
    buttonText: "Choose Your Plan",
    buttonLink: "/pricing",
    features: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    imgSrc: "src/assets/img/icons/check10.svg",
    aosType: "flip-left",
    aosDuration: 1000,
    active: true,
  },
  {
    title: "Premium Plan - Pro",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$2999",
    priceDuration: "/monthly",
    buttonText: "Choose Your Plan",
    buttonLink: "/pricing",
    features: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    imgSrc: "src/assets/img/icons/check9.svg",
    aosType: "flip-right",
    aosDuration: 1200,
  },
];

const Pricing7Section: React.FC = () => {
  return (
    <div className="pricing7-section-area sp2" id="pricing">
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <div className="pricing-header heading12 text-center">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                Pricing & Plan
              </h5>
              <h2 className="text-anime-style-1">
                SEOC <span>Pricing Plan</span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {pricingPlans.map((plan, index) => (
            <Col
              lg={4}
              md={6}
              data-aos={plan.aosType}
              data-aos-duration={plan.aosDuration}
              key={index}
            >
              <div className={`pricing-boxarea ${plan.active ? "active" : ""}`}>
                <h4>{plan.title}</h4>
                <p>{plan.description}</p>
                <h1>
                  {plan.price} <span>{plan.priceDuration}</span>
                </h1>
                <div className="space32"></div>
                <div className="btn-area1">
                  <Link to={plan.buttonLink} className="header-btn13">
                    {plan.buttonText}{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="space32"></div>
                <div className="list-area">
                  <h5>Service Include:</h5>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <img src={plan.imgSrc} alt="" className="check9" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space24"></div>
                <p className="pera">
                  Small businesses or startups looking to establish their online
                  presence.
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Pricing7Section;
