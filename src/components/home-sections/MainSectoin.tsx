import Image from 'next/image'
import heroImage from '@/assets/images/heroImage.jpg'

export default function MainSection() {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<Image
				src={heroImage}
				alt='Picture of a team'
				objectPosition='center'
				objectFit='cover'
				fill
			/>
		</div>
	);
}