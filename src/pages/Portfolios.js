import React, {useState} from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Title from "../Components/Title";
import PortfolioData from "../Components/PortfolioData";


const allCategories = ["All", ...new Set(PortfolioData.map((item) => item.category))];
const Portfolios = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(PortfolioData);

  const filter = (category) => {
    if(category === "All") {
      setCategories(allCategories);
      setMenuItems(PortfolioData);
      return
    }
    const filteredData = PortfolioData.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="portfolio-data">
      <div className="portfolio-title">
        <Title title={"Portfolio"} span={"Portfolio"} />
      </div>
      <div className="portfolioDetails">
        <Categories filter={filter} categories={categories}/>
        <MenuItems menuItem={menuItems}/>
      </div>

    </div>
  );
};

export default Portfolios;
