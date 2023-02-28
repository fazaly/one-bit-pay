import React from 'react';
import { useSelector } from 'react-redux';
import { useGetRechargeHistoryQuery, useGetTransactionHistoryQuery } from '../../features/api/apiSlice';

const Activities = () => {
    const email = useSelector((state) => state.auth.email);
    const { data: rechargeData } = useGetRechargeHistoryQuery(email);

    const { data } = useGetTransactionHistoryQuery(email);
    const transactions = data?.data

    const sendMoneyTransaction = transactions?.filter((transaction) => {
        return transaction?.senderEmail === email
    })
    const receiveTransaction = transactions?.filter((transaction) => {
        return transaction?.senderEmail !== email
    })
    const donationTransaction = transactions?.filter((transaction) => {
        return transaction?.senderEmail === email
    })
    const withdrawTransaction = transactions?.filter((transaction) => {
        return transaction?.senderEmail === email
    })


    const calculateTotalTransaction = (data, type) => {
        const collection = data?.filter((newTransaction) => {
            return newTransaction?.type === type;
        })
        const total = collection?.reduce((previousValue, current) => previousValue + current?.amount, 0);
        return total
    }

    const totalRecharge = rechargeData?.reduce((previousValue, current) => parseInt(previousValue) + parseInt(current?.balance), 0);


    return (

        <div className='grid gap-4'>
            <div className='flex justify-between items-center p-2 rounded-xl shadow-lg shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer  '>
                <div>
                    <h3 className='text-md font-semibold
                    '>Recieved Money</h3>
                    <p className='text-blue-300'><small>Til 08-02-2023</small></p>
                </div>
                <div className='bg-green-100 px-2 rounded-lg'>
                    <span className='font-semibold text-green-500  '>${calculateTotalTransaction(receiveTransaction, "balanceTransfer")} </span>
                </div>
            </div>
            <div className='flex justify-between items-center  p-2 rounded-xl shadow-lg shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                <div>
                    <h3 className='text-md font-semibold
                    '>Send Money</h3>
                    <p className='text-blue-300'><small>Till 08-02-2023</small></p>
                </div>
                <div className='bg-red-100 px-2 rounded-lg'>
                    <span className='font-semibold text-red-500 '>${calculateTotalTransaction(sendMoneyTransaction, "balanceTransfer")} </span>
                </div>
            </div>
            <div className='flex justify-between items-center  p-2 rounded-xl shadow-lg shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                <div>
                    <h3 className='text-md font-semibold
                    '>Mobile Recharge</h3>
                    <p className='text-blue-300'><small>Till 09-01-2023</small></p>
                </div>
                <div className='bg-red-100 px-2 rounded-lg'>
                    <span className='font-semibold text-red-500 '>${totalRecharge}</span>
                </div>
            </div>

            <div className='flex justify-between items-center  p-2 rounded-xl shadow-xl shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                <div>
                    <h3 className='text-md font-semibold
                    '>Donation</h3>
                    <p className='text-blue-300'>
                        <small>Till 09-02-2023</small></p>
                </div>
                <div className='bg-red-100 px-2 rounded-lg'>
                    <span className='font-semibold text-red-500 '>$ {calculateTotalTransaction(donationTransaction, "donation")}</span>
                </div>
            </div>
            <div className='flex justify-between items-center  p-2 rounded-xl shadow-xl shadow-slate-100  hover:shadow-gray-300 transition-all cursor-pointer'>
                <div>
                    <h3 className='text-md font-semibold
                    '>Withdraw</h3>
                    <p className='text-blue-300'>
                        <small>Till 09-02-2023</small></p>
                </div>
                <div className='bg-red-100 px-2 rounded-lg'>
                    <span className='font-semibold text-red-500 '>$ {calculateTotalTransaction(withdrawTransaction, "withdraw")}</span>
                </div>
            </div>

        </div>

    );
};

export default Activities;