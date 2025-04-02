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
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className={className}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="slider-head">
                <p>
                  Trusted by <br className="d-lg-block d-none" /> Top Companies
                </p>
              </div>
            </div>
            <div className="col-lg-10">
              <Slider {...settings} className="slider-images-area">
                {brandImages.map((item, index) => (
                  <div key={index} className={`img1`}>
                    <img src={item} alt={`Brand ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySliderSection;
