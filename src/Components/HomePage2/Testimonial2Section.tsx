import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Testimonial {
  imgSrc: string;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    imgSrc: "src/assets/img/all-images/testimonial-img3.png",
    name: "Orlando Schulist",
    role: "Company Owner",
    content:
      "Partnering with SEOC has been a transformative experience for our business. Their comprehensive approach to digital marketing has not only elevated our online presence but also streamlined our marketing efforts across multiple channels.",
  },
  {
    imgSrc: "src/assets/img/all-images/testimonial-img4.png",
    name: "Ms. Timmy Harvey",
    role: "Company Owner",
    content:
      "We've had the pleasure of working with [Your Company Name] for several years now, and they have consistently exceeded our expectations in every aspect. From the initial consultation to ongoing support, their team has demonstrated a deep understanding.",
  },
  {
    imgSrc: "src/assets/img/all-images/testimonial-img3.png",
    name: "Orlando Schulist",
    role: "Company Owner",
    content:
      "Partnering with SEOC has been a transformative experience for our business. Their comprehensive approach to digital marketing has not only elevated our online presence but also streamlined our marketing efforts across multiple channels.",
  },
];

// Define the TestimonialSection component
const Testimonial2Section: React.FC = () => {
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
    <div className="testimonial2-section-area">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <div className="testimonial-header heading4 text-center">
              <h5>Testimonials</h5>
              <h2 className="text-anime-style-3">What Our Client Say</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="m-auto">
            <Slider {...settings} className="testimonial2-owl-carousel-area">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-author-box">
                  <ul>
                    {Array.from({ length: 5 }, (_, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    ))}
                  </ul>
                  <p className="pera">{testimonial.content}</p>
                  <div className="content-area">
                    <div className="images-content">
                      <div className="img1">
                        <img src={testimonial.imgSrc} alt="" />
                      </div>
                      <div className="content">
                        <Link to="/team">{testimonial.name}</Link>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                    <img
                      src="src/assets/img/icons/quito1.svg"
                      alt=""
                      className="quito1"
                    />
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

export default Testimonial2Section;
