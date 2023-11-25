import Image from 'next/image';

const Footer = () => {
	return (
		<div className='flex h-[50px] items-center justify-between text-sm'>
			<div>&copy;2023 Lamamia. All rights reserved.</div>

			<div className='flex items-center gap-[10px]'>
				<Image src='/1.png' alt='facebook' height={15} width={15} className='opacity-60' />
				<Image src='/2.png' alt='instagram' height={15} width={15} className='opacity-60' />
				<Image src='/3.png' alt='twitter' height={15} width={15} className='opacity-60' />
				<Image src='/4.png' alt='youtube' height={15} width={15} className='opacity-60' />
			</div>
		</div>
	);
};
export default Footer;
