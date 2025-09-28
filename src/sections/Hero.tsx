import Header from "@/components/header";

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation bar at the top */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      <div className="flex items-center h-full relative z-40">
        <div className="text-left px-4 sm:px-8 md:pl-16 lg:pl-24 max-w-4xl w-full" style={{ viewTransitionName: 'hero-title' }}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white">
            ANU ROCKETRY: PROVIDING STUDENT EXPERIENCE THROUGH INCLUSION & DIVERSITY
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white opacity-90">
            ONE ROCKET AT A TIME.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
