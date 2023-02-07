import React from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { useGetTransactionHistoryQuery } from '../../features/api/apiSlice';

const MoneyTransferHistory = ({ email, type }) => {

    const { data, isError } = useGetTransactionHistoryQuery(email)
    const transactions = data?.data


    return (
        <div>

            <div className="overflow-x-auto mt-10 px-5 py-5 rounded-xl bg-slate-50">
                <h1 className='text-[#5966FF] text-xl font-bold px-5 pb-5'>History</h1>
                <table className="table table-zebra w-full">

                    <thead className='text-slate-700 uppercase'>
                        <tr>
                            <th>Agent email</th>
                            <th>reaciver eMAIL</th>
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
                                            <td >
                                                {/* <ReactTimeAgo date={Date.parse(transaction.time)}
                                                locale="en" timeStyle="round-minute" /> */}
                                            </td>
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

export default MoneyTransferHistory;