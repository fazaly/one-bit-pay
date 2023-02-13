import React from 'react';

const Activities = ({ userDetails }) => {
    return (
        <div className=' '>
            <div className='grid grid-cols-1 gap-2'>
                <div className='flex justify-between items-center px-2 py-2 rounded-xl shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-gray-300 transition-all cursor-pointer  '>
                    <div>
                        <h3 className='text-md font-semibold
                    '>Recieved Money</h3>
                        <p className='text-blue-300'><small>08-02-2023</small></p>
                    </div>
                    <div className='bg-green-100 px-2 rounded-lg'>
                        <span className='font-semibold text-green-500  '>$2050</span>
                    </div>
                </div>
                <div className='flex justify-between items-center  px-2 py-2 rounded-xl shadow-lg shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                    <div>
                        <h3 className='text-md font-semibold
                    '>Send Money</h3>
                        <p className='text-blue-300'><small>08-02-2023</small></p>
                    </div>
                    <div className='bg-red-100 px-2 rounded-lg'>
                        <span className='font-semibold text-red-500 '>$2050</span>
                    </div>
                </div>
                <div className='flex justify-between items-center  px-2 py-2 rounded-xl shadow-lg shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                    <div>
                        <h3 className='text-md font-semibold
                    '>Mobile Recharge</h3>
                        <p className='text-blue-300'><small>09-01-2023</small></p>
                    </div>
                    <div className='bg-red-100 px-2 rounded-lg'>
                        <span className='font-semibold text-red-500 '>$2050</span>
                    </div>
                </div>
                <div className='flex justify-between items-center  px-2 py-2 rounded-xl shadow-lg shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                    <div>
                        <h3 className='text-md font-semibold
                    '>Bills Pay</h3>
                        <p className='text-blue-300'><small>09-02-2023</small></p>
                    </div>
                    <div className='bg-green-100 px-2 rounded-lg'>
                        <span className='font-semibold text-green-500 '>$2050</span>
                    </div>
                </div>
                <div className='flex justify-between items-center  px-2 py-2 rounded-xl shadow-xl shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                    <div>
                        <h3 className='text-md font-semibold
                    '>Donation</h3>
                        <p className='text-blue-300'><small>09-02-2023</small></p>
                    </div>
                    <div className='bg-red-100 px-2 rounded-lg'>
                        <span className='font-semibold text-red-500 '>$2050</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;