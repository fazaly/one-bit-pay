import React from 'react';
import { useContext } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';

const NotificationLog = ({ transactionsData }) => {
    const { user } = useContext(AuthContext)

    return (
        <div className=' '>
            {user?.email === transactionsData?.senderEmail ?
                <div className='bg-[#241f71c4] text-white p-4 rounded-2xl flex justify-between'>
                    <span className='flex items-center gap-2 '><span className='text-green-500' ><FaArrowUp></FaArrowUp></span>
                        ${transactionsData?.amount}</span>
                    <span>{transactionsData.receiverEmail}</span>
                </div>
                :
                <div className='bg-[#241f71d0] text-white p-4 rounded-2xl flex justify-between'>
                    <span className='flex items-center gap-2'> <span className='text-red-500'><FaArrowDown></FaArrowDown></span> ${transactionsData?.amount}</span>
                    <span className='text-white'>{transactionsData.senderEmail}</span>
                </div>

            }
        </div>
    );
};

export default NotificationLog;