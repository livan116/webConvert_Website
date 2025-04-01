import { Link } from "react-router-dom";

const HistorySection: React.FC = () => {
  return (
    <div className="history-inner-section-area history3 sp1 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="history-header-area">
              <img
                src="assets/img/elements/star7.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="assets/img/elements/star7.png"
                alt=""
                className="star3 keyframe5"
              />
              <h5 className="text-muted">Our History</h5>
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
                src="assets/img/elements/elements14.png"
                alt=""
                className="elements12 keyframe5"
              />
              <img
                src="assets/img/elements/elements15.png"
                alt=""
                className="elements13 keyframe5"
              />
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="img">
                    <img
                      src="assets/img/all-images/history-img1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="img2">
                    <img
                      src="assets/img/all-images/history-img2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="history-content-area">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="history-box-content">
                    <h5>2015</h5>
                    <Link to="/case-single">Inception and Founding</Link>
                    <p>
                      SEOC was founded with a vision to revolutionize the
                      digital marketing industry and provide innovation.
                    </p>
                    <Link to="/case-single" className="btn btn-outline-primary">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="history-box-content">
                    <h5>2016</h5>
                    <Link to="/case-single">Expansion and Growth</Link>
                    <p>
                      The team expanded to include additional members with
                      diverse skill sets and expertise allowing us.
                    </p>
                    <Link to="/case-single" className="btn btn-outline-primary">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="history-box-content">
                    <h5>2017</h5>
                    <Link to="/case-single">Recognition and Awards</Link>
                    <p>
                      We were honored to be recognized as a leader in the
                      digital marketing space and received accolades from
                      customers.
                    </p>
                    <Link to="/case-single" className="btn btn-outline-primary">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="history-box-content">
                    <h5>2018</h5>
                    <Link to="/case-single">Launch of New Services</Link>
                    <p>
                      Building on our success, SEOC expanded our service
                      offerings to better meet the evolving needs.
                    </p>
                    <Link to="/case-single" className="btn btn-outline-primary">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="history-box-content">
                    <h5>2019</h5>
                    <Link to="/case-single">Strategic Partnerships</Link>
                    <p>
                      SEOC formed strategic partnerships and collaborations with
                      industry leaders and technology providers.
                    </p>
                    <Link to="/case-single" className="btn btn-outline-primary">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="history-box-content">
                    <h5>2020</h5>
                    <Link to="/case-single">Continued Growth & Success</Link>
                    <p>
                      2020 continued to experience steady growth and success,
                      despite ongoing challenges in the external environment.
                    </p>
                    <Link to="/case-single" className="btn btn-outline-primary">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
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

export default HistorySection;
