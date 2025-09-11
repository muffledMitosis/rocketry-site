'use client';

import React, { useRef, useEffect, useState } from 'react';
import { teams } from '@/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Lightbulb, Target, Rocket } from 'lucide-react';

const TeamsPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  
  // Sort teams alphabetically by name
  const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));

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

    const teamElements = document.querySelectorAll('.team-card, .hero-stat');
    teamElements.forEach((el) => observer.observe(el));

    return () => {
      teamElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const isVisible = (id: string) => visibleItems.includes(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden flex items-center" style={{ viewTransitionName: 'page-content' }}>
        {/* Grain/Noise Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
                radial-gradient(circle at 3px 5px, rgba(255,255,255,0.1) 1px, transparent 0),
                radial-gradient(circle at 7px 2px, rgba(255,255,255,0.08) 1px, transparent 0)
              `,
              backgroundSize: '12px 12px, 15px 15px, 18px 18px',
              backgroundPosition: '0 0, 3px 7px, 8px 2px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-blue-900/30 opacity-70" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Teams
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12">
              ANU Rocketry brings together passionate students from diverse disciplines to design, 
              build, and launch experimental rockets. Our specialized teams work collaboratively 
              to push the boundaries of student aerospace engineering.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div 
                id="stat-1"
                className={`hero-stat transition-all duration-700 transform ${
                  isVisible('stat-1') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{sortedTeams.length}</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Specialized Teams</div>
              </div>
              <div 
                id="stat-2"
                className={`hero-stat transition-all duration-700 transform delay-100 ${
                  isVisible('stat-2') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Active Members</div>
              </div>
              <div 
                id="stat-3"
                className={`hero-stat transition-all duration-700 transform delay-200 ${
                  isVisible('stat-3') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">10+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Disciplines</div>
              </div>
              <div 
                id="stat-4"
                className={`hero-stat transition-all duration-700 transform delay-300 ${
                  isVisible('stat-4') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">5+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Grid Section */}
      <section className="py-20" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Specialized Teams
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each team brings unique expertise and passion to our mission of advancing 
              student aerospace engineering through hands-on learning and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {sortedTeams.map((team) => (
              <div 
                key={team.id}
                id={team.id}
                className={`team-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 transform hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible(team.id) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={team.image} 
                    alt={team.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{team.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{team.description}</p>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3 text-sm">Key Responsibilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {team.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-700 mr-2 mt-1">•</span>
                          <span className="leading-tight">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Ready to be part of something extraordinary? We&apos;re always looking for 
                  passionate students to join our mission and contribute to cutting-edge 
                  aerospace projects.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-300 mr-3" />
                    <span>Collaborative, multidisciplinary environment</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-blue-300 mr-3" />
                    <span>Hands-on learning and skill development</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-blue-300 mr-3" />
                    <span>Real-world project experience</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket className="w-5 h-5 text-blue-300 mr-3" />
                    <span>Opportunity to launch your creations</span>
                  </div>
                </div>
                <Link 
                  href="/join"
                  className="inline-block px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn How to Join
                </Link>
              </div>
              <div className="relative">
                <div className="bg-blue-700 rounded-xl p-6 shadow-xl">
                  <h4 className="text-xl font-bold mb-4">What You&apos;ll Gain</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span className="text-blue-100">Technical expertise in aerospace engineering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span className="text-blue-100">Leadership and project management skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span className="text-blue-100">Network with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span className="text-blue-100">Prepare for aerospace career opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;