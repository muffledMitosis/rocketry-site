import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface HeaderLinkProps {
  linkContent: string;
}

const bulidLink = (name: string, href: string)=>{
  return (
    <Link className={montserrat.className} href={href}>
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

  return (
    <Link
      className={montserrat.className}
      href={linkContent.toLowerCase().split(" ").join("")}
    >
      {linkContent.toUpperCase()}
    </Link>
  );
}
