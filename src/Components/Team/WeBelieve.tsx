import React from 'react';

const WeBelieve: React.FC = () => {
  const values = ["Transparency", "Accountability", "Lifelong Learning", "Ambition"];

  return (
    <div className="team-inner-section-area sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="team-header heading2">
              <h5>What We Believe In</h5>
              <h2>We Believe In Marketing The World A Better Place</h2>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <div className="pera heading2">
              <p>
                We achieve this by scaling impactful businesses. Our focus is on promoting our clients’ brands and effectively disseminating their message worldwide. We refuse to settle for the status quo, constantly striving to expand our own business with the same level of honesty and integrity we employ to enhance our clients’ enterprises.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="space50"></div>
            <div className="step-by-step">
              <div className="row">
                {values.map((value, index) => (
                  <div className="col-lg-3" key={index}>
                    <div className="pera">
                      <p>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBelieve;
