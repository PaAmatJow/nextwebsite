// import Image from "next/image"
import Link from 'next/link';

const Portfolio = () => {
	return (
		<div>
			<h1 className='my-[20px] text-[32px] font-bold'>Choose a gallery</h1>
			<div className='flex gap-[50px]'>
				<Link
					className='group relative h-[400px] w-[300px] rounded-[5px] border-2 border-[#bbb] bg-illustration bg-cover'
					href='/portfolio/illustrations'
				>
					<span className='absolute bottom-[10px] right-[10px] text-[32px] font-bold group-hover:text-[#53c28b]'>
						Illustrations
					</span>
				</Link>
				<Link
					className='group relative h-[400px] w-[300px] rounded-[5px] border-2 border-[#bbb] bg-website bg-cover'
					href='/portfolio/websites'
				>
					<span className='absolute bottom-[10px] right-[10px] text-[32px] font-bold group-hover:text-[#53c28b]'>
						Websites
					</span>
				</Link>
				<Link
					className='group relative h-[400px] w-[300px] rounded-[5px] border-2 border-[#bbb] bg-application bg-cover'
					href='/portfolio/applications'
				>
					<span className='absolute bottom-[10px] right-[10px] text-[32px] font-bold group-hover:text-[#53c28b]'>
						Applications
					</span>
				</Link>
			</div>
		</div>
	);
};
export default Portfolio;
