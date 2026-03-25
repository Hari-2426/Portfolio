"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SparklesIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { SOCIALS } from "@/constants";

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 px-10 w-full z-[20] relative max-w-7xl mx-auto">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Contact Me
      </h1>
      
      <div className="w-full flex flex-col md:flex-row gap-10">
        
        {/* Left Column: Contact Info */}
        <motion.div
           variants={slideInFromLeft(0.5)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="w-full md:w-1/2 flex flex-col gap-6 bg-[#030014]/50 backdrop-blur-md border border-[#2A0E61] p-10 rounded-2xl shadow-[0_0_20px_rgba(112,66,248,0.15)]"
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] max-w-max mb-2">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
          </div>
          
          <h2 className="text-3xl text-white font-bold">Let&apos;s Connect</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Feel free to reach out — I&apos;m open to software development internship opportunities and exciting collaborations!
          </p>
          
          <div className="flex items-center gap-4 mt-4 relative z-[30]">
            <div className="p-3 rounded-full bg-[#11052c] border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              <EnvelopeIcon className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email Me At</p>
              <a href="mailto:vedavyas2410@gmail.com" className="text-lg text-white font-medium hover:text-cyan-400 transition-colors">
                vedavyas2410@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-2 relative z-[30]">
            <div className="p-3 rounded-full bg-[#11052c] border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              <PhoneIcon className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Call Me At</p>
              <a href="tel:+918309443594" className="text-lg text-white font-medium hover:text-cyan-400 transition-colors">
                +91 8309443594
              </a>
            </div>
          </div>

          <div className="flex gap-4 mt-6 relative z-[30]">
            {SOCIALS.map((social) => (
               <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                className="p-3 rounded-full bg-[#11052c] border border-[#7042f88b] hover:bg-[#7042f88b] transition-all shadow-[0_0_10px_rgba(112,66,248,0.2)]"
                title={social.name}
              >
                <social.icon className="h-6 w-6 text-white" />
              </Link>
            ))}
          </div>
        </motion.div>
        
        {/* Right Column: Contact Form */}
        <motion.div
           variants={slideInFromRight(0.5)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="w-full md:w-1/2 flex flex-col bg-[#030014]/50 backdrop-blur-md border border-[#2A0E61] p-10 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)] relative z-[30]"
        >
          <form className="flex flex-col gap-6 h-full justify-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-sm font-medium">Your Name</label>
              <input type="text" id="name" placeholder="Your Name" className="bg-[#11052c] border border-[#2A0E61] focus:border-purple-500 rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-sm font-medium">Your Email</label>
              <input type="email" id="email" placeholder="your@email.com" className="bg-[#11052c] border border-[#2A0E61] focus:border-purple-500 rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="message" className="text-white text-sm font-medium">Your Message</label>
              <textarea id="message" placeholder="Hello..." rows={4} className="bg-[#11052c] border border-[#2A0E61] focus:border-purple-500 rounded-lg px-4 py-3 text-white outline-none transition-colors resize-none flex-grow"></textarea>
            </div>
            <button type="button" className="py-3 px-6 mt-2 button-primary text-center text-white cursor-pointer rounded-lg font-semibold tracking-wide">
              Send Message
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
};
