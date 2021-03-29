import React from "react";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
