'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket, Users, Award, Target, Lightbulb, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    const elements = document.querySelectorAll('.fade-in-card, .stat-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const isVisible = (id: string) => visibleItems.includes(id);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">About ANU Rocketry</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-700">
            ANU Rocketry is a student-led organization dedicated to advancing aerospace engineering 
            through hands-on learning, innovative design, and practical application. We bring together 
            passionate students from diverse disciplines to push the boundaries of what&apos;s possible.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div 
            id="mission-card"
            className={`fade-in-card transition-all duration-700 transform ${
              isVisible('mission-card') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">
                To provide students with practical, hands-on experience in aerospace engineering 
                through the design, construction, and launch of experimental rockets, while fostering 
                innovation, collaboration, and technical excellence.
              </p>
            </div>
          </div>

          <div 
            id="vision-card"
            className={`fade-in-card transition-all duration-700 transform delay-200 ${
              isVisible('vision-card') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">
                To be recognized as a leading student rocketry organization that bridges the gap 
                between theoretical knowledge and real-world aerospace applications, preparing 
                the next generation of aerospace professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div 
            id="stat-1"
            className={`stat-card text-center transition-all duration-700 transform ${
              isVisible('stat-1') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Active Members</div>
          </div>
          
          <div 
            id="stat-2"
            className={`stat-card text-center transition-all duration-700 transform delay-100 ${
              isVisible('stat-2') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Rockets Launched</div>
          </div>
          
          <div 
            id="stat-3"
            className={`stat-card text-center transition-all duration-700 transform delay-200 ${
              isVisible('stat-3') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Competition Wins</div>
          </div>
          
          <div 
            id="stat-4"
            className={`stat-card text-center transition-all duration-700 transform delay-300 ${
              isVisible('stat-4') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Years Experience</div>
          </div>
        </div>

        {/* Teams CTA */}
        <div 
          id="teams-cta"
          className={`fade-in-card transition-all duration-700 transform ${
            isVisible('teams-cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Specialized Teams</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our success comes from the dedication and expertise of our eight specialized teams, 
              each focusing on critical aspects of rocket development and operations.
            </p>
            <Link 
              href="/teams"
              className="inline-block px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Explore Our Teams
            </Link>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">What We Offer Sponsors</h3>
              <p className="text-slate-700 mb-6">
                Partnering with ANU Rocketry offers your organization unique opportunities for 
                brand visibility, talent recruitment, and technological innovation in the aerospace sector.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-700 text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-slate-800">Brand Exposure</h4>
                    <p className="text-slate-600 text-sm">Logo placement on rockets, gear, and promotional materials at competitions and events.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-700 text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-slate-800">Talent Pipeline</h4>
                    <p className="text-slate-600 text-sm">Access to skilled engineering students with hands-on experience in aerospace technology.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-700 text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-slate-800">R&D Collaboration</h4>
                    <p className="text-slate-600 text-sm">Opportunities to collaborate on innovative projects and test new technologies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-700 text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-slate-800">Community Impact</h4>
                    <p className="text-slate-600 text-sm">Support STEM education and inspire the next generation of engineers and scientists.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                {/* <a  */}
                {/*   href="#sponsors"  */}
                {/*   className="px-6 py-3 bg-blue-700 text-white rounded-lg transition-colors hover:bg-blue-800 inline-block font-medium" */}
                {/* > */}
                {/*   Sponsorship Opportunities */}
                {/* </a> */}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                alt="ANU Rocketry Team" 
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Join Our Mission</h3>
                  <p className="text-gray-200">
                    Be part of an exciting journey pushing the boundaries of student aerospace engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
