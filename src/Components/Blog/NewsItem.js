import React from 'react';

const NewsItem = () => {
	return (
		<div className='overflow-hidden'>
			<div
				className='h-[300px] bg-center bg-cover rounded-2xl bg-no-repeat'
				style={{
					backgroundImage: `url("/img/news.jpg")`,
				}}></div>
			<div className='p-6 flex flex-col'>
				<p className='uppercase font-bold text-gray-400'>Press Release</p>
				<h3 className='font-medium text-3xl mt-4 mb-6'>
					Techxes Myeongdong opens Saturday, April 9, in South Korea
				</h3>
				<p className='text-gray-400 mt-auto'>April 8, 2022</p>
			</div>
		</div>
	);
};

export default NewsItem;
