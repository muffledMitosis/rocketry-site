'use client';

import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 'valemon',
      year: '2024',
      name: 'Valemon',
      description: 'Valemon was built on the successful concepts of Bifrost, while also introducing new and better technologies. It was going to launch from Norwegian soil the summer of 2024, but due to technical difficulties and a short time frame, the rocket was never launched.',
      logo: '/assets/images/valemon-logo.png', // You'll need to add this
      logoAlt: 'Valemon Logo'
    },
    {
      id: 'bifrost',
      year: '2023',
      name: 'Bifrost',
      description: 'Our first time using a self designed & developed engine, as well as the first norwegian rocket to use a bipropellant engine. Bifrost competed in the European Rocketry Challenge 2023, and placed 1st in the Liquid 3 km category, and 3rd in vehicle design overall.',
      logo: '/assets/images/bifrost-logo.png', // You'll need to add this
      logoAlt: 'Bifrost Logo'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Project Cards */}
        <div className="space-y-16 mb-20">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              {/* Project Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Project Logo */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                      {/* Placeholder for project logos - you'll need to add the actual images */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <div className="text-white font-bold text-2xl">
                          {project.name} Logo
                        </div>
                      </div>
                      
                      {/* Decorative glow effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="text-white">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium tracking-wide uppercase backdrop-blur-sm mb-4">
                        Project {project.year}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        {project.name}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Click to Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Videos
            </span>
          </h2>
          
          {/* Video Grid - Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((video) => (
              <div key={video} className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">Video Title {video}</h3>
                  <p className="text-slate-400 text-sm">Video description goes here...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default ProjectsSection;