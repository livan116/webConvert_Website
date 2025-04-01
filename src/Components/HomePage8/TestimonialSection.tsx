import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const testimonials = [
  {
    quote:
      "Working with SEOC has been a game-changer for our business. Their strategic approach to SEO digital marketing has significantly increased our online visibility and lead generation.",
    author: "Sarah L.",
    date: "09, MAY 2024",
    rating: 5,
    image: "src/assets/img/icons/quito5.svg",
    logo: "src/assets/img/icons/google1.svg",
    link: "/team",
  },
  {
    quote:
      "We've been partnering with SEOC for over a year now, and the results speak for themselves. Their comprehensive digital marketing solutions have helped us achieve measurable growth.",
    author: "David M.",
    date: "10, MAY 2024",
    rating: 5,
    image: "src/assets/img/icons/quito5.svg",
    logo: "src/assets/img/icons/google1.svg",
    link: "/team",
  },
  {
    quote:
      "As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us.",
    author: "Emily R.",
    date: "12, MAY 2024",
    rating: 5,
    image: "src/assets/img/icons/quito5.svg",
    logo: "src/assets/img/icons/google1.svg",
    link: "/team",
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
    <div className="testimonial8-section-area sp1" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="testimonia4-header text-center heading13">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                Testimonials
              </h5>
              <h2 className="text-anime-style-3">What Our Clients Say</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            <Slider
              {...settings}
              className="testimonial4-slider-area owl-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-boxarea" key={index}>
                  <img src={testimonial.image} alt="" className="quito" />
                  <p>{`"${testimonial.quote}"`}</p>
                  <div className="space48"></div>
                  <div className="auhtor-logo">
                    <div className="text">
                      <Link to={testimonial.link}>{testimonial.author}</Link>
                      <ul className="m-0 p-0">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <li key={i}>
                              <i className="fa-solid fa-star"></i>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="logo">
                      <img src={testimonial.logo} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
