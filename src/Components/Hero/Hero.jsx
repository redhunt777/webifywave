import { BsStars } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { AnimatedTooltip } from "../ui/Animated_Tooltip";
import { Link as ScrollLink } from "react-scroll";

const PastWork = [
  {
    id: 1,
    name: "Hyper Cosmic edits",
    designation: "Video Editor Website",
    image: "/hyper_1.png",
  },
  {
    id: 2,
    name: "Mechanical Freshers",
    designation: "Bookings Website",
    image: "/mech_logo.jpg",
  },
  {
    id: 3,
    name: "Btech Travelwala",
    designation: "Travel Website",
    image: "/LogoBtechTravelwala.png",
  },
];

const Hero = () => {
  return (
    <div className="relative home my-32 xl:my-0 xl:min-h-screen text-white flex items-center w-full ">
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
          At Webify Wave, we create high-performing, visually stunning websites
          that captivate audiences, boost engagement, and drive business growth
          with cutting-edge technology, seamless user experiences, and scalable
          digital solutions.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-start mt-6 gap-4">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <button className="w-40 bg-transparent hover:bg-primary border border-primary hover:text-white text-primary px-4 py-2 rounded-md flex items-center justify-center gap-2 group mr-8">
              Get Started
              <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                <FaArrowRightLong className="inline" />
              </span>
            </button>
          </ScrollLink>

          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={PastWork} />
            </div>
            <span className="md:text-lg text-sm">
              10+ <br />
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
