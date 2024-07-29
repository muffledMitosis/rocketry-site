'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import TeamElementView from "@/components/TeamElementView";

import teamInfo from "@/lib/teamInfo";
import { LoremIpsum } from "lorem-ipsum";
import { useEffect, useState } from "react";


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default function TeamsSection() {

	const [loremTexts, setLoremTexts] = useState<string[]>([]);

  useEffect(() => {
    const texts = teamInfo.map(() => lorem.generateParagraphs(1));
    setLoremTexts(texts);
  }, []);

	return (
		<Carousel 
			className="w-screen"
			opts={{
				loop: true
			}}
			plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
		>
			<CarouselContent>
				{
					teamInfo.map((team, index) => (
						<CarouselItem key={team.name}>
							<TeamElementView 
								teamName={team.name}
								aboutText={loremTexts[index]}
								backgroundImage={team.backgroundImage}
							/>
						</CarouselItem>
					))
				}
			</CarouselContent>
			{/* <CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	);
}