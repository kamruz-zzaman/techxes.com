import React from 'react';
import BeforeFooter from '../Components/BeforeFooter/BeforeFooter';
import Blog from '../Components/Blog/Blog';
import News from '../Components/News/News';
import Service from '../Components/Service/Service';

const Home = () => {
	return (
		<>
			<div>
                <h3 className='text-center font-bold text-xl'>
                    Building the metaverse <br />
                    We’re already developing exciting new technologies that will <br />
                    help people connect and explore in the metaverse.
                </h3>
            </div>
			<Service />
			<Blog />
			<News />
			<BeforeFooter />
		</>
	);
};

export default Home;
