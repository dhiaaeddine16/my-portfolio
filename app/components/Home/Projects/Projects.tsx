"use client";
import { useEffect, useState } from "react";
import ProjectComp, { Project } from "./Project";




// Projects Parent Component
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch projects data from the JSON file
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/data/projects.json"); // Path to the JSON file
      const data: Project[] = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div
      id="ProjectsSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 03.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* Map through projects data */}
        {projects.map((project, index) => (
          <ProjectComp
            key={index}
            image={project.image}
            url={project.url}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
}
