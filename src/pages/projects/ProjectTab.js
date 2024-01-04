import React from "react";

const ProjectTab = (props) => {
  const showEloboratedDetails = () => {};

  return (
    <div>
      <div id="ProjectTab">
        <div id="ProjectImgBox">
          <img src={props.headImage} alt="No Image of the Project" srcset="" />
        </div>
        <div id="ProjectTabDetails">
          <h2>{props.title}</h2>
          <p>{props.discription}</p>
          <div id="ProjectActions">
            <div id="ProjectTabReadMoreBtn" onClick={showEloboratedDetails}>
              {/* Has to be work on this later */}
              Read More
            </div>
            <a href={props.link}>Go to Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
