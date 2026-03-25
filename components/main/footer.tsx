import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-6 md:mb-0"
            >
              <h3 className="font-bold text-[16px] border-b border-[#7042f861] pb-1 mb-2">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => {
                const isInternal = link.startsWith("#");
                return (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target={isInternal ? "_self" : "_blank"}
                    rel={isInternal ? "" : "noreferrer noopener"}
                    className="flex flex-row items-center my-[10px] hover:text-cyan-400 transition-colors cursor-pointer group"
                  >
                    {Icon && <Icon className="group-hover:scale-110 transition-transform" />}
                    <span className="text-[15px] ml-[2px]">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; C V Hari Hara Nandan {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
