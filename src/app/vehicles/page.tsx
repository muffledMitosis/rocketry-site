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
      {/* Vehicle Image/Mission Patch */}
      <div className="h-48 sm:h-56 lg:h-64 overflow-hidden bg-slate-900/40 flex items-center justify-center">
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={`${vehicle.name} Mission Patch`}
            className="w-full h-full object-contain p-6 transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
            <Rocket className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-slate-400 transition-transform duration-500 hover:scale-110" />
          </div>
        )}
      </div>

      {/* Vehicle Name */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-center">
          {vehicle.name}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28">

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