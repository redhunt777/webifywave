import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { WiStars } from "react-icons/wi";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="py-20"
    >
      <div className="w-full md:w-1/2 md:px-12 px-8">
        <h1 className="text-primary text-lg mb-4 tracking-widest">
          About Us{" "}
          <span className="absolute ">
            <WiStars className="inline text-primary text-6xl lg:ml-64" />
          </span>
        </h1>
        <h2 className="text-4xl mb-4 relative">
          Meet the team behind the magic
        </h2>
      </div>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] overflow-y-auto scrollbar-hide flex justify-center relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-2xl font-bold text-slate-100"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.h3
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-kg text-slate-300"
                    >
                      {item.role}
                    </motion.h3>
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-full h-20 w-20 lg:hidden object-cover"
                  />
                </div>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </motion.div>
  );
};
