import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-12 md:px-12 px-8 border-t border-t-[#666666]">
      <div className="flex w-full gap-4 flex-wrap items-start justify-between w-full text-white">
        <div className="flex flex-col md:w-2/5 w-full">
          <div className="flex items-end gap-2">
            <img
              src="/logo.png"
              alt="webify wave"
              className="w-16 h-16 object-cover"
            />
            <h1 className="text-2xl md:pb-4 text-primary">Webify Wave</h1>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Webify Wave is a dynamic web development agency creating innovative,
            high-performance websites and digital solutions. We specialize in
            custom designs, e-commerce and web apps.
          </p>
        </div>
        <div className="flex flex-col md:gap-4 mt-4">
          <h1 className="text-primary">Let's Connect</h1>
          <p className="text-gray-400 text-sm">
            Bit Mesra <br />
            Ranchi- 835215
          </p>
          <p className="text-gray-400 text-sm">webifywave@gmail.com</p>
          <p className="text-gray-400 text-sm">(91+) 8368747835</p>
        </div>
        <div className="flex flex-col md:gap-4 mt-4">
          <h1 className="text-primary">Link</h1>
          <p className="text-gray-400 text-sm">Testimonial</p>
          <p className="text-gray-400 text-sm">Pricing</p>
          <p className="text-gray-400 text-sm">Why Us?</p>
        </div>
        <div className="flex flex-col md:gap-4 mt-4">
          <h1 className="text-primary">Follow Us</h1>
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <FaInstagramSquare />
            </div>
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <FaFacebookSquare />
            </div>
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <FaTwitterSquare />
            </div>
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-12">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Webifywave. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
