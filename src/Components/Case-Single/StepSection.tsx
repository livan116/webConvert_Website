import React from "react";
import { Link } from "react-router-dom";

type StepSectionProps = {
  stepNumber: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  reverse?: boolean;
  images: string[];
};

const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  title,
  description,
  buttonText,
  buttonLink,
  reverse,
  images,
}) => {
  return (
    <div
      className={`row align-items-center ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="col-lg-6">
        <div className="about-all-images-area">
          <img
            src="src/assets/img/elements/elements14.png"
            alt=""
            className="elements12 keyframe5"
          />
          <img
            src="src/assets/img/elements/elements15.png"
            alt=""
            className="elements13 keyframe5"
          />
          <div className="row">
            {images.map((image, index) => (
              <div className="col-lg-6 col-md-6" key={index}>
                <div className={`img${index + 1}`}>
                  {index === 0 && <div className="space100"></div>}
                  <img src={image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className={`works-header-area heading2 ${
            stepNumber === "Step 01" ? "specing2" : ""
          }`}
        >
          <h5>{stepNumber}</h5>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="space32"></div>
          <div className="btn-area1">
            <Link to={buttonLink} className="header-btn1">
              {buttonText}{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
