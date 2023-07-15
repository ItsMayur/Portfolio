import React from "react";
import "./services.css";
import ProgrammerImg from "./programmerBg.jpg";
import ServiceCard from "./ServiceCard";
import FrontendPic from "./Services Pics/Frontend.svg";
import BackendPic from "./Services Pics/Backend.svg";
import FullStackPic from "./Services Pics/Fullstack.svg";
import SpwaPic from "./Services Pics/SinglePage.svg";
import LandingPagePic from "./Services Pics/LandingPage.svg";
import PwaPic from "./Services Pics/ProgressiveWebApp.svg";
import PortfolioPic from "./Services Pics/Portfolio.svg";

export default function Services() {
  return (
    <div id="SERVICES">
      <div className="services">
        <div id="ProgrammerImgDiv">
          <img src={ProgrammerImg} alt="" id="ProgrammerImg" />
          <h1>Our Services</h1>
        </div>
        <div id="ServicesTab">
          <ServiceCard
            title="Frontend Development"
            discription="We use the most popular frontend frameworks like React.js that enable us to create the surface layer of your product."
            icon={FrontendPic}
          />
          <ServiceCard
            title="Backend Development"
            discription="We use server-side technologies like Node.js, Express.js for prototyping and development, producing fast and scalable web apps."
            icon={BackendPic}
          />
          <ServiceCard
            title="Full Stack Development"
            discription="We deliver end-to-end web development, combining frontend and backend solutions and other technologies necessary to make your product a success.
            
            "
            icon={FullStackPic}
          />
          <ServiceCard
            title="Single-page web apps"
            discription="SPAs minimize the amount of data transferred between the client and server. Only the required data is fetched through APIs, reducing server load and bandwidth usage. This efficiency can lead to cost savings and improved scalability, particularly when serving a large number of users.
            "
            icon={SpwaPic}
          />
          <ServiceCard
            title="Landing page"
            discription="Landing pages are web pages specifically designed and optimized for a particular marketing or advertising campaign. They serve as the entry point for visitors who click on a specific call-to-action (CTA) or ad, with the primary goal of converting those visitors into leads or customers."
            icon={LandingPagePic}
          />
          <ServiceCard
            title="Progressive Web Apps"
            discription="PWAs are built using standard web technologies like HTML, CSS, and JavaScript. They can work across different platforms and devices, including desktops, mobile devices, and tablets. This cross-platform compatibility saves development time and allows for a broader reach."
            icon={PwaPic}
          />
          <ServiceCard
            title="Portfolio Websites"
            discription="Portfolio websites showcase the work, skills, and achievements of individuals or businesses. They are commonly used by artists, photographers, designers, or freelancers to display their portfolios and attract potential clients."
            icon={PortfolioPic}
          />
        </div>
      </div>
    </div>
  );
}
