import Header from "@/components/header";

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation bar at the top */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      <div className="flex items-center h-full relative z-40">
        <div className="text-left pl-8 md:pl-16 lg:pl-24 max-w-4xl" style={{ viewTransitionName: 'hero-title' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            ANU ROCKETRY: PROVIDING STUDENT EXPERIENCE THROUGH INCLUSION & DIVERSITY
          </h1>
          <p className="text-xl md:text-2xl font-light text-white opacity-90">
            ONE ROCKET AT A TIME.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
