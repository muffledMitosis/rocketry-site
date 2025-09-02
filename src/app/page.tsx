import HeroSection from "@/sections/Hero";
import LatestVehicleSection from "@/sections/LatestVehicle";
import ProjectsSection from "@/sections/Projects";
import FullPageScroll from "@/components/FullPageScroll";
import HeroBackground from "@/components/backgrounds/HeroBackground";
import SolsticeBackground from "@/components/backgrounds/SolsticeBackground";
import ProjectsBackground from "@/components/backgrounds/ProjectsBackground";

export default function Home() {
  const backgroundComponents = [
    <HeroBackground key="hero" />,
    <SolsticeBackground key="solstice" />,
    <ProjectsBackground key="projects" />,
  ];

  return (
    <FullPageScroll 
      backgroundComponents={backgroundComponents}
      allowScrollInLastSection={true}
    >
      <HeroSection/>
      <LatestVehicleSection/>
      <ProjectsSection/>
    </FullPageScroll>
  );
}
