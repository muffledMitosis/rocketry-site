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
        className={`vehicle-card group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden border border-slate-700/50 cursor-pointer ${
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
              <div className="flex items-center text-slate-400 text-xs sm:text-sm">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {vehicle.year}
              </div>
            </div>

            {/* Vehicle Image Placeholder */}
            <div className="relative w-full h-32 sm:h-40 lg:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center shadow-lg">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-slate-300 transform group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-slate-200 transition-colors duration-300">
                {vehicle.name}
              </h3>
              <p className="text-slate-300 mb-4 sm:mb-6 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed text-sm sm:text-base">
                {vehicle.description}
              </p>

              {/* Quick Specs */}
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-slate-400">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-slate-500 flex-shrink-0" />
                  <span className="font-medium">Status:</span>
                  <span className="ml-1 sm:ml-2 capitalize">{vehicle.status}</span>
                </div>
                {vehicle.specifications.height && vehicle.specifications.height !== 'TBD' && (
                  <div className="flex items-center text-xs sm:text-sm text-slate-400">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="font-medium">Height:</span>
                    <span className="ml-1 sm:ml-2">{vehicle.specifications.height}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4 sm:pt-6 border-t border-slate-700 group-hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Learn More
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-700 group-hover:bg-slate-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-300 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden flex items-center">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our Vehicles
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-slate-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              Explore our fleet of cutting-edge launch vehicles, each designed and built by our talented team
              to push the boundaries of student aerospace engineering.
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">{vehicles.length}</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Total Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">{vehicles.filter(v => v.status === 'active').length}</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">{vehicles.filter(v => v.status === 'testing').length}</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Testing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-1 sm:mb-2">{vehicles.filter(v => v.status === 'development').length}</div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Development</div>
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