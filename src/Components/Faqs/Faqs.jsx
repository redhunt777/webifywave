import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

const frequentlyAskQuestions = [
  {
    title: "How many members can form a team?",
    description: "Well, add the content here.",
  },
  {
    title: "What are the key responsibilities of a team leader?",
    description: "There are a few.",
  },
  {
    title: "How can teams effectively resolve conflicts?",
    description: "Let it burn.",
  },
  {
    title: "What are the benefits of teamwork in a project?",
    description: "You don't need to work.",
  },
  {
    title: "How do teams improve communication and collaboration?",
    description: "Silence sometimes is the best way.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    setActiveId(activeId === index ? null : index);
  };

  return (
    <section className="relative py-20 md:px-12 px-8">
      <div className="flex flex-col justify-center md:w-1/2 w-full mb-12">
        <h1 className="text-primary mb-4 text-lg tracking-widest">
          Frequently Asked Question{" "}
          <span className="absolute">
            <WiStars className="inline text-primary text-6xl md:ml-52" />
          </span>{" "}
        </h1>
        <h2 className="text-4xl relative">Featured work things we've made. </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[600px] h-max space-y-4">
          {frequentlyAskQuestions.map((item, i) => (
            <div
              key={i}
              className={`border rounded-lg overflow-hidden ${
                activeId === i ? "bg-[#666666]" : "bg-zinc-900"
              }`}
            >
              <div
                className={`px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#202020] transition-colors`}
                onClick={() => togglerFunction(i)}
              >
                <p className="flex-1 text-[#EEEEEE]">{item.title}</p>
                <span
                  className={`text-[#EEEEEE] transform transition-transform duration-300 ${
                    activeId === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaAngleDown />
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeId === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-4 py-3 bg-zinc-900 text-[#EEEEEE]">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
