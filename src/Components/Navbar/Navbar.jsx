import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Links = [
  { id: 1, title: "Home", url: "home" },
  { id: 2, title: "Services", url: "services" },
  { id: 3, title: "About Us", url: "about" },
  { id: 4, title: "Pricing", url: "pricing" },
  { id: 5, title: "FAQ", url: "faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 border-b border-borderColor z-[1000] backdrop-filter backdrop-blur-sm bg-opacity-50	 shadow-md">
      <div className="flex justify-between items-center h-full px-6">
        {/* Logo */}
        <ScrollLink
          className="flex items-center cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
        >
          <img
            src="/logo.png"
            alt="Webify Wave"
            className="h-16 w-16 rounded-full object-cover"
          />
          <span className="text-lg ml-4 font-medium">Webify Wave</span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex space-x-6">
            {Links.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.url}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-sm hover:text-primary uppercase cursor-pointer"
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <ScrollLink to="contact" smooth={true} duration={500}>
          <button className="hidden lg:block bg-primary hover:bg-transparent border border-primary hover:text-primary text-white px-4 py-2 rounded-md">
            Get in Touch
          </button>
        </ScrollLink>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <GiHamburgerMenu
            className={`absolute text-2xl transform transition-all ${
              isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          />
          <FaPlus
            className={`absolute text-2xl transform transition-all rotate-45 ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#202020] z-[999] flex flex-col items-center justify-center">
          <ul className="flex flex-col space-y-6">
            {Links.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.url}
                  smooth={true}
                  duration={500}
                  className="text-lg text-white hover:text-primary uppercase cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
