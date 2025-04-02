import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PricingPlan {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  link: string;
  animation: string;
  aosDuration: number;
  isActive?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Basic Plan - Starter",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored.",
    price: "$999",
    duration: "/monthly",
    features: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    link: "/pricing",
    animation: "flip-right",
    aosDuration: 800,
  },
  {
    id: 2,
    title: "Standard Plan - Growth",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored.",
    price: "$1999",
    duration: "/monthly",
    features: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    link: "/pricing",
    animation: "flip-left",
    aosDuration: 1000,
    isActive: true,
  },
  {
    id: 3,
    title: "Premium Plan - Pro",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored.",
    price: "$2999",
    duration: "/monthly",
    features: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    link: "/pricing",
    animation: "flip-right",
    aosDuration: 1200,
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="pricing-section-area sp2">
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <div className="pricing-header heading8 text-center">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                <img
                  src="../assets/img/icons/logo-icons3.svg"
                  alt="Logo Icon"
                />
                Pricing & Plan
              </h5>
              <h2 className="text-anime-style-1">
                SEOC{" "}
                <span>
                  Pricing Plan{" "}
                  <img
                    src="../assets/img/elements/line-img2.png"
                    alt="Line Icon"
                  />
                </span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {pricingPlans.map((plan) => (
            <Col
              lg={4}
              md={6}
              key={plan.id}
              data-aos={plan.animation}
              data-aos-duration={plan.aosDuration}
            >
              <div
                className={`pricing-boxarea ${plan.isActive ? "active" : ""}`}
              >
                <h4>{plan.title}</h4>
                <p>{plan.description}</p>
                <h1>
                  {plan.price} <span>{plan.duration}</span>
                </h1>
                <div className="space32"></div>
                <div className="btn-area1">
                  <Link to={plan.link} className="header-btn12">
                    Choose Your Plan <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="space32"></div>
                <div className="list-area">
                  <h5>Service Include:</h5>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <img
                          src="../assets/img/icons/check2.svg"
                          alt="Check Icon 2"
                          className="check2"
                        />
                        <img
                          src="../assets/img/icons/check3.svg"
                          alt="Check Icon 3"
                          className="check3"
                        />
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

export default PricingSection;
