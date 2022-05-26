import React from 'react';
import BeforeFooter from '../Components/BeforeFooter/BeforeFooter';
import Blog from '../Components/Blog/Blog';
import Footer from '../Components/Footer/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';
import NavBar from '../Components/NavBar/NavBar';
import News from '../Components/News/News';
import Service from '../Components/Service/Service';

const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Service />
            <Blog />
            <News />
            <BeforeFooter />
            <Footer />

        </>
    );
};

export default Home;