import React from "react";
import "./projects.css";
import ProjectTab from "./ProjectTab";
import WSLogo from "./Project images/WS.jpg";

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
      </div>
    </div>
  );
}
