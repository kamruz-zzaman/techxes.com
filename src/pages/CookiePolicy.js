import React, { useEffect } from 'react';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 850, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <section className='container'>
            <div>
                <div className='flex justify-center'>
                    <img width={"200px"} src="./img/termsandcookies.png" alt="" />
                </div>
                <p className='text-center font-bold text-2xl'>Cookie Policy</p>
                <div className='md:mx-36 mb-10 md:mb-32 mt-10'>
                    Authentication <br />
                    We use cookies to verify your account and determine when you're logged in so that we can make it easier for you to access the Meta Products and show you the appropriate experience and features.<br /><br />
                    For example: We use cookies to keep you logged in as you navigate between Facebook Pages. Cookies also help us remember your browser so you don't have to keep logging in to Facebook and so you can more easily log in to Facebook via third-party apps and websites. For example, we use the "c_user" and "xs" cookies, including for this purpose, which have a lifespan of 365 days.
                    Security, site and product integrity<br /><br />
                    We use cookies to help us keep your account, data and the Meta Products safe and secure.<br /><br />
                    For example: Cookies can help us identify and impose additional security measures when someone may be attempting to access a Facebook account without authorisation, for instance, by rapidly guessing different passwords. We also use cookies to store information that allows us to recover your account in the event that you forget your password, or to require additional

                </div>
            </div>
        </section>
    );
};

export default CookiePolicy;