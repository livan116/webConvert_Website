import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
    author: "Emma",
    rating: 5,
    authorLink: "/team",
    logoSrc: "../assets/img/icons/google1.svg",
    animation: "zoom-out",
    aosDuration: 1200,
  },
];

const TestimonialSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const settings = {
    dots: true,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sliderVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="testimonial4-section-area bg2 sp1"
      id="testimonial"
    >
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <motion.div
              variants={headerVariants}
              className="testimonia4-header text-center blog-hedaer-area heading2 text-center"
            >
              <motion.h5 variants={headerVariants}>
                Testimonials
              </motion.h5>
              <motion.h2 variants={headerVariants} className="text-anime-style-1">
                Clients Feedback
              </motion.h2>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <motion.div variants={sliderVariants}>
              <Slider {...settings} className="testimonial4-slider-area">
                {testimonials.map((testimonial) => (
                  <div className="testimonial-boxarea" key={testimonial.id}>
                    <img
                      src="../assets/img/icons/quito4.svg"
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
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default TestimonialSection;