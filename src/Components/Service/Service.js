import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('https://techxes.herokuapp.com/api/services?populate=*')
			.then(res => {
				setData(res.data.data);
			});
	}, []);

	return (
		<>
			<section className='mx-10 md:mx-20 my-24'>
				<h2 className='text-center text-4xl font-bold'>Services</h2>
				<div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
					{data?.map((item, i) => {
						if (i < 3) {
							return (
								<div>
									<div className='mb-5'>
										<img
											width='78px'
											src={item.attributes.icon.data.attributes.url}
											alt=''
										/>
									</div>
									<div>
										<p className='text-xl font-bold'>
											{item.attributes.title} <br />
											<br />
											{item.attributes.short_description}
										</p>
									</div>
								</div>
							)
						}
						return null;
					})}
				</div>
			</section>
			<section className='mx-10 md:mx-20 mt-52'>
				<div className='flex justify-start items-center flex-wrap'>
					<div>
						<img width='329px' height='294px' src={data[0]?.attributes.image.data.attributes.url} alt='' />
					</div>
					<div className='md:ml-10 mt-5'>
						<p className='text-xl font-bold md:w-[350px]'>
							{data[0]?.attributes.title} <br />
							<br />
							{data[0]?.attributes.short_description}
						</p>
					</div>
				</div>
				<div className='flex justify-end flex-wrap-reverse items-center my-28'>
					<div className='md:mr-10 mt-5'>
						<p className='text-xl font-bold md:w-[350px]'>
							{data[1]?.attributes.title} <br />
							<br />
							{data[1]?.attributes.short_description}
						</p>
					</div>
					<div>
						<img width='329px' height='294px' src={data[1]?.attributes.image.data.attributes.url} alt='' />
					</div>
				</div>
				<div className='flex flex-wrap items-center'>
					<div>
						<img width='329px' height='294px' src={data[2]?.attributes.image.data.attributes.url} alt='' />
					</div>
					<div className='md:ml-10 mt-5'>
						<p className='text-xl font-bold md:w-[350px]'>
							{data[2]?.attributes.title} <br />
							<br />
							{data[2]?.attributes.short_description}
						</p>
					</div>
				</div>
			</section>
			<section className='bg-blue-500 my-44'>
				<div className='pt-16'>
					<p className='text-center text-white text-2xl font-bold'>
						Join businesses that use to build their brands
					</p>
					<div className='flex justify-center items-center pb-10'>
						<Link to='/career' className='px-5 py-2 bg-white font-bold rounded-md hover:bg-slate-100 mt-10'>
							Get Started Now
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Service;
