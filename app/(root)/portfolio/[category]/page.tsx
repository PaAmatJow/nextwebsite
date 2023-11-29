import Button from '@/app/components/shared/Button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

type CategoryType = 'illustrations'|'applications'|'websites'

interface Props {
	params: {
		category: CategoryType;
	};
}

const getData = (cat: CategoryType) => {
	const data = items[cat];

	if (data) {
		return data;
	}

	return notFound();
};

// export async function generateMetadata({ params }: { params: Props }) {
// 	const data = getData(params.category)
// 	return {
// 		title: data.title,
// 	};
// }


const Category = ({ params }: Props) => {
  const data = getData(params.category)
	return (
		<div>
			<h1 className='text-[26px] font-bold capitalize text-[#53c28b]'>
				{params.category}
			</h1>
      {data.map((item) => {
        const {id, title, desc, image} = item;
        return( 
        <div key={id} className='mb-[100px] mt-[50px] flex items-center gap-[50px] odd:flex-row-reverse'>
				<div className='flex flex-1 flex-col gap-[20px]'>
					<h1 className='text-[50px] font-bold'>{title}</h1>
					<p className='text-[20px]'>{desc}</p>
					<Button name='See More' url='#' />
				</div>

				<div className='relative h-[500px] flex-1'>
					<Image
						src={image}
						alt=''
						fill={true}
						className='object-cover '
					/>
				</div>
			</div>
      )})}
			
		</div>
	);
};
export default Category;
