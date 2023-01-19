import React from 'react';

const UpdateProfile = () => {
    return (
        <div>

            <div className=' shadow-2xl bg-base-100 grid grid-cols-7 my-6 mx-20 rounded-2xl'>

                <div className='mx-10 mb-10 mt-3  col-span-6 '>

                    <div className='mb-8  flex justify-between'>
                        <h3 className='text-xl font-bold mt-14 '>Update Your Information</h3>
                        <h3 className='text-2xl justify-end font-bold'>OneBitPay</h3>
                    </div>
                    <div className='grid grid-cols-2  gap-14 '>

                        <div className=' grid grid-cols-1  gap-1'>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full " />
                                <div className="divider"></div>
                            </div><div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full " />
                                <div className="divider"></div>
                            </div><div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full " />
                                <div className="divider"></div>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full" />
                                <div className="divider"></div>
                            </div>

                        </div>
                        <div className=' grid grid-cols-1 gap-1'>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full " />
                                <div className="divider"></div>
                            </div><div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full " />
                                <div className="divider"></div>
                            </div><div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full " />
                                <div className="divider"></div>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your first name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input  w-full " />
                                <div className="divider"></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between'>

                        <button className="btn btn-outline btn-primary rounded-full">Clear</button>
                        <button className="btn  btn-primary rounded-full">Update</button>


                    </div>

                </div>

                <div style={{
                    background: '#5966FF'
                }} className=' h-full  rounded-l-2xl'>
                    {/* Left Side */}

                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;