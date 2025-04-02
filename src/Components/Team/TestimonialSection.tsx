import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const testimonials = [
  {
    content: `"I can't say enough about the incredible results we've achieved with SEOC. Their SEO expertise has catapulted our website to the top of search engine rankings, resulting in a significant increase in organic traffic and leads. I highly recommend SEOC to any business looking to boost their visibility and drive growth online."`,
    name: "Anderson Belly",
    position: "Head Of Google Ads",
    icon: "../assets/img/icons/quito3.svg",
    image: "../assets/img/all-images/testimonial-img10.png",
  },
  {
    content: `"I can't say enough about the incredible results we've achieved with SEOC. Their SEO expertise has catapulted our website to the top of search engine rankings, resulting in a significant increase in organic traffic and leads. I highly recommend SEOC to any business looking to boost their visibility and drive growth online."`,
    name: "Anderson Stacy",
    position: "Head Of Google Ads",
    icon: "../assets/img/icons/quito3.svg",
    image: "../assets/img/all-images/testimonial-img10.png",
  },
  {
    content: `"I can't say enough about the incredible results we've achieved with SEOC. Their SEO expertise has catapulted our website to the top of search engine rankings, resulting in a significant increase in organic traffic and leads. I highly recommend SEOC to any business looking to boost their visibility and drive growth online."`,
    name: "Anderson Sara",
    position: "Head Of Google Ads",
    icon: "../assets/img/icons/quito3.svg",
    image: "../assets/img/all-images/testimonial-img10.png",
  },
];

const TestimonialSection: React.FC = () => {
  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
  };

  return (
    <div className="testimonial1-section-area sp1">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            {/* <div className="testimonial-sliders">
              <div className="testimonial-arrows">
                <div className="testimonial-prev-arrow">
                  <Button>
                    <i className="fa-solid fa-arrow-left"></i>
                  </Button>
                </div>
                <div className="testimonial-next-arrow">
                  <Button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </div>
              </div>
            </div> */}
            <Slider className="testimonial-sliders" {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <div className="testimonial-content-slider slider-nav1">
                        <div className="testimonial-slider-boxarea">
                          <Image
                            src={testimonial.icon}
                            alt="Testimonial Icon"
                          />
                          <div className="space24"></div>
                          <div className="testimonial5-all-content">
                            <p>{testimonial.content}</p>
                          </div>
                          <div className="space32"></div>
                          <div className="content">
                            <Link to="/team">{testimonial.name}</Link>
                            <p>{testimonial.position}</p>
                          </div>
                        </div>
                        {/* <div className="testimonial-arrows">
                          <div className="testimonial-prev-arrow">
                            <Button>
                              <i className="fa-solid fa-arrow-left"></i>
                            </Button>
                          </div>
                          <div className="testimonial-next-arrow">
                            <Button>
                              <i className="fa-solid fa-arrow-right"></i>
                            </Button>
                          </div>
                        </div> */}
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="teimonial-slider-nav-area foter-carousel">
                        <div className="testimonial-slider-img">
                          <Image src={testimonial.image} alt="Testimonial" />
                        </div>
                      </div>
                    </Col>
                  </Row>
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
