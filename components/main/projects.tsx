import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 z-[20] relative"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      
      <div className="h-full w-full max-w-6xl flex flex-col md:flex-row gap-10 px-10 items-stretch">
        {PROJECTS.map((project) => (
          <div key={project.title} className="flex-1">
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              highlight={project.highlight}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
