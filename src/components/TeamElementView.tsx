import Image, { StaticImageData } from "next/image";

import { fontAirstrike } from "@/lib/localfonts";

interface TeamElementViewProps {
	teamName: string;
  aboutText?: string;
  backgroundImage?: StaticImageData;
  children?: React.ReactNode;
}

const TeamElementView: React.FC<TeamElementViewProps> = (props) => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        {props.backgroundImage ? <Image src={props.backgroundImage} alt="team bg" objectPosition="center" objectFit="cover" fill/> : <div />}
      </div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/90 md:from-black/60 to-transparent to-75% md:to-50%">

      </div>
      <div className="relative z-10 text-gray-200 md:pt-8 p-8 pt-16">
        <h1 className={fontAirstrike.className + " text-4xl text-white drop-shadow-2xl"}>{props.teamName}</h1>
        <p className="w-2/3 md:w-1/3 mt-4">{props.aboutText}</p>
      </div>
    </div>
  );
};

export default TeamElementView;