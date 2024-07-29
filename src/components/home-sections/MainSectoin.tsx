import Image from 'next/image'
import heroImage from '@/assets/images/heroImage.jpg'

export default function MainSection() {
	return (
		<div className="w-screen">
			<Image
				src={heroImage}
				alt='Picture of a team'
			/>
		</div>
	);
}