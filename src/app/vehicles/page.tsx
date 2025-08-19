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
        <div className="p-8 h-full">
          <div className="flex flex-col h-full">
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(vehicle.status)}`}>
                {getStatusText(vehicle.status)}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {vehicle.year}
              </div>
            </div>

            {/* Vehicle Image Placeholder */}
            <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Rocket className="w-16 h-16 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {vehicle.name}
              </h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                {vehicle.description}
              </p>

              {/* Quick Specs */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Activity className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="font-medium">Status:</span>
                  <span className="ml-2 capitalize">{vehicle.status}</span>
                </div>
                {vehicle.specifications.height && vehicle.specifications.height !== 'TBD' && (
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 mr-2" />
                    <span className="font-medium">Height:</span>
                    <span className="ml-2">{vehicle.specifications.height}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  Learn More
                </span>
                <div className="w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-3 h-3 text-blue-600 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Grain/Noise Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
                radial-gradient(circle at 3px 5px, rgba(255,255,255,0.1) 1px, transparent 0),
                radial-gradient(circle at 7px 2px, rgba(255,255,255,0.08) 1px, transparent 0),
                radial-gradient(circle at 2px 8px, rgba(255,255,255,0.12) 1px, transparent 0)
              `,
              backgroundSize: '12px 12px, 15px 15px, 18px 18px, 20px 20px',
              backgroundPosition: '0 0, 3px 7px, 8px 2px, 1px 12px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-blue-900/30 opacity-70" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Vehicles
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our fleet of cutting-edge launch vehicles, each designed and built by our talented team 
              to push the boundaries of student aerospace engineering.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{vehicles.length}</div>
                <div className="text-blue-200">Total Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{vehicles.filter(v => v.status === 'active').length}</div>
                <div className="text-blue-200">Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{vehicles.filter(v => v.status === 'testing').length}</div>
                <div className="text-blue-200">Testing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{vehicles.filter(v => v.status === 'development').length}</div>
                <div className="text-blue-200">Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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