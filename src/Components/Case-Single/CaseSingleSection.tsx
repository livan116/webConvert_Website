import React from "react";

const CaseSingleSection: React.FC = () => {
  return (
    <div className="case-single-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="case-auhtor-area sp1">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="case-single-hedaer heading2">
                    <h2>Information</h2>
                    <p>
                      Keyword research is a crucial step in any successful SEO
                      strategy. It involves identifying and analyzing the search
                      terms that your target audience uses when looking for
                      products, services, or information related to your.
                    </p>
                    <div className="case-others-area">
                      <ul>
                        <li>
                          <span>Category:</span> Keyword Research & Analysis
                        </li>
                        <li>
                          <span>Date:</span> 12 May, 2024
                        </li>
                        <li>
                          <span>Client:</span> John Smith
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-7">
                  <div className="case-images image-anime">
                    <img
                      src="../assets/img/all-images/case-img18.png"
                      alt="Case Image"
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

export default CaseSingleSection;
