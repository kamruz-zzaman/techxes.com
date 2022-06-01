import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServiceItem = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://techxes.herokuapp.com/api/services?populate=*")
            .then(res => {
                setData(res.data.data);
            })
    }, []);
    return (
        <>
            <div className='flex justify-center'>
                <span className='text-4xl font-bold border-b-2 border-blue-700'>Services</span>
            </div>
            <section className='mx-20 my-24'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
                    {
                        data.map(item => (
                            <Link to={`/service/${item.id}`}>
                                <div className='mb-5'>
                                    <div className='mb-5'>
                                        <img src={item.attributes.image.data.attributes.url} alt="" />
                                    </div>
                                    <div className='flex mb-5'>
                                        <img src={item.attributes.icon.data.attributes.url} alt='' />
                                    </div>
                                    <div>
                                        <div className='text-xl font-bold'>
                                            <p>{item.attributes.title}</p><br />
                                            <p>{item.attributes.short_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default ServiceItem;