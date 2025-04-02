import { Link } from "react-router-dom";

const ServiceInner5Header: React.FC = () => {
  return (
    <div className="service-inner2-section-area sp8">
    <img src="../assets/img/elements/instagram1.png" alt="" className="instagram1"/>
    <img src="../assets/img/elements/linkedin1.png" alt="" className="linkedin1"/>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="service-images">
                    <img src="../assets/img/elements/facebook1.png" alt="" className="facebook1"/>
                   <img src="../assets/img/elements/twitter1.png" alt="" className="twitter1"/>
                    <img src="../assets/img/all-images/service-img11.png" alt=""/>
                    <img src="../assets/img/bg/inner-bg1.png" alt="" className="inner-bg1"/>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="service-content heading2">
                    <h5>Social Media Marketing</h5>
                    <h2>Social Media Marketing</h2>
                    <p>Welcome to SEOC’s Social Media Marketing Services. Our team specializes in crafting and executing social media strategies that elevate your brand, engage your audience, and drive measurable results. Harness the power of social media to grow your business and connect with customers on a deeper level.</p>
                    <div className="space32"></div>
                    <div className="btn-area1">
                        <Link to="/service1" className="header-btn1">View Our Services <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ServiceInner5Header;
