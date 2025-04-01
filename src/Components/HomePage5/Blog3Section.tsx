import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    date: "15 Feb 2024",
    title: "Search Engine Optimization (SEO)",
    description: `SEO remains one of the most powerful tools for driving organic traffic to your website. By optimizing your website keywords,`,
    imgSrc: "src/assets/img/all-images/blog-img4.png",
    link: "/blog-single",
  },
  {
    date: "15 Feb 2024",
    title: "Social Media Marketing",
    description: `Social media platforms offer a powerful way to connect with your audience and drive traffic to your website.`,
    imgSrc: "src/assets/img/all-images/blog-img5.png",
    link: "/blog-single",
  },
];

const Blog3Section: React.FC = () => {
  return (
    <div className="blog3-section-area sp2">
      <img src="src/assets/img/bg/about-bg1.png" alt="" className="about-bg1" />
      <img src="src/assets/img/bg/about-bg2.png" alt="" className="about-bg2" />
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="blog-header-area heading6 text-center">
              <h5>Our Blog</h5>
              <h2 className="text-anime-style-3">
                5 Effective Strategies For Boosting Your Website Traffic
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {blogPosts.map((post, index) => (
            <Col
              lg={6}
              md={6}
              key={index}
              data-aos="fade-up"
              data-aos-duration={(1200 + index * 200).toString()}
            >
              <div className="blog2-author-boxarea">
                <div className="img1">
                  <img src={post.imgSrc} alt="" />
                </div>
                <div className="blog-content">
                  <Link to="/" className="date">
                    <img src="src/assets/img/icons/calender1.svg" alt="" />
                    {post.date}
                  </Link>
                  <Link to={post.link} className="head">
                    {post.title}
                  </Link>
                  <p>{post.description}</p>
                  <Link to={post.link} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog3Section;
