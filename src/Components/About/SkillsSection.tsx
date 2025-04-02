import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { percent: 82, label: "S M M" },
  { percent: 49, label: "P P C" },
  { percent: 99, label: "SEO" },
  { percent: 95, label: "Digital Marketing" },
];
const AnimationProvider: React.FC<{
  valueStart: number;
  valueEnd: number;
  children: (value: number) => React.ReactNode;
}> = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setTimeout(() => {
      setValue(valueEnd);
    }, 300);
  }, [valueEnd]);

  return children(value);
};

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-section-area sp2">
      <img
        src="../assets/img/bg/cta-bg1.png"
        alt=""
        className="cta-bg1 aniamtion-key-2"
      />
      <img
        src="../assets/img/bg/cta-bg2.png"
        alt=""
        className="cta-bg2 aniamtion-key-1"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 m-auto">
            <div className="skills-header text-center heading2">
              <h5>Skills</h5>
              <h2>Our Skills</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-10 m-auto">
          <div className="circle-progress-area">
            <div className="row">
              {skillsData.map((skill, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <AnimationProvider
                        valueStart={0}
                        valueEnd={skill.percent}
                      >
                        {(value: number) => (
                          <CircularProgressbar
                            value={value}
                            text={`${value}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              textSize: "20px",

                              pathColor: "#fff",
                              textColor: "#fff",
                              trailColor: "#222326",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        )}
                      </AnimationProvider>
                    </div>
                    <p>{skill.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
