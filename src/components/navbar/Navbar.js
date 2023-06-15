import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import resume from "./Resume.pdf";

function Navbar() {
  return (
    <div id="NavBar">
      <div className="Portfolio Heading">
        <p>ItsMayur</p>
      </div>
      <div>
        <ul className="navBarLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navContact centerIt">
        <a href={resume}>Resume</a>
      </div>
    </div>
  );
}

export default Navbar;
