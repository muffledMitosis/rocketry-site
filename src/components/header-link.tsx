import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface HeaderLinkProps {
  linkContent: string;
}

export default function HeaderLink(props: HeaderLinkProps) {
  const { linkContent } = props;
  console.log(linkContent);
  return (
    <Link
      className={montserrat.className}
      href={linkContent.toLowerCase().split(" ").join("")}
    >
      {linkContent.toUpperCase()}
    </Link>
  );
}
