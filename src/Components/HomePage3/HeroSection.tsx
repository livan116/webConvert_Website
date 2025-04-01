import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// Define the images array
const images = [
  {
    src: "src/assets/img/elements/plus.png",
    alt: "Plus",
    className: "plus keyframe5",
  },
  { src: "src/assets/img/icons/logo-icons3.svg", alt: "Logo Icon", className: "" },
  { src: "src/assets/img/elements/line-img1.png", alt: "Line", className: "" },
  { src: "src/assets/img/bg/bg2.png", alt: "Background 2", className: "bg-2" },
  {
    src: "src/assets/img/all-images/header-img6.png",
    alt: "Header Image 6",
    className: "header-img6 aniamtion-key-2",
    dataAos: "fade-right",
    dataAosDuration: "1000",
  },
  {
    src: "src/assets/img/elements/elements10.png",
    alt: "Elements 10",
    className: "elements10",
  },
  {
    src: "src/assets/img/all-images/header-img5.png",
    alt: "Header Image 5",
    className: "header-img6 aniamtion-key-2",
    dataAos: "fade-left",
    dataAosDuration: "1000",
  },
  {
    src: "src/assets/img/icons/sound-icons2.svg",
    alt: "Sound Icon",
    className: "elements10 aniamtion-key-5",
  },
];

// Define the HeroSection component
const HeroSection: React.FC = () => {
  return (
    <div className="hero4-section-area">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="hero4-header text-center heading7">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className={images[0].className}
              />
              <h5 data-aos="fade-up" data-aos-duration="800">
                <img src={images[1].src} alt={images[1].alt} />
                Top #1 SEO & Marketing Agency
              </h5>
              <h1 className="text-anime-style-1">
                Local SEO Tactics To
                <span>
                  Dominate
                  <img src={images[2].src} alt={images[2].alt} />
                </span>{" "}
                Your Market
              </h1>
              <div className="space20"></div>
              <p data-aos="fade-up" data-aos-duration="1000">
                Welcome to SEOC where we specialize in revolutionizing your
                online
                <br className="d-lg-block d-none" />
                presence through expert SEO and digital marketing solutions.
              </p>
            </div>
          </Col>
          <div className="space60"></div>
          <Col lg={12}>
            <div className="header-images-area">
              <div className={images[3].className}>
                <img src={images[3].src} alt={images[3].alt} />
              </div>
              <div className="form-area">
                <form>
                  <div className="input-area">
                    <span>
                      <i className="fa-solid fa-link"></i>
                    </span>
                    <input type="text" placeholder="https://yoursite.com" />
                  </div>
                  <div className="input-area">
                    <span>
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <input type="text" placeholder="youremail@domain.com" />
                  </div>
                  <div className="btn-area">
                    <Link to="#" className="header-btn12">
                      Analyze Now <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="img2">
                <img
                  src={images[4].src}
                  alt={images[4].alt}
                  className={images[4].className}
                  data-aos={images[4].dataAos}
                  data-aos-duration={images[4].dataAosDuration}
                />
                <img
                  src={images[5].src}
                  alt={images[5].alt}
                  className={images[5].className}
                />
              </div>
              <div className="img4 others">
                <img
                  src={images[6].src}
                  alt={images[6].alt}
                  className={images[6].className}
                  data-aos={images[6].dataAos}
                  data-aos-duration={images[6].dataAosDuration}
                />
                <img
                  src={images[7].src}
                  alt={images[7].alt}
                  className={images[7].className}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
