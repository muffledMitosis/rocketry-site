'use client';

import React, { useRef, useEffect, useState } from 'react';
import { teams } from '@/data/team-data';
import Image from 'next/image';

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

    const teamElements = document.querySelectorAll('.team-card');
    teamElements.forEach((el) => observer.observe(el));

    return () => {
      teamElements.forEach((el) => observer.unobserve(el));
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
            ANU Rocketry brings together passionate students from diverse disciplines to design, 
            build, and launch experimental rockets. Our team is organized into eight specialized groups, 
            each focusing on critical aspects of rocket development and operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team) => (
            <div 
              key={team.id}
              id={team.id}
              className={`team-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 transform ${
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
                <h3 className="text-xl font-bold text-blue-900 mb-2">{team.name}</h3>
                <p className="text-slate-700 mb-4">{team.description}</p>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Key Responsibilities:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {team.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
