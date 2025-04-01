import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div
      className="hero1-section-area"
      style={{ backgroundImage: "url(src/assets/img/bg/header-bg1.png)" }}
    >
      <img
        src="src/assets/img/elements/elements1.png"
        alt=""
        className="elements1 aniamtion-key-1"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="header-main-content heading1">
              <h5>
                <img src="src/assets/img/icons/logo-icons.svg" alt="" />Top #1
                SEO & Marketing Agency
              </h5>
              <h1 className="text-anime-style-3">
                Elevate Your Brand With Expert SEO & Digital Marketing
              </h1>
              <p data-aos="fade-left" data-aos-duration="1000">
                Welcome to SEOC where we specialize in revolutionizing your
                online <br className="d-lg-block d-none" />
                presence through expert SEO and digital marketing solutions.
              </p>
              <div
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <Link to="/contact" className="header-btn1">
                  Start Ranking Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
                <Link to="/contact" className="header-btn2">
                  Contact Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-images-area">
              <div className="main-images-area">
                <div className="img1">
                  <img
                    src="src/assets/img/all-images/header-img1.png"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  />
                </div>
                <div className="img2">
                  <img src="src/assets/img/bg/header-imgbg.png" alt="" />
                </div>
                <div className="icons-area">
                  <img
                    src="src/assets/img/icons/sound-icons1.svg"
                    alt=""
                    className="sound-icons1 aniamtion-key-1"
                  />
                  <img
                    src="src/assets/img/icons/lite-icons1.svg"
                    alt=""
                    className="lite-icons1 aniamtion-key-1"
                  />
                </div>
                <div className="auhtor-icons">
                  <img
                    src="src/assets/img/elements/elements2.png"
                    alt=""
                    className="elements2"
                  />
                  <img
                    src="src/assets/img/elements/elements3.png"
                    alt=""
                    className="elements3"
                  />
                </div>
                <div className="auhtor-images">
                  <img
                    src="src/assets/img/all-images/header-author-img1.png"
                    alt=""
                    className="header-author-img1 aniamtion-key-2"
                  />
                  <img
                    src="src/assets/img/all-images/header-author-img2.png"
                    alt=""
                    className="header-author-img2 aniamtion-key-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
