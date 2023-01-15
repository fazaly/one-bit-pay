import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <div className='flex justify-center items-center'>
                            <p className='text-9xl font-bold text-[#5966FF]'>4</p>
                            <div className='w-20 h-20 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
                            <p className='text-9xl font-bold text-[#5966FF]'>4</p>
                        </div>
                        <p className="text-6xl text-[#00AAFF] font-semibold md:text-4xl sm:text-lg">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 text-2xl text-gray-800">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded  hover:text-gray-100 bg-gradient-to-r from-[#00AAFF] to-[#8759f1] hover:to-[#00AAFF] transition-all hover:from-[#8759f1] text-white">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;