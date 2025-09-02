'use client';

import React, { useRef, useEffect } from 'react';

const HeroBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 53;
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        src="/assets/images/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        onLoadedData={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 53;
          }
        }}
      />
      
      {/* Dark gradient overlay on the left side for text legibility */}
      <div className="absolute inset-0" 
           style={{
             background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)'
           }} />
    </div>
  );
};

export default HeroBackground;