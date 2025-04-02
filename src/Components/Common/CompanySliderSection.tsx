import React from "react";
import Slider from "react-slick";

const brandImages = [
  "../assets/img/elements/brand-img1.png",
  "../assets/img/elements/brand-img2.png",
  "../assets/img/elements/brand-img3.png",
  "../assets/img/elements/brand-img4.png",
  "../assets/img/elements/brand-img5.png",
];

const CompanySliderSection: React.FC<{ className: string }> = ({
  className,
}) => {
  // Removed unused state and useEffect

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={className}>
      <div className="container">
        <div className="row align-items-center">
          {/* Title section - stacks vertically on mobile */}
          <div className="col-lg-2 col-12 mb-3 mb-lg-0">
            <div className="slider-head text-center text-lg-start">
              <p className="mb-0">
                Trusted by <br className="d-lg-block d-none" /> Top Companies
              </p>
            </div>
          </div>
          {/* Slider section */}
          <div className="col-lg-10 col-12">
            <Slider {...settings} className="slider-images-area">
              {brandImages.map((item, index) => (
                <div key={index} className="img-wrapper text-center px-2">
                  <img
                    src={item}
                    alt={`Brand ${index + 1}`}
                    className="img-fluid"
                    style={{ maxHeight: "60px", margin: "0 auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySliderSection;