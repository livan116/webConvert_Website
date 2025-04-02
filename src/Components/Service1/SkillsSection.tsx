import React from 'react';

interface Skill {
    name: string;
    percent: number;
    className: string;
}

const skills: Skill[] = [
    { name: 'S M M', percent: 82, className: 'circle' },
    { name: 'P P C', percent: 49, className: 'circle two' },
    { name: 'SEO', percent: 99, className: 'circle three' },
    { name: 'Digital Marketing', percent: 95, className: 'circle four' }
];

const SkillsSection: React.FC = () => {
    return (
        <div className="skills-section-area sp2">
            <img src="../assets/img/bg/cta-bg1.png" alt="" className="cta-bg1 aniamtion-key-2" />
            <img src="../assets/img/bg/cta-bg2.png" alt="" className="cta-bg2 aniamtion-key-1" />
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
                            {skills.map((skill, index) => (
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div className="progresbar">
                                        <div className="progressbar">
                                            <div className={skill.className} data-percent={skill.percent}>
                                                <canvas></canvas>
                                                <div>{skill.percent}%</div>
                                            </div>
                                        </div>
                                        <p>{skill.name}</p>
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
