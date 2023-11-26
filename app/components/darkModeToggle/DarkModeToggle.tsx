'use client';

import { useTheme } from '@/app/context/ThemeContext';

const DarkModeToggle = () => {
	const { toggle, mode } = useTheme();
	return (
		<div
			className='relative flex h-[24px] w-[42px] items-center justify-between rounded-[30px] border-[1.5px] border-[#53c28b] p-[2px]'
			onClick={toggle}
		>
			<div className='text-[12px]'>🌙</div>
			<div className='text-[12px]'>🔆</div>
			<div
				className={`absolute h-[15px] w-[15px] cursor-pointer rounded-full bg-[#53c28b] ${
					mode === 'light' ? 'right-[2px]' : 'left-[2px]'
				}`}
			/>
		</div>
	);
};
export default DarkModeToggle;
