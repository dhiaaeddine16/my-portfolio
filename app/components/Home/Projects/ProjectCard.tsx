import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";


// Define the PropTypes for the ProjectCard component to ensure type safety and better documentation
interface ProjectCardProps {
  isImageLeft: boolean;
  imageSrc: string;
  projectType: string;
  projectName: string;
  projectLink: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  isInInitiation?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  isImageLeft,
  imageSrc,
  projectType,
  projectName,
  projectLink,
  description,
  technologies,
  githubLink,
}) => {
  const imageColStart = isImageLeft ? "col-start-6" : "";
  const textColStart = isImageLeft ? "" : "xl:col-start-7 col-start-5";
  const textAlignment = isImageLeft ? "items-start md:justify-start text-left md:text-left" : "md:items-end md:justify-end text-left md:text-right";

  return (
    <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
      {/* Left image */}
      <div
        className={`hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center`}
      >
        <div className={`relative rounded w-full h-full ${imageColStart} col-span-7 `}>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <div
              className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
            ></div>
          </a>
          <Img src={imageSrc} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
        </div>
      </div>

      {/* right Content */}
      <div className={`md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center`}>
        {/* background for text in mobile responsive */}
        <div className={`absolute w-full h-full bg-opacity-70 z-0`}>
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
            <Img src={imageSrc} alt={"Project Screen shot"} className={`w-full h-full`} />
          </div>
        </div>

        <div
          className={`px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6
            col-span-8 flex flex-col ${textAlignment}  space-y-3 ${textColStart} `}
        >
          <div className={`flex flex-col space-y-1  z-10 ${isImageLeft ? "" : "md:items-end"}`}>
            <span className="text-AAsecondary text-base">{projectType}</span>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                {projectName}
              </span>
            </a>
          </div>
          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
          <div  className="text-gray-300 md:text-gray-400"
            dangerouslySetInnerHTML={{ __html: description }}
            >       
          </div>
          </div>
          <ul
            className={`flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 ${isImageLeft ? "md:justify-start" : "md:justify-end"}`}
          >
            {technologies.map((tech, index) => (
              <span className="pr-4 z-10" key={index}>
                {tech}
              </span>
            ))}
          </ul>
          <div className={`z-10 flex fle-row space-x-5 ${isImageLeft ? "" : "md:justify-end"}`}>
            {githubLink && <GithubIcon link={githubLink} />}
            <a href={projectLink} target={"_blank"} rel="noreferrer">
              <ExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;