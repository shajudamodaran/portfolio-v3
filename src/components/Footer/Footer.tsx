import React from "react";
import { Assets } from "../../Assets/Icons";

function Footer() {
  const footerContacts = [
    {
      name: "Mail",
      icon: Assets.MAIL_FOOTER_ICON,
      link: "mailto:contact.shajupd@gmail.com",
    },
    {
      name: "Linkedin",
      icon: Assets.LINKEDIN_FOOTER_ICON,
      link: "https://www.linkedin.com/in/shajupd",
    },
    {
      name: "Twitter",
      icon: Assets.TWITTER_FOOTER_ICON,
      link: "https://twitter.com/ShajuDamodaran",
    },
    {
      name: "Insta",
      icon: Assets.INSTA_FOOTER_ICON,
      link: "https://www.instagram.com/shaju__pd",
    },
    {
      name: "Whatsapp",
      icon: Assets.WHATSAPP_FOOTER_ICON,
      link: "https://wa.link/i3epgz",
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
          Pop me an email at{" "}
          <a target="_blank" href="mailto:contact.shajupd@gmail.com">
            contact.shajupd@gmail.com
          </a>{" "}
          give me a shout on social media.
        </p>

        <div className="social-containet">
          {footerContacts.map((each, key) => (
            <a target="_blank" key={key} href={each?.link}>
              {each?.icon()}
            </a>
          ))}

          {/* <p className="footer-contact-wrap">
            <img className="footer-dial-icon" src={Assets.phone} alt="" />
            <a href="tel:+919074810177">+91 9074810177</a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
