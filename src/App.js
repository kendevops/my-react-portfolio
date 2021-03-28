import React from "react";
import HomePage from "./pages/HomePage";
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
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default App;