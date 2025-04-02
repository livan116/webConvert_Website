import React from "react";
import { Link } from "react-router-dom";

const WorksSection1: React.FC = () => {
  return (
    <div className="works-inner-section-area sp10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="works-header-area heading2">
              <h5>Why Choose Us</h5>
              <h2>Experience the Advantage Why We're the Right Choice</h2>
              <p>
                At SEOC we understand that you have many options when it comes
                to digital marketing services. So why should you choose us? Here
                are a few reasons
              </p>
              <div className="space32"></div>
              <div className="works-content-box">
                <div className="icons">
                  <img
                    src="../assets/img/icons/works-icons7.svg"
                    alt="Proven Result"
                  />
                </div>
                <div className="content">
                  <Link to="/case-single">Proven Result</Link>
                  <p>
                    We have a track record of delivering tangible results for
                    our clients. From increasing website traffic and improving
                    search.
                  </p>
                </div>
              </div>
              <div className="space20"></div>
              <div className="works-content-box">
                <div className="icons">
                  <img
                    src="../assets/img/icons/works-icons8.svg"
                    alt="Customized Solutions"
                  />
                </div>
                <div className="content">
                  <Link to="/case-single">Customized Solutions</Link>
                  <p>
                    We believe that one size does not fit all when it comes to
                    digital marketing. That's why we take the time to understand
                    your SEO.
                  </p>
                </div>
              </div>
              <div className="space20"></div>
              <div className="works-content-box">
                <div className="icons">
                  <img
                    src="../assets/img/icons/works-icons9.svg"
                    alt="Dedicated Support"
                  />
                </div>
                <div className="content">
                  <Link to="/case-single">Dedicated Support</Link>
                  <p>
                    Your success is our top priority. That's why provide
                    dedicated support and guidance every step of the way to
                    running seo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-all-images-area">
              <img
                src="../assets/img/elements/elements14.png"
                alt="Element 14"
                className="elements12 keyframe5"
              />
              <img
                src="../assets/img/elements/elements15.png"
                alt="Element 15"
                className="elements13 keyframe5"
              />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="img1 image-anime">
                    <div className="space100"></div>
                    <img
                      src="../assets/img/all-images/about-img6.png"
                      alt="About Img 6"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img2 image-anime">
                    <img
                      src="../assets/img/all-images/about-img5.png"
                      alt="About Img 5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection1;
