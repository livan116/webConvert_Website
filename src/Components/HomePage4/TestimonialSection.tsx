import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Define an interface for testimonial data
interface Testimonial {
  image: string;
  text: string;
  authorName: string;
  authorTitle: string;
}

const testimonials: Testimonial[] = [
  {
    image: "src/assets/img/all-images/testimonial-img5.png",
    text: `“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results."`,
    authorName: "Leslie Alexander",
    authorTitle: "CEO, Business Administ",
  },
  {
    image: "src/assets/img/all-images/testimonial-img6.png",
    text: `“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results."`,
    authorName: "Leslie Alexander",
    authorTitle: "CEO, Business Administ",
  },
  {
    image: "src/assets/img/all-images/testimonial-img7.png",
    text: `“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results."`,
    authorName: "Leslie Alexander",
    authorTitle: "CEO, Business Administ",
  },
  {
    image: "src/assets/img/all-images/testimonial-img8.png",
    text: `“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results."`,
    authorName: "Leslie Alexander",
    authorTitle: "CEO, Business Administ",
  },
  {
    image: "src/assets/img/all-images/testimonial-img9.png",
    text: `“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results."`,
    authorName: "Leslie Alexander",
    authorTitle: "CEO, Business Administ",
  },
  {
    image: "src/assets/img/all-images/testimonial-img5.png",
    text: `“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results."`,
    authorName: "Leslie Alexander",
    authorTitle: "CEO, Business Administ",
  },
];

const TestimonialSection: React.FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
  };

  return (
    <div
      className="testimonial5-section-area sp1"
      id="testimonial"
      style={{
        backgroundImage: "url(src/assets/img/bg/header-bg5.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="testimonial-header-area text-center heading10">
              <h5>
                <img src="src/assets/img/icons/logo-icons5.svg" alt="" />
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
              <Slider {...settings} className="slider-testimonial">
                {testimonials.map((testimonial, index) => (
                  <div className="single-testimonial" key={index}>
                    <div className="single-testimonial-nav text-center">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="mx-auto mb-3"
                      />
                    </div>
                    <h5>{testimonial.text}</h5>
                    <div className="author">
                      <Link to="/team">{testimonial.authorName}</Link>
                      <p>{testimonial.authorTitle}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
