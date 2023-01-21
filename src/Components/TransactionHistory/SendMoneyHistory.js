import React, { useContext, useEffect, useState } from 'react';
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { AuthContext } from '../../context/AuthProvider';

const SendMoneyHistory = ({ email, loading }) => {
    const [transactions, setTransactions] = useState([]);
    const {user} = useContext(AuthContext);

    // const [loading2, setLoading2] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/transactionSend/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setTransactions(data.data)
                }
            })

    }, [loading, transactions])
    // console.log(transactions);

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead className='text-slate-700'>
                        <tr>
                            <th></th>
                            <th>EMAIL</th>
                            <th>AMOUNT</th>
                            <th>TRANSACTION ID</th>
                            <th>DATE & TIME</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-700'>
                        {
                            transactions?.map((transaction, i) => {
                                return <tr key={i}>
                                    {
                                        transaction.senderEmail === user.email && <th><p><HiArrowSmUp className='bg-red-500 text-white rounded-full text-xl'/></p></th>
                                    }
                                    {
                                        transaction.receiverEmail === user.email && <th><p><HiArrowSmDown className='bg-green-500 text-white rounded-full text-xl'/></p></th>
                                    }
                                    <td>
                                        {
                                            transaction.receiverEmail === user.email ? "You Received" :
                                            `${transaction?.receiverEmail}`
                                        }
                                    </td>
                                    <td>{transaction?.amount}</td>
                                    <td >{transaction?.transactionId}</td>
                                    <td >{transaction?.transactionId}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SendMoneyHistory;