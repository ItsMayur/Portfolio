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
        <ProjectTab
          title="GetYourDone"
          discription="GetYourDrone is a real time drone delivery app that uses users location and provide him nearest drone with real time data of drone.It is India's first internet based ground control system for drones.It is an end to end solution for requesting of drone over the internet."
          // headImage={WSLogo}
          // link="https://winnex-seekers.netlify.app/"
        />
      </div>
    </div>
  );
}
