'use client';

import React from 'react';

const AboutBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Clean gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 30%, #cbd5e1 100%)',
        }}
      />
      
      {/* Subtle geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #1e40af 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, #6366f1 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
};

export default AboutBackground;