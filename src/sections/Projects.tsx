'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Rocket } from 'lucide-react';
import { vehicles } from '@/data/vehicles-data';
import FooterConnectIcon from '@/components/footer-icon';

const ProjectsSection: React.FC = () => {
  // Get vehicles sorted by year (descending), then take vehicles 2 and 3 (skip first 1)
  const sortedVehicles = [...vehicles].sort((a, b) => b.year - a.year);
  const projectVehicles = sortedVehicles.slice(1, 3); // Skip first (latest), take next 2

  return (
    <div className="min-h-screen py-10 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-20">
          {projectVehicles.length > 0 ? projectVehicles.map((vehicle) => (
            <div key={vehicle.id} className="relative">
              {/* Project Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-slate-700/50 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Project Image */}
                  <div className="flex justify-center lg:justify-start order-1 lg:order-none">
                    <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                        {vehicle.image ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={vehicle.image}
                              alt={`${vehicle.name} Vehicle`}
                              fill
                              className="object-cover rounded-2xl"
                            />
                          </div>
                        ) : (
                          <Rocket
                            size={100}
                            className="text-white transform rotate-45 sm:w-[120px] sm:h-[120px]"
                          />
                        )}
                      </div>

                      {/* Decorative glow effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="text-white order-2 lg:order-none">
                    <div className="mb-4 sm:mb-6">
                      <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-xs sm:text-sm font-medium tracking-wide uppercase backdrop-blur-sm mb-3 sm:mb-4">
                        Project {vehicle.year}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        {vehicle.name}
                      </h2>
                    </div>

                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                      {vehicle.description}
                    </p>

                    <Link
                      href={`/vehicles/${vehicle.slug}`}
                      className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      Click to Learn More
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-white text-center py-20">
              <p className="text-lg sm:text-xl">No projects available to display</p>
            </div>
          )}
        </div>

        {/* Videos Section */}
        <div className="mt-20 sm:mt-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-16 text-center lg:text-left">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Videos
            </span>
          </h2>

          {/* Video Grid - Placeholder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((video) => (
              <div key={video} className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Video Title {video}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Video description goes here...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-20 sm:mt-32 pt-12 sm:pt-16 border-t border-slate-700/50">
          <div className="flex flex-col items-center justify-center text-white">
            <div className="flex flex-row space-x-4 sm:space-x-6 mb-4 sm:mb-6">
              <FooterConnectIcon type="facebook" />
              <FooterConnectIcon type="instagram" />
              <FooterConnectIcon type="linkedin" />
              <FooterConnectIcon type="email" />
            </div>
            <div className="text-xs sm:text-sm text-center text-slate-400 mb-6 sm:mb-8 px-4">
              {new Date().getFullYear()} ANU Rocketry. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;