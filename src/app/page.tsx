import JoinSection from "@/components/join";
import AboutSection from "@/sections/About";
import HeroSection from "@/sections/Hero";
import LatestVehicleSection from "@/sections/LatestVehicle";
// import Sponsors from "@/sections/Sponsors";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <LatestVehicleSection/>
      <AboutSection/>
      {/* <Sponsors/> */}
      <JoinSection/>
    </>
  );
}
