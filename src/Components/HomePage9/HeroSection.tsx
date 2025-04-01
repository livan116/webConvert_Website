import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Data for counter boxes
const counterData = [
  { value: "500+", label: "Campaigns" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "25+", label: "Country Reach" },
];

// Data for carousel images
const carouselImages = [
  "src/assets/img/all-images/header-img12.png",
  "src/assets/img/all-images/header-img12.png",
  "src/assets/img/all-images/header-img12.png",
  "src/assets/img/all-images/header-img12.png",
];

const HeroSection: React.FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <div className="hero9-section-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <div className="hero9-header heading3 text-center">
                <h1 className="text-anime-style-3">
                  Skyrocket Your Online Growth With Premier SEO Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="header-author-area">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="header-area">
                      <h5>
                        <img
                          src="src/assets/img/icons/logo-icons2.svg"
                          alt=""
                        />
                        Top #1 SEO & Marketing Agency
                      </h5>
                      <div className="space16"></div>
                      <h2 className="text-anime-style-3">
                        Grow Your Online Presence With Customized SEO And
                        Digital Marketing Solutions.
                      </h2>
                      <div className="space32"></div>
                      <div className="btn-area1">
                        <Link to="/about" className="header-btn16">
                          Learn More{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                      <div className="space32"></div>
                      <div className="counter-boxarea">
                        <div className="row">
                          {counterData.map((item, index) => (
                            <div
                              className="col-lg-4 col-md-4 col-6"
                              key={index}
                            >
                              <div className="counter-box">
                                <h2>
                                  <span className="counter">{item.value}</span>
                                </h2>
                                <div className="space16"></div>
                                <p>{item.label}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Slider {...settings} className="header-bottom-img">
                      {carouselImages.map((src, index) => (
                        <div className="img1" key={index}>
                          <img
                            src={src}
                            alt={`Carousel Image ${index + 1}`}
                            style={{ width: "100%" }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
