import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    imgSrc: "src/assets/img/all-images/blog-img1.png",
    tags: [
      { text: "# SEO", href: "/" },
      {
        text: "Anderson",
        href: "/",
        iconSrc: "src/assets/img/icons/contact1.svg",
      },
    ],
    title: "10 Essential SEO Tips to Boost Your Website's Ranking",
    summary:
      "Are you looking to improve your website's visibility and attract more organic traffic?",
    link: "/blog-single",
    date: "09, MAY 2024",
    aos: "fade-right",
    aosDuration: 800,
  },
  {
    imgSrc: "src/assets/img/all-images/blog-img2.png",
    tags: [
      { text: "# PPC", href: "/" },
      {
        text: "Jon Doe",
        href: "/",
        iconSrc: "src/assets/img/icons/contact1.svg",
      },
    ],
    title: "The Power of PPC Advertising: How to Maximize Your ROI",
    summary:
      "Unlock the full potential of your digital marketing strategy with the power of PPC.",
    link: "/blog-single",
    date: "10, MAY 2024",
    aos: "fade-up",
    aosDuration: 1000,
  },
  {
    imgSrc: "src/assets/img/all-images/blog-img3.png",
    tags: [
      { text: "# Web Design", href: "/" },
      {
        text: "William Lee",
        href: "/",
        iconSrc: "src/assets/img/icons/contact1.svg",
      },
    ],
    title: "The Importance of Responsive Web Design in the Mobile Age",
    summary:
      "Where mobile devices dominate internet usage, responsive web design more crucial.",
    link: "/blog-single",
    date: "12, MAY 2024",
    aos: "fade-left",
    aosDuration: 1200,
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="blog8-scetion-area sp2" id="blog">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="blog-hedaer-area heading13 text-center">
              <h5>Our Blog</h5>
              <h2 className="text-anime-style-3 mb-5">
                Our Latest Blog & Articles
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {blogPosts.map((post, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className="blog-author-boxarea"
                data-aos={post.aos}
                data-aos-duration={post.aosDuration}
              >
                <div className="img1">
                  <img src={post.imgSrc} alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      {post.tags.map((tag, idx) => (
                        <li key={idx}>
                          <Link to={tag.href}>
                            {tag.iconSrc && <img src={tag.iconSrc} alt="" />}
                            {tag.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={post.link}>{post.title}</Link>
                  <p>{post.summary}</p>
                  <Link to={post.link} className="header-btn15">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <div className="date">
                    <Link to="/">{post.date}</Link>
                  </div>
                </div>
              </div>
              <div className="space30 d-lg-none d-block"></div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogSection;
