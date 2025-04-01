import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const imageData: ImageProps[] = [
  {
    src: "src/assets/img/elements/elements6.png",
    alt: "Elements 6",
    className: "elements6 aniamtion-key-2",
  },
  {
    src: "src/assets/img/elements/elements7.png",
    alt: "Elements 7",
    className: "elements7 keyframe5",
  },
  {
    src: "src/assets/img/bg/bg1.png",
    alt: "Background",
    className: "bg1 aniamtion-key-5",
  },
  {
    src: "src/assets/img/all-images/cta-img1.png",
    alt: "CTA Image",
    className: "cta-img1",
  },
];

const Cta2Section: React.FC = () => {
  return (
    <div className="cta2-section-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="cta-author-area">
              <Row>
                <Col lg={5}>
                  <div className="cta2-header heading4">
                    <h2 className="text-anime-style-3">
                      Ready to Take Your SEO To The Next Level
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="100">
                      Effective SEO strategies not only elevate a website's
                      visibility but also drive targeted traffic, enhance user
                      experience,
                    </p>
                    <div className="space24"></div>
                    <div
                      className="btn-area"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <Link to="/contact" className="header-btn3">
                        Get Started Now
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={2}></Col>
                <Col lg={4}>
                  <div
                    className="images"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    {imageData.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta2Section;
