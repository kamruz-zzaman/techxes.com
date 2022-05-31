import React from 'react';
import UiUxIcon from '../../assets/icon/ui.png'
import HrIcon from '../../assets/icon/hr.png'
import DevIcon from '../../assets/icon/dev.png'
const Career = () => {
    return (
        <>
            <div className='text-center font-semibold text-4xl mt-10 mb-20'>
                <p >
                    Change The World
                </p>
                <p> Join us Be You</p>
            </div>
            <section className='bg-black text-white '>
                <div className='mx-5 md:mx-20 pt-32 pb-48'>
                    <div className='flex justify-between items-center'>
                        <div className='text-center'>
                            <div className='flex justify-center'>
                                <img width="50%" src={UiUxIcon} alt="" />
                            </div>
                            <p>Designer <br />
                                UI UX</p>
                        </div>
                        <div className='text-center'>
                            <div className='flex justify-center'>
                                <img width="50%" src={HrIcon} alt="" />
                            </div>
                            <p>  Hr<br />
                                Management </p>
                        </div>
                        <div className='text-center'>
                            <div className='flex justify-center'>
                                <img width="50%" src={DevIcon} alt="" />
                            </div>
                            <p>Developers</p>
                        </div>
                    </div>
                    <div className='mt-16 mb-20'>
                        <p className='text-center'>And More than job available</p>
                    </div>
                    <form action="">
                        <p className='text-center mb-10'>Join  Company</p>
                        <div className='flex justify-center'>
                            <div className=''>
                                <input className='bg-transparent border-2 border-white px-3 py-2 text-white mb-6 rounded-lg w-80 md:w-96' type="text" placeholder='Name' /><br />
                                <input className='bg-transparent border-2 border-white px-3 py-2 text-white mb-6 rounded-lg w-80 md:w-96' type="email" placeholder='Gmail ID' /><br />
                                <input className='bg-transparent border-2 border-white px-3 py-2 text-white mb-6 rounded-lg w-80 md:w-96' type="tel" placeholder='Phone Number' /><br />
                                <div className='flex justify-center mb-6'>
                                    <select className='text-black font-semibold py-2 px-3 rounded-lg' name="" id="">
                                        <option>UI UX</option>
                                        <option>Hr</option>
                                        <option>Developers</option>
                                        <option>R&D</option>
                                        <option>Pro</option>
                                    </select>
                                </div>
                                <div className='flex justify-center '>
                                    <input type="submit" value="Submit" className='border-2 px-7 py-1 rounded-lg' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Career;