import React from "react";
import myself from "../img/myself.webp";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={myself} alt="Kenneth Aladi" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Kenneth Aladi</span>
        </h4>
        <p>
          An Experienced Front End Web Developer with a demonstrated history of
          working in the computer software industry. Skilled in HTML, CSS,
          JavaScript, Reactjs, Python, Strategic Planning, Git and Github and
          Jquery. Strong enthusiasm for working and collaborating with others,
          Strong desire to learn and am also open to suggestions, advice and
          guidance.
        </p>
        <button className="btn"><a href="https://drive.google.com/file/d/1QedXFDvoFPF_uhG6CJAGJWlifb9X6AGN/view?usp=sharing" download target="_blank" rel="noreferrer" >Download CV</a></button>
      </div>
    </div>
  );
};

export default ImageSection;
