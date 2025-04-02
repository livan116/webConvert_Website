import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogSection: React.FC = () => {
  return (
    <div className="blog1-section-area overflow-hidden" id="blog">
      <Container className="blog1-scetion-area sp2">
        <Row>
          <Col lg={5} className="m-auto mb-4">
            <div className="testimonia4-header text-center blog-hedaer-area heading2 text-center">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                Our Blog
              </h5>
              <h2 className="text-anime-style-1">Our Latest Blog & News</h2>
            </div>
          </Col>
        </Row>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="blog-author-boxarea"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="img1">
                <img src="../assets/img/all-images/blog-img1.png" alt="" />
              </div>
              <div className="content-area">
                <div className="tags-area">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="../assets/img/icons/contact1.svg" alt="" />
                        Ben Stokes
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="../assets/img/icons/calender1.svg" alt="" />
                        16 August 2023
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/blog-single">
                  10 Essential SEO Tips to Boost Your Website's Ranking
                </Link>
                <p>
                  Are you looking to improve your website's visibility and
                  attract more organic traffic?
                </p>
                <Link to="/blog-single" className="readmore">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="space30 d-lg-none d-block"></div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="blog-author-boxarea"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="img1">
                <img src="../assets/img/all-images/blog-img2.png" alt="" />
              </div>
              <div className="content-area">
                <div className="tags-area">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="../assets/img/icons/contact1.svg" alt="" />
                        Ben Stokes
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="../assets/img/icons/calender1.svg" alt="" />
                        16 August 2023
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/blog-single">
                  The Power of PPC Advertising: How to Maximize Your ROI
                </Link>
                <p>
                  Unlock the full potential of your digital marketing strategy
                  with the power of PPC.
                </p>
                <Link to="/blog-single" className="readmore">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="space30 d-lg-none d-block"></div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="blog-author-boxarea"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="img1">
                <img src="../assets/img/all-images/blog-img3.png" alt="" />
              </div>
              <div className="content-area">
                <div className="tags-area">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="../assets/img/icons/contact1.svg" alt="" />
                        Ben Stokes
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="../assets/img/icons/calender1.svg" alt="" />
                        16 August 2023
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/blog-single">
                  The Importance of Responsive Web Design in the Mobile Age
                </Link>
                <p>
                  Where mobile devices dominate internet usage, responsive web
                  design is more crucial.
                </p>
                <Link to="/blog-single" className="readmore">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
