import Image from "next/image"
import Link from "next/link"

const Blog = () => {
  return (
		<div className='flex flex-col gap-[50px]'>
			<Link href='/blog/tesdId' className='flex gap-[50px]'>
				<div className=''>
					<Image
						src='https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg'
						alt=''
						width={400}
						height={250}
						className='object-cover'
					/>
				</div>

				<div className='flex flex-col gap-[10px]'>
					<h1 className='text-[32px] font-bold'>Test</h1>
					<p className='text-[18px] text-[#999]'>Desc</p>
				</div>
			</Link>
			<Link href='/blog/testID' className='flex gap-[50px]'>
				<div className=''>
					<Image
						src='https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg'
						alt=''
						width={400}
						height={250}
						className='object-cover'
					/>
				</div>

				<div className='flex flex-col gap-[10px]'>
					<h1 className='text-[32px] font-bold'>Test</h1>
					<p className='text-[18px] text-[#999]'>Desc</p>
				</div>
			</Link>
			<Link href='/blog/tesdId' className='flex gap-[50px]'>
				<div className=''>
					<Image
						src='https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg'
						alt=''
						width={400}
						height={250}
						className='object-cover'
					/>
				</div>

				<div className='flex flex-col gap-[10px]'>
					<h1 className='text-[32px] font-bold'>Test</h1>
					<p className='text-[18px] text-[#999]'>Desc</p>
				</div>
			</Link>
		</div>
	);
}
export default Blog