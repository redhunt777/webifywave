import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "About Us",
    url: "/about",
  },
  {
    id: 4,
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: 5,
    title: "FAQ",
    url: "/faq",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="h-20 border-b border-borderColor relative z-[1000]">
        <div className="flex flex-nowrap justify-between items-center h-full px-6">
          <a href="/">
            <h2 className="sm:text-2xl text-lg">Webcore Technologies</h2>
          </a>
          <div className="hidden lg:block">
            <ul className="flex flex-nowrap justify-between items-center h-full">
              {Links.map((item) => {
                return (
                  <li key={item.id} className="mx-4">
                    <a
                      href={item.url}
                      className="text-sm hover:text-primary uppercase"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="lg:block hidden bg-primary hover:bg-transparent border border-primary hover:text-primary text-white px-4 py-2 rounded-md">
              Get in Touch
            </button>
          </div>
          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <GiHamburgerMenu
                className={`absolute text-2xl duration-200 transform ${
                  isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
              />
              <FaPlus
                className={`absolute text-2xl duration-200 transform rotate-45 ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="lg:hidden block z-[999] w-full bg-[#202020] h-full overflow-y-scroll scrollbar-hide fixed top-0 left-0">
              <div className="flex h-20 flex-nowrap justify-between items-center px-6">
                <a href="/">
                  <h2 className="sm:text-2xl text-lg">Webcore Technologies</h2>
                </a>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  className="relative w-10 h-10 flex items-center justify-center"
                >
                  <GiHamburgerMenu
                    className={`absolute text-2xl duration-200 transform ${
                      isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
                    }`}
                  />
                  <FaPlus
                    className={`absolute text-2xl duration-200 transform rotate-45 ${
                      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  />
                </button>
              </div>
              <ul className="flex flex-col justify-between items-center mt-8">
                {Links.map((item) => {
                  return (
                    <li key={item.id} className="my-4">
                      <a
                        href={item.url}
                        className="text-lg hover:text-primary uppercase"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
