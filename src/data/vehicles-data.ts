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
    description: 'Our next bid upward, and an exciting new frontier for our team. Solstice is a united test vehicle, designed to test space hardware within Earth\'s atmosphere.',
    status: 'active',
    year: 2025,
    specifications: {
      height: 'TBD',
      diameter: 'TBD',
      mass: 'TBD',
      thrust: 'TBD',
      apogee: 'TBD'
    },
    image: '/assets/images/vehicles/solstice.png',
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
    image: '/assets/images/no-signal.jpg',
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
    image: '/assets/images/no-signal.jpg',
    slug: 'vibe-voyager'
  },
  {
    id: 'halo',
    name: 'Halo',
    description: 'A compact and efficient rocket designed for rapid deployment and precise trajectory control.',
    status: 'development',
    year: 2020,
    specifications: {
      height: 'TBD',
      diameter: 'TBD',
      mass: 'TBD',
      thrust: 'TBD',
      apogee: 'TBD'
    },
    image: '/assets/images/vehicles/halo.png',
    slug: 'halo'
  },
  {
    id: 'dyurra',
    name: 'Dyurra',
    description: 'TBD',
    status: 'development',
    year: 2024,
    specifications: {
      height: 'TBD',
      diameter: 'TBD',
      mass: 'TBD',
      thrust: 'TBD',
      apogee: 'TBD'
    },
    image: '/assets/images/no-signal.jpg',
    slug: 'dyurra'
  }
];

export const getVehicleBySlug = (slug: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.slug === slug);
};

export const getVehiclesByStatus = (status: Vehicle['status']): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.status === status);
};
