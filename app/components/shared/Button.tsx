import Link from 'next/link';

interface Props {
	name: string;
	url: string;
	additionalClass?: string;
}

const Button = ({ name, url, additionalClass }: Props) => {
	return (
		<Link href={url}>
			<button
				className={`w-fit rounded-md bg-[#53c28b] p-[20px] text-white ${additionalClass}`}
			>
				{name}
			</button>
		</Link>
	);
};
export default Button;
