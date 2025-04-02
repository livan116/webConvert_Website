import { Link } from "react-router-dom";

const ServiceInnerHeader: React.FC = () => {
  return (
    <div className="service-inner-header sp8">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="service-images">
              <img src="../assets/img/all-images/service-img10.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-textarea heading2">
              <h5>Email Marketing</h5>
              <h2>Email Marketing Services</h2>
              <p>
                Email marketing with a high return on investment (ROI) and the
                ability <br className="d-lg-block d-none" /> to deliver
                personalized content directly to your customers' inboxes,{" "}
                <br className="d-lg-block d-none" /> email marketing is
                essential for building lasting relationships and{" "}
                <br className="d-lg-block d-none" /> driving business growth.
              </p>
              <div className="space32"></div>
              <div className="btn-area1">
                <Link to="/service1" className="header-btn1">
                  View Our Services{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInnerHeader;
