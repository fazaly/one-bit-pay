import React from 'react';
import { Link } from 'react-router-dom';
import overviewImg from "../../images/dasboard/overview-removebg-preview.png"
const OfferCard = () => {
    return (
        <Link to="/dashboard/sendMoney" className='text-black bg-[#ECEFF6] p-4 rounded-2xl shadow-xl shadow-slate-200 transition-all grid grid-cols-1 md:grid-cols-3
              '>
            <div className='md:col-span-2 p-10'>
                <h2 className='text-4xl font-semibold mb-2'>Transfer Your Money</h2>
                <h2 className='text-lg '>Easy and Fast </h2>
            </div>
            <div className='md:col-span-1'>
                <img src={overviewImg} alt="" />
                <div className='blur-sm '>
                    <h2>hi</h2>
                </div>
            </div>
        </Link>
    );
};

export default OfferCard;