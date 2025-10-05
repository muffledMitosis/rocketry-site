import { ViewTransitionLink } from "./ViewTransition";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface HeaderLinkProps {
  linkContent: string;
}

const bulidLink = (name: string, href: string)=>{
  return (
    <ViewTransitionLink 
      className={`${montserrat.className} hover:opacity-100 hover:text-[#eabb5e] transition-opacity duration-200`} 
      href={href}
      viewTransitionName="nav-item"
    >
      {name.toUpperCase()}
    </ViewTransitionLink>
  );
}

export default function HeaderLink(props: HeaderLinkProps) {
  const { linkContent } = props;

  if(linkContent.includes("about")) {
    return (bulidLink(linkContent.toUpperCase(), "#about"))
  }

  if(linkContent.includes("join")) {
    return (bulidLink(linkContent.toUpperCase(), "/join"))
  }

  if(linkContent.includes("partners")) {
    return (bulidLink(linkContent.toUpperCase(), "/partners"))
  }

  return (
    <ViewTransitionLink
      className={`${montserrat.className} hover:opacity-100  hover:text-[#eabb5e] transition-opacity duration-200`}
      href={linkContent.toLowerCase().split(" ").join("")}
      viewTransitionName="nav-item"
    >
      {linkContent.toUpperCase()}
    </ViewTransitionLink>
  );
}
