import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font bg-gray-200">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="flex-grow flex flex-wrap md:pr-20 py-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Product & service</h2>
                            <nav className="list-none mb-10 font-bold">
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Social Media</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Analytics and Insights</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Automation & AI</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Analytics and Insights</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Automation & AI</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Blockchain</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Cloud</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Cognitive Business Operations</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Consulting</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">Analytics and Insights</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
                            <nav className="list-none mb-10 font-bold">
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">For Business</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">For Media</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600">For Creators</a>
                                </li>
                                <li className='mb-2'>
                                    <a className="text-gray-800 hover:text-gray-600"> For Government, Politics & Advocacy</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap justify-between flex-col sm:flex-row">
                        <div className='flex flex-wrap flex-col sm:flex-row text-center font-bold'>
                            <p className='text-gray-800'>©2022 Name All Rights Reserved.
                            </p>
                            <p className='mx-5 text-gray-800'>Community Standards</p>
                            <p className='mx-5 text-gray-800'>Data Policy</p>
                            <p className='mx-5 text-gray-800'>Terms</p>
                            <p className='mx-5 text-gray-800'>Cookie Policy</p>
                        </div>
                        <p className='text-gray-800 font-bold' >Language English (US)</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;