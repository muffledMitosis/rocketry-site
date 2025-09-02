'use client';

import React from 'react';

const JoinBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Professional blue gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 50%, #1e3a8a 100%)',
        }}
      />
      
      {/* Dynamic overlay patterns */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(255,255,255,0.2) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Subtle animated elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-5 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            animationDuration: '3s'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full opacity-5 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
            animationDuration: '4s',
            animationDelay: '1s'
          }}
        />
      </div>
    </div>
  );
};

export default JoinBackground;