import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import resume from "./Resume.pdf";

function Navbar() {
  const HamClick = () => {
    const navbar = document.getElementById("NavLinksResponsive");
    if (navbar.style.display === "none") {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
  };
  return (
    <div>
      <div id="MobileNavBar">
        <div className="PortfolioHeading">
          <p>&#169; hnji_mayur</p>
        </div>
        <div className="navContact centerIt">
          <a href={resume}>Resume</a>
        </div>
        <div id="Ham" onClick={HamClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="NavLinksResponsive">
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
            {/* <li>
            <Link to="/blogs">Blogs</Link>
          </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="NavBar">
        <div className="PortfolioHeading">
          <p>&#169; hnji_mayur</p>
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
            {/* <li>
            <Link to="/blogs">Blogs</Link>
          </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navContact centerIt">
          <a href={resume}>Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
