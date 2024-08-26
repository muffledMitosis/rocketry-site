// 'use client';

import { Butcherman } from 'next/font/google';
import Image from 'next/image';
import { Button } from '../ui/button';

// import joinus_img from '@/assets/images/action-pages/joinus.jpg'
// import joinusmd_img from '@/assets/images/action-pages/joinus-md.jpg'
// import sponsorus_img from '@/assets/images/action-pages/sponsorus.jpg'
// import sponsorusmd_img from '@/assets/images/action-pages/sponsorus-md.jpg'

function ActionButton({text}: {text:string}) {
  return (
    <Button className="py-8 relative z-50 inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="text-4xl m-8">{text}</div>
    </Button>
  );
}

export default function JoinUsSection() {
  return (
    <div className="relative w-screen bg-gray-800">
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-screen ">
          <img
            src="/images/action-pages/joinus.jpg"
            className="absolute object-cover w-full h-full"
          />
          <ActionButton text='Join Us 💪 Test change'/>

        </div>
        <div className="relative w-full md:w-1/2 h-screen">
          <img
            src="/images/action-pages/sponsorus-md.jpg"
            className="absolute object-cover w-full h-full"
          />
          <ActionButton text='Sponsor Us 💵' />
        </div>
      </div>
    </div>
  );
}
