import React from 'react';

const BlogItem = () => {
	return (
		<div className='bg-gray-100 rounded-xl overflow-hidden'>
			<div
				className='h-[300px] bg-center bg-cover bg-no-repeat'
				style={{
					backgroundImage: `url("/img/blog2.png")`,
				}}></div>
			<div className='p-6 flex flex-col'>
				<p className='uppercase font-bold text-gray-400'>Press Release</p>
				<h3 className='font-medium text-3xl my-4'>Web Development</h3>
				<h3 className='font-medium text-3xl mb-6'>
					Design and developing immersive web applications Fast service.
				</h3>
				<p className='text-gray-400 mt-auto'>April 8, 2022</p>
			</div>
		</div>
	);
};

export default BlogItem;
