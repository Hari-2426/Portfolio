"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const About = () => {
  return (
    <section id="about" className="flex flex-col xl:flex-row items-center justify-center gap-10 px-10 md:px-20 py-20 w-full relative z-[20]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}
        className="w-full xl:w-1/2 flex flex-col gap-5 justify-center text-start block max-w-[700px]"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] max-w-max">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">About Me</h1>
        </div>
        
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Passionate Developer
        </h1>
        
        <p className="text-lg text-gray-400 max-w-[600px] leading-relaxed">
          I am a Computer Science and Data Science student with strong foundations in Java and React.
          <br /><br />
          I enjoy building scalable applications and integrating machine learning models to solve real-world problems.
          <br /><br />
          Currently focused on backend development and system design.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight(0.5)}
        className="w-full xl:w-1/2 flex flex-col gap-5 justify-center text-start p-8 md:p-10 border border-[#2A0E61] rounded-2xl bg-[#030014]/50 backdrop-blur-md max-w-[700px]"
      >
        <h1 className="text-[30px] font-semibold text-white mb-4">
          Why Hire Me?
        </h1>
        
        <ul className="flex flex-col gap-4 text-gray-300 text-lg">
          <li className="flex items-center gap-4">
            <SparklesIcon className="text-cyan-400 h-6 w-6 shrink-0" />
            <span>Strong foundation in Java, OOP, and Data Structures</span>
          </li>
          <li className="flex items-center gap-4">
            <SparklesIcon className="text-cyan-400 h-6 w-6 shrink-0" />
            <span>Experience building ML-integrated applications</span>
          </li>
          <li className="flex items-center gap-4">
            <SparklesIcon className="text-purple-400 h-6 w-6 shrink-0" />
            <span>National-level hackathon winner</span>
          </li>
          <li className="flex items-center gap-4">
            <SparklesIcon className="text-cyan-400 h-6 w-6 shrink-0" />
            <span>Full-stack development experience (React + Java)</span>
          </li>
          <li className="flex items-center gap-4">
            <SparklesIcon className="text-purple-400 h-6 w-6 shrink-0" />
            <span>Fast learner with AI-assisted development experience</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};
