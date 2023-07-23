import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { JourneyType } from "../../types/common";

function VerticalTimelineComponent() {
  const journeys: JourneyType[] = [
    {
      title: "Software Engineer",
      subTitle: "",
      content:
        "Experienced web developer proficient in MERN stack, React, Node.js, and Express. Skilled in deploying and hosting applications on AWS for enhanced scalability. Proficient in WordPress for landing page creation and Gatsby for building static sites, with a strong focus on troubleshooting and delivering high-quality results.",
      icon: "",
      date: "July 2023",
      organization: "Webdura Technologies",
    },
    {
      title: "Software Engineer",
      subTitle: "",
      content:
        "Experienced web developer proficient in MERN stack, React, Node.js, and Express. Skilled in deploying and hosting applications on AWS for enhanced scalability. Proficient in WordPress for landing page creation and Gatsby for building static sites, with a strong focus on troubleshooting and delivering high-quality results.",
      icon: "",
      date: "July 2023",
      organization: "Webdura Technologies",
    },
  ];

  const theme = {
    line: "#71FF00",
  };

  return (
    <VerticalTimeline className="vertical-timeline-wrap">
      {journeys.map((each, key) => (
        <VerticalTimelineElement
          key={key}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: `7px solid  ${theme?.line}` }}
          date={each?.date}
        >
          <h3 className="vertical-timeline-element-title">{each?.title}</h3>
          <p>{each?.content}</p>
          <button className="button">{each?.organization}</button>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default VerticalTimelineComponent;
