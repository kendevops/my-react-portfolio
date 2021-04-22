import React from "react";
import ImageSection from "../Components/ImageSection";
import ServiceSection from "../Components/ServiceSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";
// import img from "../img/shineBg.jpeg";
import design from "../img/design3.png";

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
        <ServiceSection image={design} title={"Front-End Developer"} description={"I Develop user-friendly features using uptodate technologies, I also build reusable code and libraries for future use, I ensure the technical feasibility of UI/UX designs are well implimented, Optimize application for maximum speed and scalability."} />
        <ServiceSection image={design} title={"Front-End Web Developer"} description={"I Develop user-friendly features using uptodate technologies, I also build reusable code and libraries for future use, I ensure the technical feasibility of UI/UX designs are well implimented, Optimize application for maximum speed and scalability."} />
        <ServiceSection image={design} title={"Front-End Web Developer"} description={"I Develop user-friendly features using uptodate technologies, I also build reusable code and libraries for future use, I ensure the technical feasibility of UI/UX designs are well implimented, Optimize application for maximum speed and scalability."} />
      </div>
    </div>
  );
};

export default About;
