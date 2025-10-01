'use client';

import React from 'react';

const SolsticeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/images/solstice-backdrop.jpg)',
        }}
      />

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default SolsticeBackground;