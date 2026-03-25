"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Background = () => {
  return (
    <section id="background" className="flex flex-col items-center justify-center py-20 px-10 w-full z-[20] relative">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Background & Achievements
      </h1>
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16">
        
        {/* left column: education */}
        <motion.div
           variants={slideInFromLeft(0.5)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide flex items-center gap-2">
            🎓 Education
          </h2>
          
          <div className="relative pl-6 border-l-2 border-[#7042f8] flex flex-col gap-10">
            <div className="relative">
              <div className="absolute w-4 h-4 bg-[#b49bff] rounded-full -left-[33px] top-1 shadow-[0_0_10px_#a855f7]" />
              <h3 className="text-xl text-white font-medium">B.Tech – Computer Science & Data Science</h3>
              <p className="text-gray-400 mt-1">G Pulla Reddy Engineering College</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-[#2A0E61]/50 border border-[#b49bff]/30 rounded-md text-cyan-400 font-semibold text-sm shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                  GPA: 8.7 / 10
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-[#b49bff] rounded-full -left-[33px] top-1 shadow-[0_0_10px_#a855f7]" />
              <h3 className="text-xl text-white font-medium">Intermediate</h3>
              <p className="text-gray-400 mt-1">Sri Venkateswara Junior College</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-[#2A0E61]/50 border border-[#b49bff]/30 rounded-md text-cyan-400 font-semibold text-sm shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                  GPA: 9.35 / 10
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-[#b49bff] rounded-full -left-[33px] top-1 shadow-[0_0_10px_#a855f7]" />
              <h3 className="text-xl text-white font-medium">10th Grade</h3>
              <p className="text-gray-400 mt-1">Sri Venkateswara High School</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-[#2A0E61]/50 border border-[#b49bff]/30 rounded-md text-cyan-400 font-semibold text-sm shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                  GPA: 9.9 / 10
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* right column: achievements and certifications */}
        <motion.div
           variants={slideInFromRight(0.5)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="w-full md:w-1/2 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide flex items-center gap-2">
              🏆 Achievements
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border border-[#2A0E61] rounded-xl bg-[#030014]/50 backdrop-blur-md hover:bg-[#2A0E61]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-4 cursor-default">
                <span className="text-3xl">🏆</span>
                <span className="text-gray-300 font-medium">1st Place – National-Level Hackathon</span>
              </div>
              <div className="p-4 border border-[#2A0E61] rounded-xl bg-[#030014]/50 backdrop-blur-md hover:bg-[#2A0E61]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-4 cursor-default">
                <span className="text-3xl">🥉</span>
                <span className="text-gray-300 font-medium">3rd Place – Vibe Coding Hackathon</span>
              </div>
              <div className="p-4 border border-[#2A0E61] rounded-xl bg-[#030014]/50 backdrop-blur-md hover:bg-[#2A0E61]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-4 cursor-default">
                <span className="text-3xl">🥉</span>
                <span className="text-gray-300 font-medium">3rd Place – Inter-College Technical Competition</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide flex items-center gap-2">
              📜 Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-[#2A0E61] rounded-xl bg-[#030014]/50 backdrop-blur-md hover:bg-[#2A0E61]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-default">
                <p className="text-cyan-400 font-semibold">Java Programming</p>
                <p className="text-gray-400 text-sm mt-1">Udemy</p>
              </div>
              <div className="p-4 border border-[#2A0E61] rounded-xl bg-[#030014]/50 backdrop-blur-md hover:bg-[#2A0E61]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-default">
                <p className="text-cyan-400 font-semibold">Java Programming</p>
                <p className="text-gray-400 text-sm mt-1">NPTEL</p>
              </div>
              <div className="p-4 border border-[#2A0E61] rounded-xl bg-[#030014]/50 backdrop-blur-md hover:bg-[#2A0E61]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-default">
                <p className="text-cyan-400 font-semibold">Java Programming</p>
                <p className="text-gray-400 text-sm mt-1">FrontLines Media (FLM)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
