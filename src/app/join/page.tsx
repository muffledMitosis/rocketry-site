'use client';

import React, { useEffect, useState } from 'react';

const JoinPage: React.FC = () => {
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

    const elements = document.querySelectorAll('.hero-stat, .benefit-card, .team-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const isVisible = (id: string) => visibleItems.includes(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden flex items-start pt-20 sm:pt-24 md:pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Join ANU Rocketry
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-slate-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              Be part of Australia&apos;s leading university rocketry team. Whether you&apos;re an engineer, designer,
              or simply passionate about space exploration, there&apos;s a place for you here.
            </p>

            {/* Stats */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div
                id="stat-1"
                className={`hero-stat transition-all duration-700 transform ${
                  isVisible('stat-1') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">4</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Teams</div>
              </div>
              <div
                id="stat-2"
                className={`hero-stat transition-all duration-700 transform delay-100 ${
                  isVisible('stat-2') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">50+</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Members</div>
              </div>
              <div
                id="stat-3"
                className={`hero-stat transition-all duration-700 transform delay-200 ${
                  isVisible('stat-3') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">5+</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Years</div>
              </div>
              <div
                id="stat-4"
                className={`hero-stat transition-all duration-700 transform delay-300 ${
                  isVisible('stat-4') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">100%</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div
              id="benefit-1"
              className={`benefit-card bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-slate-700/50 ${
                isVisible('benefit-1') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Hands-On Experience</h3>
              <p className="text-slate-300 text-sm sm:text-base">Work on real rocket projects from design to launch, gaining invaluable engineering experience.</p>
            </div>

            <div
              id="benefit-2"
              className={`benefit-card bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-slate-700/50 ${
                isVisible('benefit-2') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Team Collaboration</h3>
              <p className="text-slate-300 text-sm sm:text-base">Join a diverse community of passionate students and build lifelong friendships.</p>
            </div>

            <div
              id="benefit-3"
              className={`benefit-card bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-slate-700/50 ${
                isVisible('benefit-3') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Innovation</h3>
              <p className="text-slate-300 text-sm sm:text-base">Push the boundaries of technology and contribute to cutting-edge aerospace research.</p>
            </div>
          </div>

          {/* Teams Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Available Teams</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: 'Propulsion', color: 'red', description: 'Engine design & testing' },
                { name: 'Structures', color: 'blue', description: 'Airframe & recovery systems' },
                { name: 'Electronics', color: 'green', description: 'Flight computers & telemetry' },
                { name: 'Operations', color: 'yellow', description: 'Marketing & management' }
              ].map((team, index) => (
                <div
                  key={team.name}
                  id={`team-${index + 1}`}
                  className={`team-card bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-slate-700/50 ${
                    isVisible(`team-${index + 1}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-500 rounded-full"></div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{team.name}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm">{team.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Launch Your Future?</h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8">
              Join us for our weekly meetings or reach out directly to learn more about opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="mailto:rocketry@anu.edu.au"
                className="bg-white text-slate-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200 text-sm sm:text-base"
              >
                Email Us
              </a>
              <div className="text-slate-300">
                <p className="font-medium text-sm sm:text-base">Weekly Meetings</p>
                <p className="text-xs sm:text-sm">Thursdays 6pm, Engineering Building</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;