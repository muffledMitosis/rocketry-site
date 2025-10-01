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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden flex items-center" style={{ viewTransitionName: 'page-content' }}>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our Teams
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-slate-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              ANU Rocketry brings together passionate students from diverse disciplines to design,
              build, and launch experimental rockets. Our specialized teams work collaboratively
              to push the boundaries of student aerospace engineering.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div
                id="stat-1"
                className={`hero-stat transition-all duration-700 transform ${
                  isVisible('stat-1') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">{sortedTeams.length}</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Specialized Teams</div>
              </div>
              <div
                id="stat-2"
                className={`hero-stat transition-all duration-700 transform delay-100 ${
                  isVisible('stat-2') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">50+</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Active Members</div>
              </div>
              <div
                id="stat-3"
                className={`hero-stat transition-all duration-700 transform delay-200 ${
                  isVisible('stat-3') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">10+</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Disciplines</div>
              </div>
              <div
                id="stat-4"
                className={`hero-stat transition-all duration-700 transform delay-300 ${
                  isVisible('stat-4') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">5+</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Grid Section */}
      <section className="py-12 sm:py-20" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Meet Our Specialized Teams
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-blue-400 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
              Each team brings unique expertise and passion to our mission of advancing
              student aerospace engineering through hands-on learning and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {sortedTeams.map((team) => (
              <div
                key={team.id}
                id={team.id}
                className={`team-card bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform hover:shadow-2xl hover:-translate-y-2 border border-slate-700/50 ${
                  isVisible(team.id) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{team.name}</h3>
                  <p className="text-slate-300 mb-3 sm:mb-4 text-sm leading-relaxed">{team.description}</p>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2 sm:mb-3 text-sm">Key Responsibilities:</h4>
                    <ul className="text-xs sm:text-sm text-slate-400 space-y-1 sm:space-y-2">
                      {team.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
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
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl border border-slate-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join Our Team</h3>
                <p className="text-slate-300 mb-4 sm:mb-6 text-base sm:text-lg">
                  Ready to be part of something extraordinary? We&apos;re always looking for
                  passionate students to join our mission and contribute to cutting-edge
                  aerospace projects.
                </p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Collaborative, multidisciplinary environment</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Hands-on learning and skill development</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Real-world project experience</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Opportunity to launch your creations</span>
                  </div>
                </div>
                <Link
                  href="/join"
                  className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-sm sm:text-base"
                >
                  Learn How to Join
                </Link>
              </div>
              <div className="relative">
                <div className="bg-slate-600 rounded-xl p-4 sm:p-6 shadow-xl border border-slate-500">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">What You&apos;ll Gain</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 flex-shrink-0">✓</span>
                      <span className="text-slate-200 text-sm sm:text-base">Technical expertise in aerospace engineering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 flex-shrink-0">✓</span>
                      <span className="text-slate-200 text-sm sm:text-base">Leadership and project management skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 flex-shrink-0">✓</span>
                      <span className="text-slate-200 text-sm sm:text-base">Network with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 flex-shrink-0">✓</span>
                      <span className="text-slate-200 text-sm sm:text-base">Prepare for aerospace career opportunities</span>
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