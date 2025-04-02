import React from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";

const brandImages = [
  "../assets/img/elements/brand-img1.png",
  "../assets/img/elements/brand-img2.png",
  "../assets/img/elements/brand-img3.png",
  "../assets/img/elements/brand-img4.png",
  "../assets/img/elements/brand-img5.png",
];

const CompanySliderSectionV2: React.FC<{ className: string }> = ({
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
    <div className={className}>
      <div className="container">
        <Row>
          <div className="slider-head text-center mb-4">
            <p>We've Worked With Over 100+ Clients Around The World</p>
          </div>
        </Row>
        <Row>
          <Slider {...settings} className="slider-images-area">
            {brandImages.map((item, index) => (
              <div key={index} className={`img1`}>
                <img src={item} alt={`Brand ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </Row>
      </div>
    </div>
  );
};

export default CompanySliderSectionV2;
