"use client"
import React, { useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the JSON data dynamically
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div
      id="ProjectsSection" data-aos="fade-up" 
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">02.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I've Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {projects.map((project:any, index:any) => (
          <ProjectCard
            key={index}
            isImageLeft={index % 2 === 0}
            imageSrc={project.imageSrc}
            projectType={project.projectType}
            projectName={project.projectName}
            projectLink={project.projectLink}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
