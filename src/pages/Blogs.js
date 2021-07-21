import React from "react";
import Title from "../Components/Title";
import AllBlogs from '../Components/AllBlogs';

const Blogs = () => {
  return (
    <div className="Blog">
      <Title title={"Blogs"} span={"Blogs"} />
      {
        AllBlogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="blog-content">
              <img src={blog.image} alt={blog.name} />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Blogs;
