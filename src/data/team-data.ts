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
    id: 'structures',
    name: 'Structures',
    description: 'Ensuring the rocket\'s structural integrity through advanced materials and mechanical design.',
    responsibilities: [
      'Structural analysis and finite element modeling',
      'Material selection and testing',
      'Mechanical design and integration',
      'Manufacturing process development'
    ],
    image: '/assets/images/team-pics/MDP.jpg'
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
    id: 'operations',
    name: 'Operations',
    description: 'Managing the logistics, safety protocols, and execution of rocket launches and team activities.',
    responsibilities: [
      'Launch coordination and safety',
      'Regulatory compliance',
      'Budget management',
      'Team coordination and scheduling'
    ],
    image: '/assets/images/team-pics/safety.png'
  },
  {
    id: 'outreach',
    name: 'Outreach',
    description: 'Building relationships with sponsors, educational institutions, and the broader community.',
    responsibilities: [
      'Sponsor relations and partnership development',
      'Educational outreach programs',
      'Media and public relations',
      'Recruitment and community engagement'
    ],
    image: '/assets/images/team-pics/engagement.jpg'
  }
];
