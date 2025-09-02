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
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Animated starfield background */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/30" />
      </div>

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

      {/* Custom CSS for starfield animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default LatestVehicleSection;