import Image from 'next/image';


interface Post {
	_id: string;
	title: string;
	desc: string;
	img: string;
	content: string;
	username: string;
}


interface Params {
	id: string;
}

const getData = async (id: string) => {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`);

	if (!res.ok){
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()
	return data;

}

export async function generateMetadata({ params }: { params: Params }) {
	const post = await getData(params.id);
	return {
		title: post.title,
		description: post.desc,
	};
}


const BlogPosts = async ({params}: {params: Params}) => {
	const { id } = params;
	const post: Post = await getData(id)
	const {title, desc, img, content, username} = post;
	return (
		<div>
			<div className='mb-[50px] flex gap-[50px]'>
				<div className='flex flex-1 flex-col justify-between'>
					<h1 className='text-[32px] font-bold'>
						{title}
					</h1>
					<p className='text-[18px]'>
						{desc}
					</p>
					<div className='flex items-center gap-[10px]'>
						<Image
							src={img}
							alt=''
							height={40}
							width={40}
							className='rounded-full object-contain'
						/>
						<span className=''>{username}</span>
					</div>
				</div>

				<div className='relative h-[300px] flex-1'>
					<Image
						src={img}
						alt=''
						className='object-contain'
						fill={true}
					/>
				</div>
			</div>

			<div className=''>
				<p className='text-justify text-[20px] text-[#999]'>{content}
				</p>
			</div>
		</div>
	);
};
export default BlogPosts;
