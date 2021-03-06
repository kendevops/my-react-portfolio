import "../App.scss";
import React from "react";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Kenneth Aladi</span>
        </h1>
        <p className="sub-text">
          I have hands-on experience efficiently coding websites and
          applications. Building state-of-the-art, easy to use, responsive, user-friendly websites and
          applications is truly a passion of mine.
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

export default Home;
