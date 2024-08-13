import Image from 'next/image'
import heroImage from '@/assets/images/heroImage.jpg'
import logo from '@/assets/images/logoBlue1.png'

export default function MainSection() {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<div className='absolute inset-0 z-10 w-1/3 md:w-2/12 lg:w-1/12 m-5'>
				<Image
					src={logo}
					alt='logo'
				/>
			</div>
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