export interface Sponsor {
  id: string;
  name: string;
  slogan: string;
  logo: string;
  website: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'supporter';
}

export const sponsors: Sponsor[] = [
  {
    id: 'aerospace-corp',
    name: 'Aerospace Corporation',
    slogan: 'Engineering Tomorrow\'s Space Solutions',
    logo: '/assets/images/sponsors/aerospace-corp.png',
    website: 'https://example.com/aerospace-corp',
    tier: 'platinum'
  },
  {
    id: 'rocket-dynamics',
    name: 'Rocket Dynamics Ltd',
    slogan: 'Propelling Innovation Forward',
    logo: '/assets/images/sponsors/rocket-dynamics.png',
    website: 'https://example.com/rocket-dynamics',
    tier: 'platinum'
  },
  {
    id: 'stellar-tech',
    name: 'Stellar Technologies',
    slogan: 'Reaching for the Stars',
    logo: '/assets/images/sponsors/stellar-tech.png',
    website: 'https://example.com/stellar-tech',
    tier: 'gold'
  },
  {
    id: 'orbital-systems',
    name: 'Orbital Systems Inc',
    slogan: 'Advanced Satellite Solutions',
    logo: '/assets/images/sponsors/orbital-systems.png',
    website: 'https://example.com/orbital-systems',
    tier: 'gold'
  },
  {
    id: 'nova-engineering',
    name: 'Nova Engineering',
    slogan: 'Precision in Motion',
    logo: '/assets/images/sponsors/nova-engineering.png',
    website: 'https://example.com/nova-engineering',
    tier: 'gold'
  },
  {
    id: 'cosmic-materials',
    name: 'Cosmic Materials Co',
    slogan: 'Materials for the Future',
    logo: '/assets/images/sponsors/cosmic-materials.png',
    website: 'https://example.com/cosmic-materials',
    tier: 'silver'
  },
  {
    id: 'propulsion-plus',
    name: 'Propulsion Plus',
    slogan: 'Power Your Dreams',
    logo: '/assets/images/sponsors/propulsion-plus.png',
    website: 'https://example.com/propulsion-plus',
    tier: 'silver'
  },
  {
    id: 'space-ventures',
    name: 'Space Ventures Group',
    slogan: 'Investing in Tomorrow',
    logo: '/assets/images/sponsors/space-ventures.png',
    website: 'https://example.com/space-ventures',
    tier: 'bronze'
  },
  {
    id: 'galaxy-components',
    name: 'Galaxy Components',
    slogan: 'Quality Components for Space',
    logo: '/assets/images/sponsors/galaxy-components.png',
    website: 'https://example.com/galaxy-components',
    tier: 'bronze'
  },
  {
    id: 'astro-solutions',
    name: 'Astro Solutions',
    slogan: 'Your Space Technology Partner',
    logo: '/assets/images/sponsors/astro-solutions.png',
    website: 'https://example.com/astro-solutions',
    tier: 'supporter'
  }
];

export const sponsorTiers = {
  platinum: {
    name: 'Platinum Partners',
    color: 'from-gray-300 to-gray-500',
    textColor: 'text-gray-700',
    description: 'Our premier partners enabling breakthrough innovations'
  },
  gold: {
    name: 'Gold Partners', 
    color: 'from-yellow-300 to-yellow-500',
    textColor: 'text-yellow-700',
    description: 'Strategic partners driving our mission forward'
  },
  silver: {
    name: 'Silver Partners',
    color: 'from-gray-200 to-gray-400', 
    textColor: 'text-gray-600',
    description: 'Valued partners supporting our growth'
  },
  bronze: {
    name: 'Bronze Partners',
    color: 'from-orange-300 to-orange-500',
    textColor: 'text-orange-700', 
    description: 'Essential partners in our journey'
  },
  supporter: {
    name: 'Supporters',
    color: 'from-blue-300 to-blue-500',
    textColor: 'text-blue-700',
    description: 'Community supporters making a difference'
  }
};