import React from "react";
import { Link } from "react-router-dom";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  services: string[];
  additionalText: string;
  isActive?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Plan - Starter",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$999",
    services: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    additionalText:
      "Small businesses or startups looking to establish their online presence.",
  },
  {
    title: "Standard Plan - Growth",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$1999",
    services: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    additionalText:
      "Growing businesses seeking to expand their reach and drive more traffic & conversions.",
    isActive: true,
  },
  {
    title: "Premium Plan - Pro",
    description:
      "Our SEO and Digital Marketing agency offers a range of pricing plans tailored",
    price: "$2999",
    services: [
      "Keyword Research",
      "One Page Optimization",
      "Basic Analytics Reporting",
    ],
    additionalText:
      "Established businesses looking to dominate their industry online achieve maximum ROI.",
  },
];

const PricingSection: React.FC = () => (
  <div className="pricing9-section-area sp2" id="pricing">
    <div className="row">
      <div className="col-lg-6 m-auto">
        <div className="pricing-header text-center heading14">
          <h5>
            <img src="src/assets/img/icons/logo-icons7.svg" alt="" />
            Pricing
          </h5>
          <h2 className="text-anime-style-3">SEOC Special Pricing Plan</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {pricingPlans.map((plan, index) => (
          <div
            className={`col-lg-4 col-md-6`}
            data-aos="fade-up"
            data-aos-duration={`${800 + index * 200}`}
            key={index}
          >
            <div className={`pricing-boxarea ${plan.isActive ? "active" : ""}`}>
              <h4>{plan.title}</h4>
              <p>
                {plan.description}
                <br className="d-lg-block d-none" />
              </p>
              <h1>
                {plan.price} <span>/monthly</span>
              </h1>
              <div className="btn-area1">
                <Link to="/pricing" className="header-btn16">
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
                  {plan.services.map((service, idx) => (
                    <li key={idx}>
                      <img
                        src="src/assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="src/assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space24"></div>
              <p className="pera">{plan.additionalText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PricingSection;
