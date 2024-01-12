import React from "react";
import "./projects.css";
import ProjectTab from "./ProjectTab";
import WSLogo from "./Project images/WS.jpg";
import DroneProject from "./Project images/DroneDelivery.jpg";
import MiniProjects from "./MiniProjects";
import ECart from "./Project images/ECart.png";
import Blogging from "./Project images/Blogging.png";

export default function Projects() {
  return (
    <div id="ProjectsPage">
      <div id="ProjectHeading">
        <h1>Projects</h1>
      </div>
      <div id="ProjectTabs">
        <ProjectTab
          title="Winnix Seekers"
          discription="Winnix Seekers Consultancy Pvt Ltd is a digital marketing and election strategy building agency.My work was to develope an easy to intract web application.Winnix Seekers Consultancy Pvt Ltd is a digital marketing and election strategy building agency.My work was to develope an easy to intract web application.Winnix Seekers Consultancy Pvt Ltd is a digital marketing and election strategy building agency.My work was to develope an easy to intract web application.Winnix Seekers Consultancy Pvt Ltd is a digital marketing and election strategy building agency.My work was to develope an easy to intract web application."
          headImage={WSLogo}
          link="https://winnex-seekers.netlify.app/"
        />
        <ProjectTab
          title="Winnix Seekers"
          discription="Crafted an innovative shopping website, conquering inventory challenges with a cutting-edge tracking system. Engineered a secure, scalable user database fortified with encryption, while implementing a sleek login authentication system. Demonstrated prowess in addressing critical issues, elevating my proficiency in dynamic e-commerce development."
          headImage={ECart}
          link="https://github.com/ItsMayur/E-Commerce-Project-MERN-"
        />
        <ProjectTab
          title="Drone Delivery Project"
          discription="Developed an internet-based drone delivery web application using the MERN stack during an internship. Due to confidentiality constraints, specific details about the project are not disclosed."
          headImage={DroneProject}
        />
        <ProjectTab
          title="Blogging Website"
          discription="Created a blogging website named tildd showcasing expertise in Full Stack Hosting, Linux Server management, and Dynamic page creation. Overcame challenges such as navigating the deployment process on a Linux-based server using the Command Line."
          headImage={Blogging}
          link="http://www.tildd.me/"
        />
      </div>
      <div id="MiniProjects">
        <div id="MicroProjectHeading">
          <h1>Some micro projects</h1>
        </div>
        <MiniProjects />
      </div>
    </div>
  );
}
