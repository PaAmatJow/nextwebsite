import Image from "next/image"

const BlogPosts = () => {
  return (
		<div>
			<div className='flex gap-[50px] mb-[50px]'>
				<div className='flex-1 flex flex-col justify-between'>
					<h1 className='text-[32px] font-bold'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
						similique?
					</h1>
					<p className='text-[18px]'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
						fugit voluptates distinctio adipisci asperiores architecto
						dignissimos sequi corporis dolores ullam? Debitis eligendi suscipit
						officia accusantium ab aspernatur in porro accusamus?
					</p>
					<div className='flex items-center gap-[10px]'>
						<Image
							src='https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg'
							alt=''
							height={40}
							width={40}
							className='rounded-full object-cover'
						/>
						<span className=''>John Doe</span>
					</div>
				</div>

				<div className='flex-1 relative h-[300px]'>
					<Image
						src='https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg'
						alt=''
						className='object-cover'
						fill={true}
					/>
				</div>
			</div>

			<div className=''>
				<p className='text-justify text-[#999] text-[20px]'>
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
}
export default BlogPosts