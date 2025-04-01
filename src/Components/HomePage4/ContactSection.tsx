import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
// import { Link } from "react-router-dom";

const options = [
  { value: "Belgium", label: "Belgium" },
  { value: "Brazil", label: "Brazil" },
  { value: "Argentina", label: "Argentina" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Germany", label: "Germany" },
];

const ContactSection: React.FC = () => {
  return (
    <div className="contact5-section-area sp1">
      <Container>
        <Row>
          <Col lg={12} className="m-auto">
            <div className="contact-header-area text-center heading10">
              <h5>
                <img
                  src="src/assets/img/icons/logo-icons6.svg"
                  alt="Contact Icon"
                />
                Contact
              </h5>
              <h2 className="text-anime-style-3">Contact Our SEO Expert</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={5} data-aos="zoom-in" data-aos-duration="1200">
            <div className="contact-info-area">
              <h3>Contact Info</h3>
              <p>
                We're here to help! If you have any questions or would like to
                discuss how our SEO and digital marketing services can benefit
                your business,
              </p>
              <div className="space32"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="src/assets/img/icons/location2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <Link to="#">
                    8708 Technology Forest Pl Suite
                    <br className="d-lg-block d-none" />
                    125 -G, The Woodlands, TX 773
                  </Link>
                </div>
              </div>
              <div className="space40"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="src/assets/img/icons/phone2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <Link to="tel:123-456-7890">
                    123-456-7890 <br />
                    123-456-7890
                  </Link>
                </div>
              </div>
              <div className="space40"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="src/assets/img/icons/email2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <Link to="mailto:infoseoc@gmail.com">
                    infoseoc@gmail.com <br />
                    infoseoc@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7} data-aos="zoom-in" data-aos-duration="1200">
            <div className="contact-boxarea">
              <h3>Get In Touch</h3>
              <p>
                We're here to help! If you have any questions or would like to
                discuss how our SEO and digital marketing services can benefit
                your business,
              </p>
              <form action="https://api.web3forms.com/submit" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area mt-4">
                      <Select className="country-area" options={options} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <button className="header-btn11">
                        Get Started Now
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
