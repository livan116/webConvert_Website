import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  rating: number;
  authorLink: string;
  logoSrc: string;
  animation: string;
  aosDuration: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Working with SEOC has been a game-changer for our business. Their strategic approach to SEO digital marketing has significantly increased our online visibility and lead generation.",
    author: "Sarah L.",
    rating: 5,
    authorLink: "/team",
    logoSrc: "../assets/img/icons/google1.svg",
    animation: "zoom-out",
    aosDuration: 1200,
  },
  {
    id: 2,
    text: "We've been partnering with SEOC for over a year now, and the results speak for themselves. Their comprehensive digital marketing solutions have helped us achieve measurable growth.",
    author: "David M.",
    rating: 5,
    authorLink: "/team",
    logoSrc: "../assets/img/icons/google1.svg",
    animation: "zoom-out",
    aosDuration: 1200,
  },
  {
    id: 3,
    text: "As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us.",
    author: "Emily R.",
    rating: 5,
    authorLink: "/team",
    logoSrc: "../assets/img/icons/google1.svg",
    animation: "zoom-out",
    aosDuration: 1200,
  },
];

const TestimonialSection: React.FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonial4-section-area sp1" id="testimonial">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <div className="testimonia4-header text-center heading8">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                <img
                  src="../assets/img/icons/logo-icons3.svg"
                  alt="Logo Icon"
                />{" "}
                Testimonials
              </h5>
              <h2 className="text-anime-style-1">
                “What Our{" "}
                <span>
                  Client Say”{" "}
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
          <Col lg={12} data-aos="zoom-out" data-aos-duration="1200">
            <Slider {...settings} className="testimonial4-slider-area">
              {testimonials.map((testimonial) => (
                <div className="testimonial-boxarea" key={testimonial.id}>
                  <img
                    src="../assets/img/icons/quito2.svg"
                    alt="Quote Icon"
                    className="quito"
                  />
                  <p>{testimonial.text}</p>
                  <div className="space48"></div>
                  <div className="auhtor-logo">
                    <div className="text">
                      <Link to={testimonial.authorLink}>
                        {testimonial.author}
                      </Link>
                      <ul>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="logo">
                      <img src={testimonial.logoSrc} alt="Author Logo" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialSection;
