import imageTop from '@/assets/images/sponsors/imageTop.jpg';
import imageMiddle from '@/assets/images/sponsors/imageMiddle.jpg';
import imageBottom from '@/assets/images/sponsors/imageBottom.jpg';

import { fontAirstrike } from '@/lib/localfonts';

import Image from 'next/image';

export default function SponsorsSection() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-2/3 h-full">
        <h1 className={fontAirstrike.className + ' text-4xl p-4'}>Sponsors</h1>
      </div>
      <div className="w-1/3 h-full flex flex-col">
        <div className="relative w-full h-1/4">
          <Image
            src={imageTop}
            alt="Picture of a team"
            objectPosition="center"
            objectFit="cover"
            fill
          />
        </div>
        <div className="relative w-full h-1/4">
          <Image
            src={imageMiddle}
            alt="Picture of a team"
            objectPosition="center"
            objectFit="cover"
            fill
          />
        </div>
        <div className="relative w-full h-2/4">
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
