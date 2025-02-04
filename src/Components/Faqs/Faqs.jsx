import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

const frequentlyAskQuestions = [
  {
    title: "What does a web design agency do?",
    description:
      "A web design agency grows your brand online by bringing a team of experts together to create a custom site that drives higher conversions for more leads and increased sales. A custom website starts with a strategy and planning before going into design and development. The designs need to be responsive to ensure a good user experience on both mobile and desktop devices.",
  },
  {
    title: "What is the difference between web design and web development?",
    description:
      "Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.",
  },
  {
    title: "Why is responsive web design important?",
    description:
      "A great user experience is crucial across all devices — mobile, desktop, and tablets. Mobile devices, in particular, are highly popular, with research indicating that up to 80% of your website’s visitors may access it first on a phone. First impressions are key, so it’s vital that your site looks professional and is easy to navigate on mobile. Additionally, search engines prioritize mobile-friendly design and may lower your ranking if your site isn’t optimized for mobile access.",
  },
  {
    title: "How long does it take to design a website?",
    description:
      "Designing a custom website involves several phases: strategy, planning, design, development, quality assurance, and launch. For an informational website, the process typically takes up to 3 months, allowing time for detailed design and client feedback. Larger, more complex sites with advanced features may require more than 3 months. This timeline includes thorough design of key pages and a user testing phase to ensure optimal performance.",
  },
  {
    title: "Do you offer website redesign services?",
    description:
      "Yes, we offer comprehensive website redesign services. Whether you want to refresh your site’s appearance, optimize user experience, or enhance overall performance, we can create a redesign that aligns perfectly with your brand and business objectives. Our focus is on crafting an engaging, effective online presence that delivers measurable results.",
  },
  {
    title: "Will my website be mobile-friendly?",
    description:
      "Absolutely. We prioritize mobile-friendliness because research shows that up to 80% of users may leave your site if it isn’t optimized for mobile. We don’t simply stretch desktop designs to fit mobile screens; instead, we tailor the messaging, layout, and design specifically for mobile users.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    setActiveId(activeId === index ? null : index);
  };

  return (
    <section className="relative faq py-20 md:px-12 px-8">
      <div className="flex flex-col justify-center md:w-1/2 w-full mb-12">
        <h1 className="text-primary mb-4 text-lg tracking-widest">
          Frequently Asked Question{" "}
          <span className="absolute">
            <WiStars className="inline text-primary text-6xl md:ml-52" />
          </span>{" "}
        </h1>
        <h2 className="text-4xl relative">Find Solutions in Our FAQs. </h2>
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
                  activeId === i ? "max-h-48" : "max-h-0"
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
