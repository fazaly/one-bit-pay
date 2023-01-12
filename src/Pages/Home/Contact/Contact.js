import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className='py-3 mb-10' id='Contact'>
                <h3 className="text-center text-black text-3xl font-bold mt-5 mb-5">Want to talk to us?</h3>
                <h3 className='text-center text-black text-2xl mt-3 mb-5'>Feel free to knock anytime for any queries regarding 1BitPay.</h3>
                <section className="py-10 mx-12 rounded-2xl bg-gray-800 text-white">
                    <div className="grid grid-cols-1 mt-5 px-10 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-6xl font-bold text-[#00AAFF]">Get in touch</h1>
                            <p className="pt-2 text-3xl pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='text-xl'>Gulshan, Dhaka, Bangladesh</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className='text-xl'>(+88) 0197700000</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className='text-xl'>oneBitpay@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <form className="flex flex-col py-8 space-y-6 md:py-0 md:px-6 ">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" name="User_name" placeholder="Enter Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 text-black py-3 px-5" required />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" name="User.email" placeholder="Enter Email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 text-black py-3 px-5" required />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea name='message' rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 px-5 text-black" placeholder='Type Your Message' required></textarea>
                            </label>
                            <button type="button" className=" w-full btn rounded text-lg hover:text-gray-100 bg-gradient-to-r from-[#00AAFF] to-[#8759f1] hover:to-[#00AAFF] transition-all hover:from-[#8759f1] text-white">Send Email</button>
                        </form>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Contact;