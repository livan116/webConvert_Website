import React from "react";
import { Link } from "react-router-dom";

const PageHero: React.FC<{
  className?: string;
  title: string;
  breadcrumb: string[];
}> = ({ className, title, breadcrumb }) => {
  return (
    <div
      className={className || ""}
      style={{
        backgroundImage: "url(../assets/img/bg/inner-header.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src="../assets/img/elements/elements1.png"
        alt=""
        className="elements1 aniamtion-key-1"
      />
      <img
        src="../assets/img/elements/star2.png"
        alt=""
        className="star2 keyframe5"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="about-inner-header heading9 text-center">
              <h1>{title}</h1>
              <Link to="/">
                {breadcrumb.map(
                  (item, index) =>
                    index !== breadcrumb.length - 1 && (
                      <>
                        {item}
                        <i className="fa-solid fa-angle-right"></i>
                      </>
                    )
                )}
                <span>{breadcrumb[breadcrumb.length - 1]}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
