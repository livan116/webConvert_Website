import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const GoogleReviewsV2: React.FC<{ className: string }> = ({ className }) => {
  const settings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    dots: true,
  };

  return (
    <div className={className || ""} id="testimonial">
      <div className="container">
        <Row>
          <Col lg={4} className="m-auto">
            <div className="pricing-header heading12 text-center mb-5">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                Testimonials
              </h5>
              <h2 className="text-anime-style-1">
                What Our Client Say <br className="d-lg-block d-none" /> On
                Google Reviews
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <div
            className="col-lg-11 m-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Slider
              className="testimonials-slider-area owl-carousel"
              {...settings}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-boxarea">
                  <Row>
                    <div className="col-lg-5">
                      <div className="pera">
                        <p>{testimonial.text}</p>
                        <div className="space100"></div>
                        <div className="space30"></div>
                        <div className="list-area">
                          <div className="list">
                            <ul>
                              {Array.from({ length: 5 }, (_, i) => (
                                <li key={i}>
                                  <i className="fa-solid fa-star"></i>
                                </li>
                              ))}
                            </ul>
                            <Link to="/team">{testimonial.name}</Link>
                          </div>
                          <img
                            src="../assets/img/icons/google.svg"
                            alt="Google"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="images">
                        <img
                          src={testimonial.image}
                          alt={`Testimonial from ${testimonial.name}`}
                        />
                      </div>
                    </div>
                  </Row>
                </div>
              ))}
            </Slider>
          </div>
        </Row>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
    name: "John Doe",
    image: "../assets/img/all-images/testimonial-img1.png",
  },
  {
    text: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
    name: "John Doe",
    image: "../assets/img/all-images/testimonial-img2.png",
  },
  {
    text: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
    name: "John Doe",
    image: "../assets/img/all-images/testimonial-img2.png",
  },
];

export default GoogleReviewsV2;
