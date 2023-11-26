import Image from 'next/image';
import HeroImg from 'public/hero.png';
import Button from './components/shared/Button';

export default function Home() {
	return (
		<div className='flex items-center gap-[100px]'>
			<div className='flex flex-1 flex-col gap-[50px]'>
				<h1 className='bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-[72px] font-extrabold leading-none text-transparent'>
					Better design for your digital products.
				</h1>
				<p className='text-[24px] font-[300]'>
					Turning your Idea into Reality. We bring together the teams from the
					global tech industry.
				</p>
				<Button name='See our works' url='/portfolio' />
			</div>

			<div className=''>
				<Image
					src={HeroImg}
					alt='hero'
					className='h-[500px] w-full object-contain'
				/>
			</div>
		</div>
	);
}
