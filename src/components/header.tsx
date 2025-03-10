import { headerLinks } from "@/data/header-content";
import HeaderLink from "./header-link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 bg-rock-blue-dark">
      <div className="flex flex-row justify-between">
        {/* Logo */}
        <div>
          <Image 
            src="/assets/images/LogoGoldLong.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>

        {/* Link List */}
        <div className="flex flex-row items-center space-x-4 text-white">
          {headerLinks.map((content) => (
            <HeaderLink key={content} linkContent={content} />
          ))}
        </div>
      </div>
    </header>
  );
}
