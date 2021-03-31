import React from "react";
import ImageSection from "../Components/ImageSection";
import ServiceSection from "../Components/ServiceSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";

const About = () => {
  return (
    <div className="About">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML"} progress={"95%"} />
        <SkillsSection skill={"CSS"} progress={"90%"} />
        <SkillsSection skill={"SCSS"} progress={"90%"} />
        <SkillsSection skill={"JavaScript"} progress={"90%"} />
        <SkillsSection skill={"React"} progress={"90%"} />
        <SkillsSection skill={"Redux"} progress={"90%"} />
        <SkillsSection skill={"Material-UI"} progress={"90%"} />
        <SkillsSection skill={"Wordpress"} progress={"90%"} />
        <SkillsSection skill={"JSON"} progress={"90%"} />
        <SkillsSection skill={"Rest API"} progress={"90%"} />
      </div>
      <Title title={"My Services"} span={"My Services"} />
      <div className="services-container">
        <ServiceSection image={"design"} />
      </div>
    </div>
  );
};

export default About;
