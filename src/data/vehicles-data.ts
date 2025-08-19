export interface Vehicle {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'retired' | 'development' | 'testing';
  year: number;
  specifications: {
    height?: string;
    diameter?: string;
    mass?: string;
    thrust?: string;
    apogee?: string;
  };
  image?: string;
  slug: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'solstice',
    name: 'Solstice',
    description: 'A high-performance launch vehicle designed for precision and reliability in atmospheric testing.',
    status: 'active',
    year: 2024,
    specifications: {
      height: 'TBD',
      diameter: 'TBD',
      mass: 'TBD',
      thrust: 'TBD',
      apogee: 'TBD'
    },
    image: '/assets/images/vehicles/solstice.jpg',
    slug: 'solstice'
  },
  {
    id: 'garawana',
    name: 'Garawana',
    description: 'An advanced rocket system featuring cutting-edge propulsion technology and innovative design.',
    status: 'active',
    year: 2023,
    specifications: {
      height: 'TBD',
      diameter: 'TBD',
      mass: 'TBD',
      thrust: 'TBD',
      apogee: 'TBD'
    },
    image: '/assets/images/vehicles/garawana.jpg',
    slug: 'garawana'
  },
  {
    id: 'vibe-voyager',
    name: 'Vibe Voyager',
    description: 'A versatile launch platform designed for experimental payloads and atmospheric research missions.',
    status: 'testing',
    year: 2024,
    specifications: {
      height: 'TBD',
      diameter: 'TBD',
      mass: 'TBD',
      thrust: 'TBD',
      apogee: 'TBD'
    },
    image: '/assets/images/vehicles/vibe-voyager.jpg',
    slug: 'vibe-voyager'
  },
  {
    id: 'halo',
    name: 'Halo',
    description: 'A compact and efficient rocket designed for rapid deployment and precise trajectory control.',
    status: 'development',
    year: 2024,
    specifications: {
      height: 'TBD',
      diameter: 'TBD',
      mass: 'TBD',
      thrust: 'TBD',
      apogee: 'TBD'
    },
    image: '/assets/images/vehicles/halo.jpg',
    slug: 'halo'
  }
];

export const getVehicleBySlug = (slug: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.slug === slug);
};

export const getVehiclesByStatus = (status: Vehicle['status']): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.status === status);
};