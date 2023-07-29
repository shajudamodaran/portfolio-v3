import React, { useEffect, useState } from "react";
import { Assets } from "../../../Assets/Icons";
import { useScroll } from "../../ScrollIdentifier/ScrillIdentifier";
import { Modal, Popover } from "antd";
import Footer from "../../Footer/Footer";

function IndexPageHeader() {
  const { scrollAmount, scrollDirection } = useScroll();
  const [isContactModalOpen, setContactModelOpen] = useState(false);

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

  const handleContactModal = (flag: boolean) => {
    setContactModelOpen(flag);
  };

  const content = (
    <div className="contact-list-wrap">
      <p>
        <img src={Assets.gmail} alt="mail_icon" />
        <span>contact.shajupd@gmail.com</span>
        <img className="clipboard-icon" src={Assets.copy} alt="copy_icon" />
      </p>
      <p>
        <img src={Assets.phone} alt="phone_icon" />
        <span>+91 9074810177</span>
        <img className="clipboard-icon" src={Assets.copy} alt="copy_icon" />
      </p>
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
              <a target="_blank" href="https://www.linkedin.com/in/shajupd">
                Linkedin
              </a>
            </span>
          </li>
          <li>
            {Assets.GITHUB_ICON()}{" "}
            <span>
              <a target="_blank" href="https://github.com/shajudamodaran">
                Github
              </a>
            </span>
          </li>
        </ul>

        {/* <Popover content={content} title="" trigger="click"> */}
        <button
          className="button"
          onClick={() => {
            handleContactModal(true);
          }}
        >
          <div>{Assets.CONTACT_ICON()}</div> Contact me
        </button>
        {/* </Popover> */}
      </div>

      <Modal
        open={isContactModalOpen}
        onCancel={() => {
          handleContactModal(false);
        }}
        footer={false}
        className="contact-modal"
      >
        <Footer />
      </Modal>
    </div>
  );
}

export default IndexPageHeader;
