import React from 'react';

const WorksSection: React.FC = () => {
    return (
        <div className="works-inner-section-area sp1">
            <div className="container">
                {/* First Row */}
                <div className="row align-items-center">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                        <div className="about-all-images-area">
                            <img src="../assets/img/elements/elements14.png" alt="" className="elements12 keyframe5" />
                            <img src="../assets/img/elements/elements15.png" alt="" className="elements13 keyframe5" />
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="img1">
                                        <div className="space100"></div>
                                        <img src="../assets/img/all-images/about-img6.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="img2">
                                        <img src="../assets/img/all-images/service-img5.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="works-header-area heading2 specing2">
                            <h5>SEO Service</h5>
                            <h2>Keyword Research & Strategy</h2>
                            <p>We conduct thorough keyword research to identify the terms your target audience is searching for. We develop a keyword strategy that aligns with your business goals, ensuring high relevance and search.</p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>

                <div className="space100 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>

                {/* Second Row */}
                <div className="row align-items-center">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4">
                        <div className="works-header-area heading2">
                            <h5>SEO Service</h5>
                            <h2>Technical SEO</h2>
                            <p>We optimize your website's content, ensuring it is relevant, engaging, and includes targeted keywords. We craft compelling meta titles and descriptions to improve click-through rates from search engine.</p>
                            <div className="space16"></div>
                            <p>We enhance your website's internal linking structure to improve navigation and distribute page authority.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-all-images-area">
                            <img src="../assets/img/elements/elements14.png" alt="" className="elements12 keyframe5" />
                            <img src="../assets/img/elements/elements15.png" alt="" className="elements13 keyframe5" />
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="img1">
                                        <div className="space100"></div>
                                        <img src="../assets/img/all-images/service-img6.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="img2">
                                        <img src="../assets/img/all-images/service-img7.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>

                <div className="space100 d-lg-block d-none"></div>
                <div className="space30 d-lg-none d-block"></div>

                {/* Third Row */}
                <div className="row align-items-center">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                        <div className="about-all-images-area">
                            <img src="../assets/img/elements/elements14.png" alt="" className="elements12 keyframe5" />
                            <img src="../assets/img/elements/elements15.png" alt="" className="elements13 keyframe5" />
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="img1">
                                        <div className="space100"></div>
                                        <img src="../assets/img/all-images/service-img8.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="img2">
                                        <img src="../assets/img/all-images/service-img9.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="works-header-area heading2 specing2">
                            <h5>SEO Service</h5>
                            <h2>Content Creation & Optimization</h2>
                            <p>We regularly publish blog posts and articles to keep your website fresh and relevant. We perform content audits to identify gaps and opportunities for optimization.</p>
                            <div className="space16"></div>
                            <p>We create engaging, informative content that resonates with your audience and is optimized for search engines.</p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </div>
    );
};

export default WorksSection;
