import React from "react";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";

const About = () => {
  return (
    <div className="About">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <SkillsSection skill={"JavaScript"} progress={"70%"} />
    </div>
  );
};

export default About;
