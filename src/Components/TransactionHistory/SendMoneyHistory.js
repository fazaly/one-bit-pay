import React, { useEffect, useState } from 'react';
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import ReactTimeAgo from 'react-time-ago';
import { useGetTransactionHistoryQuery } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';

const SendMoneyHistory = ({ email, type }) => {
    const { data, isError } = useGetTransactionHistoryQuery(email)
    const transactions = data?.data


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead className='text-slate-700'>
                        <tr>
                            <th></th>
                            <th>EMAIL</th>
                            <th>Status</th>
                            <th>AMOUNT</th>
                            <th>TRANSACTION ID</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-700'>
                        {
                            transactions?.length === 0 ? <>
                                <h1 className='text-2xl font-bold text-center mt-4 mb-4'>No Transactions</h1>
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
                                                transaction?.senderEmail === email && <th><p><HiArrowSmUp className='bg-red-500 text-white rounded-full text-xl' /></p></th>
                                            }
                                            {
                                                transaction?.receiverEmail === email && <th><p><HiArrowSmDown className='bg-green-500 text-white rounded-full text-xl' /></p></th>
                                            }
                                            <td>
                                                {
                                                    email === transaction?.senderEmail ?
                                                        `${transaction.receiverEmail}` : `${transaction.senderEmail}`
                                                }
                                            </td>
                                            <td>
                                                {
                                                    email === transaction?.senderEmail ?
                                                        `You Sent` : `You received`
                                                }
                                            </td>
                                            <td>{transaction?.amount}</td>
                                            <td >{transaction?.transactionId}</td>
                                            {/* <td >
                                                <ReactTimeAgo date={Date.parse(transaction.time)}
                                                    locale="en" timeStyle="round-minute" />
                                            </td> */}
                                        </tr>
                                    })
                                }
                            </>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SendMoneyHistory;