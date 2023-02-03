import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NotificationLog = ({ transactionsData }) => {
    const { user } = useContext(AuthContext)

    return (
        <div className=' '>
            {user?.email === transactionsData?.senderEmail ?
                <div className='bg-red-100 p-4 rounded-2xl'>
                    You Send ${transactionsData?.amount}
                    <br /> To <span className=''>{transactionsData.receiverEmail}</span>
                </div>
                :
                <div className='bg-green-100 p-4 rounded-2xl'>
                    You Received ${transactionsData?.amount}
                    <br /> from <span>{transactionsData.senderEmail}</span>
                </div>

            }
        </div>
    );
};

export default NotificationLog;