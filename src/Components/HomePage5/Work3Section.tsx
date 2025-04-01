import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Proven Track Record',
    description: `We've helped businesses of all sizes achieve their digital goals with our data-driven strategies and personalized approach.`,
    imgSrc: 'assets/img/all-images/choose-img3.png',
    btnText: 'View Our Services',
    btnLink: '/service1'
  },
  {
    title: 'Tailored Solutions',
    description: `We understand that every business is unique. That's why we craft customized strategies tailored to your specific objectives, audience, and industry.`,
    imgSrc: 'assets/img/all-images/choose-img5.png',
    btnText: 'View Our Services',
    btnLink: '/service1'
  },
  {
    title: 'Transparent Communication',
    description: `We believe in transparent communication and keep you informed every step of the way, providing detailed reports and insights into your campaign performance.`,
    imgSrc: 'assets/img/all-images/choose-img6.png',
    btnText: 'View Our Services',
    btnLink: '/service1'
  }
];

const Work3Section: React.FC = () => {
  return (
    <div className="work3-section-area sp1" id='choose'>
      <img src="src/assets/img/bg/work-bg1.png" alt="" className="work-bg1" />
      <img src="src/assets/img/bg/work-bg2.png" alt="" className="work-bg2" />
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            <div className="work-header-area text-center heading6">
              <h5>Why Choose Us</h5>
              <h2 className="text-anime-style-3">Why Partner With SEOC Your Path To SEO & Digital Marketing Success</h2>
            </div>
          </Col>
        </Row>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <div className={`choose-section-area ${index > 0 ? 'choose2' : ''}`} data-aos="zoom-out" data-aos-duration={(1000 + index * 200).toString()}>
              <Row className="align-items-center">
                <Col lg={5}>
                  <div className="choose-list-area">
                    <h3>{section.title}</h3>
                    <ul className="choose-auhtor">
                      <li><Link to="#" className="active">SEO</Link></li>
                      <li><Link to="#">PPC Advertising</Link></li>
                      <li><Link to="#">Social Media Marketing</Link></li>
                      <li><Link to="#">Content Marketing</Link></li>
                      <li><Link to="#">Web Design</Link></li>
                      <li><Link to="#">Development</Link></li>
                      <li><Link to="#">Digital Marketing</Link></li>
                      <li><Link to="#">Search Engine Optimization</Link></li>
                    </ul>
                    <p>{section.description}</p>
                    <div className="btn-area">
                      <Link to={section.btnLink} className="header-btn5">{section.btnText}</Link>
                    </div>
                  </div>
                </Col>
                <Col lg={1} />
                <Col lg={6}>
                  <div className="images">
                    <img src="src/assets/img/elements/elements8.png" alt="" className="elements6 animation-key-2" />
                    <img src="src/assets/img/elements/star5.png" alt="" className="star4 keyframe5" />
                    <div className="img1">
                      <img src={`src/${section.imgSrc}`} alt="" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {index < sections.length - 1 && <div className="space50"></div>}
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
};

export default Work3Section;
