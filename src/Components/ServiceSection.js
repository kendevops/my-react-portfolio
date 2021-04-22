import React from "react";

const ServiceSection = ({ image, title, description }) => {
  return (
    <div className="Services">
      <div className="service">
        <div className="service-content">
          <img class="s-img" src={image} alt="laptop and mobile" />
          <h5 className="s-title">{title}</h5>
          <div className="s-text">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
