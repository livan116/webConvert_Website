import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    imageSrc: "src/assets/img/all-images/blog-img1.png",
    author: "Ben Stokes",
    date: "16 August 2023",
    title: "10 Essential SEO Tips to Boost Your Website's Ranking",
    excerpt:
      "Are you looking to improve your website's visibility and attract more organic traffic?",
    link: "/blog-single",
  },
  {
    imageSrc: "src/assets/img/all-images/blog-img2.png",
    author: "Ben Stokes",
    date: "16 August 2023",
    title: "The Power of PPC Advertising: How to Maximize Your ROI",
    excerpt:
      "Unlock the full potential of your digital marketing strategy with the power of PPC.",
    link: "/blog-single",
  },
  {
    imageSrc: "src/assets/img/all-images/blog-img3.png",
    author: "Ben Stokes",
    date: "16 August 2023",
    title: "The Importance of Responsive Web Design in the Mobile Age",
    excerpt:
      "Where mobile devices dominate internet usage, responsive web design more crucial.",
    link: "/blog-single",
  },
];

const BlogSection: React.FC = () => (
  <div className="blog9-scetion-area sp2" id="blog">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 m-auto">
          <div className="blog-hedaer-area heading14 text-center">
            <h5>
              <img src="src/assets/img/icons/logo-icons7.svg" alt="" />
              Our Blog
            </h5>
            <h2 className="text-anime-style-3 mb-5">Our Latest Blog & News</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {blogPosts.map((post, index) => (
          <div
            className="col-lg-4 col-md-6"
            data-aos={`fade-${
              index % 3 === 0 ? "right" : index % 3 === 1 ? "up" : "left"
            }`}
            data-aos-duration={`${800 + index * 200}`}
            key={index}
          >
            <div className="blog-author-boxarea">
              <div className="img1">
                <img src={post.imageSrc} alt="" />
              </div>
              <div className="content-area">
                <div className="tags-area">
                  <ul className="p-0">
                    <li>
                      <Link to="/">
                        <img src="src/assets/img/icons/contact1.svg" alt="" />
                        {post.author}
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="src/assets/img/icons/calender1.svg" alt="" />
                        {post.date}
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to={post.link}>{post.title}</Link>
                <p>{post.excerpt}</p>
                <Link to={post.link} className="readmore">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="space30 d-lg-none d-block"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogSection;
