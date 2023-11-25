import Link from 'next/link';

interface Props {
	name: string;
	url: string;
}

const Button = ({ name, url }: Props) => {
	return (
		<Link href={url}>
			<button className='w-fit rounded-md bg-[#53c28b] p-[20px] text-white'>
				{name}
			</button>
		</Link>
	);
};
export default Button;
