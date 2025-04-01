import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="hero3-section-area">
      {/* Background and decorative images */}
      <img src="src/assets/img/elements/star2.png" alt="" className="star3 keyframe5" />
      <img src="src/assets/img/elements/star2.png" alt="" className="star4 keyframe5" />
      <img src="src/assets/img/bg/header-bg2.png" alt="" className="header-bg2" />
      <img src="src/assets/img/bg/header-bg3.png" alt="" className="header-bg3" />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="header-main-area heading5">
              <h5>
                <img src="src/assets/img/icons/logo-icons2.svg" alt="" />
                Top #1 SEO & Marketing Agency
              </h5>
              <h1 className="text-anime-style-3">
                Pioneering SEO & Digital Marketing Solutions Agency
              </h1>
              <p data-aos="fade-left" data-aos-duration="1000">
                With a dedicated team of experts armed with the latest tools and techniques, we specialize in crafting bespoke SEO & digital marketing solutions.
              </p>
              <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                <Link to="/contact" className="header-btn4 btn2">Start Ranking Now</Link>
                <Link to="/contact" className="header-btn5">Contact Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="header-images-area" data-aos="zoom-in" data-aos-duration="1000">
              <img src="src/assets/img/elements/elements8.png" alt="" className="elements6 animation-key-1" />
              <img src="src/assets/img/elements/star5.png" alt="" className="star5 keyframe5" />
              <div className="img1">
                <img src="src/assets/img/bg/header-imgbg3.png" alt="" className="header-imgbg2" />
                <img src="src/assets/img/all-images/header-img3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
