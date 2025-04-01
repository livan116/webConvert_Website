import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <div className="about3-section-area" id="about">
      <img src="src/assets/img/bg/about-bg1.png" alt="Background 1" className="about-bg1" />
      <img src="src/assets/img/bg/about-bg2.png" alt="Background 2" className="about-bg2" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-images-area">
              <img src="src/assets/img/all-images/about-img3.png" alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-header-area heading6">
              <h5>About Us</h5>
              <h2 className="text-anime-style-3">Meet SEOC Your Trusted SEO & Digital Marketing Partner</h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                We're not just another agency – we're your digital growth partners. With <br className="d-lg-block d-none" />
                years of industry experience and a passion for innovation, our team is <br className="d-lg-block d-none" />
                dedicated to delivering measurable results to propel your business forward.
              </p>
              <h3>Our Best Service Benefits :</h3>
              <div className="list-area" data-aos="fade-left" data-aos-duration="1100">
                <ul>
                  <li><img src="src/assets/img/icons/check1.svg" alt="Check Icon" />Digital Marketing</li>
                  <li><img src="src/assets/img/icons/check1.svg" alt="Check Icon" />Marketing Agency</li>
                </ul>
                <ul>
                  <li><img src="src/assets/img/icons/check1.svg" alt="Check Icon" />SEO Optimization</li>
                  <li><img src="src/assets/img/icons/check1.svg" alt="Check Icon" />First Working Process</li>
                </ul>
              </div>
              <div className="images-area" data-aos="fade-left" data-aos-duration="1200">
                <div className="img">
                  <img src="src/assets/img/all-images/about-img4.png" alt="John Doe" />
                </div>
                <div className="content-area">
                  <Link to="/team">John Doe</Link>
                  <p>Owner SEOC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
