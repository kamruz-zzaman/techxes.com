import React from 'react';
import firstSeviceIcon from '../../assets/icon/Group 2069.png'
import sectSeviceIcon from '../../assets/icon/Combined-Shape.png'
import thirdtSeviceIcon from '../../assets/icon/A.png'
import thirdtSeviceIcon2 from '../../assets/icon/i.png'
import service1 from '../../assets/services/service1.png'
import service2 from '../../assets/services/service2.png'
import service3 from '../../assets/services/service3.png'

const ServiceItem = () => {
    return (
        <>
            <div className='flex justify-center'>
                <span className='text-4xl font-bold border-b-4 border-blue-700'>Services</span>
            </div>
            <section className='mx-20 my-24'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
                    <div className='mb-5'>
                        <div className='mb-5'>
                            <img src={service1} alt="" />
                        </div>
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
                    <div className='mb-5'>
                        <div className='mb-5'>
                            <img src={service2} alt="" />
                        </div>
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
                    <div className='mb-5'>
                        <div className='mb-5'>
                            <img src={service3} alt="" />
                        </div>
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
                    <div className='mb-5'>
                        <div className='mb-5'>
                            <img src={service1} alt="" />
                        </div>
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
                    <div className='mb-5'>
                        <div className='mb-5'>
                            <img src={service2} alt="" />
                        </div>
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
                    <div className='mb-5'>
                        <div className='mb-5'>
                            <img src={service3} alt="" />
                        </div>
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
        </>
    );
};

export default ServiceItem;