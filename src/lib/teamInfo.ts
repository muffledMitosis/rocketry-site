import aeroPic from '@/assets/images/teamBackgrounds/aerostructures.jpg';
import avioPic from '@/assets/images/teamBackgrounds/avionics.jpg';
import busiPic from '@/assets/images/teamBackgrounds/business.jpg';
import paylPic from '@/assets/images/teamBackgrounds/payload.jpg';
import propPic from '@/assets/images/teamBackgrounds/propulsion.jpg';
import recPic from '@/assets/images/teamBackgrounds/recovery.jpg';
import safePic from '@/assets/images/teamBackgrounds/safety.jpg';
import simPic from '@/assets/images/teamBackgrounds/simulations.jpg';

import { StaticImageData } from 'next/image';

interface TeamInfo {
  name: string;
  quickInfo?: string;
  backgroundImage?: StaticImageData;
}

const teamInfo: TeamInfo[] = [
  { name: 'Aerostructures', backgroundImage: aeroPic },
  { name: 'Avionics', backgroundImage: avioPic },
  { name: 'Business', backgroundImage: busiPic },
  { name: 'Payload', backgroundImage: paylPic },
  { name: 'Propulsion', backgroundImage: propPic },
  { name: 'Recovery', backgroundImage: recPic },
  { name: 'Safety & Legal', backgroundImage: safePic },
  { name: 'Simulations', backgroundImage: simPic },
];

export default teamInfo;
