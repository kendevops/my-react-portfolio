import React from "react";
import ImageSection from "../Components/ImageSection";
import ServiceSection from "../Components/ServiceSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";
import cloud from "../img/cloud.svg";
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
        <ServiceSection image={design} title={"FACILITATOR/MENTOR"} description={"I am a Facilitator and Mentor, I have on different occassion facilitated for Google African Developer Scholarship, Facebook Developer Circle Training and also the Lead Facilitator to Code2Teach Africa, I am a passionate tech enthusiast, I teach programming with passion and i ensure i explain in details concepts about programming to my students."} />
        <ServiceSection image={cloud} title={"Cloud Developer"} description={"I Develop user-friendly features using uptodate technologies, I also build reusable code and libraries for future use, I ensure the technical feasibility of UI/UX designs are well implimented, Optimize application for maximum speed and scalability."} />
      </div>
    </div>
  );
};

export default About;
