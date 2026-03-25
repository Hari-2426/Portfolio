"use client";

import { motion } from "framer-motion";

export const TechStrip = () => {
  const techs = [
    "Java",
    "React",
    "Machine Learning",
    "SQL",
    "Full-Stack Development",
  ];

  const repeatedTechs = [...techs, ...techs, ...techs, ...techs, ...techs];

  return (
    <div className="w-full relative py-8 overflow-hidden flex flex-col items-center justify-center z-[20] mt-[-50px]">
      <div className="absolute top-0 left-0 w-[50px] md:w-[200px] h-full bg-gradient-to-r from-[#030014] to-transparent z-[10]" />
      <div className="absolute top-0 right-0 w-[50px] md:w-[200px] h-full bg-gradient-to-l from-[#030014] to-transparent z-[10]" />

      <motion.div
        className="flex space-x-12 items-center whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Slow, premium scroll
        }}
        style={{
          width: "max-content", // Important for scrolling layout
        }}
      >
        {repeatedTechs.map((tech, index) => (
          <div key={index} className="flex items-center space-x-12">
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl md:text-3xl font-bold tracking-widest uppercase"
              style={{ textShadow: "0px 0px 15px rgba(168, 85, 247, 0.4)" }}
            >
              {tech}
            </span>
            <span className="text-gray-700 text-3xl font-light"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
