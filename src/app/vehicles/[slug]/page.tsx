'use client';

import React from 'react';
import { vehicles, getVehicleBySlug, Vehicle } from '@/data/vehicles-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Activity, Ruler, Weight, Zap, TrendingUp, Rocket } from 'lucide-react';

interface VehiclePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const VehicleDetailPage: React.FC<VehiclePageProps> = ({ params }) => {
  const [vehicle, setVehicle] = React.useState<Vehicle | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadVehicle = async () => {
      const resolvedParams = await params;
      const vehicleData = getVehicleBySlug(resolvedParams.slug);
      setVehicle(vehicleData || null);
      setLoading(false);
      
      if (!vehicleData) {
        notFound();
      }
    };
    
    loadVehicle();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading vehicle details...</p>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return null;
  }

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

  const SpecificationCard: React.FC<{ 
    icon: React.ReactNode; 
    label: string; 
    value: string; 
    description?: string;
  }> = ({ icon, label, value, description }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{label}</h3>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
      </div>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
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
                radial-gradient(circle at 7px 2px, rgba(255,255,255,0.08) 1px, transparent 0)
              `,
              backgroundSize: '12px 12px, 15px 15px, 18px 18px',
              backgroundPosition: '0 0, 3px 7px, 8px 2px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-blue-900/30 opacity-70" />
        </div>
        
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <Link 
            href="/vehicles" 
            className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Vehicles
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vehicle Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getStatusColor(vehicle.status)}`}>
                  {getStatusText(vehicle.status)}
                </div>
                <div className="flex items-center text-blue-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  {vehicle.year}
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {vehicle.name}
              </h1>
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
              <p className="text-xl text-blue-100 leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Vehicle Image */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-2xl">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-24 h-24 text-white" />
                </div>
              </div>
              {/* Floating status indicator */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-900 capitalize">{vehicle.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed technical specifications and performance characteristics of the {vehicle.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <SpecificationCard
              icon={<Ruler className="w-5 h-5 text-blue-600" />}
              label="Height"
              value={vehicle.specifications.height || 'TBD'}
              description="Total vehicle height"
            />
            <SpecificationCard
              icon={<Ruler className="w-5 h-5 text-blue-600" />}
              label="Diameter"
              value={vehicle.specifications.diameter || 'TBD'}
              description="Maximum diameter"
            />
            <SpecificationCard
              icon={<Weight className="w-5 h-5 text-blue-600" />}
              label="Mass"
              value={vehicle.specifications.mass || 'TBD'}
              description="Total loaded mass"
            />
            <SpecificationCard
              icon={<Zap className="w-5 h-5 text-blue-600" />}
              label="Thrust"
              value={vehicle.specifications.thrust || 'TBD'}
              description="Maximum thrust output"
            />
            <SpecificationCard
              icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
              label="Apogee"
              value={vehicle.specifications.apogee || 'TBD'}
              description="Maximum altitude reached"
            />
            <SpecificationCard
              icon={<Activity className="w-5 h-5 text-blue-600" />}
              label="Status"
              value={getStatusText(vehicle.status)}
              description="Current development phase"
            />
          </div>

          {/* Placeholder sections for future content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission History */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mission History</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600">Mission data and flight history will be displayed here once available.</p>
                </div>
              </div>
            </div>

            {/* Design Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Features</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600">Detailed design features and innovations will be showcased here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Vehicles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Vehicles
            </h2>
            <p className="text-gray-600">Explore more vehicles from our fleet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles
              .filter(v => v.id !== vehicle.id)
              .slice(0, 3)
              .map((otherVehicle) => (
                <Link key={otherVehicle.id} href={`/vehicles/${otherVehicle.slug}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(otherVehicle.status)}`}>
                        {getStatusText(otherVehicle.status)}
                      </div>
                      <span className="text-sm text-gray-500">{otherVehicle.year}</span>
                    </div>
                    
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <Rocket className="w-12 h-12 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{otherVehicle.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{otherVehicle.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default VehicleDetailPage;