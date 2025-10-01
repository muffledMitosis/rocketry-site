'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { partners, Partner } from '@/data/sponsors-data';

const PartnersPage: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Show all items initially after a short delay
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Add a small delay to ensure DOM is fully rendered
    const observerTimer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                if (!prev.includes(entry.target.id)) {
                  return [...prev, entry.target.id];
                }
                return prev;
              });
            }
          });
        },
        { threshold: 0.05, rootMargin: '50px' }
      );

      const partnerElements = document.querySelectorAll('.partner-card');
      partnerElements.forEach((el) => observer.observe(el));

      return () => {
        partnerElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(observerTimer);
    };
  }, []);

  const isVisible = (id: string) => visibleItems.includes(id);

  const PartnerCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => (
    <div
      id={partner.id}
      className={`partner-card group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden border border-slate-700/50 ${
        isVisible(partner.id) || isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 sm:p-6 lg:p-8 h-full"
      >
        <div className="flex flex-col items-center text-center h-full">
          {/* Logo Container */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
            {/* Try to load actual logo, fallback to initials */}
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={128}
              height={128}
              className="w-full h-full object-contain p-3 transition-all duration-300"
              style={{
                filter: 'brightness(1.2) contrast(1.1)'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-slate-600 rounded-lg items-center justify-center hidden">
              <span className="text-white font-bold text-xs sm:text-sm">
                {partner.name.split(' ').map(word => word[0]).join('')}
              </span>
            </div>

            {/* Light overlay for better logo contrast on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* External link icon */}
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {partner.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              Visit Website
            </p>
          </div>

          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
        </div>
      </a>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden flex items-center">
        {/* Grain/Noise Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* CSS-based grain pattern - more reliable */}
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
                radial-gradient(circle at 3px 5px, rgba(255,255,255,0.1) 1px, transparent 0),
                radial-gradient(circle at 7px 2px, rgba(255,255,255,0.08) 1px, transparent 0),
                radial-gradient(circle at 2px 8px, rgba(255,255,255,0.12) 1px, transparent 0),
                radial-gradient(circle at 6px 6px, rgba(255,255,255,0.06) 1px, transparent 0),
                radial-gradient(circle at 9px 3px, rgba(255,255,255,0.09) 1px, transparent 0),
                radial-gradient(circle at 4px 9px, rgba(255,255,255,0.07) 1px, transparent 0),
                radial-gradient(circle at 8px 7px, rgba(255,255,255,0.11) 1px, transparent 0)
              `,
              backgroundSize: '12px 12px, 15px 15px, 18px 18px, 20px 20px, 14px 14px, 16px 16px, 22px 22px, 19px 19px',
              backgroundPosition: '0 0, 3px 7px, 8px 2px, 1px 12px, 11px 4px, 6px 14px, 15px 8px, 9px 16px'
            }}
          />
          {/* SVG noise as backup */}
          <div 
            className="absolute inset-0 opacity-15 mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.6'/%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px',
            }}
          />
          {/* Gradient overlay for smooth falloff */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-blue-900/30 opacity-70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our Partners
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-blue-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
              We are grateful to our incredible partners who make our mission possible.
              Through their support, we continue to push the boundaries of student aerospace engineering
              and inspire the next generation of innovators.
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-300">{partners.length}</div>
                <div className="text-blue-200 text-sm sm:text-base">Trusted Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-300">5+</div>
                <div className="text-blue-200 text-sm sm:text-base">Years of Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-300">100%</div>
                <div className="text-blue-200 text-sm sm:text-base">Mission Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Amazing Partners
            </h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We work with incredible organizations that share our passion for aerospace innovation and education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {[...partners].sort((a, b) => {
              // Define priority order for ANU organizations
              const anuOrder = [
                'Australian National University',
                'ANU Collage of Systems and Society',
                'ANU Research School of Physics'
              ];

              const aIndex = anuOrder.indexOf(a.name);
              const bIndex = anuOrder.indexOf(b.name);

              // If both are ANU organizations, sort by priority order
              if (aIndex !== -1 && bIndex !== -1) {
                return aIndex - bIndex;
              }

              // ANU organizations come first
              if (aIndex !== -1) return -1;
              if (bIndex !== -1) return 1;

              // For non-ANU organizations, sort alphabetically
              return a.name.localeCompare(b.name);
            }).map((partner, index) => (
              <PartnerCard key={partner.id} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Become a Partner
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
            Join our mission to advance aerospace education and innovation.
            Partner with ANU Rocketry and help shape the future of space exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Partnership Opportunities
            </a>
            <a
              href="mailto:partners@anurocketry.org"
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;