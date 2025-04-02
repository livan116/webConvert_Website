import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
    return (
        <div className="about1-section-area sp6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="about-images">
                            <figure>
                                <img src="../assets/img/all-images/about-img1.png" alt="About" />
                            </figure>
                            <img src="../assets/img/elements/star1.png" alt="Star" className="star1 keyframe5" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-content-area heading2">
                            <div className="arrow-circle">
                                <Link to="/">
                                    <img src="../assets/img/elements/elements4.png" alt="Elements" className="elements4 keyframe5" />
                                    <img src="../assets/img/icons/arrow.svg" alt="Arrow" className="arrow" />
                                </Link>
                            </div>
                            <h2 className="text-anime-style-3">Comprehensive SEO & Digital Marketing Solutions.</h2>
                            <p>Welcome to SEOC your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.</p>
                            <div className="btn-area">
                                <Link to="/about" className="header-btn1">Learn More<span><i className="fa-solid fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about-author-images">
                            <img src="../assets/img/elements/elements5.png" alt="Elements" className="elements5 keyframe5" />
                            <figure>
                                <img src="../assets/img/all-images/about-img2.png" alt="About Author" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
