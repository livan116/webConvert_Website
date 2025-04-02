import { Link } from "react-router-dom";

const ServiceSection: React.FC = () => {
  return (
    <div className="service1-section-area sp1 bg2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="service-header-area heading2 text-center">
              <h5>Our Service</h5>
              <h2>Social Media Service</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-all-boxes-area">
              <div className="service-boxarea">
                <Link to="/service1">Search Engine Optimization ( SEO)</Link>
                <div className="space40"></div>
                <img src="../assets/img/icons/service-icon1.svg" alt="" />
                <div className="space40"></div>
                <p>
                  Enhance your online visibility & drive organic traffic with
                  our advanced SEO techniques. We optimize your website to rank
                  higher.
                </p>
              </div>

              <div className="service-boxarea box2">
                <Link to="/service1">Pay-Per-Click (PPC) Advertising</Link>
                <div className="space40"></div>
                <img src="../assets/img/icons/service-icon2.svg" alt="" />
                <div className="space40"></div>
                <p>
                  Reach your audience instantly and drive qualified leads with
                  targeted PPC campaigns. Our experts craft compelling ad copy
                  and optimize.
                </p>
              </div>

              <div className="service-boxarea box3">
                <Link to="/service1">Social Media Marketing</Link>
                <div className="space66"></div>
                <img src="../assets/img/icons/service-icon3.svg" alt="" />
                <div className="space40"></div>
                <p>
                  Build a strong brand presence and engage with your audience on
                  social media platforms. We create strategic social media
                  campaigns to boost brand.
                </p>
              </div>

              <div className="service-boxarea box4">
                <Link to="/service1">Website Design and Development</Link>
                <div className="space40"></div>
                <img src="../assets/img/icons/service-icon4.svg" alt="" />
                <div className="space40"></div>
                <p>
                  Make a lasting impression with a professionally designed and
                  user-friendly website. Our web design and development services
                  ensure website.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 m-auto">
            <div className="space50"></div>
            <div className="btn-area1 text-center">
              <Link to="/service1" className="header-btn1">
                View More Services{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
