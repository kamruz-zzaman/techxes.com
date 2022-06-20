import React, { useEffect } from 'react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo({ top: 850, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <section className='container'>
            <div>
                <div className='flex justify-center'>
                    <img width={"200px"} src="./img/termsandcookies.png" alt="" />
                </div>
                <p className='text-center font-bold text-2xl'>Terms of Service</p>
                <div className='md:mx-36 mb-10 md:mb-32 mt-10'>
                    Techxes builds technologies and services that enable people to connect with each other, build communities and grow businesses. These Terms govern your use of Facebook, Messenger and the other products, features, apps, services, technologies and software that we offer (the Meta Products or Products), except where we expressly state that separate terms (and not these) apply. These Products are provided to you by Meta Platforms, Inc. <br /><br />
                    We don't charge you to use Facebook or the other products and services covered by these Terms. Instead, businesses and organisations pay us to show you ads for their products and services. By using our Products, you agree that we can show you ads that we think will be relevant to you and your interests. We use your personal data to help determine which ads to show you.
                    <br /><br /><br />
                    We don't sell your personal data to advertisers, and we don't
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;