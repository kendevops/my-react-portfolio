import React from "react";
import Title from "../Components/Title";
import AllBlogs from '../Components/AllBlogs';

const Blogs = () => {
  return (
    <div>
      <div className="b-title">
        <Title title={"Blogs"} span={"Blogs"} />
      </div>
      <AllBlogs />
    </div>
  );
};

export default Blogs;
