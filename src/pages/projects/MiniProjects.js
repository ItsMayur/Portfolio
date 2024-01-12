import React from "react";
import { Link } from "react-router-dom";

const ProjectBtn = (props) => {
  return (
    <div id="MiniProjectTab">
      <Link to="Home">
        <div id="MiniProjectTitle">{props.title}</div>
      </Link>
    </div>
  );
};

const MiniProjects = () => {
  return (
    <div id="MiniProjectBox">
      <ProjectBtn title="Minesweeper Game" />
      <ProjectBtn title="Todo List" />
      <ProjectBtn title="Portfolio Website" />
      <ProjectBtn title="Pannel Genrator" />
      <ProjectBtn title="Suduko Solver" />
      <ProjectBtn title="Library managment system " />
      <ProjectBtn title="Calculator" />
    </div>
  );
};

export default MiniProjects;
