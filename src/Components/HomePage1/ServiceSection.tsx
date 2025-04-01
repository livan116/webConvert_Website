import React from "react";
import { Link } from "react-router-dom";

const ServiceSection: React.FC = () => {
  return (
    <div className="service1-section-area sp9" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="service-header-area heading2 text-center">
              <img
                src="src/assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="src/assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              <h2 className="text-anime-style-3">
                Popular Digital Marketing Services
                <br className="d-md-block d-none" />
                To Build Your Business
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Our expert team specializes in delivering tailored solutions
                designed to elevate <br className="d-md-block d-none" />
                your brand and drive measurable results.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-all-boxes-area">
              <div
                className="service-boxarea"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <Link to="/service1">Search Engine Optimization (SEO)</Link>
                <div className="space40"></div>
                <img
                  src="src/assets/img/icons/service-icon1.svg"
                  alt="SEO Service"
                />
                <div className="space40"></div>
                <p>
                  Enhance your online visibility & drive organic traffic with
                  our advanced SEO techniques. We optimize your website to rank
                  higher.
                </p>
              </div>

              <div
                className="service-boxarea box2"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Link to="/service2">Pay-Per-Click (PPC) Advertising</Link>
                <div className="space40"></div>
                <img
                  src="src/assets/img/icons/service-icon2.svg"
                  alt="PPC Service"
                />
                <div className="space40"></div>
                <p>
                  Reach your audience instantly and drive qualified leads with
                  targeted PPC campaigns. Our experts craft compelling ad copy
                  and optimize.
                </p>
              </div>

              <div
                className="service-boxarea box3"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <Link to="/service3">Social Media Marketing</Link>
                <div className="space66"></div>
                <img
                  src="src/assets/img/icons/service-icon3.svg"
                  alt="Social Media Marketing"
                />
                <div className="space40"></div>
                <p>
                  Build a strong brand presence and engage with your audience on
                  social media platforms. We create strategic social media
                  campaigns to boost brand.
                </p>
              </div>

              <div
                className="service-boxarea box4"
                data-aos="zoom-in"
                data-aos-duration="1400"
              >
                <Link to="/service4">Website Design and Development</Link>
                <div className="space40"></div>
                <img
                  src="src/assets/img/icons/service-icon4.svg"
                  alt="Web Design Service"
                />
                <div className="space40"></div>
                <p>
                  Make a lasting impression with a professionally designed and
                  user-friendly website. Our web design and development services
                  ensure website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
