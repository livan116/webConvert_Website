import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Content Marketing",
    link: "/blog-single",
    imgSrc: "src/assets/img/all-images/blog-img8.png",
    authorImg: "src/assets/img/all-images/blog-img11.png",
    authorName: "Jane Smith",
    aosDuration: 1000,
  },
  {
    title: "Digital Marketing",
    link: "/blog-single",
    imgSrc: "src/assets/img/all-images/blog-img9.png",
    authorImg: "src/assets/img/all-images/blog-img12.png",
    authorName: "Jane Smith",
    aosDuration: 1200,
  },
  {
    title: "Social Media Marketing",
    link: "/blog-single",
    imgSrc: "src/assets/img/all-images/blog-img10.png",
    authorImg: "src/assets/img/all-images/blog-img13.png",
    authorName: "Jane Smith",
    aosDuration: 1400,
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="blog5-section-area sp1" id="blog">
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <div className="blog-header-area text-center heading10">
              <h5>
                <img
                  src="src/assets/img/icons/logo-icons6.svg"
                  alt="Blog Icon"
                />
                Blog
              </h5>
              <h2 className="text-anime-style-3">Explore Our Blog</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="m-auto">
            <div className="blog-all-section">
              {blogPosts.map((post, index) => (
                <div
                  className="row align-items-center"
                  data-aos="fade-up"
                  data-aos-duration={post.aosDuration}
                  key={index}
                >
                  <Col lg={4} md={6}>
                    <div className="imges1 image-anime">
                      <img src={post.imgSrc} alt={post.title} />
                    </div>
                  </Col>
                  <Col lg={8} md={6}>
                    <div className="content-area">
                      <div className="main-content">
                        <h5>{post.title}</h5>
                        <Link
                          to={post.link}
                        >{`The Power of ${post.title}: How to Drive Engagement and Grow Your Business`}</Link>
                        <Link to={post.link} className="text">
                          <img src={post.authorImg} alt={post.authorName} />
                          {post.authorName}
                        </Link>
                      </div>
                      <div className="arrow">
                        <Link to={post.link}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </Col>
                  {index < blogPosts.length - 1 && (
                    <div className="space60"></div>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogSection;
