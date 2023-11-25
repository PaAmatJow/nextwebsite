import Image from 'next/image';
import HeroImg from 'public/hero.png';

export default function Home() {
	return (
		<div className='flex items-center gap-[100px]'>
			<div className='flex-1 flex flex-col gap-[50px]'>
				<h1 className='text-[72px] font-extrabold leading-none bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent'>
					Better design for your digital products.
				</h1>
				<p className='text-[24px] font-[300]'>
					Turning your Idea into Reality. We bring together the teams from the
					global tech industry.
				</p>
				<button className='p-[20px] bg-[#53c28b] rounded-md text-white w-fit'>See Our Works</button>
			</div>

			<div className=''>
				<Image
					src={HeroImg}
					alt='hero'
					className='w-full h-[500px] object-cover'
				/>
			</div>
		</div>
	);
}
