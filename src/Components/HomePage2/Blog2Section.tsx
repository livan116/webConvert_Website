import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

interface BlogItem {
  imgSrc: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const blogItems: BlogItem[] = [
  {
    imgSrc: "src/assets/img/all-images/blog-img4.png",
    date: "15 Feb 2024",
    title: "Search Engine Optimization (SEO)",
    description:
      "SEO remains one of the most powerful tools for driving organic traffic to your website. By optimizing your website keywords,",
    link: "/blog-single",
  },
  {
    imgSrc: "src/assets/img/all-images/blog-img5.png",
    date: "15 Feb 2024",
    title: "Social Media Marketing",
    description:
      "Social media platforms offer a powerful way to connect with your audience and drive traffic to your website.",
    link: "/blog-single",
  },
];

// Define the BlogSection component
const Blog2Section: React.FC = () => {
  return (
    <div className="blog2-section-area sp2" id="blog">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="blog-header-area heading4 text-center">
              <h5>Our Blog</h5>
              <h2 className="text-anime-style-3">
                5 Effective Strategies For Boosting Your Website Traffic
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {blogItems.map((item, index) => (
            <Col
              lg={6}
              md={6}
              key={index}
              data-aos="zoom-out"
              data-aos-duration={1000 + index * 200}
            >
              <div className="blog2-author-boxarea">
                <div className="img1">
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className="blog-content">
                  <Link to="#" className="date">
                    <img src="src/assets/img/icons/calender1.svg" alt="" />
                    {item.date}
                  </Link>
                  <Link to={item.link} className="head">
                    {item.title}
                  </Link>
                  <p>{item.description}</p>
                  <Link to={item.link} className="readmore">
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

export default Blog2Section;
