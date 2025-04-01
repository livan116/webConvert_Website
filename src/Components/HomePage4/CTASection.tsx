import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <div
      className="cta5-section-area sp1"
      style={{
        backgroundImage: "url(src/assets/img/bg/header-bg5.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="cta-header-area text-center heading10">
              <h2 className="text-anime-style-3">
                Ready To Take Your Digital Marketing To the Next Level?
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Effective SEO strategies not only elevate a website's visibility
                but also drive
                <br className="d-lg-block d-none" /> targeted traffic, enhance
                user experience,
              </p>
              <div
                className="btn-area1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link to="/contact" className="header-btn9">
                  Get Started Today <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to="/contact" className="header-btn10">
                  Request a Consultation{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
