import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CaseStudy {
  title: string;
  content: string;
  image: string;
  thumbClass: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Website Design & Development",
    content:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    image: "../assets/img/all-images/case-img1.png",
    thumbClass: "",
  },
  {
    title: "SEO",
    content:
      "Boost your visibility and climb the search rankings with our data-driven SEO strategies tailored to your business goals.",
    image: "../assets/img/all-images/case-img2.png",
    thumbClass: "cs_case_study_thumb2",
  },
  {
    title: "PPC Advertising",
    content:
      "Drive immediate, targeted traffic to your website with our expertly managed pay-per-click campaigns.",
    image: "../assets/img/all-images/case-img3.png",
    thumbClass: "cs_case_study_thumb3",
  },
  {
    title: "Social Media Marketing",
    content:
      "Build meaningful connections with your audience through strategic social media campaigns that elevate your brand.",
    image: "../assets/img/all-images/case-img4.png",
    thumbClass: "cs_case_study_thumb4",
  },
  {
    title: "Content Marketing",
    content:
      "Engage and convert your audience with compelling content that tells your story and establishes your authority.",
    image: "../assets/img/all-images/case-img5.png",
    thumbClass: "cs_case_study_thumb5",
  },
  {
    title: "Email Marketing",
    content:
      "Nurture leads and drive conversions with personalized email campaigns that deliver the right message at the right time.",
    image: "../assets/img/all-images/case-img6.png",
    thumbClass: "cs_case_study_thumb6",
  },
  {
    title: "Analytics & Reporting",
    content:
      "Make data-driven decisions with comprehensive analytics and clear reporting that track your digital marketing ROI.",
    image: "../assets/img/all-images/case-img7.png",
    thumbClass: "cs_case_study_thumb7",
  },
];

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    centerMode: true,
    centerPadding: "0px",
  };

  const renderCaseStudyItem = (caseStudy: CaseStudy, index: number) => (
    <div
      key={index}
      className={`cs_case_study cs_style_1 cs_hover_active ${
        index === activeIndex && !isMobile ? "active" : ""
      }`}
      onMouseEnter={() => !isMobile && setActiveIndex(index)}
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
        <p>{caseStudy.content}</p>
      </div>
    </div>
  );

  return (
    <div className="case1-section-area my-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="case-header-area heading2 text-center">
              <img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="../assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              <h2 className="text-anime-style-3">
                Benefits of SEO & Digital Marketing
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                By investing in strategic SEO and digital marketing initiatives,
                businesses can <br className="d-md-block d-none" />
                unlock a myriad of benefits.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            {isMobile ? (
              <div className="mobile-carousel-wrapper">
                <Slider {...sliderSettings}>
                  {caseStudies.map((caseStudy, index) => (
                    <div key={index} className="carousel-item-wrapper">
                      {renderCaseStudyItem(caseStudy, index)}
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="cs_case_study_1_list">
                {caseStudies.map((caseStudy, index) =>
                  renderCaseStudyItem(caseStudy, index)
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
