import React from 'react';
import { toast } from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md'
import { useLoaderData } from 'react-router-dom';

const IndividualBlog = () => {
    const blogData = useLoaderData()
    const { image, title, description } = blogData
    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            toast.success('copied succesfully')
        } catch (err) {
            toast.success('copied succesfully')
        }
    };
    return (
        <div>
            <div className='h-16'>
                
            </div>
            <main className=" mx-5 lg:mx-20 md:mx-15">

                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
                            {title}
                        </h2>
                        <div className='flex justify-between'>
                            <a
                                href="java"
                                className="py-2 font-bold text-xl text-green-700 inline-flex items-center justify-center mb-2"
                            >
                                Finance
                            </a>
                            <div>
                                <button onClick={() => copyToClipBoard(description)}>
                                    <MdContentCopy className='h-7 w-7 hover:h-10 hover:w-10'></MdContentCopy>
                                </button>
                            </div>
                        </div>
                    </div>

                    <img src={image} className="w-full object-cover h-[400px] lg:rounded-lg" alt='' />
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-12">

                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-xl leading-relaxed w-full lg:w-3/4">
                        <p className="pb-6 text-justify">{description}</p>
                    </div>
                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                        <div className="p-4 border-t border-b md:border md:rounded">
                            <div className="flex py-2">
                                <img src="https://i.ibb.co/GcWBFhd/jaber.jpg"
                                    className="h-10 w-10 rounded-full mr-2 object-cover" alt='' />
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm">Abdullah Al Jaber</p>
                                    <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                </div>
                            </div>
                            <p className="text-gray-700 py-3">
                                Jaber writes about technology
                                Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
                            </p>
                            <a href="https://www.facebook.com/jarajaber">
                                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                    Follow
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default IndividualBlog;