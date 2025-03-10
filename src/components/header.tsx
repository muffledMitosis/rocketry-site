import { headerLinks } from "@/data/header-content";
import HeaderLink from "./header-link";

export default function Header() {
  return (
    <header className="p-4 bg-rock-blue-dark">
      <div className="flex flex-row">
        {/* Link List */}
        <div className="flex flex-row space-x-4 text-white">
          {headerLinks.map((content) => (
            <HeaderLink key={content} linkContent={content} />
          ))}
        </div>
      </div>
    </header>
  );
}
