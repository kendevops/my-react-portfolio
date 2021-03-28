import "../App.scss";
import React from "react";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
          <Link className="icon-link">
            <FontAwesomeIcon icon={faLinkedin} className="icon in" />
          </Link>
          <Link className="icon-link">
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </Link>
          <Link className="icon-link">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-link">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
