import MainSection from "@/components/home-sections/MainSectoin";
import SectionRoot from "@/components/home-sections/SectionRoot";
import SponsorsSection from "@/components/home-sections/SponsorsSection";
import TeamsSection from "@/components/home-sections/TeamsSection";

export default function Home() {
  return (
    <main className="">
      <SectionRoot>
        <MainSection />
        <TeamsSection />
        <SponsorsSection />
      </SectionRoot>
    </main>
  );
}
