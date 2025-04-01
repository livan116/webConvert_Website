import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    imageUrl: "src/assets/img/all-images/blog-img25.png",
    author: "John Doe",
    date: "12 Feb 2024",
    title:
      "Social Media Marketing Strategies to Drive Engagement and Conversions",
    description:
      "Discover the latest trends and best practices in social media marketing with our comprehensive guide. Learn how to leverage different.",
    link: "/blog-single",
  },
  {
    id: 2,
    imageUrl: "src/assets/img/all-images/blog-img24.png",
    author: "John Doe",
    date: "12 Feb 2024",
    title:
      "Content Marketing 101: How to Create Compelling Content That Converts",
    description:
      "Unlock the secrets to successful content marketing with our expert tips and strategies. Whether you're a beginner or a seasoned marketer.",
    link: "/blog-single",
  },
];

const Blog10SectionArea = () => {
  return (
    <div className="blog10-section-area sp2" id="blog">
      <Container>
        <Row>
          <Col lg={9} className="m-auto">
            <div className="blog4-header text-center heading15">
              <h5 data-aos="fade-up" data-aos-duration="1000">
                Blog & News
              </h5>
              <h2 className="text-anime-style-3">Our Latest Blog & News</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {blogPosts.map((post) => (
            <Col
              lg={6}
              md={6}
              key={post.id}
              data-aos="zoom-out"
              data-aos-duration={`${1000 + (post.id - 1) * 200}`}
            >
              <div className="blog-author-boxarea">
                <div className="img1">
                  <figure className="image-anime">
                    <img src={post.imageUrl} alt={post.title} />
                  </figure>
                </div>
                <div className="space24"></div>
                <div className="blog-content-area">
                  <ul className="m-0 p-0">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-circle-user"></i>
                        {post.author}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-calendar-days"></i>
                        {post.date}
                      </a>
                    </li>
                  </ul>
                  <div className="space16"></div>
                  <Link to={post.link}>{post.title}</Link>
                  <div className="space16"></div>
                  <p className="m-0">{post.description}</p>
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

export default Blog10SectionArea;
