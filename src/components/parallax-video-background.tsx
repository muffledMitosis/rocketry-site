'use client';

import React, { ReactNode, useEffect, useState, useRef } from 'react';

interface ParallaxVideoBackgroundProps {
  children: ReactNode;
  videoSrc: string;
  startTime?: number;
}

const ParallaxVideoBackground: React.FC<ParallaxVideoBackgroundProps> = ({
  children, videoSrc, startTime = 0
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current && startTime > 0) {
      videoRef.current.currentTime = startTime;
    }
  }, [startTime]);

  const yPos = scrollPosition * 0.5;

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 h-full w-full"
        style={{ transform: `translateY(${yPos}px)` }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => {
            if (videoRef.current && startTime > 0) {
              videoRef.current.currentTime = startTime;
            }
          }}
        />
      </div>
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxVideoBackground;