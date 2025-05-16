import ParallaxBackground from "@/components/parallax-background"

export default function Home() {
  return (
    <>
      {/* Parallax section - exactly one viewport height */}
      <ParallaxBackground backgroundImage="/assets/images/hero-images/team-garry.jpg">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Parallax Section</h1>
        </div>
      </ParallaxBackground>
      
      {/* Content that scrolls over/after the parallax background */}
      <div className="relative z-20 bg-white min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-4">Big Test Body</h2>
        <p className="mb-4">This content scrolls normally and will appear after the parallax section.</p>
        <p className="mb-4">Add more content here to see the scrolling effect...</p>
        {/* Add more content to make the page scrollable */}
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p>Additional content to demonstrate scrolling behavior.</p>
        </div>
      </div>
    </>
  );
}
