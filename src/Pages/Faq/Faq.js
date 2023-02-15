import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/faq')
            .then(res => res.json())
            .then(data => {
                setFaqs(data)
                console.log(data)
            })
    }, [])

    return (
        <section className="text-gray-700">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl text-gray-800 text-center font-bold sm:text-4xl">Frequently Asked Questions on OneBitPay</h2>
                <p className="mt-4 mb-8 font-medium dark:text-gray-400 text-center">If you have any queries You can learn about our website by reading the various part of FAQS.</p>
                <div className="space-y-4">
                    {
                        faqs.map(faq =>
                            <details key={faq._id} faq={faqs} className="w-full border rounded-md bg-gray-100">
                                <summary className="px-4 py-4 focus:outline-none focus-visible:violet-400">{faq.quetion}</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">{faq.answer}</p>
                            </details>
                        )
                    }
                </div>
            </div>
            <div class="flex mt-5 mb-5 items-center justify-center text-xl">
                <Link href="#" class="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
                    Previous
                </Link>

                <Link href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    1
                </Link>

                <Link href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    2
                </Link>

                <Link href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    3
                </Link>

                <Link href="#" class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    Next
                </Link>
            </div>
        </section>
    );
};

export default Faq;