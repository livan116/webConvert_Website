import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSection: React.FC = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="blog1-section-area overflow-hidden" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="blog-header-area heading2 text-center">
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
                Insights & Innovations: <br className="d-md-block d-none" />
                Our Latest Blog Posts
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Explore our blog to discover actionable insights, success
                stories, and <br className="d-md-block d-none" />
                expert advice that can help drive growth for your business.
              </p>
            </div>
          </div>
        </div>
        
        {/* Add custom styles for spacing between slides */}
        <style>
          {`
            .blog-slide {
              padding: 0 15px;
            }
            .slick-list {
              margin: 0 -15px;
            }
            .blog-carousel .slick-dots {
              bottom: -40px;
            }
          `}
        </style>
        
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="blog-carousel">
              <div className="blog-slide">
                <div className="blog-author-boxarea">
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
              </div>

              <div className="blog-slide">
                <div className="blog-author-boxarea">
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
              </div>

              <div className="blog-slide">
                <div className="blog-author-boxarea">
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
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;