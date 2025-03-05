import React from "react";
import { ParallaxScroll } from "../ui/Parallax";
import { WiStars } from "react-icons/wi";
import { img } from "framer-motion/client";

const images = [
  "img1.png",
  "img5.png",
  "img10.png",
  "img2.png",
  "img9.png",
  "img4.png",
  "img12.png",
  "img15.png",
  "img7.png",
  "img3.png",
  "img14.png",
  "img8.png",
  "img13.png",
  "img11.png",
  "img6.png",
];

const Projects = () => {
  return (
    <div className="my-16 md:mx-12 mx-8">
      {/* Heading Section */}
      <div className="mt-16 pb-4 flex flex-col md:flex-row">
        <div className="flex flex-col justify-center md:w-1/2 w-full ">
          <h1 className="text-primary mb-4 text-lg tracking-widest">
            Featured Work{" "}
            <span className="absolute">
              <WiStars className="inline text-primary text-6xl lg:ml-64" />
            </span>{" "}
          </h1>
          <h2 className="text-4xl relative">
            Featured work things we've made.{" "}
          </h2>
        </div>

        <div className="md:w-1/2 w-full hidden md:block text-gray-300 text-xl pr-12 pl-16 flex flex-col justify-center">
          We have worked on a variety of projects, ranging from simple websites
          to complex web applications. Our goal is to provide our clients with
          high-quality software that meets their needs and exceeds their
          expectations.
        </div>
      </div>
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Projects;
