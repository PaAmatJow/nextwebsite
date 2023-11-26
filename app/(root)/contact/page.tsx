import Image from "next/image";


const Contact = () => {
	return (
		<div>
			<h1 className='text-center text-[60px] font-bold'>
				Let&apos;s Keep In Touch
			</h1>
			<div className='mb-10 mt-5 flex items-center gap-[100px]'>
				<div className='relative h-[500px] flex-1'>
					<Image src='/contact.png' alt='contact' fill={true} className='object-contain' />
				</div>

				<form className='flex flex-1 flex-col gap-[20px]'>
					<input
						placeholder='Name'
						type='text'
						className='border-2 border-[#bbb] bg-transparent p-[20px] tracking-wide text-[#bbb] outline-none'
					/>
					<input
						placeholder='Email'
						type='text'
						className='border-2 border-[#bbb] bg-transparent p-[20px] tracking-wide text-[#bbb] outline-none'
					/>
					<textarea
						placeholder='Message'
						cols={20}
						rows={7}
						className='border-2 border-[#bbb] bg-transparent p-[20px] tracking-wide text-[#bbb] outline-none'
					></textarea>
				</form>
			</div>
		</div>
	);
};
export default Contact;
