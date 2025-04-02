import { Link } from "react-router-dom";

const worksData = [
  {
    icon: "../assets/img/icons/works-icons7.svg",
    title: "Proven Result",
    description:
      "We have a track record of delivering tangible results for our clients. From increasing website traffic and improving search.",
    link: "/case",
  },
  {
    icon: "../assets/img/icons/works-icons8.svg",
    title: "Customized Solutions",
    description:
      "We believe that one size does not fit all when it comes to digital marketing. That's why we take the time to understand your SEO.",
    link: "/case-single",
  },
  {
    icon: "../assets/img/icons/works-icons9.svg",
    title: "Dedicated Support",
    description:
      "Your success is our top priority. That's why we provide dedicated support and guidance every step of the way to running SEO.",
    link: "/case-single",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="works-inner-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="works-header-area heading2">
              <h5>Why Choose Us</h5>
              <h2>Experience the Advantage Why We're the Right Choice</h2>
              <p>
                At SEOC, we understand that you have many options when it comes
                to digital marketing services. So why should you choose us? Here
                are a few reasons:
              </p>
              <div className="space32"></div>

              {worksData.map((item, index) => (
                <div key={index}>
                  <div className="works-content-box">
                    <div className="icons">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="content">
                      <Link to={item.link}>{item.title}</Link>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  {index < worksData.length - 1 && (
                    <div className="space20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-all-images-area">
              <img
                src="../assets/img/elements/elements14.png"
                alt="Element"
                className="elements12 keyframe5"
              />
              <img
                src="../assets/img/elements/elements15.png"
                alt="Element"
                className="elements13 keyframe5"
              />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="img1 image-anime d-md-block d-none">
                    <div className="space100"></div>
                    <img
                      src="../assets/img/all-images/about-img6.png"
                      alt="About Image 6"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img2 image-anime">
                    <img
                      src="../assets/img/all-images/about-img5.png"
                      alt="About Image 5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
