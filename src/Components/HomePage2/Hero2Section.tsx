import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero2Section: React.FC = () => {
    return (
        <div className="hero2-section-area">
            <img src="src/assets/img/elements/star3.png" alt="" className="star3 keyframe5" />
            <img src="src/assets/img/elements/star3.png" alt="" className="star4 keyframe5" />
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="header-main-area heading3">
                            <h5>
                                <img src="src/assets/img/icons/logo-icons2.svg" alt="" />
                                Top #1 SEO & Marketing Agency
                            </h5>
                            <h1 className="text-anime-style-3">
                                Pioneering SEO & Digital Marketing Solutions Agency
                            </h1>
                            <p data-aos="fade-left" data-aos-duration="1000">
                                With a dedicated team of experts armed with the latest tools techniques, we specialize in crafting bespoke SEO & digital marketing solutions.
                            </p>
                            <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                                <Link to="contact" className="header-btn4">Start Ranking Now</Link>
                                <Link to="contact" className="header-btn3">Contact Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={5}>
                        <div className="header-images-area" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="src/assets/img/elements/elements6.png" alt="" className="elements6 aniamtion-key-1" />
                            <img src="src/assets/img/elements/star4.png" alt="" className="star5 keyframe5" />
                            <div className="img1">
                                <img src="src/assets/img/bg/header-imgbg2.png" alt="" className="header-imgbg2" />
                                <img src="src/assets/img/all-images/header-img2.png" alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero2Section;
