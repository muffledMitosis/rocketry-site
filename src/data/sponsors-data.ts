export interface Partner {
  id: string;
  name: string;
  slogan: string;
  logo: string;
  website: string;
  tier: 'apogee' | 'ascent' | 'takeoff' | 'ignition';
}

export const partners: Partner[] = [
  {
    id: 'aerospace-corp',
    name: 'Aerospace Corporation',
    slogan: 'Engineering Tomorrow\'s Space Solutions',
    logo: '/assets/images/partners/aerospace-corp.png',
    website: 'https://example.com/aerospace-corp',
    tier: 'apogee'
  },
  {
    id: 'rocket-dynamics',
    name: 'Rocket Dynamics Ltd',
    slogan: 'Propelling Innovation Forward',
    logo: '/assets/images/partners/rocket-dynamics.png',
    website: 'https://example.com/rocket-dynamics',
    tier: 'apogee'
  },
  {
    id: 'stellar-tech',
    name: 'Stellar Technologies',
    slogan: 'Reaching for the Stars',
    logo: '/assets/images/partners/stellar-tech.png',
    website: 'https://example.com/stellar-tech',
    tier: 'ascent'
  },
  {
    id: 'orbital-systems',
    name: 'Orbital Systems Inc',
    slogan: 'Advanced Satellite Solutions',
    logo: '/assets/images/partners/orbital-systems.png',
    website: 'https://example.com/orbital-systems',
    tier: 'ascent'
  },
  {
    id: 'nova-engineering',
    name: 'Nova Engineering',
    slogan: 'Precision in Motion',
    logo: '/assets/images/partners/nova-engineering.png',
    website: 'https://example.com/nova-engineering',
    tier: 'ascent'
  },
  {
    id: 'cosmic-materials',
    name: 'Cosmic Materials Co',
    slogan: 'Materials for the Future',
    logo: '/assets/images/partners/cosmic-materials.png',
    website: 'https://example.com/cosmic-materials',
    tier: 'takeoff'
  },
  {
    id: 'propulsion-plus',
    name: 'Propulsion Plus',
    slogan: 'Power Your Dreams',
    logo: '/assets/images/partners/propulsion-plus.png',
    website: 'https://example.com/propulsion-plus',
    tier: 'takeoff'
  },
  {
    id: 'space-ventures',
    name: 'Space Ventures Group',
    slogan: 'Investing in Tomorrow',
    logo: '/assets/images/partners/space-ventures.png',
    website: 'https://example.com/space-ventures',
    tier: 'ignition'
  },
  {
    id: 'galaxy-components',
    name: 'Galaxy Components',
    slogan: 'Quality Components for Space',
    logo: '/assets/images/partners/galaxy-components.png',
    website: 'https://example.com/galaxy-components',
    tier: 'ignition'
  },
  {
    id: 'astro-solutions',
    name: 'Astro Solutions',
    slogan: 'Your Space Technology Partner',
    logo: '/assets/images/partners/astro-solutions.png',
    website: 'https://example.com/astro-solutions',
    tier: 'ignition'
  }
];

export const partnerTiers = {
  apogee: {
    name: 'Apogee Partners',
    color: 'from-purple-400 to-purple-600',
    textColor: 'text-purple-700',
    description: 'Our premier partners enabling breakthrough innovations at the highest level'
  },
  ascent: {
    name: 'Ascent Partners', 
    color: 'from-blue-400 to-blue-600',
    textColor: 'text-blue-700',
    description: 'Strategic partners driving our mission upward and forward'
  },
  takeoff: {
    name: 'Take-off Partners',
    color: 'from-green-400 to-green-600', 
    textColor: 'text-green-700',
    description: 'Essential partners launching our initiatives'
  },
  ignition: {
    name: 'Ignition Partners',
    color: 'from-orange-400 to-orange-600',
    textColor: 'text-orange-700', 
    description: 'Community partners sparking innovation and growth'
  }
};