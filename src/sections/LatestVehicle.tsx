'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LatestVehicleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium tracking-wide uppercase backdrop-blur-sm">
                Our Latest Rocket
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Project
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                SOLSTICE
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Our next bid upward, and an exciting new frontier for our team. 
              Solstice is a united test vehicle, designed to test space hardware 
              within Earth&apos;s atmosphere.
            </p>
            
            <p className="text-slate-400 mb-10 leading-relaxed">
              Check out the project page to learn more about this project.
            </p>
            
            <Link 
              href="/vehicles"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Logo/Image */}
          <div 
            className={`flex justify-center lg:justify-end transition-all duration-1000 transform delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-110 animate-pulse" />
              
              {/* Logo container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 md:w-72 md:h-72 relative">
                    <Image
                      src="/assets/images/solstice-logo.png"
                      alt="Solstice Logo"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative rings */}
                <div className="absolute -inset-4 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute -inset-8 border border-purple-400/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVehicleSection;