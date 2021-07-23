import React from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Title from "../Components/Title";

const Portfolios = () => {
  return (
    <div className="Portfolio">
      <div className="title">
        <Title title={"Portfolio"} span={"Portfolio"} />
      </div>
      <div className="portfolioDetails">
        <Categories />
        <MenuItems />
      </div>

    </div>
  );
};

export default Portfolios;
