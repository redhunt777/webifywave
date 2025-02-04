import React from "react";
import { WiStars } from "react-icons/wi";
import { ImCross } from "react-icons/im";
import { FaCheckSquare } from "react-icons/fa";

const Pricing = () => {
  const cards = [
    {
      title: "Basic",
      price: "$100",
      description:
        "Fully Responsive 1 page website, developed in react, 10 sections",
      allowedfeatures: ["Fully Responsive", "1 page website", "10 sections"],
      notallowedfeatures: ["Developed in react", "SEO optimized"],
    },
    {
      title: "Standard",
      price: "$500",
      description:
        "Fully Responsive 5 page website, developed in react, 20 sections",
      allowedfeatures: [
        "Fully Responsive",
        "5 page website",
        "20 sections",
        "Developed in react",
      ],
      notallowedfeatures: ["SEO optimized"],
    },
    {
      title: "Premium",
      price: "$1000",
      allowedfeatures: [
        "Fully Responsive",
        "10 page website",
        "30 sections",
        "Developed in react",
        "SEO optimized",
      ],
      notallowedfeatures: [],
      description:
        "Fully Responsive 10 page website, developed in react, 30 sections",
    },
  ];

  return (
    <div className="my-16 md:mx-12 mx-8 pricing">
      {/* Heading Section */}
      <div className="w-full md:w-1/2 md:mb-16 mb-8">
        <h1 className="text-primary text-lg mb-4 tracking-widest">
          Pricing
          <span className="absolute">
            <WiStars className="inline text-primary text-6xl md:ml-64" />
          </span>
        </h1>
        <h2 className="text-4xl mb-4 relative">
          One fixed price to get your project done{" "}
        </h2>
        <p className="text-lg text-zinc-400">
          Your custom on-demand team for only a single payment
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative bg-[#202020] ${
              card.title == "Standard" && "xl:scale-110"
            } max-w-[22rem] border border-[#202020] w-full min-w-min lg:w-1/3 rounded-lg shadow-lg hover:border-primary transition-transform duration-300 ease-in-out`}
          >
            {/* Content */}
            <div className="px-6 py-12">
              <h2 className="text-2xl text-[#BABABA] mb-6">{card.title}</h2>
              <h3 className="text-3xl font-semibold mt-2">{card.price}</h3>
              <p className="text-lg text-zinc-400 mt-4">{card.description}</p>

              {/* Allowed Features */}
              <h3 className="text-sm text-zinc-400 mt-4">Feature</h3>
              {card.allowedfeatures.length > 0 && (
                <div className="mt-2">
                  <ul>
                    {card.allowedfeatures.map((feature, idx) => (
                      <li key={idx} className="text-zinc-400">
                        <FaCheckSquare className="text-green-400 inline mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {card.notallowedfeatures.length > 0 && (
                <div>
                  <ul>
                    {card.notallowedfeatures.map((feature, idx) => (
                      <li key={idx} className="text-zinc-400">
                        <ImCross className="inline text-red-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
