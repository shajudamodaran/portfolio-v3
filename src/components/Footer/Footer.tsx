import React from "react";
import { Assets } from "../../Assets/Icons";

function Footer() {
  const footerContacts = [
    {
      name: "Linkedin",
      icon: Assets.LINKEDIN_FOOTER_ICON,
      link: "https://www.instagram.com/shaju__pd",
    },
    {
      name: "Twitter",
      icon: Assets.TWITTER_FOOTER_ICON,
      link: "https://twitter.com/ShajuDamodaran",
    },
    {
      name: "Insta",
      icon: Assets.INSTA_FOOTER_ICON,
      link: "https://www.linkedin.com/in/shajupd",
    },
  ];

  return (
    <div className="footer-ccontainer">
      <h2 className="section-head">
        heyThere<span>( )</span>
      </h2>

      <div className="footer-content">
        <h3>I’m always up for a chat</h3>

        <p>
          Pop me an email at contact.shajupd@gmail.com give me a shout on social
          media.
        </p>

        <div className="social-containet">
          {footerContacts.map((each, key) => (
            <a key={key} href={each?.link}>
              {each?.icon()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
