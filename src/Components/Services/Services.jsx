import React from "react";
import { SiAntdesign } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaLayerGroup } from "react-icons/fa";
import { MdSettingsApplications } from "react-icons/md";
import { BiSolidCustomize } from "react-icons/bi";
import { HoverEffect } from "../ui/Card_Hover_Effect";
import { WiStars } from "react-icons/wi";

const Services = () => {
  const services = [
    {
      icon: <SiAntdesign className="text-5xl text-primary" />,
      title: "UI/UX Design",
      description:
        "Great design goes beyond aesthetics — it solves problems and enhances experiences. Our user-centric approach ensures your site is intuitive, engaging, and easy to navigate, turning visitors into loyal customers.",
    },
    {
      icon: <BiSolidCustomize className="text-5xl text-primary" />,
      title: "Custom Website Development",
      description:
        "We build responsive, high-performing websites tailored to your brand’s unique identity. Our designs captivate visitors, delivering seamless experiences across all devices.",
    },

    {
      icon: <CiShoppingCart className="text-5xl text-primary" />,
      title: "E-Commerce Solutions",
      description:
        "Unlock your online store’s full potential with secure, scalable, and user-friendly e-commerce platforms. From product showcases to smooth checkouts, we optimize every step to boost conversions and customer satisfaction.",
    },
    {
      icon: <FaLayerGroup className="text-5xl text-primary" />,
      title: "Hosting and Domain Services",
      description:
        "Get your website online with our reliable hosting and domain services. We provide secure, high-speed hosting solutions that keep your site running smoothly and your data protected.",
    },
    {
      icon: <MdSettingsApplications className="text-5xl text-primary" />,
      title: "Web Application Development",
      description:
        "Streamline operations and improve efficiency with custom web applications. Whether you need a CRM, booking system, or a bespoke solution, we develop powerful apps that meet your business needs.",
    },
    {
      icon: <MdOutlineSupportAgent className="text-5xl text-primary" />,
      title: "Ongoing Support & Maintenance",
      description:
        "Your website is a dynamic asset, and we’re here to keep it secure, updated, and running smoothly. Enjoy peace of mind with our dedicated support and maintenance services.",
    },
  ];
  return (
    <>
      <div className="mt-20 services mb-8 md:mt-16 md:mb-8 flex flex-col md:flex-row z-5">
        <div className="flex flex-col justify-center md:w-1/2 w-full md:px-12 px-8">
          <h1 className="text-primary mb-4 text-lg tracking-widest">
            Our Services{" "}
            <span className="absolute">
              <WiStars className="inline text-primary text-6xl lg:ml-64" />
            </span>{" "}
          </h1>
          <h2 className="text-4xl relative">What we do for your business? </h2>
        </div>

        <div className="md:w-1/2 w-full hidden md:block text-gray-300 xl:text-xl lg:text-lg pr-12 pl-16 flex flex-col justify-center">
          At Webify Wave, we craft digital solutions that elevate your brand,
          enhance user experience, and drive business success. Here’s how we
          empower your business.
        </div>
      </div>
      <div className="px-12">
        <HoverEffect items={services} />
      </div>
    </>
  );
};

export default Services;
