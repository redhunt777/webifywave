import React from "react";
import { StickyScroll } from "../ui/card_sticky";

const content = [
  {
    title: "Ansh Khanna",
    role: "Co-Founder and COO",
    img: "/Ansh_profile.jpg",
    description:
      "Ansh Khanna, co-founder of Webify Wave, leverages his expertise in marketing and communication to craft compelling brand strategies, drive engagement, and ensure seamless client interactions for business growth. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/Ansh_profile.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ansh Khanna"
        />
      </div>
    ),
  },
  // {
  //   title: "Sarthak Singh",
  //   role: "CTO",
  //   img: "/Sarthak.jpg",
  //   description:
  //     "Sarthak Singh, CTO of Webify Wave, is a tech expert specializing in web development. With experience in building multiple high-performance websites, he ensures cutting-edge, scalable, and innovative digital solutions. ",
  //   content: (
  //     <div className="h-full w-full  flex items-center justify-center text-white">
  //       <img
  //         src="Sarthak.jpg"
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="Sarthak Singh"
  //       />
  //     </div>
  //   ),
  // },
  {
    title: "Shaurya Aditya Verma",
    role: "Co-Founder and CMO",
    img: "/Shaurya.jpg",
    description:
      "Shaurya Aditya Verma, co-founder and CMO of Webify Wave, combines technical expertise with strong communication skills to bridge the gap between innovation and user experience, delivering impactful and seamless digital solutions. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/Shaurya.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Shaurya Aditya Verma"
        />
      </div>
    ),
  },
];

const AboutUs = () => {
  return (
    <div className="w-full about pt-12 mt-12 relative">
      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default AboutUs;
