import React, { useEffect, useState } from "react";
import { Assets } from "../../../Assets/Icons";
import { useScroll } from "../../ScrollIdentifier/ScrillIdentifier";

function IndexPageHeader() {
  const { scrollAmount, scrollDirection } = useScroll();

  const checkIfHeaderBlack = (): boolean => {
    return scrollAmount >= 350;
  };

  const getHeaderClassName = () => {
    const classes = [];

    if (scrollDirection === "down") {
      classes.push("index-page-header-hidden");
    } else if (scrollDirection === "up") {
      classes.push("index-page-header-visible");
    }
    if (checkIfHeaderBlack()) {
      classes.push("index-page-header-black");
    }

    return classes.join(" ");
  };



  return (
    <div className={`index-page-header ${getHeaderClassName()}`}>
      <div className="name-area">
        <span>
          SHAJU <span>PD</span>
        </span>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="nav-area">
        <ul>
          <li>
            {Assets.LINKEDIN_ICON()} <span>Linkedin</span>
          </li>
          <li>
            {Assets.GITHUB_ICON()} <span>Github</span>
          </li>
        </ul>

        <button className="button">
          <div>{Assets.CONTACT_ICON()}</div> Contact me
        </button>
      </div>
    </div>
  );
}

export default IndexPageHeader;
