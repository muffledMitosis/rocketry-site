import JoinSection from "@/components/join";
import AboutSection from "@/sections/About";
import HeroSection from "@/sections/Hero";
import LatestVehicleSection from "@/sections/LatestVehicle";
import FullPageScroll from "@/components/FullPageScroll";
import HeroBackground from "@/components/backgrounds/HeroBackground";
import SolsticeBackground from "@/components/backgrounds/SolsticeBackground";
import AboutBackground from "@/components/backgrounds/AboutBackground";
import JoinBackground from "@/components/backgrounds/JoinBackground";
// import Sponsors from "@/sections/Sponsors";

export default function Home() {
  const backgroundComponents = [
    <HeroBackground key="hero" />,
    <SolsticeBackground key="solstice" />,
    <AboutBackground key="about" />,
    <JoinBackground key="join" />,
  ];

  return (
    <FullPageScroll backgroundComponents={backgroundComponents}>
      <HeroSection/>
      <LatestVehicleSection/>
      <AboutSection/>
      <JoinSection/>
    </FullPageScroll>
  );
}
