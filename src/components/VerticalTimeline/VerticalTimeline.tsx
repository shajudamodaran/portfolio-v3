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
        "Experienced MERN stack developer with a focus on React and Node.js, proficient in AWS deployment. Skilled in building web applications, creating landing pages with WordPress, and developing static sites using Gatsby. Dedicated to delivering high-quality, user-friendly solutions tailored to client needs.",
      icon: "",
      date: "Aug-2020 - current",
      organization: "Webdura Technologies",
    },
    {
      title: "MIS Executive",
      subTitle: "",
      content:
        "An MIS executive in DDUGKY is responsible for managing and analyzing data related to the program's operations and outcomes, and providing insights and recommendations to support decision-making and improve performance.",
      icon: "",
      date: "Dec 2020 - Aug 2021",
      organization: "Rajadhani institute Eng & Tec",
    },
    {
      title: "Project Development Officer",
      subTitle: "",
      content:
        " Overseeing and coordinating various aspects of the projects, including planning, implementation, monitoring, and evaluation, as well as ensuring compliance with the relevant regulations and guidelines.",
      icon: "",
      date: "May 2018 - Dec 2020",
      organization: "IIB Education Pvt.Ltd",
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
