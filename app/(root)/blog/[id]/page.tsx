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
							className='rounded-full object-cover'
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
				<p className='text-justify text-[20px] text-[#999]'>{content} <br /> <br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum
					perferendis quam eligendi, quibusdam minima provident debitis numquam
					sed qui eum, tempore eius velit ea aperiam quis totam non nulla. Odio,
					maiores repudiandae cupiditate magnam obcaecati repellat amet hic eos
					minus dolore fugit, ipsa itaque quibusdam totam! Illo blanditiis ipsum
					exercitationem quas. Dolorum unde nostrum distinctio ea tempora,
					voluptas non eos rem omnis, in cum optio modi quidem voluptatibus
					sequi quam. Perferendis, asperiores consequatur. <br /> Dignissimos in
					non, ipsam quam corporis consequuntur. Ex ea quos quis blanditiis
					assumenda? Voluptates, distinctio! Sapiente laudantium beatae hic
					voluptatem accusantium perferendis animi ad eum nesciunt! Aspernatur
					amet, dignissimos officia accusamus doloremque modi facilis pariatur
					adipisci. Quas enim molestias id rerum ut, nisi sequi odio fugiat
					accusantium itaque corporis incidunt quisquam, ex quod dolore!
					Recusandae illo nisi facilis. Dolores nostrum aperiam modi, et tempore
					porro rerum a cupiditate voluptatem saepe dolorem dolorum corrupti!
					Reprehenderit fuga aspernatur ipsum. <br /> Atque dicta quidem
					distinctio incidunt pariatur libero, ad quas cum porro nostrum ducimus
					corrupti deserunt nihil perspiciatis commodi possimus, minus velit
					saepe nemo. Repudiandae, qui. Corporis, modi ipsum quaerat id repellat
					maiores consequatur molestias exercitationem dolorum atque rerum
					minima dolor ipsam dolorem consequuntur. Aliquid alias doloremque
					quidem velit eveniet.
				</p>
			</div>
		</div>
	);
};
export default BlogPosts;
