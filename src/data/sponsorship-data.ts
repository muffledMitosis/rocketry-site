export interface PartnershipTier {
  tier: string;
  price: string;
  benefits: string[];
  color: string;
}

export interface Partner {
  name: string;
  logo: string;
  tier: string;
  website: string;
}

export const partnershipTiers: PartnershipTier[] = [
  {
    tier: 'Apogee',
    price: '$10,000+',
    benefits: [
      'Prime logo placement on rocket and all team gear',
      'Featured in all media coverage and press releases',
      'VIP access to launches and special events',
      'Dedicated social media posts and spotlight features',
      'Opportunity for on-campus recruitment events',
      'Team presentation at your company',
      'All benefits from lower tiers'
    ],
    color: 'from-slate-700 to-slate-900'
  },
  {
    tier: 'Ascent',
    price: '$5,000 - $9,999',
    benefits: [
      'Large logo on rocket and team uniforms',
      'Recognition in team presentations and competitions',
      'Invitation to launches and demonstration events',
      'Regular social media recognition',
      'Company materials in recruitment events',
      'All benefits from lower tiers'
    ],
    color: 'from-amber-500 to-amber-700'
  },
  {
    tier: 'Take-off',
    price: '$2,500 - $4,999',
    benefits: [
      'Medium logo on rocket and team website',
      'Acknowledgment in competition materials',
      'Updates on team progress and achievements',
      'Social media mentions',
      'All benefits from Ignition tier'
    ],
    color: 'from-gray-300 to-gray-500'
  },
  {
    tier: 'Ignition',
    price: '$1,000 - $2,499',
    benefits: [
      'Small logo on team website',
      'Acknowledgment in team reports',
      'Certificate of appreciation',
      'Team newsletter subscription'
    ],
    color: 'from-amber-600 to-amber-800'
  },
  {
    tier: 'In-Kind',
    price: 'Materials & Services',
    benefits: [
      'Recognition commensurate with estimated value',
      'Acknowledgment of specific contributions',
      'Potential for product testing and feedback',
      'Case study opportunities'
    ],
    color: 'from-blue-500 to-blue-700'
  }
];

export const currentPartners: Partner[] = [
  {
    name: 'ANU College of Engineering',
    logo: 'https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=200',
    tier: 'Apogee',
    website: '#'
  },
  {
    name: 'Aerospace Dynamics',
    logo: 'https://images.pexels.com/photos/6612380/pexels-photo-6612380.jpeg?auto=compress&cs=tinysrgb&w=200',
    tier: 'Ascent',
    website: '#'
  },
  {
    name: 'TechSystems International',
    logo: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=200',
    tier: 'Take-off',
    website: '#'
  },
  {
    name: 'Advanced Materials Co.',
    logo: 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=200',
    tier: 'Ignition',
    website: '#'
  },
  {
    name: 'Precision Machining',
    logo: 'https://images.pexels.com/photos/4871011/pexels-photo-4871011.jpeg?auto=compress&cs=tinysrgb&w=200',
    tier: 'In-Kind',
    website: '#'
  }
];

export const partnershipBenefits = [
  {
    title: 'Brand Visibility',
    description: 'Your logo featured prominently on our rockets, team uniforms, website, and promotional materials that reach thousands of industry professionals, students, and aerospace enthusiasts.'
  },
  {
    title: 'Talent Pipeline',
    description: 'Direct access to top engineering talent and future innovators. Our members represent the next generation of aerospace professionals.'
  },
  {
    title: 'Technical Innovation',
    description: 'Opportunity to participate in cutting-edge research and development in rocketry, propulsion, materials science, and avionics.'
  },
  {
    title: 'Community Impact',
    description: 'Support STEM education initiatives and inspire the next generation of scientists and engineers through our outreach programs.'
  },
  {
    title: 'Media Exposure',
    description: 'Recognition in competition coverage, press releases, and social media campaigns that highlight our achievements and partners.'
  },
  {
    title: 'Product Testing',
    description: 'Real-world testing and validation of products, materials, or technologies in demanding aerospace applications.'
  }
];
