import ArrowIcon from "../../Icons/ArrowIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
export default function Contact() {

  return (
    <div
      id="ContactSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 03.</span>
          <span className=" font-sans text-AAsecondary text-base">What&apos;s Next?</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Get In Touch</span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m Always open for any new opportunities, my inbox is open. Whether you have a question or just
        want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <div className="pt-4 flex space-x-4">
        <span>
            <a
            href={"https://github.com/dhiaaeddine16"}
            className=""
            target={"_blank"}
            rel="noreferrer"
            >
            <GithubIcon
                className={
                "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
                }
            />
            </a>
        </span>
        <span>
            <a
            href={"https://www.linkedin.com/in/dhiaa-eddine-dhiaa-eddine-a542b1343/"}
            className=""
            target={"_blank"}
            rel="noreferrer"
            >
            <LinkedinIcon
                className={
                "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
                }
            />
            </a>
        </span>
      </div>

    </div>
  );
}