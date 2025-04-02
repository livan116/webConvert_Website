import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaseStudies: React.FC = () => {
  const tabs = [
    { id: "All", label: "All" },
    { id: "Branding", label: "Branding" },
    { id: "Digital PR", label: "Digital PR" },
    { id: "PPC", label: "PPC" },
    { id: "Marketing", label: "Marketing" },
    { id: "SEO", label: "SEO" },
    { id: "Web", label: "Web" },
  ];

  const [selectedTag, setSelectedTag] = useState("All");

  console.log(
    caseStudiesData.filter((item) => item.tags.includes(selectedTag)),
    selectedTag
  );

  const CasesToShow =
    selectedTag === "All"
      ? caseStudiesData
      : caseStudiesData.filter((item) => item.tags.includes(selectedTag));

  return (
    <div className="case-inner-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-auto">
            <div className="case-header text-center heading2">
              <h5>Case Study</h5>
              <h2>Our Case Studies</h2>
            </div>
            <div className="space50 d-lg-block d-none"></div>
            <div className="space30 d-lg-none d-block"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="tabs-area text-center">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {tabs.map((tab, index) => (
                  <li key={index} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        tab.id === selectedTag && "active"
                      }`}
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      onClick={() => setSelectedTag(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tabs-content-area">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                >
                  <div className="tabs-contents">
                    <div className="row align-items-center">
                      {CasesToShow.map((item, index) => (
                        <div key={index} className="col-lg-4">
                          <div className="case-inner-box">
                            <div className="img1 image-anime">
                              <img src={item.imgSrc} alt="" />
                            </div>
                            <div className="content-area">
                              <div className="link-area">
                                <Link to="/case-single" className="tags">
                                  #SEO
                                </Link>
                                <Link to="/case-single" className="head">
                                  {item.title}
                                </Link>
                              </div>
                              <div className="arrow">
                                <Link to="/case-single">
                                  <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fa-solid fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const caseStudiesData = [
  {
    imgSrc: "../assets/img/all-images/case-img9.png",
    tags: ["SEO"],
    title: "Comprehensive SEO Audit",
  },
  {
    imgSrc: "../assets/img/all-images/case-img10.png",
    tags: ["Web"],
    title: "Keyword Research & Analysis",
  },
  {
    imgSrc: "../assets/img/all-images/case-img11.png",
    tags: ["PPC"],
    title: "One Page Optimization",
  },
  {
    imgSrc: "../assets/img/all-images/case-img12.png",
    tags: ["Branding Marketing"],
    title: "Online Media Management",
  },
  {
    imgSrc: "../assets/img/all-images/case-img13.png",
    tags: ["Web"],
    title: "Online Management",
  },
  {
    imgSrc: "../assets/img/all-images/case-img14.png",
    tags: ["Branding", "Marketing"],
    title: "Online Media Management",
  },
  {
    imgSrc: "../assets/img/all-images/case-img15.png",
    tags: ["Branding", "SEO"],
    title: "Domain Migration",
  },
  {
    imgSrc: "../assets/img/all-images/case-img16.png",
    tags: ["Marketing", "Web"],
    title: "Content Marketing",
  },
  {
    imgSrc: "../assets/img/all-images/case-img17.png",
    tags: ["Digital", "PR"],
    title: "Content Strategy",
  },
];

export default CaseStudies;
