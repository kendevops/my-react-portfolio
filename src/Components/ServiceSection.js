import React from "react";

const ServiceSection = ({ image, title, description }) => {
  return (
    <div className="Services">
      <div className="service">
        <div className="service-content">
          <img className="s-img" src={image} alt="laptop and mobile" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
