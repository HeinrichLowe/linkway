import Link from "next/link";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import linkedInIcon from "@/../public/svg/linkedin.svg";
import gitHubIcon from "@/../public/svg/github.svg";
import emailIcon from "@/../public/svg/email.svg";
import newTabIcon from "@/../public/svg/new-tab.svg";
import copyIcon from "@/../public/svg/copy.svg";
import resumeIcon from "@/../public/svg/resume-cv.svg";
import downloadIcon from "@/../public/svg/download.svg";
import rightArrowIcon from "@/../public/svg/right-arrow.svg";
import { LinkButtonType } from "@/types/LinkButtonType";

export default function Home() {
  const linkList: LinkButtonType[] = [
    { startIcon: linkedInIcon, name: "LinkedIn", href: "https://www.linkedin.com/in/heinrich-lowe", endIcon: newTabIcon},
    { startIcon: gitHubIcon, name: "GitHub", href: "https://github.com/HeinrichLowe", endIcon: newTabIcon},
    { startIcon: emailIcon, name: "Email", value: "heinrich.ctt@gmail.com", func: "copy", endIcon: copyIcon},
  ]

  return (
      <>
        <div className="w-full my-2 flex flex-col items-center gap-2">
          {linkList.map((link, index) => (
            <LinkButton 
              key={index} 
              startIcon={link.startIcon} 
              href={link.href} 
              name={link.name} 
              value={link.value}
              func={link.func}
              endIcon={link.endIcon} 
            />
          ))}
        </div>

        <div className="w-90">
          <div className="w-full border-b border-stone-400"></div>
        </div>

        <div className="max-w-96 my-2 flex w-full h-12 text-[#555] font-bold rounded-full shadow-md">
          <Link 
            href={"/files/cvs/test.pdf"}
            download={"test.pdf"} 
            title="Donload my CV - EN" 
            className="w-full h-full px-4 flex justify-between items-center bg-white border border-stone-400 rounded-l-full hover:brightness-95 active:brightness-90 duration-300"
          >
            <Image src={resumeIcon} alt="Altenatives CVs" className="w-auto h-full py-3 place-self-end" />
            <span>Download my CV</span>
            <Image src={downloadIcon} alt="Altenatives CVs" className="w-auto h-full py-2 place-self-end" />
            </Link>
            
          <Link 
            href={"/resumes"} 
            title="All my CVs" 
            className="w-10 h-full px-3 bg-white border-y border-r border-stone-400 rounded-r-full hover:brightness-95 active:brightness-90 duration-300"
          >
            <Image src={rightArrowIcon} alt="Altenatives CVs" className="w-auto h-full py-3" />
          </Link>
        </div>
      </>
  );
}
