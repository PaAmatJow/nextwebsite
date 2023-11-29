'use client'

import Link from 'next/link';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { signIn, signOut, useSession } from 'next-auth/react';

const links = [
	{ id: 1, title: 'Home', url: '/' },
	{ id: 2, title: 'Portfolio', url: '/portfolio' },
	{ id: 3, title: 'Blog', url: '/blog' },
	{ id: 4, title: 'About', url: '/about' },
	{ id: 5, title: 'Contact', url: '/contact' },
	{ id: 6, title: 'Dashboard', url: '/dashboard' },
];

const Navbar = () => {
	const session = useSession();

	return (
		<div className='flex h-[100px] items-center justify-between'>
			<Link href='/' className='text-[22px] font-bold'>
				lamamia
			</Link>

			<div className='flex items-center gap-[20px]'>
				
				<DarkModeToggle/>
				{links.map((link) => {
					const { id, title, url } = link;
					return (
						<Link key={id} href={url}>
							{title}
						</Link>
					);
				})}
				{session.status === 'authenticated' && (<button onClick={() =>signOut()} className='rounded-md bg-[#53c28b] px-[6px] py-[5px] text-white'>
					Logout
				</button>)}

				{session.status === 'unauthenticated' && (<button onClick={() =>signIn()} className='rounded-md bg-[#53c28b] px-[6px] py-[5px] text-white'>
					Login
				</button>)}


				
			</div>
		</div>
	);
};
export default Navbar;
