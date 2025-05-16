'use client';

import React, { useRef, useEffect, useState } from 'react';
import { currentSponsors, sponsorshipTiers, sponsorshipBenefits } from '@/data/sponsorship-data';

const Sponsors: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'current' | 'opportunities'>('current');
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.sponsor-item, .tier-card, .benefit-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [activeTab]);

  const isVisible = (id: string) => visibleItems.includes(id);

  return (
    <section id="sponsors" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Our Sponsors</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-700">
            ANU Rocketry is proudly supported by organizations committed to advancing
            aerospace education and innovation. Join these forward-thinking partners
            in our mission to reach new heights.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'current'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-blue-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('current')}
            >
              Current Sponsors
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'opportunities'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-blue-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('opportunities')}
            >
              Sponsorship Opportunities
            </button>
          </div>
        </div>

        {activeTab === 'current' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
              {currentSponsors.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  id={`sponsor-${index}`}
                  className={`sponsor-item bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-700 transform ${
                    isVisible(`sponsor-${index}`)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-white p-2 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-slate-800 mb-1">
                    {sponsor.name}
                  </h3>
                  <div
                    className={`text-sm font-medium px-3 py-1 rounded-full mb-3 ${
                      sponsor.tier === 'Platinum'
                        ? 'bg-slate-200 text-slate-800'
                        : sponsor.tier === 'Gold'
                        ? 'bg-amber-100 text-amber-800'
                        : sponsor.tier === 'Silver'
                        ? 'bg-gray-100 text-gray-800'
                        : sponsor.tier === 'Bronze'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {sponsor.tier} Sponsor
                  </div>
                  <a
                    href={sponsor.website}
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Sponsor Us?</h3>
              <p className="max-w-3xl mx-auto text-slate-700 mb-8">
                Your support enables us to compete in national competitions,
                develop innovative technologies, and prepare the next generation of
                aerospace engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {sponsorshipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  id={`benefit-${index}`}
                  className={`benefit-card bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform ${
                    isVisible(`benefit-${index}`)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-700">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setActiveTab('opportunities')}
                className="px-6 py-3 bg-blue-700 text-white rounded-lg transition-colors hover:bg-blue-800 inline-block font-medium"
              >
                View Sponsorship Opportunities
              </button>
            </div>
          </>
        )}

        {activeTab === 'opportunities' && (
          <>
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Sponsorship Tiers</h3>
              <p className="text-slate-700">
                We offer various sponsorship levels to accommodate organizations of all sizes.
                Each tier provides unique benefits and opportunities to engage with our team
                and the broader aerospace community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={tier.tier}
                  id={`tier-${index}`}
                  className={`tier-card rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform ${
                    isVisible(`tier-${index}`)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className={`p-6 bg-gradient-to-r ${tier.color} text-white`}>
                    <h4 className="text-2xl font-bold mb-1">{tier.tier}</h4>
                    <p className="text-xl opacity-90">{tier.price}</p>
                  </div>
                  <div className="p-6 bg-white">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a
                        href="#contact"
                        className="block w-full py-3 text-center rounded-lg border-2 border-blue-700 text-blue-700 font-medium transition-colors hover:bg-blue-700 hover:text-white"
                      >
                        Become a Sponsor
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 text-white rounded-xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Sponsorship Packages</h3>
                  <p className="text-blue-100 mb-6">
                    Don't see a tier that fits your organization's needs? We're happy to work
                    with you to create a custom sponsorship package that aligns with your
                    goals and budget.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">•</span>
                      <span>Technical expertise sharing and mentorship opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">•</span>
                      <span>Targeted exposure to specific engineering disciplines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">•</span>
                      <span>Co-development of specialized components or systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">•</span>
                      <span>Exclusive research partnerships and data sharing</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                  >
                    Contact Us to Discuss
                  </a>
                </div>
                <div className="hidden lg:block relative">
                  <div className="absolute inset-0 bg-blue-800 rounded-lg transform -rotate-2"></div>
                  <div className="absolute inset-0 bg-blue-700 rounded-lg transform rotate-2"></div>
                  <div className="relative bg-blue-600 rounded-lg p-6 h-full">
                    <h4 className="text-xl font-bold mb-4">In-Kind Sponsorships</h4>
                    <p className="text-blue-100 mb-4">
                      We welcome donations of materials, equipment, services, and expertise
                      that can help us advance our projects and educational mission.
                    </p>
                    <h4 className="text-xl font-bold mb-4">Examples include:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-300 mr-2">→</span>
                        <span>Manufacturing capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-300 mr-2">→</span>
                        <span>Electronic components and materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-300 mr-2">→</span>
                        <span>Software licenses and tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-300 mr-2">→</span>
                        <span>Technical mentorship and training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-300 mr-2">→</span>
                        <span>Testing facilities access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Sponsors;
