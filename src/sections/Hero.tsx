import ParallaxVideoBackground from "@/components/parallax-video-background";

const HeroSection = () => {
  return (
    <ParallaxVideoBackground videoSrc="/assets/images/hero-video.mp4" startTime={50}>
      <div className="flex items-center justify-center h-full">
      {/*<h1 className="text-4xl font-bold text-white">Parallax Section</h1>*/}
      </div>
    </ParallaxVideoBackground>
  );
}

export default HeroSection;
