import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface HeaderLinkProps {
  linkContent: string;
}

const bulidLink = (name: string, href: string)=>{
  return (
    <Link className={`${montserrat.className} text-white hover:text-blue-400 transition-colors duration-200`} href={href}>
      {name.toUpperCase()}
    </Link>
  );
}

export default function HeaderLink(props: HeaderLinkProps) {
  const { linkContent } = props;
  console.log(linkContent);

  if(linkContent.includes("about")) {
    return (bulidLink(linkContent.toUpperCase(), "#about"))
  }

  if(linkContent.includes("join")) {
    return (bulidLink(linkContent.toUpperCase(), "#join"))
  }

  if(linkContent.includes("sponsors")) {
    return (bulidLink(linkContent.toUpperCase(), "/sponsors"))
  }

  return (
    <Link
      className={`${montserrat.className} text-white hover:text-blue-400 transition-colors duration-200`}
      href={linkContent.toLowerCase().split(" ").join("")}
    >
      {linkContent.toUpperCase()}
    </Link>
  );
}
