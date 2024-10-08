import Image from 'next/image'
import heroImage from '@/assets/images/heroImage.jpg'
import logo from '@/assets/images/logoBlue1.png'
import heroText from '@/assets/images/hero-text.png'
import heroTextSm from '@/assets/images/hero-text-sm.png'
import { fontAirstrike } from '@/lib/localfonts';

import { FaArrowTurnDown } from "react-icons/fa6";
import { BsBoxArrowInDownRight } from "react-icons/bs";


export default function MainSection() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Picture of a team"
        objectPosition="center"
        objectFit="cover"
        fill
        className="z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

      {/* Logo */}
      <div className='absolute top-0 left-0 z-50 w-1/3 md:w-2/12 lg:w-1/12 m-5'>
        <Image
          className='z-50'
          src={logo}
          alt='logo'
        />
      </div>

      {/* Text */}
      <div className={fontAirstrike.className + ' absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-4xl text-white'}>
        {/* Welcome to ANU Rocketry */}
				<Image
          className='hidden md:inline'
					src={heroText}
					alt='hero-text'
				/>
				<Image
          className='inline md:hidden'
					src={heroTextSm}
					alt='hero-text'
				/>
      </div>

      <div className='absolute flex flex-row items-center mb-12 bottom-0 left-1/2 -translate-x-1/2 z-30 text-white text-3xl font-thin cursor-pointer'>
        <div>Learn More</div>
        <div className='ml-2'><BsBoxArrowInDownRight /></div>
      </div>
    </div>
  );
}
