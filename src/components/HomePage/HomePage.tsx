import React from "react";
import { Assets } from "../../Assets/Icons";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import MyJourney from "../MyJourney/MyJourney";
import ReactTypingEffect from "react-typing-effect";

function HomePage() {
  const services = [
    {
      name: "MERN Stack Developer",
      caption: "Projects",
      icon: "</>",
    },
    {
      name: "Freelancer",
      caption: "Hire me !",
      icon: "{ }",
    },
  ];

  const skills = [
    {
      name: "",
      items: [
        {
          name: "JavaScript",
          image: Assets.JsIcon,
        },
        {
          name: "TypeScript",
          image: Assets.TsIcon,
        },
      ],
    },
    {
      name: "Frontend",
      items: [
        {
          name: "HTML",
          image: Assets.HTML_ICON,
        },
        {
          name: "CSS",
          image: Assets.CSS_ICON,
        },
        {
          name: "Bootstrap",
          image: Assets.BOOTSTRAT_ICON,
        },
        {
          name: "Tailwind CSS",
          image: Assets.TAILWIND_ICON,
        },
        {
          name: "React.Js",
          image: Assets.REACT_ICON,
        },
        {
          name: "Gatsby.Js",
          image: Assets.GATSBY_ICON,
        },
        {
          name: "Next.Js",
          image: Assets.NEXTICON,
        },
      ],
    },
    {
      name: "Backend",
      items: [
        {
          name: "NODE JS",
          image: Assets.NODE_ICON,
        },
        {
          name: "Express JS",
          image: Assets.EXPRESS_ICON,
        },
        {
          name: "AWS",
          image: Assets.AWS_ICON,
        },
      ],
    },
    {
      name: "Designing",
      items: [
        {
          name: "Figma",
          image: Assets.FIGMA_ICON,
        },
        {
          name: "Photoshop",
          image: Assets.PS_ICON,
        },
      ],
    },
  ];

  return (
    <div className="home-page-container">
      <div className="index-gradient-page">
        <section className="banner">
          <div className="banner-name-wrap">
            <label>Hello, i am</label>
            <h2>
              {`<`}
              <ReactTypingEffect
                speed={200}
                typingDelay={1000}
                eraseDelay={300000}
                text={["Shaju PD"]}
              />
              {`/>`}
            </h2>
            <h5>MERN Stack Developer</h5>
            <div className="count-wrap">
              <div>
                <span>03</span>
                <p>
                  YEARS OF <br />
                  EXPERIENCE
                </p>
              </div>

              {/* <div>
                <span>04</span>
                <p>
                  PROJECTS COMPLETED
                  <br />
                  AS A FREELANCER
                </p>
              </div> */}
            </div>
          </div>
          <img
            className="banner-image"
            src={Assets.bannerImage}
            alt="banner-image"
          />
        </section>

        <section className="about-me">
          <div className="content-area">
            <h2 className="section-head">
              aboutMe<span>( )</span>
            </h2>
            <p>
              I am a MERN stack developer with two years of experience in
              building web applications. I have expertise in technologies like
              React, Node.js, Express, MongoDB, and AWS. I can work on both the
              front-end and back-end, allowing me to create effective and
              scalable web solutions that meet clients' requirements.
            </p>
          </div>

          <div className="visual-area">
            {services.map((eachService, key) => (
              <div className="service" key={key}>
                <div className="service-name-area">
                  <h5>{eachService?.name}</h5>
                  <span>{eachService?.caption}</span>
                </div>

                <div className="icon">{eachService?.icon}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="skills-section">
        <h2 className="section-head">
          skills<span>( )</span>
        </h2>

        {skills.map((eachSet, setKey) => (
          <div key={setKey} className="set-row">
            {eachSet?.name && (
              <span className="skill-category">{eachSet?.name}</span>
            )}

            <div className="skills-row">
              {eachSet.items.map((item, key) => (
                <div key={key}>
                  {item?.image()}
                  <span>{item?.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Projects />

      <MyJourney />

      <Footer />
    </div>
  );
}

export default HomePage;
