import ParallaxBackground from "@/components/parallax-background";

const HeroSection = () => {
  return (
    <ParallaxBackground backgroundImage="/assets/images/hero-images/team-garry.jpg">
      <div className="flex items-center justify-center h-full">
      {/*<h1 className="text-4xl font-bold text-white">Parallax Section</h1>*/}
      </div>
    </ParallaxBackground>
  );
}

export default HeroSection;
