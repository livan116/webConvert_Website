import React from "react";
import { Link } from "react-router-dom";

const historyData = [
  {
    year: "2015",
    title: "Inception and Founding",
    description:
      "SEOC was founded with a vision to revolutionize the digital marketing industry and provide innovation.",
    link: "/service1",
  },
  {
    year: "2016",
    title: "Expansion and Growth",
    description:
      "The team expanded to include additional members with diverse skill sets and expertise allowing us.",
    link: "/service1",
  },
  {
    year: "2017",
    title: "Recognition and Awards",
    description:
      "We were honored to be recognized as a leader in the digital marketing space and received accolades customer.",
    link: "/service1",
  },
  {
    year: "2018",
    title: "Launch of New Services",
    description:
      "Building on our success, SEOC expanded our service offerings to better meet the evolving needs.",
    link: "/service1",
  },
  {
    year: "2019",
    title: "Strategic Partnerships",
    description:
      "SEOC formed strategic partnerships and collaborations with industry leaders and technology providers.",
    link: "/service1",
  },
  {
    year: "2020",
    title: "Continued Growth and Success",
    description:
      "2020 continued to experience steady growth and success, despite ongoing challenges in external environment.",
    link: "/service1",
  },
];

const HistorySection: React.FC = () => {
  return (
    <div className="history-inner-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="history-header-area text-center heading2">
              <img
                src="../assets/img/elements/star7.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="../assets/img/elements/star7.png"
                alt=""
                className="star3 keyframe5"
              />
              <h5>Our History</h5>
              <h2>
                Our Journey: Charting the <br className="d-lg-block d-none" />{" "}
                Evolution of SEOC
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-all-images-area">
              <img
                src="../assets/img/elements/elements14.png"
                alt=""
                className="elements12 keyframe5"
              />
              <img
                src="../assets/img/elements/elements15.png"
                alt=""
                className="elements13 keyframe5"
              />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="img1 image-anime d-md-block d-none">
                    <div className="space100"></div>
                    <img
                      src="../assets/img/all-images/history-img1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img2 image-anime">
                    <img
                      src="../assets/img/all-images/history-img2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="history-content-area">
              <div className="row">
                {historyData.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                    <div className="history-box-content">
                      <h5>{item.year}</h5>
                      <Link to={item.link}>{item.title}</Link>
                      <p>{item.description}</p>
                      <Link to={item.link} className="readmore">
                        Read More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
