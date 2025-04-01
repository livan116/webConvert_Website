import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ctaAnalysisData = {
  formFields: [
    {
      icon: "fa-solid fa-link",
      placeholder: "https://yoursite.com",
    },
    {
      icon: "fa-regular fa-envelope",
      placeholder: "youremail@domain.com",
    },
  ],
  ctaButton: {
    text: "Analyze Now",
    link: "#",
  },
  tryLinks: ["Marketing", "Laptop", "iPhone"],
};

const CtaAnalysisSection: React.FC = () => {
  return (
    <div className="ctaanalycis-section-area others-cta overflow-hidden">
      <img
        src="src/assets/img/bg/cta-bg1.png"
        alt=""
        className="cta-bg1 aniamtion-key-2"
      />
      <img
        src="src/assets/img/bg/cta-bg2.png"
        alt=""
        className="cta-bg2 aniamtion-key-1"
      />
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="cta-header-area text-center sp4 heading13">
              <h5>Competitor</h5>
              <h2 className="text-anime-style-3">Competitor Analysis</h2>
              <div className="space32"></div>
              <div
                className="form-area"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <form>
                  {ctaAnalysisData.formFields.map(
                    ({ icon, placeholder }, index) => (
                      <div className="input-area" key={index}>
                        <span>
                          <i className={icon}></i>
                        </span>
                        <input type="text" placeholder={placeholder} />
                      </div>
                    )
                  )}
                  <div className="btn-area">
                    <a
                      href={ctaAnalysisData.ctaButton.link}
                      className="header-btn15"
                    >
                      {ctaAnalysisData.ctaButton.text}{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </form>
              </div>
              <ul>
                <li>Try:</li>
                {ctaAnalysisData.tryLinks.map((link, index) => (
                  <li key={index}>
                    <Link to="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CtaAnalysisSection;
