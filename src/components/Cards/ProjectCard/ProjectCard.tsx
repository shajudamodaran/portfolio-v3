import React from "react";

function ProjectCard(props: any) {
  return (
    <div className="project-card-wrap">
      <img
        className="project-banner"
        src="https://ik.imagekit.io/hxburx5mi/Portfolio_assets/jj.png?updatedAt=1690009225066"
        alt=""
      />

      <div className="project-details-wrap">
        <h2>joinjobconsultancy.com</h2>
        <div className="project-hashtags-list">
          #freelance #landing_page #recruitment #seo
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          consectetur ducimus id quaerat explicabo perspiciatis repellendus
          dignissimos sapiente hic, quo minus voluptate sequi mollitia fuga
          repudiandae eligendi quam. Dolores pariatur fugit voluptate! Quos
          aperiam error aliquid temporibus doloribus odio, quis porro, deserunt
          dolores maxime odit ratione ea earum. Aliquid, laborum.
        </p>

        <div className="stack-list-wrap">
          <span>Stacks</span>
          <div className="stack-list">
            {props?.data?.stacks.map((stack: any, key: number) => (
              <div className="stack-list-item" key={key}>
                <img src={stack?.image} alt="" />
                Gatsby js
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
