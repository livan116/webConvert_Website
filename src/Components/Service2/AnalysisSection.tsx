import { Link } from "react-router-dom";

const AnalysisSection: React.FC = () => {
  return (
    <section className="analysis-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="analysis-inner-section text-center heading2">
              <h5>Website Analysis</h5>
              <h2>
                Conduct Website Audience Analysis{" "}
                <br className="d-lg-block d-none" /> And Explore Its Geography
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="services-seo">
              <div className="services-seo-scroll">
                <div className="services-seo-head">
                  <div className="row">
                    <div className="col-xl-4 col-lg-5 col-5">
                      <div className="services-seo-heading">
                        <h4 className="services-seo-heading-title">
                          <input id="remember" type="checkbox" />
                          <label htmlFor="remember">Blanking</label>
                        </h4>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-7">
                      <div className="services-seo-catagory">
                        <div className="row">
                          <div className="col-lg-3 col-3">
                            <div className="services-seo-heading-item services-seo-catagory-one">
                              <span>Score</span>
                            </div>
                          </div>
                          <div className="col-lg-3 col-3">
                            <div className="services-seo-heading-item services-seo-catagory-two">
                              <span>Keyword</span>
                            </div>
                          </div>
                          <div className="col-lg-3 col-3">
                            <div className="services-seo-heading-item services-seo-catagory-three">
                              <span>Domain</span>
                            </div>
                          </div>
                          <div className="col-lg-3 col-3">
                            <div className="services-seo-heading-item services-seo-catagory-four">
                              <div className="rank">
                                <span>
                                  Rank
                                  <i className="fa-light fa-angle-up"></i>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.33239 1.14917H5.14742C2.18498 1.14917 1 2.33415 1 5.29659V8.85152C1 11.814 2.18498 12.9989 5.14742 12.9989H8.70235C11.6648 12.9989 12.8498 11.814 12.8498 8.85152V7.66654"
                                      stroke="white"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.31928 1.75319L4.65047 6.42199C4.47273 6.59974 4.29498 6.94931 4.25943 7.20408L4.00466 8.98747C3.90986 9.63328 4.36608 10.0836 5.01189 9.9947L6.79528 9.73993C7.04412 9.70438 7.39369 9.52663 7.57736 9.34889L12.2462 4.68008C13.052 3.8743 13.4311 2.93816 12.2462 1.75319C11.0612 0.568212 10.1251 0.947404 9.31928 1.75319Z"
                                      stroke="white"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.5"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8.64844 2.42236C9.0454 3.83841 10.1534 4.94636 11.5753 5.34925"
                                      stroke="white"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.5"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="services-seo-info">
                  <div className="services-seo-item">
                    <div className="row align-items-center">
                      <div className="col-xl-4 col-lg-5 col-5">
                        <div className="services-seo-link d-flex">
                          <div className="services-seo-link-check">
                            <input id="seo-link-check" type="checkbox" />
                            <label htmlFor="seo-link-check">
                              WOG PRIDE on the app store
                            </label>
                            <span>
                              <Link to="/">
                                https://www.daraz.com/gameing-laptops/
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 col-7">
                        <div className="services-seo-catagory">
                          <div className="row">
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-one">
                                <span>86</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-two">
                                <span>Laptop</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-three">
                                <span>
                                  <Link to="/">daraz.com</Link>
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                <div className="stable-rank">
                                  <span>4</span>
                                </div>
                                <div className="incridable-rank">
                                  <i className="fa-solid fa-angle-up"></i>
                                  <span>1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="services-seo-item">
                    <div className="row align-items-center">
                      <div className="col-xl-4 col-lg-5 col-5">
                        <div className="services-seo-link d-flex">
                          <div className="services-seo-link-check">
                            <input id="seo-link-check-2" type="checkbox" />
                            <label htmlFor="seo-link-check-2">
                              SEO PRIDE on the app store
                            </label>
                            <span>
                              <Link to="/">
                                https://www.daraz.com/gameing-laptops/
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 col-7">
                        <div className="services-seo-catagory">
                          <div className="row">
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-one">
                                <span>105</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-two">
                                <span>Laptop</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-three">
                                <span>
                                  <Link to="/">daraz.com</Link>
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                <div className="stable-rank">
                                  <span>0</span>
                                </div>
                                <div className="incridable-rank">
                                  {/* Empty */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="services-seo-item">
                    <div className="row align-items-center">
                      <div className="col-xl-4 col-lg-5 col-5">
                        <div className="services-seo-link d-flex">
                          <div className="services-seo-link-check">
                            <input id="seo-link-check-3" type="checkbox" />
                            <label htmlFor="seo-link-check-3">
                              PRIDE on the app store
                            </label>
                            <span>
                              <Link to="/">
                                https://www.daraz.com/gameing-laptops/
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 col-7">
                        <div className="services-seo-catagory">
                          <div className="row">
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-one">
                                <span>42</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-two">
                                <span>Laptop</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-three">
                                <span>
                                  <Link to="/">daraz.com</Link>
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                <div className="stable-rank">
                                  <span>3</span>
                                </div>
                                <div className="incridable-rank incridable-rank-y">
                                  <i className="fa-solid fa-angle-up"></i>
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="services-seo-item">
                    <div className="row align-items-center">
                      <div className="col-xl-4 col-lg-5 col-5">
                        <div className="services-seo-link d-flex">
                          <div className="services-seo-link-check">
                            <input id="seo-link-check-4" type="checkbox" />
                            <label htmlFor="seo-link-check-4">
                              WOG on the Online store
                            </label>
                            <span>
                              <Link to="/">
                                https://www.daraz.com/gameing-laptops/
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 col-7">
                        <div className="services-seo-catagory">
                          <div className="row">
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-one">
                                <span>06</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-two">
                                <span>Laptop</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-three">
                                <span>
                                  <Link to="/">daraz.com</Link>
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                <div className="stable-rank">
                                  <span>5</span>
                                </div>
                                <div className="incridable-rank">
                                  <i className="fa-solid fa-angle-up"></i>
                                  <span>1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
