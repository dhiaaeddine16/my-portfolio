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
    <div id="skillsSection" data-aos="fade-up" className="snap-start flex flex-col items-center bg-AAprimary  lg:px-60" >
      <div className="flexflex-row items-center px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
          <div className="flex flex-row items-center mrx-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Skills
            </span>
          </div>
        
      </div>

      {/* // ? Skills Details */}
      <div className="w-full flex flex-col mt-8 sm:mt-16 sm:px-0 md:px-10 lg:px-20">
        {skillsSection.data.map((section: any, index: any) => (
          <div key={index} className="w-full flex flex-col md:flex-row items-center">
            {/* // ? Lottie Animation */}
            <div className="relative w-full md:w-5/12 flex justify-center mb-8 md:mb-0">
              <DisplayLottie animationPath={section.lottieAnimationFile} />
            </div>

            {/* // ? Skills and Software Skills */}
            <div className="w-full md:w-6/12  flex flex-col space-y-1 items-start">
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
