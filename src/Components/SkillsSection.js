import React from "react";

const SkillsSection = ({ skill, progress }) => {
  return (
    <div className="Skills">
      <div className="skills-container">
        <h5 className="skill-title">{skill}</h5>
        <div className="skill-bar">
          <p className="skill-text">{progress}</p>
          <div className="skill-progress">
            <div className="progress">
                <div className="inner-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
