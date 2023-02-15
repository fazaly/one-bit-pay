import React from 'react';
import cardBg from "../../images/dasboard/cardBg.jpg"
const Balance = ({ userDetails }) => {

    const idNumber = userDetails?._id

    return (
        <div className='bg-black tex-white rounded-2xl grid grid-cols-1  items-center pl-8 p-4  shadow-2xl shadow-slate-500 h-48' style={{ backgroundImage: `url(${cardBg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} >
            <div>
                <p className='text-xs '>Balance</p>
                <p className='text-2xl lg:text-3xl font-bold lg:tracking-widest'>${userDetails?.balance}.00</p>
            </div>
            <div>
                <p className='text-xs '>Card Id</p>
                {idNumber &&
                    <div className='text-xl font-bold tracking-wide flex gap-2'>
                        <span>{idNumber?.slice(0, 4)}</span>
                        <span>{idNumber?.slice(4, 8)}</span>
                        <span>{idNumber?.slice(8, 12)}</span>
                        <span>{idNumber?.slice(12, 16)}</span>
                    </div>
                }
            </div>

        </div>
    );
};

export default Balance;