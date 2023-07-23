import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import { Assets } from "../../Assets/Icons";

function SlickComponent() {
  const slides = [
    { name: "1", stacks: [
      { name: "Gatsby JS", image: Assets.stacks.gatsby },
      { name: "Typescript", image: Assets.stacks.ts }
    ] },
    { name: "2", stacks: [{ name: "Gatsby JS", image: Assets.stacks.gatsby }] },
    { name: "3", stacks: [{ name: "Gatsby JS", image: Assets.stacks.gatsby }] },
    { name: "4", stacks: [{ name: "Gatsby JS", image: Assets.stacks.gatsby }] },
    { name: "5", stacks: [{ name: "Gatsby JS", image: Assets.stacks.gatsby }] },
    { name: "6", stacks: [{ name: "Gatsby JS", image: Assets.stacks.gatsby }] },
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
