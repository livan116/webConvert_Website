import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  imageSrc: string;
  link: string;
  animation: string;
  aosDuration: number;
}

const blogs: Blog[] = [
  {
    id: 1,
    title:
      "Social Media Marketing Strategies to Drive Engagement and Conversions",
    author: "John Doe",
    date: "12 Feb 2024",
    description:
      "Discover the latest trends and best practices in social media marketing with our comprehensive guide. Learn how to leverage different.",
    imageSrc: "../assets/img/all-images/blog-img6.png",
    link: "/blog-single",
    animation: "zoom-out",
    aosDuration: 1000,
  },
  {
    id: 2,
    title:
      "Content Marketing 101: How to Create Compelling Content That Converts",
    author: "John Doe",
    date: "12 Feb 2024",
    description:
      "Unlock the secrets to successful content marketing with our expert tips and strategies. Whether you're a beginner or a seasoned marketer.",
    imageSrc: "../assets/img/all-images/blog-img7.png",
    link: "/blog-single",
    animation: "zoom-out",
    aosDuration: 1200,
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="blog4-section-area sp2" id="blog">
      <Container>
        <Row>
          <Col lg={9} className="m-auto">
            <div className="blog4-header text-center heading8">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                <img
                  src="../assets/img/icons/logo-icons3.svg"
                  alt="Logo Icon"
                />{" "}
                Blog & News
              </h5>
              <h2 className="text-anime-style-1">
                "Insights & Updates{" "}
                <span>
                  Digital Marketing{" "}
                  <img
                    src="../assets/img/elements/line-img1.png"
                    alt="Line Icon"
                  />
                </span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {blogs.map((blog) => (
            <Col
              lg={6}
              md={6}
              key={blog.id}
              data-aos={blog.animation}
              data-aos-duration={blog.aosDuration}
            >
              <div className="blog-author-boxarea">
                <div className="blog-content-area">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-circle-user"></i>
                        {blog.author}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-solid fa-calendar-days"></i>
                        {blog.date}
                      </Link>
                    </li>
                  </ul>
                  <div className="space16"></div>
                  <Link to={blog.link}>{blog.title}</Link>
                  <div className="space16"></div>
                  <p>{blog.description}</p>
                  <Link to={blog.link} className="readmore">
                    Learn More<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="space24"></div>
                <div className="img1">
                  <figure className="image-anime">
                    <img src={blog.imageSrc} alt={blog.title} />
                  </figure>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogSection;
