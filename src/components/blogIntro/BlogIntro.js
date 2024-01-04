import React, { useState } from "react";
import "./blogIntro.css";
import blogIntroImg from "./blogIntroImg.png";

const BlogIntro = (props) => {
  const gotoBlog = () => {
    console.log(props.post_id);
  };
  const handleSharePost = () => {
    document.getElementById("BlogIntroShareBtn").style.display = "none";
    document.getElementById("BlogIntroCommentBtn").style.display = "none";
    document.getElementById("BlogIntroShareBtns").style.display = "flex";
  };
  return (
    <div id="BlogIntro" onClick={gotoBlog}>
      <div id="BlogIntroHeadingBox">
        <h1 id="BlogIntroHeading">
          Why choose Next.js over React.js? Elevate your web development with
          blazing-fast performance and SEO-friendly features!
        </h1>
        <img src={blogIntroImg} id="blogIntroImg" alt="" srcset="" />
      </div>
      <p id="BlogIntroDate">September 22,2023</p>
      <p id="BlogIntroDiscription">
        Introduction React JS: React.js, commonly known as React, is an
        open-source JavaScript library for building user interfaces (UIs) and
        single-page applications. Developed and maintained by Facebook, React
        simplifies the process of creating interactive and dynamic web
        applications. It uses a component-based architecture, where UIs are
        broken down into reusable and modular components, making it easier to
        manage and maintain complex applications. React allows developers to
        efficiently update and render specific parts of a web page without
        refreshing the entire page, enhancing performance and user experience.
        Next JS: Next.js is a popular open-source JavaScript framework built on
        top of React.js. It's designed to simplify the development of
        server-rendered React applications and provides a set of tools and
        conventions for building modern web applications. Next.js offers
        features like server-side rendering (SSR), automatic code splitting, and
        routing out of the box, making it ideal for b
      </p>
      <div id="BlogIntroButtons">
        <div id="BlogIntroFunctions">
          <div onClick={handleSharePost} id="BlogIntroShareBtn">
            SHARE
          </div>
          <div id="BlogIntroShareBtns">
            <div>Copy link</div>
            <div>Whatsapp</div>
            <div>Instagram</div>
          </div>
          <div id="BlogIntroCommentBtn">POST A COMMENT</div>
        </div>
        <a href="#">READ MORE</a>
      </div>
    </div>
  );
};

export default BlogIntro;
