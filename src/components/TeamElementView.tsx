import Image, { StaticImageData } from "next/image";
import localFont from 'next/font/local'

interface TeamElementViewProps {
	teamName: string;
  aboutText?: string;
  backgroundImage?: StaticImageData;
  children?: React.ReactNode;
}

const airstrike = localFont({src: '../assets/fonts/airstrike.ttf'});

const TeamElementView: React.FC<TeamElementViewProps> = (props) => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        {props.backgroundImage ? <Image src={props.backgroundImage} alt="team bg"/> : <div />}
      </div>
      <div className="relative z-10 text-gray-200">
        <h1 className={airstrike.className + " text-4xl text-white"}>{props.teamName}</h1>
        <p>{props.aboutText}</p>
      </div>
    </div>
  );
};

export default TeamElementView;