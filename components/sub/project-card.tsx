import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: readonly string[];
  highlight: string;
  tech: readonly string[];
  github: string;
  live: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  highlight,
  tech,
  github,
  live,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#11052c] flex flex-col justify-between h-full group z-[20]">
      <div className="overflow-hidden h-64 w-full">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="relative p-6 flex flex-col flex-grow">
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
        
        {highlight && (
          <div className="flex items-center gap-2 mb-4 bg-purple-900/40 px-3 py-1.5 rounded border border-purple-500/50 w-max shadow-[0_0_10px_rgba(168,85,247,0.3)]">
            <span className="text-purple-300 font-medium text-sm tracking-wide">{highlight}</span>
          </div>
        )}

        <ul className="mt-2 text-gray-300 flex-grow flex flex-col gap-2 list-disc pl-5">
          {description.map((point, i) => (
            <li key={i} className="text-sm tracking-wide leading-relaxed">{point}</li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="project-footer flex flex-wrap gap-2 mt-6">
          {tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-[#030014]/50 border border-cyan-500/50 rounded-full text-xs text-cyan-300 font-semibold tracking-wide shadow-[0_0_5px_rgba(34,211,238,0.3)]">
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 pt-4 border-t border-[#2A0E61]">
          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 py-2.5 text-center text-sm font-semibold text-white border border-[#7042f88b] rounded hover:bg-[#7042f88b] transition-all shadow-[0_0_10px_rgba(112,66,248,0.2)]"
          >
            GitHub
          </Link>
          {live !== "#" ? (
             <Link
              href={live}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded hover:opacity-80 transition-all shadow-[0_0_10px_rgba(34,211,238,0.3)]"
            >
              Live Demo
            </Link>
          ) : (
            <button disabled className="flex-1 py-2.5 text-center text-sm font-semibold text-gray-500 bg-[#2A0E61]/30 rounded cursor-not-allowed border border-transparent">
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
