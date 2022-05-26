import React from 'react';
import firstSeviceIcon from '../../assets/icon/Group 2069.png'
import sectSeviceIcon from '../../assets/icon/Combined-Shape.png'
import thirdtSeviceIcon from '../../assets/icon/A.png'
import thirdtSeviceIcon2 from '../../assets/icon/i.png'
import service1 from '../../assets/services/service1.png'
import service2 from '../../assets/services/service2.png'
import service3 from '../../assets/services/service3.png'

const Service = () => {
    return (
        <>
            <section className='mx-20 my-24'>
                <h2 className='text-center text-4xl font-bold'>Services</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
                    <div >
                        <div className='mb-5'>
                            <img width="78px" src={firstSeviceIcon} alt="" />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>
                                Web Development <br /><br />
                                Design and developing immersive web applications and portals to drive digital transformation.
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className='mb-5'>
                            <img width="52px" src={sectSeviceIcon} alt="" />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>
                                Designing<br /><br />
                                We create a research-driven design to visualize and dive deep in your industry.
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className='flex mb-5'>
                            <img src={thirdtSeviceIcon} alt="" /><img src={thirdtSeviceIcon2} alt="" />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>
                                Artificial intelligence<br /><br />
                                Redefining speed with precision to maximize enterprise value with AI, ML, and RPA solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mx-20 mt-52'>
                <div className='flex justify-start items-center flex-wrap'>
                    <div>
                        <img width="329px" height="294px" src={service1} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p className='text-xl font-bold'>
                            Web Development <br /><br />
                            Design and developing <br />
                            immersive web<br />
                            applications and portals to <br />
                            drive digital <br />
                            transformation.
                        </p>
                    </div>
                </div>
                <div className='flex justify-end flex-wrap-reverse items-center my-28'>
                    <div className='md:ml-10'>
                        <p className='text-xl font-bold'>
                            Designing <br /> <br />
                            We create a research-driven <br />
                            design to visualize and dive deep <br />
                            in your industry.
                        </p>
                    </div>
                    <div>
                        <img width="329px" height="294px" src={service2} alt="" />
                    </div>
                </div>
                <div className='flex flex-wrap items-center'>
                    <div>
                        <img width="329px" height="294px" src={service3} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p className='text-xl font-bold'>
                            Artificial intelligence (AI) is <br /><br />
                            intelligence demonstrated by <br />
                            machines, as opposed to the <br />
                            natural intelligence displayed by  <br />
                            animals including humans. <br /> Leading Ai
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-blue-500 my-44'>
                <div className='pt-16'>
                    <p className='text-center text-white text-2xl font-bold'>Join businesses that use  to build their brands</p>
                    <div className='flex justify-center items-center pb-10'>
                        <button className='px-5 py-2 bg-white font-bold rounded-md hover:bg-slate-100 mt-10'>Get Started Now</button>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Service;