import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const AgentHistoryCard = ({ email, transactionData }) => {
    return (

        <div className=' py-3 px-3 shadow-md rounded-2xl text-black '>
            {email === transactionData?.senderEmail ?
                <div className=' flex justify-between items-center'>
                    <span className='text-red-500' ><FaArrowUp></FaArrowUp>
                    </span>
                    <span> ${transactionData?.amount}</span>
                    <span className='text-gray'>{transactionData?.receiverEmail}</span>
                </div>

                :
                <div className='  flex justify-between items-center '>

                    <span className='text-green-500'><FaArrowDown></FaArrowDown></span>
                    <span> ${transactionData?.amount}</span>
                    <span className='text-gray'>{transactionData?.senderEmail}</span>


                </div>

            }
        </div>
    );
};

export default AgentHistoryCard;