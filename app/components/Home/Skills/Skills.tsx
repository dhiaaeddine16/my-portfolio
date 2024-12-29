import React from "react";
import { Icon } from "@iconify/react";
import ArrowIcon from "../../Icons/ArrowIcon";
import DisplayLottie from "./DisplayLottie";
import emoji from "react-easy-emoji";

export const skillsSection: any = {
  data: [
    {
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("Building responsive websites using Next.js, React.js"),
        emoji("Full-stack web development with Node.js, Django and React.js"),
        emoji("Building RESTful APIs in Django Framework"),
        emoji("Database design and management using MongoDB"),
        emoji("Developing AI-driven applications with deep learning"),
        emoji("Working with large language models (LLMs)"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "vscode-icons:file-type-mongo",
        },        
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Vercel",
          iconifyTag: "logos:vercel-icon",
        },
        
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

const Skills = () => {
  return (
    <div id="skillsSection" data-aos="fade-up" 
        className="flex flex-col w-full items-center bg-AAprimary px-4" >
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
          <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
          <div className="flex-none flex-row space-x-2 items-center pr-2">
            <span className="text-AAsecondary font-sans text-sm sm:text-xl">01.</span>
            <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
                  Skills
            </span>
          </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* // ? Skills Details */}
      <div className="w-full flex flex-col mt-8 sm:mt-16 sm:px-0 md:px-10 lg:px-20">
        {skillsSection.data.map((section: any, index: any) => (
          <div key={index} className="w-full flex flex-col md:flex-row items-center">
            <div className="hidden lg:flex relative w-full lg:w-1/12 justify-center">
            </div>
            {/* // ? Lottie Animation */}
            <div className="relative w-full md:w-6/12 lg:w-5/12 flex justify-center">
              <DisplayLottie animationPath={section.lottieAnimationFile} />
            </div>

            {/* // ? Skills and Software Skills */}
            <div className="w-full md:w-6/12 lg:w-6/12 flex flex-col space-y-1 items-start">
              {/* Skills List */}
              <div className="space-y-1">
                {section.skills.map((skill: any, i: any) => (
                  <div key={i} className="text-gray-400 flex items-center">
                    <ArrowIcon className="h-3 w-3 text-AAsecondary inline-block mr-2" />
                    <span className="text-sm sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Software Skills */}
              <h3 className="font-bold text-AAsecondary text-lg sm:text-xl p-5">Technologies</h3>
              <div className="grid md:grid-cols-6 grid-cols-4  gap-6 justify-center">
                {section.softwareSkills.map((skill: any, i: any) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center space-y-1 group hover:scale-105 transition-transform"
                  >
                    <div
                      className="icon icon-lg flex justify-center items-center w-16 h-16 bg-gray-200 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.6)] "
                      id={skill.skillName.replace(/\s/g, "")}
                    >
                      <Icon icon={skill.iconifyTag} className="text-AAprimary text-3xl" />
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">{skill.skillName}</div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
