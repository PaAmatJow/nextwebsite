import Button from "@/app/components/shared/Button";
import Image from "next/image"

const About = () => {
  return (
		<div className=''>
			<div className='relative h-[300px] w-full'>
				<Image
					src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					fill={true}
					alt='team photo'
					className='object-cover grayscale'
				/>
				<div className='text-white absolute bottom-[20px] left-[20px] bg-[#53c28b] p-[5px]'>
					<h1 className='text-[24px] font-bold'>Digital Storytellers</h1>
					<h2 className='text-[20px] font-bold'>
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>

			<div className='mt-[50px] flex gap-[100px]'>
				<div className='flex-1 flex flex-col gap-[30px]'>
					<h1 className='text-[32px] font-bold'>Who Are We?</h1>
					<p className='text-[18px] font-[300] text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
						beatae, a suscipit eos. Animi quibusdam cum omnis officiis
						<br />
						<br />
						voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
						esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis voluptatum quo ea eveniet?
					</p>
				</div>
				<div className='flex-1 flex flex-col gap-[30px]'>
					<h1 className='text-[32px] font-bold'>What We Do?</h1>
					<p className='text-[18px] font-[300] text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
						Creative Illustrations
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url='/contact' name='Contact' />
				</div>
			</div>
		</div>
	);
}
export default About