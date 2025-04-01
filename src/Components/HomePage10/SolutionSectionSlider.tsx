import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const solutionSlides = [
  {
    id: 1,
    imgSrc: "src/assets/img/all-images/solution-img5.png",
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails",
    link: "/case-single",
  },
  {
    id: 2,
    imgSrc: "src/assets/img/all-images/solution-img6.png",
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails",
    link: "/case-single",
  },
  {
    id: 3,
    imgSrc: "src/assets/img/all-images/solution-img7.png",
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails",
    link: "/case-single",
  },
  {
    id: 4,
    imgSrc: "src/assets/img/all-images/solution-img5.png",
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails",
    link: "/case-single",
  },
  {
    id: 5,
    imgSrc: "src/assets/img/all-images/solution-img6.png",
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails",
    link: "/case-single",
  },
  {
    id: 6,
    imgSrc: "src/assets/img/all-images/solution-img7.png",
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails",
    link: "/case-single",
  },
];

const SolutionSectionSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="solution-section-slider-area sp1" id="solution">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="solution-header heading15">
              <div className="main-content">
                <h5>SEO Solution</h5>
                <h2 className="text-anime-style-3">
                  An Amazing Family Of SEO <br className="d-md-block d-none" />{" "}
                  Solution For Every Need
                </h2>
              </div>
              <div className="auhtor-area">
                <div className="img1">
                  <img
                    src="src/assets/img/all-images/author-img1.png"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <h2>
                    <span className="counter">500</span>+
                  </h2>
                  <p>Campaigns</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Slider {...settings} className="solution-slider-area">
              {solutionSlides.map((slide) => (
                <div className="images-content-area" key={slide.id}>
                  <div className="img1">
                    <img src={slide.imgSrc} alt={slide.title} />
                  </div>
                  <div className="content-area heading15">
                    <Link to={slide.link}>{slide.title}</Link>
                    <div className="space20"></div>
                    <p>{slide.description}</p>
                    <div className="space32"></div>
                    <Link to={slide.link} className="readmore">
                      Learn More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
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

export default SolutionSectionSlider;
