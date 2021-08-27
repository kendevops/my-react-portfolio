import React, {useState} from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Title from "../Components/Title";
import PortfolioData from "../Components/PortfolioData";

const Portfolios = () => {
  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState(PortfolioData);

  return (
    <div className="Portfolio">
      <div className="title">
        <Title title={"Portfolio"} span={"Portfolio"} />
      </div>
      <div className="portfolioDetails">
        <Categories categories={categories}/>
        <MenuItems menuItem={menuItems}/>
      </div>

    </div>
  );
};

export default Portfolios;
