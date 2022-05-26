import React from 'react';
import line from '../../assets/icon/Line 19.png'
import cercle from '../../assets/icon/Ellipse 36.png'

const BeforeFooter = () => {
    return (
        <section>
            <div className='bg-gray-200 mt-36 mb-20'>
                <div className='pt-24 pb-28'>
                    <img src={line} alt="" />
                    <div className='flex justify-center -mt-3'>
                        <img src={cercle} alt="" />
                    </div>
                    <p className='text-center font-medium mt-1 mb-5'>2022</p>
                    <div className='text-center text-xl font-bold'>
                        <p className='mt-1'>Gmail SERVICES </p>
                        <p className='mt-1'>Analytics and Insights</p>
                        <p className='mt-1'>Automation & AI</p>
                        <p className='mt-1'>Blockchain</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BeforeFooter;