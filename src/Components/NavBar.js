import React from "react";
import myself from "../img/myself.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="profile">
        <img src={myself} alt="Kenneth Aladi" />
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="footer">
        <p>@2021 Kenneth Aladi</p>
      </footer>
    </div>
  );
};

export default NavBar;
