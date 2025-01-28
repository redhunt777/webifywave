import { BsStars } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { AnimatedTooltip } from "../ui/Animated_Tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://picsum.photos/200/300",
  },
];

const Hero = () => {
  return (
    <div className="relative my-12 xl:my-0 xl:min-h-[calc(100vh-5rem)] text-white flex items-center w-full ">
      <div className="lg:ml-40 lg:w-[65%] w-4/5 mx-8">
        <h1 className="text-4xl md:text-7xl font-bold relative tracking-wide md:mr-24">
          We develop{" "}
          <span className="pl-2 absolute">
            {" "}
            <BsStars className="inline text-primary" />
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-[#08767D] bg-clip-text text-transparent">
            amazing
          </span>{" "}
          website for your business
        </h1>
        <p className="lg:text-lg text-xs mt-6 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          deserunt doloribus repudiandae sunt, et quas laudantium officiis
          accusamus harum, nostrum quasi quos consectetur. Molestias repudiandae
          libero velit voluptatem. Atque, cumque.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-start mt-6 gap-4">
          <button className="w-40 bg-transparent hover:bg-primary border border-primary hover:text-white text-primary px-4 py-2 rounded-md flex items-center justify-center gap-2 group mr-8">
            Get Started
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              <FaArrowRightLong className="inline" />
            </span>
          </button>

          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={people} />
            </div>
            <span className="md:text-lg text-sm">
              30+ <br />
              <span className="md:text-sm text-sm text-gray-300">
                Satisfied Clients
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
