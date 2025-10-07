'use client';

import React, { useEffect, useState } from 'react';
import { vehicles, Vehicle } from '@/data/vehicles-data';
import { Rocket } from 'lucide-react';

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

  const VehicleCard: React.FC<{ vehicle: Vehicle; index: number }> = ({ vehicle, index }) => (
    <div
      id={vehicle.id}
      key={vehicle.id}
      className={`vehicle-card bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform hover:shadow-2xl hover:-translate-y-2 border border-slate-700/50 ${
        isVisible(vehicle.id) || isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="p-4 sm:p-6 lg:p-8 h-full">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Vehicle Image/Mission Patch */}
          <div className="relative w-full aspect-square mb-4 sm:mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            {vehicle.image ? (
              <img
                src={vehicle.image}
                alt={`${vehicle.name} Mission Patch`}
                className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-110"
              />
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center shadow-lg">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-slate-300" />
              </div>
            )}
          </div>

          {/* Vehicle Name */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-center">
            {vehicle.name}
          </h3>
        </div>
      </div>
    </div>
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