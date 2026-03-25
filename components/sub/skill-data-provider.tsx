"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src?: string;
  name: string;
  width?: number;
  height?: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {src ? (
        <Image src={`/skills/${src}`} width={width || 80} height={height || 80} alt={name} />
      ) : (
        <div className="px-6 py-3 border border-[#7042f88b] bg-[#030014]/50 backdrop-blur-md rounded-full text-gray-200 font-medium tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.2)] whitespace-nowrap">
          {name}
        </div>
      )}
    </motion.div>
  );
};
