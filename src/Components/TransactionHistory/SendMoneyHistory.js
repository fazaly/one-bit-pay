import React, { useContext, useEffect, useState } from 'react';
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { AuthContext } from '../../context/AuthProvider';

const SendMoneyHistory = ({ email}) => {
    const [transactions, setTransactions] = useState([]);
    const {user, userDetails} = useContext(AuthContext);

    // const [loading2, setLoading2] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/transactionSend/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setTransactions(data.data);
                    // console.log(transactions);
                }
            })

    }, [transactions, user])
    // console.log(transactions);

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead className='text-slate-700'>
                        <tr>
                            <th></th>
                            <th>EMAIL</th>
                            <th>EMAIL</th>
                            <th>AMOUNT</th>
                            <th>TRANSACTION ID</th>
                            <th>DATE & TIME</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-700'>
                        {
                            transactions.length === 0 ? <>
                                <h1 className='text-2xl font-bold text-center mt-4 mb-4'>No Transactions</h1>
                            </> : <>
                            {
                            transactions.slice(0, 10)?.map((transaction, i) => {
                                return <tr key={i}>
                                    {
                                        transaction.senderEmail === user.email && <th><p><HiArrowSmUp className='bg-red-500 text-white rounded-full text-xl'/></p></th>
                                    }
                                    {
                                        transaction.receiverEmail === user.email && <th><p><HiArrowSmDown className='bg-green-500 text-white rounded-full text-xl'/></p></th>
                                    }
                                    <td>
                                    {
                                            user?.email === transaction.senderEmail ?
                                            `${transaction.receiverEmail}` : `${transaction.senderEmail}`
                                        }
                                    </td>
                                    <td>
                                    {
                                            user?.email === transaction.senderEmail ?
                                            `You Sent` : `You received`
                                        }
                                    </td>
                                    <td>{transaction?.amount}</td>
                                    <td >{transaction?.transactionId}</td>
                                    <td >{transaction?.time}</td>
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