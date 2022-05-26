import React from 'react';
import heroImage from '../../assets/hero-image.png'
const HeroSection = () => {
    return (
        <>
            <div className='relative'>
                <img src={heroImage} alt="" />
            </div>
            <div>
                <h3 className='text-center font-bold text-xl'>
                    Building the metaverse <br />
                    We’re already developing exciting new technologies that will <br />
                    help people connect and explore in the metaverse.
                </h3>
            </div>
        </>
    );
};

export default HeroSection;