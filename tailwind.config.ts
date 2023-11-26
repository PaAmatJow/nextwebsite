import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'illustration': "url('/illustration.png')",
				'website': "url('/websites.jpg')",
				'application': "url('/apps.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
