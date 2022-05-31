import React from 'react';
import BlogItem from '../Components/Blog/BlogItem';

const Blogs = () => {
	return (
		<div className='container'>
			<h2 className='text-center mb-32'>
				<span className='border-b-2 uppercase border-blue-500 text-4xl font-medium'>
					Blog
				</span>
			</h2>

			<div className='bg-gray-100 rounded-xl overflow-hidden flex'>
				<div
					className='w-[65%] h-[530px] bg-center bg-cover bg-no-repeat'
					style={{
						backgroundImage: `url("/img/blog1.png")`,
					}}></div>
				<div className='p-6 w-[35%] flex flex-col'>
					<p className='uppercase font-bold text-gray-400'>Press Release</p>
					<h3 className='font-medium text-3xl my-4'>Web Development</h3>
					<h3 className='font-medium text-3xl'>
						Design and developing immersive web applications Fast service.
					</h3>
					<p className='text-gray-400 mt-auto'>April 8, 2022</p>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-10'>
				{[1, 2, 3, 4].map(item => (
					<BlogItem />
				))}
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10'>
				{[1, 2, 3, 4,5,6].map(item => (
					<BlogItem />
				))}
			</div>
		</div>
	);
};

export default Blogs;
