'use client';

import { fontAirstrike } from "@/lib/localfonts";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import heroImage from '@/assets/images/heroImage.jpg'

interface ViMiItemProps {
  heading: string,
  desc: string
}

const visionText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ullamcorper ipsum, et porta libero. Nulla libero risus, tristique pulvinar sem in, molestie luctus lacus. Phasellus dignissim mauris arcu, et pellentesque enim tristique a. Maecenas felis justo, interdum sed ante vitae, tincidunt tempor ligula. Sed convallis risus eget nunc viverra posuere. Aliquam eu tristique massa, sed aliquet ligula. Integer ultricies, libero nec molestie mattis, erat mi faucibus turpis, ac feugiat elit enim vehicula lectus. Phasellus luctus tempor tortor. Cras id velit urna. Fusce nulla metus, elementum sit amet arcu quis, pretium interdum turpis. Praesent auctor lacus ex, quis mattis turpis consectetur in.";

const missionText: string = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras mattis sodales magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eu consectetur orci, aliquet bibendum massa. Integer ac purus laoreet, bibendum velit malesuada, volutpat diam. Nullam ullamcorper bibendum vulputate. Ut quis sagittis sapien. Nam urna leo, pharetra eu leo sed, ullamcorper mattis purus. Phasellus efficitur tristique metus, posuere accumsan lectus viverra a. Vestibulum volutpat sed quam id pulvinar. Mauris id sapien in nunc ornare malesuada. Nullam at lobortis augue. In hac habitasse platea dictumst. Morbi et venenatis velit.";

const ViMiItem: React.FC<ViMiItemProps> = (props) => {
  return (
    <div className="relative w-full h-screen">
      <div className="flex flex-col justify-center h-full z-10 text-white">
        <h1 className={fontAirstrike.className + " text-6xl text-center"}>{props.heading}</h1>
        <div className="flex flex-row justify-center w-full">
          <p className="text-center w-2/3 mt-16">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function VisionMissionSection() {
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

      {/* Vision Mission */}
      <div className="z-30 absolute flex flex-col md:flex-row w-screen text-white">
        <div className="w-full md:w-1/2 h-screen">
          <ViMiItem heading="Vision" desc={visionText} />
        </div>
        <div className="w-full md:w-1/2 h-screen">
          <ViMiItem heading="Mission" desc={missionText} />
        </div>
      </div>
    </div>
  );
}
