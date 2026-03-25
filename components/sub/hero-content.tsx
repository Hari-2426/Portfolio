"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["React Developer", "Java Developer", "Hackathon Winner"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start items-center lg:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            C V Hari Hara Nandan
          </h1>
        </motion.div>

        <motion.div
           variants={slideInFromTop}
           className="Welcome-box py-[8px] px-[12px] border border-[#a855f7] bg-[#a855f7]/10 opacity-100 mt-2 max-w-fit shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        >
          <SparklesIcon className="text-[#e8d9ff] mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[13px] md:text-[14px] font-semibold text-white">
            Open to Software Development Internship Opportunities
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto min-h-[120px] md:min-h-[160px]"
        >
          <span>
            Full-Stack Developer <span className="text-gray-500 font-light hidden md:inline">|</span>{" "}
            <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {text}
              <span className="animate-pulse text-white">|</span>
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Building scalable web applications and ML-powered solutions.<br />
          <span className="text-purple-400 font-semibold mt-1 inline-block">🏆 National-Level Hackathon Winner</span>
          <br /><br />
          Computer Science and Data Science student with strong foundations in Java and React. Passionate about solving real-world problems using web development and machine learning.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row flex-wrap justify-center lg:justify-start gap-4 mt-2"
        >
          <a
            href="#projects"
            className="py-2 px-4 md:px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm md:text-base"
          >
            View Projects
          </a>
          <a
            href="/C%20V%20Hari%20Hara%20Nandan%20Resume.pdf"
            target="_blank"
            className="py-2 px-4 md:px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm md:text-base"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="py-2 px-4 md:px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm md:text-base"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center group">
          {/* Main glowing aurora/orb */}
          <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-purple-800 via-transparent to-cyan-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse mix-blend-screen" />
          {/* Core planet / User Photo */}
          <div className="absolute w-[53%] h-[53%] rounded-full shadow-[0_0_40px_rgba(168,85,247,0.4)] border-[3px] border-[#a855f7]/40 overflow-hidden z-10 flex justify-center items-center backdrop-blur-md">
            <Image
              src="/nandan-photo.jpg"
              alt="C V Hari Hara Nandan"
              width={350}
              height={350}
              className="object-cover w-full h-full p-2 rounded-full"
              priority
            />
          </div>
          {/* Subtle orbital rings */}
          <div className="absolute w-[100%] h-[100%] rounded-full border border-t-purple-500/30 border-b-cyan-500/30 border-l-transparent border-r-transparent animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-[85%] h-[85%] rounded-full border border-t-cyan-500/30 border-b-purple-500/30 border-l-transparent border-r-transparent animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute w-[120%] h-[120%] rounded-full border border-purple-500/10 rotate-45 border-dashed animate-[spin_20s_linear_infinite]" />
        </div>
      </motion.div>
    </motion.div>
  );
};
