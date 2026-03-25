'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.link.substring(1)).concat(["contact"]);
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
            current = section;
            break;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/50 backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <Link href="#about" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={70} height={70} draggable={false} className="cursor-pointer" />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300 tracking-wide text-lg">C V Hari Hara Nandan</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className={`cursor-pointer transition-all px-3 py-1 rounded-md ${
                  activeSection === link.link.substring(1) 
                    ? "text-cyan-400 font-semibold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" 
                    : "hover:text-[#b49bff]"
                }`}
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="#contact"
              className={`cursor-pointer transition-all px-3 py-1 rounded-md ${
                  activeSection === "contact" 
                    ? "text-cyan-400 font-semibold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" 
                    : "hover:text-[#b49bff]"
                }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
              <Icon className="h-6 w-6 text-white hover:text-cyan-400 animate-pulse transition-colors" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl p-5 flex flex-col items-center text-gray-300 md:hidden border-b border-[#2A0E61]">
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className={`cursor-pointer transition w-full text-center py-2 ${
                  activeSection === link.link.substring(1) 
                    ? "text-cyan-400 font-semibold text-lg" 
                    : "hover:text-[#b49bff]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
             <Link
                href="#contact"
                className={`cursor-pointer transition w-full text-center py-2 ${
                  activeSection === "contact" 
                    ? "text-cyan-400 font-semibold text-lg" 
                    : "hover:text-[#b49bff]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
          </div>
          <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-[#2A0E61] w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
                <Icon className="h-8 w-8 text-white hover:text-cyan-400" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};