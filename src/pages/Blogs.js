import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import BlogItem from '../Components/Blog/BlogItem';
import NewsItem from '../Components/Blog/NewsItem';

const Blogs = () => {
	const [data, setData] = useState([]);
	const [news, setNews] = useState([]);
	useEffect(() => {
		axios.get("https://techxes.herokuapp.com/api/blogs?populate=*")
			.then(res => {
				setData(res.data.data);
			})
	}, []);
	useEffect(() => {
		axios.get("https://techxes.herokuapp.com/api/all-news?populate=*")
			.then(res => {
				setNews(res.data.data);
			})
	}, [])
	return (
		<div className='container'>
			<h2 className='text-center mb-32'>
				<span className='border-b-2 uppercase border-blue-500 text-4xl font-medium'>
					Blog
				</span>
			</h2>

			<div className='bg-gray-100 rounded-xl overflow-hidden flex'>

				{
					data.length === 0 ? <></> :
						<>
							<Link to={`/blog/${data[0].id}`} className='flex'>
								<div className='flex flex-col md:flex-row'>
									<div
										className='w-[100%] md:w-[65%] h-[200px] md:h-[530px] bg-center bg-cover bg-no-repeat'
										style={{
											backgroundImage: `url("${data[0].attributes.image.data.attributes.formats.large.url}")`,
										}}>
									</div>
									<div className='p-6 w-[35%] flex flex-col'>
										<p className='uppercase font-bold mb-8 text-gray-400'>Press Release</p>
										<h3 className='font-medium text-3xl'>
											{data[0].attributes.title}
										</h3>
										<p className='text-gray-400 mt-auto'>
											<Moment format="MMM D, YYYY">
												{data[0].attributes.createdAt}
											</Moment>
										</p>
									</div>
								</div>
							</Link>
						</>
				}

			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-10'>
				{
					data.length >= 5 ?
						data.slice(1, 5).map(item => (
							<BlogItem
								key={item.id}
								data={item}
							/>
						)) :
						data.map(item => (
							<BlogItem
								key={item.id}
								data={item}
							/>
						))
				}
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10'>

				{
					data.length > 5 ?
						data.slice(5, data.length).map(item => (
							<BlogItem
								key={item.id}
								data={item}
							/>
						)) : null
				}
			</div>
			<h2 className='mt-32'>
				<span className='border-b-2 uppercase border-blue-500 text-4xl font-medium'>
					News
				</span>
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-10'>
				{news.map(item => (
					<NewsItem
						key={item.id}
						data={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Blogs;
