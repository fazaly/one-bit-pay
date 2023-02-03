import React from 'react';
import { FaArrowLeft, FaDatabase } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GrFormRefresh } from "react-icons/gr";

const MyBills = () => {
    return (
        <div>
            <div className='relative w-full bg-[#5966FF] p-5 rounded-lg mb-12'>
                <Link className='absolute mt-2' to="/dashboard/billPay">
                    <FaArrowLeft className='text-white text-2xl'></FaArrowLeft>
                </Link>
                <h3 className='text-center text-3xl text-white capitalize'>My Bills</h3>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-2xl">Saved Bills</span>
                </label>
                <input
                    type="number"
                    type="text"
                    placeholder=""
                    className="input  w-full "
                    name="phoneNumber"
                />
                <div className="divider mt-0 mb-0"></div>
                <p>Ref. Name or Biller Service Name</p>
            </div>
            <div className='flex flex-col justify-center items-center min-h-[600px] text-center w-full'>
                <div className=''>
                    <FaDatabase className='mx-auto text-5xl'></FaDatabase>
                    <p>No Biller Available</p>
                </div>
                <div className='flex justify-center items-center'>
                    <GrFormRefresh className='text-2xl'></GrFormRefresh>
                    <p>Tap to Refresh</p>
                </div>
            </div>
        </div>
    );
};

export default MyBills;