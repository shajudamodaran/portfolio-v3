import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import { Assets } from "../../Assets/Icons";

function SlickComponent() {
  const slides = [
    {
      cover:"https://ik.imagekit.io/hxburx5mi/Portfolio_assets/jj.png?updatedAt=1690009225066",
      name: "Job consultancy landing page",
      hashtags: "#freelance #landingpage #recrutement #seo",
      details:"In this successful project, I created a high-converting landing page for a recruitment agency to showcase their job openings and attract potential candidates. The page was thoughtfully designed with SEO in mind, making it easier for people to find on search engines, resulting in improved lead generation and the attraction of higher-quality candidates.",
      stacks: [
        { name: "Gatsby JS", image: Assets.stacks.gatsby },
        { name: "Wordpress", image: Assets.stacks.wp },
      ],
    },
    {
      cover:"https://ik.imagekit.io/hxburx5mi/Portfolio_assets/iibwb.png?updatedAt=1690121711626",
      name: "Work management app",
      hashtags: "#freelance #custom_webapp #business #responsive",
      details:"I created a task/work management app for my client's business firm to help them better organize their tasks. Before, they faced difficulties in coordinating tasks, but now with this app, they can manage everything more efficiently. Plus, the app is responsive, so they can use it from anywhere, even when they're at home.",
      stacks: [
        { name: "Next.js", image: Assets.stacks.next },
        { name: "Express.js", image: Assets.stacks.express },
        { name: "AWS", image: Assets.stacks.aws },
        { name: "MongoDB", image: Assets.stacks.mongodb },
      ],
    },
    {
      cover:"https://ik.imagekit.io/hxburx5mi/Portfolio_assets/gp.png?updatedAt=1690121711580",
      name: "Online billing webapp",
      hashtags: "#freelancer #custom_webapp #business #responsive #billing",
      details:"cutting-edge cloud-based billing system for my esteemed client, empowering them to effortlessly generate invoices by simply selecting items within a PDF file format. With this innovative solution, their billing process has been revolutionized, saving time and enhancing overall efficiency in managing financial transactions.",
      stacks: [
        { name: "React.js", image: Assets.stacks.react },
        { name: "Express.js", image: Assets.stacks.express },
        { name: "AWS", image: Assets.stacks.aws },
        { name: "MongoDB", image: Assets.stacks.mongodb },
      ],
    },
    {
      cover:"https://ik.imagekit.io/hxburx5mi/Portfolio_assets/ticket.png?updatedAt=1690121711768",
      name: "QR Ticket management system",
      hashtags: "#career #backend #business #google_sheet #event",
      details:"As a part of my work in the current organization, I developed a Ticket Management System - a powerful back-end API that seamlessly reads data from Google Sheets and generates QR code tickets, efficiently sending them to users via WhatsApp or email. This innovative solution revolutionizes ticketing processes, streamlining communication and enhancing user experience.",
      stacks: [
        { name: "Express.js", image: Assets.stacks.express },
        { name: "Typescript", image: Assets.stacks.ts },
        { name: "AWS", image: Assets.stacks.aws },
        { name: "MongoDB", image: Assets.stacks.mongodb },
      ],
    },
    // Add more projects here
  ];

  const settings = {
    className: "slick-slider-wrap",
    infinite: false,
    centerMode: false,
    slidesToShow: 1, // Set to the total number of slides
    speed: 500,
    arrows: true,
    dots: false,
  };

  return (
    <Slider {...settings}>
      {slides.map((eachSlide, key) => (
        <div className="slide-container" key={key}>
          <ProjectCard data={eachSlide} />
        </div>
      ))}
    </Slider>
  );
}

export default SlickComponent;
