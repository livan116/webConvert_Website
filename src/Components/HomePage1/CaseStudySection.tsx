import React from "react";
import { Link } from "react-router-dom";

const CaseStudySection: React.FC = () => {
  return (
    <div className="case1-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="case-header-area heading2 text-center">
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
                Benefits of SEO & Digital Marketing
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                By investing in strategic SEO and digital marketing
                initiatives, businesses can{" "}
                <br className="d-md-block d-none" />
                unlock a myriad of benefits.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-out" data-aos-duration="1200">
            <div className="cs_case_study_1_list">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`cs_case_study cs_style_1 cs_hover_active ${index === 0 ? "active" : ""
                    }`}
                  data-aos="fade-up"
                  data-aos-duration={`${800 + index * 100}`}
                >
                  <Link
                    to="/case-single"
                    className={`cs_case_study_thumb cs_bg_filed ${caseStudy.thumbClass}`}
                    style={{ backgroundImage: `url(${caseStudy.image})` }}
                  ></Link>
                  <div className="content-area1">
                    <Link to="/case-single">{caseStudy.title}</Link>
                  </div>
                  <div className="content-area">
                    <Link to="/case-single">{caseStudy.title}</Link>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const caseStudies = [
  {
    title: "Website Design & Development",
    image: "src/assets/img/all-images/case-img1.png",
    thumbClass: "",
  },
  {
    title: "SEO",
    image: "src/assets/img/all-images/case-img2.png",
    thumbClass: "cs_case_study_thumb2",
  },
  {
    title: "PPC Advertising",
    image: "src/assets/img/all-images/case-img3.png",
    thumbClass: "cs_case_study_thumb3",
  },
  {
    title: "Social Media Marketing",
    image: "src/assets/img/all-images/case-img4.png",
    thumbClass: "cs_case_study_thumb4",
  },
  {
    title: "Content Marketing",
    image: "src/assets/img/all-images/case-img5.png",
    thumbClass: "cs_case_study_thumb5",
  },
  {
    title: "Email Marketing",
    image: "src/assets/img/all-images/case-img6.png",
    thumbClass: "cs_case_study_thumb6",
  },
  {
    title: "Analytics & Reporting",
    image: "src/assets/img/all-images/case-img7.png",
    thumbClass: "cs_case_study_thumb7",
  },
];

export default CaseStudySection;
