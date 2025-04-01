import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <div className="cta8-section-area sp1 overflow-hidden">
      <img src="src/assets/img/bg/cta-bg1.png" alt="" className="cta-bg1 aniamtion-key-2" />
      <img src="src/assets/img/bg/cta-bg2.png" alt="" className="cta-bg2 aniamtion-key-1" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="cta-header-area text-center heading2">
              <h2 className="text-anime-style-3">Start Your Journey To Online Success Today</h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Your business deserves to shine in the digital world. SEOC is here to make that happen. Our proven <br className="d-lg-block d-none" /> strategies and personalized approach ensure that your unique needs are met.
              </p>
              <div className="btn-area text-center" data-aos="fade-up" data-aos-duration="1200">
                <Link to="#" className="header-btn15">Get Started Today <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                <Link to="#" className="header-btn15 btn2">Request a Consultation <span><i className="fa-solid fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
