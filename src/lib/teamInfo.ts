import aeroPic from '@/assets/images/teamBackgrounds/aerostructures.jpg'
import { StaticImageData } from 'next/image';

interface TeamInfo {
	name: string,
	quickInfo?: string,
	backgroundImage?: StaticImageData,
}

const teamInfo: TeamInfo[] = [
  { name: 'Aerostructures', backgroundImage: aeroPic},
  { name: 'Avionics' },
  { name: 'Business' },
  { name: 'Payload' },
  { name: 'Propulsion' },
  { name: 'Recovery' },
  { name: 'Safety & Legal' },
  { name: 'Simulations' },
];

export default teamInfo;