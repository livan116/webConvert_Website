import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ListItemProps {
  text: string;
  url: string;
  active?: boolean;
}

interface ChooseSectionProps {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  aosDirection: "fade-left" | "fade-right";
}

// Array of list items with URLs
const listItems: ListItemProps[] = [
  { text: "SEO", url: "/", active: true },
  { text: "PPC Advertising", url: "/" },
  { text: "Social Media Marketing", url: "/" },
  { text: "Content Marketing", url: "/" },
  { text: "Web Design", url: "/" },
  { text: "Development", url: "/" },
  { text: "Digital Marketing", url: "/" },
  { text: "Search Engine Optimization", url: "/" },
];

// Array of choose sections
const chooseSections: ChooseSectionProps[] = [
  {
    id: 1,
    title: "Proven Track Record",
    description:
      "We've helped businesses of all sizes achieve their digital goals with our data-driven strategies and personalized approach.",
    imageSrc: "src/assets/img/all-images/choose-img1.png",
    aosDirection: "fade-left",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "We understand that every business is unique. That's why we craft customized strategies tailored to your specific objectives, audience, and industry.",
    imageSrc: "src/assets/img/all-images/choose-img2.png",
    aosDirection: "fade-right",
  },
  {
    id: 3,
    title: "Transparent Communication",
    description:
      "We believe in transparent communication and keep you informed every step of the way, providing detailed reports and insights into your campaign performance.",
    imageSrc: "src/assets/img/all-images/choose-img4.png",
    aosDirection: "fade-left",
  },
];

// ChooseSection component
const ChooseSection: React.FC<ChooseSectionProps> = ({
  title,
  description,
  imageSrc,
  aosDirection,
}) => {
  return (
    <div
      className="choose-section-area"
      data-aos={aosDirection}
      data-aos-duration={1000}
    >
      <Row className="align-items-center">
        <Col lg={5}>
          <div className="choose-list-area">
            <h3>{title}</h3>
            <ul className="choose-auhtor">
              {listItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className={item.active ? "active" : ""}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <p>{description}</p>
            <div className="btn-area">
              <Link to="/service1" className="header-btn3">
                View Our Services
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={6}>
          <div className="images">
            <img
              src="src/assets/img/elements/elements6.png"
              alt=""
              className="elements6 aniamtion-key-2"
            />
            <img
              src="src/assets/img/elements/star4.png"
              alt=""
              className="star4 keyframe5"
            />
            <div className="img1">
              <img src={imageSrc} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// Main component
const Work1Section: React.FC = () => {
  return (
    <div className="work1-section-area sp1" id="choose">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="work-header-area text-center heading4">
              <h5>Why Choose Us</h5>
              <h2 className="text-anime-style-3">
                Why Partner With SEOC Your Path To SEO & Digital Marketing
                Success
              </h2>
            </div>
          </Col>
        </Row>
        {chooseSections.map((section, index) => (
          <React.Fragment key={section.id}>
            <div className="space50"></div>
            <ChooseSection
              id={index}
              title={section.title}
              description={section.description}
              imageSrc={section.imageSrc}
              aosDirection={section.aosDirection}
            />
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
};

export default Work1Section;
