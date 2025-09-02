'use client';

import React from 'react';

const SolsticeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #1e3a8a 0%, #0f172a 50%, #000000 100%)',
        }}
      />
      
      {/* Starfield overlay effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.7), transparent),
              radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 200px 100px, rgba(255,255,255,0.8), transparent),
              radial-gradient(2px 2px at 250px 60px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 300px 20px, rgba(255,255,255,0.9), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '350px 200px',
            animation: 'twinkle 4s linear infinite'
          }}
        />
      </div>

      {/* CSS for starfield animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default SolsticeBackground;