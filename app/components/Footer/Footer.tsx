import React from "react";
import GithubIcon from "../Icons/GithubIcon";


export default function Footer() {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      <a href={"https://github.com/dhiaaeddine16/my-portfolio"} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by FASSI Dhiaa Eddine
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className={"w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"} />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}