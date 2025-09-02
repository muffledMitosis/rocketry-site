'use client';

import React from 'react';

const ProjectsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Dark gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        }}
      />
      
      {/* Starfield background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(2px 2px at 50px 100px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 150px 50px, rgba(255,255,255,0.6), transparent),
              radial-gradient(2px 2px at 300px 200px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 450px 80px, rgba(255,255,255,0.7), transparent),
              radial-gradient(2px 2px at 600px 150px, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 750px 250px, rgba(255,255,255,0.8), transparent),
              radial-gradient(2px 2px at 900px 60px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 1050px 180px, rgba(255,255,255,0.9), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '1200px 300px',
            animation: 'twinkle 6s ease-in-out infinite alternate'
          }}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default ProjectsBackground;