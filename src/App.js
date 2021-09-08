import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolios from "./pages/Portfolios";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle": ""}`}>
        <NavBar click={navClick}/>
      </div>
      <div class={`menu-toggler ${navToggle ? "open" : ""}`} onClick={navClick}>
        <div class="bar half start"></div>
        <div class="bar"></div>
        <div class="bar half end"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolios />
            </Route>
            <Route path="/blog" exact>
              <Blogs />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
