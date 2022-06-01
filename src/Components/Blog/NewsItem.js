import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const NewsItem = ({ data }) => {
	return (
		<div className='overflow-hidden'>
			<Link to={`/news/${data.id}`}>
				<div
					className='h-[300px] bg-center bg-cover rounded-2xl bg-no-repeat'
					style={{
						backgroundImage: `url("${data.attributes.Image.data.attributes.formats.large.url}")`,
					}}></div>
				<div className='p-6 flex flex-col'>
					<p className='uppercase font-bold text-gray-400'>Press Release</p>
					<h3 className='font-medium text-3xl mt-4 mb-6'>
						{data.attributes.Title}
					</h3>
					<p className='text-gray-400 mt-auto'>
						<Moment format="MMM D, YYYY">
							{data.attributes.createdAt}
						</Moment>
					</p>
				</div>
			</Link>
		</div>
	);
};

export default NewsItem;
