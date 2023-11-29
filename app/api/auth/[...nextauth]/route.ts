import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import credetialsProvider from 'next-auth/providers/credentials';
import connect from '@/app/utils/db';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		credetialsProvider({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials) {
					throw new Error('No credentials provided')
				}

				await connect();

				try {
					const user = await User.findOne({ email: credentials.email });

					if (user) {
						const isPasswordCorrect = await bcrypt.compare(
							credentials.password,
							user.password
						);

						if (isPasswordCorrect) {
							return user;
						} else {
							throw new Error('invalid credentials');
						}
					} else {
						throw new Error('user not found');
					}
				} catch (error) {
					throw new Error(String(error));
				}
			},
		}),
	],
	pages: {

		error:'/dashboard/login'
	}
});

export { handler as GET, handler as POST };
