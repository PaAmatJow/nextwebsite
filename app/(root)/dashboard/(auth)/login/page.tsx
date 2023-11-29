'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
	const session = useSession();

	const router = useRouter();

	if (session.status === 'authenticated') {
		router?.push('/dashboard');
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn('credentials', { email, password });
	};

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='mb-[20px] flex w-[300px] flex-col gap-[20px]'>
				<button
					onClick={() => signIn('google')}
					className='rounded-md bg-[#bbb] p-[20px] text-[20px] font-bold text-black'
				>
					Login with Google
				</button>
				<button
					onClick={() => signIn('github')}
					className='rounded-md bg-[#bbb] p-[20px] text-[20px] font-bold text-black'
				>
					Login with Github
				</button>
			</div>

			<div className='mb-[20px]'>
				<p className='text-sm font-semibold'>Or</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className='flex w-[300px] flex-col gap-[20px]'
			>
				<input
					type='email'
					name='email'
					className='rounded border-[2px] border-[#bbb] bg-transparent p-[20px] text-[20px] font-bold text-white'
					placeholder='email'
					required
				/>
				<input
					type='password'
					name='password'
					className='rounded border-[2px] border-[#bbb] bg-transparent p-[20px] text-[20px] font-bold text-white'
					placeholder='password'
					required
				/>
				<button
					type='submit'
					className='rounded-md bg-[#53c28b] p-[20px] text-white'
				>
					Login
				</button>
			</form>
		</div>
	);
};
export default Login;
