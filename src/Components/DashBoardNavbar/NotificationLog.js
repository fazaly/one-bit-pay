import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';


const NotificationLog = ({ transactionsData }) => {
    const email = useSelector(state => state.auth.email);

    return (
        <div className=' '>
            {email === transactionsData?.senderEmail ?
                <div className='bg-[#ECEFF6] text-black p-4 rounded-2xl flex justify-between'>
                    <div className='flex items-center gap-2 '>
                        <span className='text-red-500' ><FaArrowUp></FaArrowUp>
                        </span>
                        <span>You sent</span>
                        ${transactionsData?.amount}
                    </div>
                    {/* <span>{transactionsData?.receiverEmail}</span> */}
                </div>
                :
                <div className='bg-[#ECEFF6] text-black p-4 rounded-2xl flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <span className='text-green-500'><FaArrowDown></FaArrowDown></span>
                        <span>You received</span>
                        ${transactionsData?.amount}
                    </div>
                    {/* <span className='text-white'>{transactionsData?.senderEmail}</span> */}
                </div>

            }
        </div>
    );
};

export default NotificationLog;