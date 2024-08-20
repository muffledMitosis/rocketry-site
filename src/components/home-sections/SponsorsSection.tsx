'use client';

import imageTop from '@/assets/images/sponsors/imageTop.jpg';
import imageMiddle from '@/assets/images/sponsors/imageMiddle.jpg';
import imageBottom from '@/assets/images/sponsors/imageBottom.jpg';

import l4data from '@/assets/images/sponsor-logos/4data.png';
import lansys from '@/assets/images/sponsor-logos/ansys.png';
import lcecc from '@/assets/images/sponsor-logos/cecc.png';
import lgme from '@/assets/images/sponsor-logos/gme.png';
import linspace from '@/assets/images/sponsor-logos/inspace.png';
import lleap from '@/assets/images/sponsor-logos/leap.png';
import lnorth from '@/assets/images/sponsor-logos/north.png';
import lrdg from '@/assets/images/sponsor-logos/rdg.png';

import { fontAirstrike } from '@/lib/localfonts';

import Image from 'next/image';

export default function SponsorsSection() {

  const sponsLogos = [
    l4data,
    lansys,
    lcecc,
    lgme,
    linspace,
    lleap,
    lnorth,
    lrdg
  ];

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <div className="w-full h-2/3 md:w-2/3 md:h-full bg-gray-800">
        <h1 className={fontAirstrike.className + ' text-4xl p-4 text-white md:ml-8 md:mt-8'}>Sponsors</h1>
        <div className='w-full h-full'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mx-8 md:mx-16 mt-8 md:mt-16'>
            {sponsLogos.map(logo=><Image className="" src={logo} alt="logo"/>)}
          </div>
        </div>
      </div>
      <div className="h-1/3 w-full md:w-1/3 md:h-full flex flex-row md:flex-col">
        <div className="relative h-full w-1/4 md:w-full md:h-1/4">
          <Image
            src={imageTop}
            alt="Picture of a team"
            objectPosition="center"
            objectFit="cover"
            fill
          />
        </div>
        <div className="relative h-full w-1/4 md:w-full md:h-1/4">
          <Image
            src={imageMiddle}
            alt="Picture of a team"
            objectPosition="center"
            objectFit="cover"
            fill
          />
        </div>
        <div className="relative h-full w-2/4 md:w-full md:h-2/4">
          <Image
            src={imageBottom}
            alt="Picture of a team"
            objectPosition="center"
            objectFit="cover"
            fill
          />
        </div>
      </div>
    </div>
  );
}
