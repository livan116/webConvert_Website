import React from "react";
import { Link } from "react-router-dom";

interface SolutionItem {
  imageSrc: string;
  step: string;
  title: string;
  description: string;
  link: string;
}

const solutionItems: SolutionItem[] = [
  {
    imageSrc: "src/assets/img/all-images/solution-img1.png",
    step: "Step 01",
    title: "Email Verification",
    description:
      "You might not think much about your email, they could actually determine how many people see your emails.",
    link: "/service1",
  },
  {
    imageSrc: "src/assets/img/all-images/solution-img2.png",
    step: "Step 02",
    title: "Competitor Analysis",
    description:
      "If you send a lot of bounced or unwanted emails this will leave a negative mark on your sender history.",
    link: "/service1",
  },
  {
    imageSrc: "src/assets/img/all-images/solution-img3.png",
    step: "Step 03",
    title: "Revenue Monitoring",
    description:
      "Verify your list means that you’ll no longer send to dead email addresses.",
    link: "/service1",
  },
];

const SolutionSection: React.FC = () => (
  <div className="solution9-section-area sp1" id="solution">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="solution-header text-center heading14">
            <h5>
              <img src="src/assets/img/icons/logo-icons7.svg" alt="" />
              SEO Solution
            </h5>
            <h2 className="text-anime-style-3">
              An Amazing Family Of SEO Solution For Every Need
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 m-auto">
          {solutionItems.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`solution-boxarea${
                  index === 1 ? "2" : index === 2 ? "3" : ""
                }`}
              >
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div
                      className="img1"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      <img src={item.imageSrc} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-6">
                    <div className="step-header">
                      <h5 data-aos="fade-left" data-aos-duration="800">
                        <img
                          src="src/assets/img/icons/logo-icons2.svg"
                          alt=""
                        />{" "}
                        {item.step}
                      </h5>
                      <div className="space16"></div>
                      <h2 data-aos="fade-left" data-aos-duration="1000">
                        {item.title}
                      </h2>
                      <div className="space16"></div>
                      <p data-aos="fade-left" data-aos-duration="1100">
                        {item.description}
                      </p>
                      <div className="space32"></div>
                      <div data-aos="fade-left" data-aos-duration="1200">
                        <Link to={item.link} className="header-btn16">
                          View Our Service{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space32"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SolutionSection;
