import React from "react";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import About from "./pages/About";

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
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
