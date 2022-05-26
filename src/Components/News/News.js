import React from 'react';
import blog1 from '../../assets/News/news1.png'
import blog2 from '../../assets/News/news2.png'
import blog3 from '../../assets/News/news3.png'
import blog4 from '../../assets/News/news4.png'
import erroIcon from '../../assets/icon/erroIcon.png'
import './news.css'
const News = () => {
    return (
        <>
            <section className='my-48'>
                <div className='mx-auto w-2/4'>
                    <h2 className='font-bold text-2xl my-10'>News</h2>
                </div>
                <div className='flex mx-auto w-2/4'>
                    <div>
                        <div>
                            <img src={blog1} alt="" />
                        </div>
                        <div>
                            <img src={blog3} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={blog2} alt="" />
                        </div>
                        <div>
                            <img src={blog4} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-2/4 mx-auto my-10'>
                    <div className='flex justify-center ml-28'>
                        <button className='flex items-center text-gray-600 font-bold text-xl'>See More Blog <img width="20%" src={erroIcon} alt="" /></button>
                    </div>
                </div>
            </section>
            <section>
                <div className='background-news my-52' >
                    <div className='mx-20 py-28'>
                        <p className='font-bold text-md text-white mb-2'>Join with our Community</p>
                        <h1 className='font-bold text-4xl text-white mb-4'>
                            Set your businesses <br /> growth on Techxes.
                        </h1>
                        <div>
                            <div class="flex w-96 mr-2">
                                <input placeholder='Your Email address' type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded-l placeholder:text-black placeholder:font-medium border-0 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <button className='bg-indigo-500 rounded-r-md px-4  text-white'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;