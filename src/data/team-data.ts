export interface Team {
  id: string;
  name: string;
  description: string;
  responsibilities: string[];
  image: string;
}

export const teams: Team[] = [
  {
    id: 'aerostructures',
    name: 'Aerostructures',
    description: 'Optimizing the rocket\'s flight characteristics through computational fluid dynamics and wind tunnel testing.',
    responsibilities: [
      'Airframe design and optimization',
      'Computational fluid dynamics (CFD) analysis',
      'Wind tunnel testing and validation',
      'Flight stability analysis'
    ],
    image: '/assets/images/team-pics/Aerostructures.png'
  },
  {
    id: 'propulsion',
    name: 'Propulsion',
    description: 'Developing and testing innovative propulsion systems to achieve greater altitudes and improved performance.',
    responsibilities: [
      'Engine design and optimization',
      'Fuel research and development',
      'Static fire testing',
      'Performance analysis and improvement'
    ],
    image: 'https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'payload',
    name: 'Payload',
    description: 'Creating scientific experiments and technical demonstrations to be carried on rocket flights.',
    responsibilities: [
      'Experiment design and development',
      'Data collection and analysis',
      'Payload integration with rocket systems',
      'Post-flight scientific analysis'
    ],
    image: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'avionics',
    name: 'Avionics',
    description: 'Developing the electronic systems that control, guide, and track the rocket during flight.',
    responsibilities: [
      'Flight computer design and programming',
      'Telemetry system development',
      'Sensor integration and data collection',
      'Recovery system electronics'
    ],
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'recovery',
    name: 'Recovery',
    description: 'Designing systems to safely recover the rocket after flight for reusability and data collection.',
    responsibilities: [
      'Parachute design and deployment systems',
      'Descent rate calculations',
      'Impact mitigation strategies',
      'Reusability optimization'
    ],
    image: 'https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'dynamics-control',
    name: 'Dynamics and Control',
    description: 'Designing control systems and analyzing flight dynamics to ensure stable and predictable rocket behavior.',
    responsibilities: [
      'Flight dynamics modeling',
      'Control system design',
      'Stability analysis',
      'Guidance algorithm development'
    ],
    image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'engagement-outreach',
    name: 'Engagement and Outreach',
    description: 'Building relationships with the community, educational institutions, and promoting aerospace education.',
    responsibilities: [
      'Educational outreach programs',
      'Community engagement',
      'School visit coordination',
      'Public demonstrations'
    ],
    image: '/assets/images/team-pics/engagement.jpg'
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description: 'Managing the operational aspects of launches, transportation, and team coordination.',
    responsibilities: [
      'Launch site coordination',
      'Equipment transportation',
      'Team scheduling and logistics',
      'Event planning and execution'
    ],
    image: 'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'budget-inventory',
    name: 'Budget and Inventory',
    description: 'Managing financial resources and tracking equipment and materials inventory.',
    responsibilities: [
      'Budget planning and tracking',
      'Financial reporting',
      'Inventory management',
      'Purchase coordination'
    ],
    image: 'https://images.pexels.com/photos/3153200/pexels-photo-3153200.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'media-design-partnerships',
    name: 'Media Design & Partnerships',
    description: 'Creating visual content, managing partnerships, and developing the team\'s brand presence.',
    responsibilities: [
      'Graphic design and branding',
      'Partnership development',
      'Social media management',
      'Marketing materials creation'
    ],
    image: '/assets/images/team-pics/MDP.jpg'
  },
  {
    id: 'safety-legal',
    name: 'Safety and Legal',
    description: 'Ensuring all activities comply with safety regulations and legal requirements.',
    responsibilities: [
      'Safety protocol development',
      'Regulatory compliance',
      'Risk assessment and mitigation',
      'Legal documentation'
    ],
    image: '/assets/images/team-pics/safety.png'
  },
  {
    id: 'certifications',
    name: 'Certifications',
    description: 'Managing certification processes and ensuring compliance with aerospace standards.',
    responsibilities: [
      'Certification documentation',
      'Standards compliance',
      'Quality assurance',
      'Regulatory submissions'
    ],
    image: 'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=1280'
  }
];
