import MainSection from "@/components/home-sections/MainSectoin";
import SectionRoot from "@/components/home-sections/SectionRoot";
import SponsorsSection from "@/components/home-sections/SponsorsSection";
import TeamsSection from "@/components/home-sections/TeamsSection";
import VisionMissionSection from "@/components/home-sections/VisionMissionSection";

export default function Home() {
  return (
    <main className="">
      <SectionRoot>
        <MainSection />
        <VisionMissionSection />
        <TeamsSection />
        <SponsorsSection />
      </SectionRoot>
    </main>
  );
}
