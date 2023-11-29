'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Register = () => {
  const [error, setError] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: any) => {
		e.preventDefault();
    const name =e.target[0].value
    const email =e.target[1].value
    const password =e.target[2].value

		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});
      const statuss = res.status
      console.log(statuss);
			res.status === 201 &&
				router.push('/dashboard/login?success=Account has been created');
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center gap-[20px]'>
			<form
				onSubmit={handleSubmit}
				className='flex w-[300px] flex-col gap-[20px]'
			>
				<input
					type='text'
					name='name'
					className='rounded border-[2px] border-[#bbb] bg-transparent p-[20px] text-[20px] font-bold text-white'
					placeholder='username'
					required
				/>
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
					Register
				</button>
				{error && <span className='text-red-500'>Something went wrong</span>}
			</form>

			<Link href='/dashboard/login' className=''>
				Log in with an existing account
			</Link>
		</div>
	);
};
export default Register;
