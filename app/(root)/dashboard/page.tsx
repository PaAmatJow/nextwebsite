'use client';
import { useSession } from 'next-auth/react';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import useSWR from 'swr';

interface Post {
	_id: string;
	title: string;
	desc: string;
	img: string;
	content: string;
	username: string;
}



const Dashboard = () => {
	const session = useSession()
	const router = useRouter()
	
	if (session.status === 'unauthenticated') {
		router?.push('/dashboard/login');
	}

	
	
	const fetcher = (url: string, init?: RequestInit) =>
		fetch(url, init).then((res) => res.json());

	const username = session?.data?.user?.name;

	const { data, mutate, error, isLoading } = useSWR<Post[]>(
		username ? `/api/posts?username=${username}` : null,
		fetcher
	);
	
	
	
	
	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	
	const handleSubmit = async (e: any) => {
		e.preventDefault();
	
		const title = e.target[0].value;
		const desc = e.target[1].value;
		const img = e.target[2].value;
		const content = e.target[3].value;
	
		try {
			const username = session?.data?.user?.name;
	
			if (username) {
				await fetch('/api/posts', {
					method: 'Post',
					body: JSON.stringify({
						title,
						desc,
						img,
						content,
						username,
					}),
				});
			}
			mutate();
			e.target.reset()
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (id: string) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: 'DELETE',
			})
			mutate()
		} catch (error) {
			
		}
	}

	if (session.status === 'authenticated') {
		return (
			<div className='flex justify-between gap-[100px]'>
				<div className='flex-1 flex flex-col gap-[20px]'>
					<h1 className='text-[32px] font-bold mb-[20px]'>My Posts</h1>
					{isLoading
						? 'Loading...'
						: data?.map((post) => {
								const { _id, img, title } = post;
								return (
									<div key={_id} className='flex gap-[10px]'>
										<div className='relative h-[100px] w-[200px]'>
											<Image
												src={img}
												alt=''
												fill={true}
												className='object-cover'
											/>
										</div>
										<h2 className='text-[20px] font-semibold'>{title}</h2>
										<span onClick={()=>handleDelete(_id)} className='text-red-500 cursor-pointer'>X</span>
									</div>
								);
						  })}
				</div>
				<form
					
					className='flex flex-1 flex-col gap-[20px]'
					onSubmit={handleSubmit}
				>
					<h1 className='text-[32px] font-bold'>Add New Post</h1>
					<input
						placeholder='Title'
						type='text'
						className='border-2 border-[#bbb] bg-transparent p-[20px] tracking-wide text-white outline-none'
					/>
					<input
						placeholder='Description'
						type='text'
						className='border-2 border-[#bbb] bg-transparent p-[20px] tracking-wide text-white outline-none'
					/>
					<input
						placeholder='Image Url'
						type='text'
						className='border-2 border-[#bbb] bg-transparent p-[20px] tracking-wide text-white outline-none'
					/>
					<textarea
						placeholder='Content'
						cols={20}
						rows={10}
						className='border-2 border-[#bbb] bg-transparent p-[20px] tracking-wide text-[#bbb] outline-none'
					></textarea>
					<button className='rounded-md bg-[#53c28b] p-[20px] text-[20px] font-bold text-white'>
						Post
					</button>
				</form>
			</div>
		);
	}
};
export default Dashboard;
