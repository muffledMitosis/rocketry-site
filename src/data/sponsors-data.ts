export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: 'apogee' | 'ascent' | 'takeoff' | 'ignition';
}

export const partners: Partner[] = [
  {
    id: 'inspace',
    name: 'InSpace',
    logo: '/assets/images/partners/inspace.png',
    website: 'https://inspace.anu.edu.au/home',
    tier: 'apogee'
  },
  {
    id: 'research-school-of-physics',
    name: 'ANU Research School of Physics',
    logo: '/assets/images/partners/research-school-of-physics.png',
    website: 'https://physics.anu.edu.au',
    tier: 'apogee'
  },
  {
    id: 'liquid-instruments',
    name: 'Liquid Instruments',
    logo: '/assets/images/partners/liquid-instruments.png',
    website: 'https://liquidinstruments.com',
    tier: 'ascent'
  },
  {
    id: 'gme',
    name: 'GME Systems Inc',
    logo: '/assets/images/partners/gme.png',
    website: 'https://www.gme.net.au/au/',
    tier: 'ascent'
  },
  {
    id: 'acosas',
    name: 'ANU Collage of Systems and Society',
    logo: '/assets/images/partners/systems-and-society.png',
    website: 'https://systems.anu.edu.au/',
    tier: 'ascent'
  },
  {
    id: 'aographics',
    name: 'AOGraphics',
    logo: '/assets/images/partners/aographics.png',
    website: 'https://www.aographics.com.au/',
    tier: 'takeoff'
  },
  {
    id: 'ansys',
    name: 'Ansys',
    logo: '/assets/images/partners/ansys.png',
    website: 'https://www.ansys.com/',
    tier: 'takeoff'
  },
  {
    id: 'solid-works',
    name: 'DS Solid Works',
    logo: '/assets/images/partners/solidworks.png',
    website: 'https://www.solidworks.com/',
    tier: 'ignition'
  },
  {
    id: '4data',
    name: '4Data',
    logo: '/assets/images/partners/4data.png',
    website: 'https://www.4data.com.au/',
    tier: 'ignition'
  },
  {
    id: 'anu',
    name: 'Australian National University',
    logo: '/assets/images/partners/anu.png',
    website: 'https://www.anu.edu.au/',
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
