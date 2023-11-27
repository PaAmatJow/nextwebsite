import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Dev Amat | Blog',
	description: 'blog page',
};

interface Post {
	_id: string;
	title: string;
	desc: string;
	img: string;
	content: string;
	username: string;
}

const getData = async () => {
	const res = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('failed to fetch data')
	}
	const data: Post[] = await res.json();

	return data;
	
};

const Blog = async () => {
	const data = await getData();

	return (
		<div className='flex flex-col gap-[50px]'>
			{data.map((post) => {
				const { _id, title, desc, img} = post;
				
				return (
					<Link key={_id} href={`/blog/${_id}`} className='flex gap-[50px]'>
						<div className=''>
							<Image
								src={img}
								alt=''
								width={400}
								height={250}
								className='object-cover'
							/>
						</div>

						<div className='flex flex-1 flex-col gap-[10px]'>
							<h1 className='text-[32px] font-bold'>{title}</h1>
							<p className='text-[18px] text-[#999]'>{desc}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
export default Blog;
