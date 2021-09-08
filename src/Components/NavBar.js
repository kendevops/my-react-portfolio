import React from "react";
import myself from "../img/mypix.webp";
import { NavLink } from "react-router-dom";

const NavBar = ({click}) => {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={myself} alt="Kenneth Aladi" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active" onClick={click}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active" onClick={click}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active" onClick={click}>
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" exact activeClassName="active" onClick={click}>
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active" onClick={click}>
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 Kenneth Aladi</p>
        </footer>
      </nav>
    </div>
  );
};

export default NavBar;
