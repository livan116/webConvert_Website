import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";

const GoogleReviews: React.FC<{ className: string }> = ({ className }) => {
  const settings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    dots: false,
    centerPadding: "0px",
  };

  return (
    <div className={className || ""} id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="testimonial-header heading2 text-center">
              <motion.img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star2"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star3"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.h2
                className="text-anime-style-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                What Our Client Say <br className="d-md-block d-none" />
                On Google Reviews
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Don't just take our word for it. Hear what our satisfied clients{" "}
                <br className="d-md-block d-none" />
                have to say about their experience partnering with SEOC.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="row">
          <motion.div
            className="col-lg-11 m-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Slider
              className="testimonials-slider-area owl-carousel"
              {...settings}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-boxarea">
                  <div className="row">
                    <div className="col-lg-5">
                      <motion.div 
                        className="pera"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <p>{testimonial.text}</p>
                        <div className="space100"></div>
                        <div className="space30"></div>
                        <div className="list-area">
                          <div className="list">
                            <ul>
                              {Array.from({ length: 5 }, (_, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                                >
                                  <i className="fa-solid fa-star"></i>
                                </motion.li>
                              ))}
                            </ul>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 1.2 }}
                            >
                              <Link to="/team">{testimonial.name}</Link>
                            </motion.div>
                          </div>
                          <motion.img
                            src="../assets/img/icons/google.svg"
                            alt="Google"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="col-lg-7">
                      <motion.div 
                        className="images"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.3,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        <img
                          src={testimonial.image}
                          alt={`Testimonial from ${testimonial.name}`}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
    name: "Livan",
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

export default GoogleReviews;