'use client';

import React, { useEffect, useState } from 'react';
import { vehicles, Vehicle } from '@/data/vehicles-data';
import Link from 'next/link';
import { Rocket, Calendar, Activity } from 'lucide-react';

const VehiclesPage: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

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

      const vehicleElements = document.querySelectorAll('.vehicle-card');
      vehicleElements.forEach((el) => observer.observe(el));

      return () => {
        vehicleElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(observerTimer);
    };
  }, []);

  const isVisible = (id: string) => visibleItems.includes(id);

  const getStatusColor = (status: Vehicle['status']) => {
    switch (status) {
      case 'active':
        return 'from-green-500 to-emerald-600';
      case 'testing':
        return 'from-yellow-500 to-orange-600';
      case 'development':
        return 'from-blue-500 to-indigo-600';
      case 'retired':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status: Vehicle['status']) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'testing':
        return 'Testing';
      case 'development':
        return 'Development';
      case 'retired':
        return 'Retired';
      default:
        return 'Unknown';
    }
  };

  const VehicleCard: React.FC<{ vehicle: Vehicle; index: number }> = ({ vehicle, index }) => (
    <Link href={`/vehicles/${vehicle.slug}`} key={vehicle.id}>
      <div
        id={vehicle.id}
        className={`vehicle-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden border border-gray-100 cursor-pointer ${
          isVisible(vehicle.id) || isLoaded ? 'translate-y-0 opacity-100 hover:-translate-y-2' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="p-4 sm:p-6 lg:p-8 h-full">
          <div className="flex flex-col h-full">
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(vehicle.status)}`}>
                {getStatusText(vehicle.status)}
              </div>
              <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {vehicle.year}
              </div>
            </div>

            {/* Vehicle Image Placeholder */}
            <div className="relative w-full h-32 sm:h-40 lg:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {vehicle.name}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed text-sm sm:text-base">
                {vehicle.description}
              </p>

              {/* Quick Specs */}
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500 flex-shrink-0" />
                  <span className="font-medium">Status:</span>
                  <span className="ml-1 sm:ml-2 capitalize">{vehicle.status}</span>
                </div>
                {vehicle.specifications.height && vehicle.specifications.height !== 'TBD' && (
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="font-medium">Height:</span>
                    <span className="ml-1 sm:ml-2">{vehicle.specifications.height}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4 sm:pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base">
                  Learn More
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden flex items-center">
        {/* Space Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, #1a1a2e 0%, #16213e 50%, #0f3460 100%),
              radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 90% 70%, rgba(120, 219, 226, 0.2) 0%, transparent 50%),
              linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)
            `
          }}
        />
        
        {/* Stars */}
        <div className="absolute inset-0">
          {/* Layer 1: Large bright stars */}
          <div 
            className="absolute inset-0 opacity-80"
            style={{
              background: `
                radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
                radial-gradient(2px 2px at 40px 70px, #fffacd, transparent),
                radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
                radial-gradient(1px 1px at 130px 80px, #87ceeb, transparent),
                radial-gradient(2px 2px at 160px 30px, #ffffff, transparent),
                radial-gradient(1px 1px at 200px 100px, #fffacd, transparent),
                radial-gradient(1px 1px at 240px 50px, #ffffff, transparent),
                radial-gradient(2px 2px at 280px 90px, #87ceeb, transparent),
                radial-gradient(1px 1px at 320px 20px, #ffffff, transparent),
                radial-gradient(1px 1px at 360px 60px, #fffacd, transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '400px 120px'
            }}
          />
          
          {/* Layer 2: Medium stars */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: `
                radial-gradient(1px 1px at 50px 50px, #ffffff, transparent),
                radial-gradient(1px 1px at 100px 20px, #87ceeb, transparent),
                radial-gradient(1px 1px at 150px 70px, #ffffff, transparent),
                radial-gradient(1px 1px at 250px 30px, #fffacd, transparent),
                radial-gradient(1px 1px at 300px 80px, #ffffff, transparent),
                radial-gradient(1px 1px at 350px 10px, #87ceeb, transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '400px 100px'
            }}
          />
          
          {/* Layer 3: Small distant stars */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                radial-gradient(0.5px 0.5px at 25px 25px, #ffffff, transparent),
                radial-gradient(0.5px 0.5px at 75px 75px, #87ceeb, transparent),
                radial-gradient(0.5px 0.5px at 125px 25px, #ffffff, transparent),
                radial-gradient(0.5px 0.5px at 175px 75px, #fffacd, transparent),
                radial-gradient(0.5px 0.5px at 225px 25px, #ffffff, transparent),
                radial-gradient(0.5px 0.5px at 275px 75px, #87ceeb, transparent),
                radial-gradient(0.5px 0.5px at 325px 25px, #ffffff, transparent),
                radial-gradient(0.5px 0.5px at 375px 75px, #fffacd, transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '400px 100px'
            }}
          />
          
          {/* Shooting star effect */}
          <div 
            className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"
            style={{
              boxShadow: '0 0 10px #ffffff, -100px 0 5px rgba(255,255,255,0.3), -200px 0 3px rgba(255,255,255,0.2)'
            }}
          />
        </div>
        
        {/* Nebula effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              background: `
                radial-gradient(ellipse at 10% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse at 90% 10%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        {/* Text overlay with strong contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.4)' }}>
              Our Vehicles
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8 drop-shadow-lg"></div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.4)' }}>
              Explore our fleet of cutting-edge launch vehicles, each designed and built by our talented team
              to push the boundaries of student aerospace engineering.
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{vehicles.length}</div>
                <div className="text-gray-200 drop-shadow-md text-xs sm:text-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Total Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{vehicles.filter(v => v.status === 'active').length}</div>
                <div className="text-gray-200 drop-shadow-md text-xs sm:text-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Active</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{vehicles.filter(v => v.status === 'testing').length}</div>
                <div className="text-gray-200 drop-shadow-md text-xs sm:text-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Testing</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{vehicles.filter(v => v.status === 'development').length}</div>
                <div className="text-gray-200 drop-shadow-md text-xs sm:text-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehiclesPage;