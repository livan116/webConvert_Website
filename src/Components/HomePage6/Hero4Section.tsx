import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero4Section: React.FC = () => {
  return (
    <div className="hero4-section-area">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="hero4-header text-center heading7">
              <img src="src/assets/img/elements/plus.png" alt="" className="plus keyframe5" />
              <h5 data-aos="fade-up" data-aos-duration="800">
                <img src="src/assets/img/icons/logo-icons3.svg" alt="" />
                Top #1 SEO & Marketing Agency
              </h5>
              <h1 className="text-anime-style-1">
                Drive Your Business Forward With Our Expert 
                <img src="src/assets/img/all-images/header-pera1.png" alt="" />
                <span>Digital Marketing 
                  <img src="src/assets/img/elements/line-img1.png" alt="" />
                </span>
                Solutions
              </h1>
              <div className="space20"></div>
              <p data-aos="fade-up" data-aos-duration="1000">
                Welcome to SEOC where we specialize in revolutionizing your online 
                <br className="d-lg-block d-none" />
                presence through expert SEO and digital marketing solutions.
              </p>
              <div className="btn-area1" data-aos="fade-up" data-aos-duration="1200">
                <Link to="/contact" className="header-btn6">START RANKING NOW</Link>
                <Link to="/contact" className="header-btn7">GET STARTED NOW</Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className="space60"></div>
        <Row>
          <Col lg={12}>
            <div className="header-images-area">
              <div className="bg1">
                <img src="src/assets/img/bg/header-bg4.png" alt="" />
              </div>
              <div className="img1" data-aos="zoom-in" data-aos-duration="1200">
                <img src="src/assets/img/all-images/header-img7.png" alt="" className="header-img7" />
              </div>
              <div className="img2">
                <img src="src/assets/img/all-images/header-img6.png" alt="" className="header-img6 animation-key-2" data-aos="fade-right" data-aos-duration="1000" />
                <img src="src/assets/img/elements/elements10.png" alt="" className="elements10" />
              </div>
              <div className="img3">
                <img src="src/assets/img/all-images/header-img4.png" alt="" className="header-img6 animation-key-1" data-aos="fade-right" data-aos-duration="1200" />
                <img src="src/assets/img/elements/elements9.png" alt="" className="elements10" />
              </div>
              <div className="img4">
                <img src="src/assets/img/all-images/header-img5.png" alt="" className="header-img6 animation-key-2" data-aos="fade-left" data-aos-duration="1000" />
                <img src="src/assets/img/icons/sound-icons2.svg" alt="" className="elements10 animation-key-5" />
              </div>
              <div className="content" data-aos="fade-left" data-aos-duration="1200">
                <ul>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                </ul>
                <p>“We are dedicated, reliable <br /> & assigned to grow your business.”</p>
                <span><img src="src/assets/img/icons/star1.svg" alt="" />CEO & Founder</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero4Section;
