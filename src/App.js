import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolios from "./pages/Portfolios";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
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
