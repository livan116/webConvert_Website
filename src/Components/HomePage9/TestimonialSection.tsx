import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const testimonials = [
  {
    imageSrc: "src/assets/img/all-images/testimonial-img5.png",
    quote:
      "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
    author: "Leslie Alexander",
    position: "CEO, Business Administ",
  },
  {
    imageSrc: "src/assets/img/all-images/testimonial-img6.png",
    quote:
      "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
    author: "Leslie Alexander",
    position: "CEO, Business Administ",
  },
  {
    imageSrc: "src/assets/img/all-images/testimonial-img7.png",
    quote:
      "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
    author: "Leslie Alexander",
    position: "CEO, Business Administ",
  },
  {
    imageSrc: "src/assets/img/all-images/testimonial-img8.png",
    quote:
      "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
    author: "Leslie Alexander",
    position: "CEO, Business Administ",
  },
  {
    imageSrc: "src/assets/img/all-images/testimonial-img9.png",
    quote:
      "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
    author: "Leslie Alexander",
    position: "CEO, Business Administ",
  },
  {
    imageSrc: "src/assets/img/all-images/testimonial-img5.png",
    quote:
      "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
    author: "Leslie Alexander",
    position: "CEO, Business Administ",
  },
];

const TestimonialSection: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
  };

  return (
    <div className="testimonial9-section-area sp1" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="testimonial-header-area text-center heading10">
              <h5>
                <img src="assets/img/icons/logo-icons5.svg" alt="" />
                Testimonials
              </h5>
              <h2 className="text-anime-style-3">
                Client Success Stories: Hear What Our Clients Have To Say
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div
              className="testimonial-sliders text-center"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <div className="slider-testimonial">
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <React.Fragment key={index}>
                      <div className="single-testimonial-nav">
                        <img
                          src={testimonial.imageSrc}
                          alt={`Testimonial ${index + 1}`}
                          className="mx-auto"
                        />
                      </div>
                      <div className="single-testimonial" key={index}>
                        <h5>{testimonial.quote}</h5>
                        <div className="author">
                          <Link to="/team">{testimonial.author}</Link>
                          <p>{testimonial.position}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
