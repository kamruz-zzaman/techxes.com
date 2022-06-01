import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/blog/blog1.png'
import blog2 from '../../assets/blog/blog2.png'
import blog3 from '../../assets/blog/blog3.png'
import blog4 from '../../assets/blog/blog4.png'
import blog5 from '../../assets/blog/blog5.png'
import blog6 from '../../assets/blog/blog6.png'
import erroIcon from '../../assets/icon/erroIcon.png'
import './blog.css'
const Blog = () => {
    return (
        <section>
            <div>
                <h1 className='text-3xl text-center mb-10 font-bold'>Blog</h1>
            </div>
            <div className='flex mx-10 md:mx-20'>
                <div>
                    <div className='flex'>
                        <div className='mt-10 md:mt-44 flex justify-end'>
                            <img width="80%" src={blog1} alt="" />
                        </div>
                        <div className='mt-3 md:mt-5'>
                            <img width="100%" src={blog2} alt="" />
                        </div>
                    </div>
                    <div className='flex -mt-1'>
                        <div>
                            <img width="100%" src={blog4} alt="" />
                        </div>
                        <div>
                            <img width="100%" src={blog5} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mt-16 md:mt-48'>
                    <div>
                        <img src={blog3} alt="" />
                    </div>
                    <div>
                        <img src={blog6} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-28'>
                <Link to="/blogs" className='flex items-center text-gray-600 font-bold text-xl'>See More Blog <img width="20%" src={erroIcon} alt="" /></Link>
            </div>
            <div className='backgroundImg flex justify-center my-56'>
                <div className='pt-24 pb-36 text-center'>
                    <h2 className='text-4xl text-white font-bold'>Join  The Company </h2>
                    <p className='text-2xl text-white font-bold my-3'>Change The World</p>
                    <Link to='/career' className='bg-white py-1 px-3 rounded-md font-medium mt-10'>Apply Now</Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;