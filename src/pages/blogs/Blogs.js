import React from "react";
import BlogIntro from "../../components/blogIntro/BlogIntro";
import "./blogs.css";

const Blogs = () => {
  const posts = [{ id: 1 }, { id: 2 }, { id: 3223424 }];
  return (
    <div id="Blogs">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <BlogIntro post_id={post.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
