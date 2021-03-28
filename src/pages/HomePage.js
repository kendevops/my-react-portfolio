import "../App.scss";
import React from "react";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Kenneth Aladi</span>
        </h1>
        <p className="sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur
          dolorum laborum saepe iste, architecto eveniet pariatur, dignissimos,
          sequi nostrum facere ut voluptates illo accusamus perferendis. Quis
          aliquam voluptas optio.
        </p>
        <div className="icons">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/kenneth-aladi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon in" />
          </a>
          <a
            className="icon-link"
            href="https://twitter.com/Aqua_Robotics"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </a>
          <a
            className="icon-link"
            href="https://github.com/kendevops"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            className="icon-link"
            href="https://www.youtube.com/channel/UCpA6UQUrD9oigQXTUXH8rLQ"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
