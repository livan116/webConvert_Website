import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="hero5-section-area"
      style={{
        backgroundImage: "url(src/assets/img/bg/header-bg5.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="header-content-area heading9">
              <h5>
                <img
                  src="src/assets/img/icons/logo-icons5.svg"
                  alt="Logo Icon"
                />
                Top #1 SEO & Marketing Agency
              </h5>
              <h1 className="text-anime-style-2">
                Amplify Your Brand With Targeted SEO & Marketing Initiatives
              </h1>
              <p data-aos="fade-left" data-aos-duration="1000">
                Our team of seasoned experts is dedicated to maximizing your
                visibility, driving traffic, and ultimately boosting your bottom
                line social media.
              </p>
              <div
                className="btn-area1"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <Link to="/contact" className="header-btn9">
                  Get Started Now <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to="/contact" className="header-btn10">
                  Explore Solution <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-images-area">
              <div className="imges">
                <img
                  src="src/assets/img/all-images/header-img8.png"
                  alt="Header Image"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
              </div>
              <div className="imges1">
                <img
                  src="src/assets/img/bg/header-bg6.png"
                  alt="Background Image"
                />
              </div>
              <div className="auhtor-images">
                <div className="img1">
                  <img
                    src="src/assets/img/all-images/auhtor-img1.png"
                    alt="Author Image"
                    className="author-img1 aniamtion-key-2"
                  />
                  <img
                    src="src/assets/img/icons/sound-icons3.svg"
                    alt="Sound Icon"
                    className="sound-icons3 aniamtion-key-1"
                  />
                  <img
                    src="src/assets/img/icons/lite-icons2.svg"
                    alt="Lite Icon"
                    className="lite-icons2 aniamtion-key-1"
                  />
                  <img
                    src="src/assets/img/elements/elements11.svg"
                    alt="Elements"
                    className="elements11"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
