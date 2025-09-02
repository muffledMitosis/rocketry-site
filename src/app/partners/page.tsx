'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { partners, partnerTiers, Partner } from '@/data/sponsors-data';

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

  const getPartnersByTier = (tier: string) => {
    return partners.filter(partner => partner.tier === tier);
  };

  const PartnerCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => (
    <div 
      id={partner.id}
      className={`partner-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden border border-gray-100 ${
        isVisible(partner.id) || isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a 
        href={partner.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-8 h-full"
      >
        <div className="flex flex-col items-center text-center h-full">
          {/* Logo Container */}
          <div className="relative w-32 h-32 mb-6 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {/* Placeholder for sponsor logo - will be replaced with actual logos */}
            <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
              <span className="text-gray-600 font-bold text-sm">{partner.name.split(' ').map(word => word[0]).join('')}</span>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* External link icon */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-5 h-5 text-blue-700" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
              {partner.name}
            </h3>
            <p className="text-sm text-gray-600 italic group-hover:text-gray-800 transition-colors duration-300">
              {partner.slogan}
            </p>
          </div>

          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
        </div>
      </a>
    </div>
  );

  const TierSection: React.FC<{ tier: string }> = ({ tier }) => {
    const tierPartners = getPartnersByTier(tier);
    if (tierPartners.length === 0) return null;

    const tierInfo = partnerTiers[tier as keyof typeof partnerTiers];

    return (
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${tierInfo.color} bg-clip-text text-transparent`}>
            {tierInfo.name}
          </h2>
          <div className={`w-16 h-1 bg-gradient-to-r ${tierInfo.color} mx-auto mb-4`}></div>
          <p className={`text-lg ${tierInfo.textColor} max-w-2xl mx-auto`}>
            {tierInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tierPartners.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
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
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We are grateful to our incredible partners who make our mission possible. 
              Through their support, we continue to push the boundaries of student aerospace engineering 
              and inspire the next generation of innovators.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">10+</div>
                <div className="text-blue-200">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">5</div>
                <div className="text-blue-200">Partnership Tiers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">100%</div>
                <div className="text-blue-200">Mission Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {Object.keys(partnerTiers).map((tier) => (
            <TierSection key={tier} tier={tier} />
          ))}
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join our mission to advance aerospace education and innovation. 
            Partner with ANU Rocketry and help shape the future of space exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Partnership Opportunities
            </a>
            <a
              href="mailto:partners@anurocketry.org"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300"
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