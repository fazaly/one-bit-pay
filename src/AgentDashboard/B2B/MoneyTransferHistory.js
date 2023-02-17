import React from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { useGetTransactionHistoryQuery } from '../../features/api/apiSlice';

const MoneyTransferHistory = ({ email, type }) => {

    const { data } = useGetTransactionHistoryQuery(email)
    const transactions = data?.data

    return (
        <div className="overflow-x-auto mt-7 px-5 py-5 rounded-xl bg-slate-100">
            <h1 className='text-[#00A337] text-xl font-bold px-10 py-2 text-end'>History</h1>
            <table className="table table-zebra w-full">
                <thead className='text-slate-900 uppercase'>
                    <tr>
                        <th></th>
                        <th>SENT</th>
                        <th>RECEIVED</th>
                        <th>AMOUNT</th>
                        <th>TRANSACTION ID</th>
                        <th>DATE & TIME</th>
                    </tr>
                </thead>
                <tbody className='text-slate-700'>
                    {
                        transactions?.length === 0 ? <>
                            <h1 className='text-2xl font-bold text-center mt-4 mb-4'>No Transitions yet!</h1>
                        </> : <>
                            {
                                transactions?.slice(0, 10)?.filter((data) => {
                                    if (type) {
                                        return data.type === type
                                    }
                                    else {
                                        return data
                                    }
                                }
                                ).map((transaction, i) => {
                                    return <tr key={i}>
                                        {
                                            transaction?.senderEmail === email ?
                                                <>
                                                    <th><p><HiArrowSmDown className='bg-green-500 text-white rounded-full text-xl' /></p></th>
                                                    <td>{transaction?.senderEmail}</td>
                                                    <td>{transaction?.receiverEmail}</td>
                                                    <td><span className='text-[#5966FF] text-lg'>$</span>{transaction?.amount}</td>
                                                    <td>{transaction?.transactionId}</td>
                                                    <td>{transaction?.time}</td>
                                                </>
                                                :
                                                <>
                                                    <td>
                                                        <HiArrowSmUp
                                                            className='bg-red-500 text-white rounded-full text-xl'
                                                        /></td>
                                                    <td>{transaction?.senderEmail}</td>
                                                    <td>{transaction?.receiverEmail}</td>
                                                    <td><span className='text-[#5966FF] text-lg'>$</span>{transaction?.amount}</td>
                                                    <td>{transaction?.transactionId}</td>
                                                    <td>{transaction?.time}</td>
                                                </>
                                        }
                                    </tr>
                                })
                            }
                        </>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MoneyTransferHistory;