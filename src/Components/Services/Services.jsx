import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { ImTarget } from "react-icons/im";
import { FaLayerGroup } from "react-icons/fa";
import { MdVideoFile } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { HoverEffect } from "../ui/Card_Hover_Effect";
import { WiStars } from "react-icons/wi";

const Services = () => {
  const services = [
    {
      icon: <RiShoppingBag3Fill className="text-5xl text-primary" />,
      title: "Branding",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
    {
      icon: <TiMessages className="text-5xl text-primary" />,
      title: "Communication",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
    {
      icon: <ImTarget className="text-5xl text-primary" />,
      title: "Marketing",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
    {
      icon: <FaLayerGroup className="text-5xl text-primary" />,
      title: "Digital Marketing",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
    {
      icon: <MdVideoFile className="text-5xl text-primary" />,
      title: "Motion",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
    {
      icon: <LuPackage className="text-5xl text-primary" />,
      title: "Packaging",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
  ];
  return (
    <>
      <div className="mt-20 mb-8 md:mt-16 md:mb-8 flex flex-col md:flex-row z-5">
        <div className="flex flex-col justify-center md:w-1/2 w-full md:px-12 px-8">
          <h1 className="text-primary mb-4 text-lg tracking-widest">
            Our Services{" "}
            <span className="absolute">
              <WiStars className="inline text-primary text-6xl lg:ml-64 lg:-mt-12" />
            </span>{" "}
          </h1>
          <h2 className="text-4xl relative">What we do for your business? </h2>
        </div>

        <div className="md:w-1/2 w-full hidden md:block text-gray-300 xl:text-xl lg:text-lg pr-12 pl-16 flex flex-col justify-center">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur.
        </div>
      </div>
      <div className="px-12">
        <HoverEffect items={services} />
      </div>
    </>
  );
};

export default Services;
