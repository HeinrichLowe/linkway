import LinkButton from "@/components/LinkButton";
import linkedIcon from "@/../public/svg/linkedin.svg";
import gitHubIcon from "@/../public/svg/github.svg";
import emailIcon from "@/../public/svg/email.svg";
import newTab from "@/../public/svg/new-tab.svg";
import copyIcon from "@/../public/svg/copy.svg";
import { LinkButtonType } from "@/types/LinkButtonType";

export default function Home() {
  const linkList: LinkButtonType[] = [
    { startIcon: linkedIcon, name: "LinkedIn", href: "https://www.linkedin.com/in/heinrich-lowe", endIcon: newTab},
    { startIcon: gitHubIcon, name: "GitHub", href: "https://github.com/HeinrichLowe", endIcon: newTab},
    { startIcon: emailIcon, name: "Email", value: "heinrich.ctt@gmail.com", func: "copy", endIcon: copyIcon},
  ]

  return (
      <>
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
      </>
  );
}
