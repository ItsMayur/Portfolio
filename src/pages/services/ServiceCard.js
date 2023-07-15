import React from "react";
import "./services.css";

const ServiceCard = (props) => {
  return (
    <div id="ServiceCard">
      <div>
        <img src={props.icon} alt="" />
      </div>
      <h4>{props.title}</h4>
      <p>{props.discription}</p>
    </div>
  );
};

export default ServiceCard;
