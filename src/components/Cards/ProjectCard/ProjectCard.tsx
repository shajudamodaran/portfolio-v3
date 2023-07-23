import React from "react";

function ProjectCard(props: any) {
  return (
    <div className="project-card-wrap">
      <img
        className="project-banner"
        src={props?.data?.cover}
        alt={props?.data?.name}
      />

      <div className="project-details-wrap">
        <h2>{props?.data?.name}</h2>
        <div className="project-hashtags-list">{props?.data?.hashtags}</div>

        <p>{props?.data?.details}</p>

        <div className="stack-list-wrap">
          <span>Stacks</span>
          <div className="stack-list">
            {props?.data?.stacks.map((stack: any, key: number) => (
              <div className="stack-list-item" key={key}>
                <img src={stack?.image} alt="" />
                {stack?.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
