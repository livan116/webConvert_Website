import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Partnering with SEOC has been a transformative experience for our business. Their comprehensive approach to digital marketing has not only elevated our online presence but also streamlined our marketing efforts across multiple channels.",
    imgSrc: "src/assets/img/all-images/testimonial-img3.png",
    name: "Orlando Schulist",
    role: "Company Owner",
    quoteImg: "src/assets/img/icons/quito6.svg",
    teamLink: "/team",
  },
  {
    id: 2,
    stars: 5,
    text: "We've had the pleasure of working with SEOC for several years now, and they have consistently exceeded our expectations in every aspect. From the initial consultation to ongoing support, their team has demonstrated a deep understanding.",
    imgSrc: "src/assets/img/all-images/testimonial-img4.png",
    name: "Ms. Timmy Harvey",
    role: "Company Owner",
    quoteImg: "src/assets/img/icons/quito6.svg",
    teamLink: "/team",
  },
  {
    id: 3,
    stars: 5,
    text: "Partnering with SEOC has been a transformative experience for our business. Their comprehensive approach to digital marketing has not only elevated our online presence but also streamlined our marketing efforts across multiple channels.",
    imgSrc: "src/assets/img/all-images/testimonial-img3.png",
    name: "Orlando Schulist",
    role: "Company Owner",
    quoteImg: "src/assets/img/icons/quito6.svg",
    teamLink: "/team",
  },
];

const TestimonialSection = () => {
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
    <div className="testimonial10-section-area sp1">
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <div className="testimonial-header heading15 text-center">
              <h5>Testimonials</h5>
              <h2 className="text-anime-style-3">What Our Client Say</h2>
            </div>
          </Col>
        </Row>
        <Col
          lg={10}
          className="m-auto"
          data-aos="zoom-out"
          data-aos-duration="1200"
        >
          <Slider {...settings} className="testimonial2-owl-carousel-area">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-author-box">
                <ul className="p-0 d-flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  ))}
                </ul>
                <p className="pera">“{testimonial.text}”</p>
                <div className="content-area">
                  <div className="images-content">
                    <div className="img1">
                      <img src={testimonial.imgSrc} alt={testimonial.name} />
                    </div>
                    <div className="content">
                      <Link to={testimonial.teamLink}>{testimonial.name}</Link>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                  <img
                    src={testimonial.quoteImg}
                    alt="quote"
                    className="quito6"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Container>
    </div>
  );
};

export default TestimonialSection;
