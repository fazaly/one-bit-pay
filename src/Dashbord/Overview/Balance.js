import React from 'react';
import { Link } from 'react-router-dom';
import cardBg from "../../images/dasboard/cardBg.jpg"
const Balance = ({ userDetails }) => {

    const idNumber = userDetails?._id

    return (
        <div className='text-[#070733]  rounded-2xl grid grid-cols-1  items-center pl-8 p-4  shadow-xl shadow-slate-200 h-48'>
            <div>
                <p className='text-xs '>Total Balance</p>
                <p className='text-2xl lg:text-3xl font-bold lg:tracking-wide'>${userDetails?.balance}.00</p>
            </div>
            <div>
                <p className='text-xs '>Card Id</p>
                {idNumber &&
                    <div className='text-xl font-bold tracking-wide flex gap-2'>
                        <span>{idNumber?.slice(0, 4)}</span>
                        <span>{idNumber?.slice(4, 8)}</span>
                        <span>{idNumber?.slice(8, 12)}</span>
                    </div>
                }
            </div>
            <div className='flex justify-between'>
                <Link to="/dashboard/loanRequest" className='btn btn-xs'>Add Found</Link>
                <Link to="/dashboard/withdraw" className='btn btn-xs btn-ghost btn-active '>Withdraw</Link>
            </div>

        </div>
    );
};

export default Balance;