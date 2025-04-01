import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => (
  <div className="cta9-section-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="images image-anime">
            <img src="src/assets/img/all-images/cta-img2.png" alt="" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="cta-content-area">
            <h2 className="text-anime-style-3">
              Elevate Your Brand Online Partner with Us for Proven Digital
              Success
            </h2>
            <div className="space16"></div>
            <p>
              At SEOC, we believe that your brand has the potential to achieve
              greatness online. Our proven SEO and digital marketing strategies
              are designed to elevate your brand and drive significant growth.
            </p>
            <div className="space32"></div>
            <div className="btn-area1">
              <Link to="/contact" className="header-btn16">
                Schedule A Consultation{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTASection;
