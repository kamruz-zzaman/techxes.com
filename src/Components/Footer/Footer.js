import React from 'react';

const Footer = () => {
    return (
        <>
            <footer class="text-gray-600 body-font bg-gray-200">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Product & service</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Social Media</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Analytics and Insights</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Automation & AI</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Analytics and Insights</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Automation & AI</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Blockchain</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Cloud</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Cognitive Business Operations</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Consulting</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Analytics and Insights</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">For Business</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">For Media</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">For Creators</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800"> For Government, Politics & Advocacy</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap justify-between flex-col sm:flex-row">
                        <div className='flex flex-wrap flex-col sm:flex-row text-center'>
                            <p>©2022 Name All Rights Reserved.
                            </p>
                            <p className='mx-5'>Community Standards</p>
                            <p className='mx-5'>Data Policy</p>
                            <p className='mx-5'>Terms</p>
                            <p className='mx-5'>Cookie Policy</p>
                        </div>
                        <p>Language English (US)</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;