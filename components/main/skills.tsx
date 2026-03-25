import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  LANGUAGES,
  FRONTEND,
  BACKEND,
  CONCEPTS,
  TOOLS,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-10"
    >
      <SkillText />

      <div className="w-full flex flex-col gap-12 mt-10 z-[20] items-center">
        
        {/* Languages */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide">Languages</h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {LANGUAGES.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={(skill as any).width || 80}
                height={(skill as any).height || 80}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="flex flex-col items-center border-t border-[#2A0E61] pt-8 w-full max-w-4xl">
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide">Frontend</h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {FRONTEND.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={80}
                height={80}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center border-t border-[#2A0E61] pt-8 w-full max-w-4xl">
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide">Backend & Database</h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {BACKEND.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={80}
                height={80}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Concepts */}
        <div className="flex flex-col items-center border-t border-[#2A0E61] pt-8 w-full max-w-4xl">
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide">Concepts</h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {CONCEPTS.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={80}
                height={80}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-col items-center border-t border-[#2A0E61] pt-8 w-full max-w-4xl">
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mb-6 tracking-wide">Tools</h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {TOOLS.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={80}
                height={80}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
