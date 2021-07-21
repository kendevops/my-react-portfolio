import React from "react";
import Title from "../Components/Title";
import AllBlogs from '../Components/AllBlogs';

const Blogs = () => {
  return (
    <div className="Blog">
      <Title title={"Blogs"} span={"Blogs"} />
      <AllBlogs />
    </div>
  );
};

export default Blogs;
