import React, { useEffect, useState } from "react";
import { Assets } from "../../../Assets/Icons";
import { useScroll } from "../../ScrollIdentifier/ScrillIdentifier";
import { Popover } from "antd";

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

  const content = (
    <div>
      <p>contact.shajupd@gmail.com</p>
      <p>+91 9074810177</p>
    </div>
  );

  return (
    <div className={`index-page-header ${getHeaderClassName()}`}>
      <div className="name-area">
        <span>
          SHAJU <span>PD</span>
        </span>
        {/* <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul> */}
      </div>
      <div className="nav-area">
        <ul>
          <li>
            {Assets.LINKEDIN_ICON()}{" "}
            <span>
              <a href="https://www.linkedin.com/in/shajupd">Linkedin</a>
            </span>
          </li>
          <li>
            {Assets.GITHUB_ICON()}{" "}
            <span>
              <a href="https://github.com/shajudamodaran">Github</a>
            </span>
          </li>
        </ul>

        <Popover content={content} title="" trigger="click">
          <button className="button">
            <div>{Assets.CONTACT_ICON()}</div> Contact me
          </button>
        </Popover>
      </div>
    </div>
  );
}

export default IndexPageHeader;
