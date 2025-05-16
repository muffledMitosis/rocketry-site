'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';

interface ParallaxBackgroundProps {
  children: ReactNode;
  backgroundImage: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children, backgroundImage
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax effect (slower movement of background)
  const yPos = scrollPosition * 0.5; // Background moves at half the speed

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 h-full w-full"
        style={{ transform: `translateY(${yPos}px)` }}
      >
        <Image 
          src={backgroundImage}
          alt="Parallax Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      {/* Content that appears over the background */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
