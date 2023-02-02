import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <section className="text-gray-700">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl text-gray-800 text-center font-bold sm:text-4xl">Frequently Asked Questions on OneBitPay</h2>
                <p className="mt-4 mb-8 font-medium dark:text-gray-400 text-center">If you have any queries You can learn about our website by reading the various part of FAQS.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-md bg-gray-100">
                        <summary className="px-4 py-4 focus:outline-none focus-visible:violet-400">Definition</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">A virtual storage of money that can be accessed through from our website. After registration, your email number will be your OneBitPay Account number</p>
                    </details>
                    <details className="w-full border bg-gray-100 rounded-md">
                        <summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400">Can I make transection 24/7 using OneBitPay?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes</p>
                    </details>
                    <details className="w-full border  bg-gray-100 rounded-md">
                        <summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400">Do I need to open an Account to use OneBitPay Services?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">-Yes, you need to open a OneBitPay Account to use OneBitPay services</p>
                    </details>
                    <details className="w-full border  bg-gray-100 rounded-md">
                        <summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400">Who Can Open a OneBitPay Account?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">- Bangladeshi National <br />
                            - Age 18 years or above <br />
                            - Having a valid Photo national ID/Passport/Driving License</p>
                    </details>
                    <details className="w-full border  bg-gray-100 rounded-md">
                        <summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400">Is there Any opening charge for opening an Account?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">No, opening an Account is completely FREE.</p>
                    </details>
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