import React from "react";

const ServiceSection = ({ image }) => {
  return (
    <div className="Services">
      <img src={image} alt="laptop and mobile" />
      <h5 className="s-title">Front-End Web Developer</h5>
      <p className="s-text"></p>
    </div>
  );
};

export default ServiceSection;
