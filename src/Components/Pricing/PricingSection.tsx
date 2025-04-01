import React from "react";
import Slider from "react-slick";
import PricingBox from "./PricingBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PricingSection: React.FC = () => {
  const pricingData = [
    {
      title: "Basic Plan - Starter",
      price: 999,
      description:
        "Small businesses or startups looking to establish their online presence.",
      services: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
    },
    {
      title: "Standard Plan - Growth",
      price: 1999,
      description:
        "Small businesses or startups looking to establish their online presence.",
      services: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
      active: true,
    },
    {
      title: "Premium Plan - Pro",
      price: 2999,
      description:
        "Small businesses or startups looking to establish their online presence.",
      services: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="pricing-inner-section-area sp2">
      <div className="container">
        <div className="testimonia4-header text-center blog-hedaer-area heading2 text-center" >
        <h1 className="text-anime-style-1 fs-1 mb-4" > Our Pricing </h1>
        </div>
      
        <div className="block md:hidden">
          {/* Carousel for mobile */}
          <Slider {...settings}>
            {pricingData.map((pricing, index) => (
              <div key={index} className="px-1">
                {/* Added padding to prevent edge visibility */}
                <PricingBox
                  title={pricing.title}
                  price={pricing.price}
                  description={pricing.description}
                  services={pricing.services}
                  active={pricing.active}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
