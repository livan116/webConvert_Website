import React from "react";
import { Link } from "react-router-dom";

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
  quitoImageSrc: string;
  googleLogoSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  rating,
  quitoImageSrc,
  googleLogoSrc,
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="testimonial-boxarea">
        <img src={quitoImageSrc} alt="quito" className="quito" />
        <p>{text}</p>
        <div className="space48"></div>
        <div className="auhtor-logo">
          <div className="text">
            <Link to="/team">{author}</Link>
            <ul>
              {
                Array.from({ length: rating }, (_, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-star"></i>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="logo">
            <img src={googleLogoSrc} alt="Google logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
