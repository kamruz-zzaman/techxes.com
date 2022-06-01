import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const BlogItem = ({ data }) => {
	return (
		<div className='bg-gray-100 rounded-xl overflow-hidden'>
			<Link to={`/blog/${data.id}`}>
				<div
					className='h-[300px] bg-center bg-cover bg-no-repeat'
					style={{
						backgroundImage: `url("${data.attributes.image.data.attributes.formats.large.url}")`,
					}}></div>
				<div className='p-6 flex flex-col'>
					<p className='uppercase font-bold text-gray-400'>Press Release</p>
					<h3 className='font-medium text-3xl mb-6 my-4'>
						{data.attributes.title}
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

export default BlogItem;
