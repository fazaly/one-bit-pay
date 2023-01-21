import React, { useEffect, useState } from 'react';

const SendMoneyHistory = ({ email, loading }) => {
    const [transactions, setTransactions] = useState([])
    // const [loading2, setLoading2] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/transactionSend/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setTransactions(data.data)
                }
            })

    }, [loading])

    // console.log(transactions)



    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Receiver Email</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions?.map((transaction, i) => {
                                return <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{transaction?.receiverEmail}</td>
                                    <td>{transaction?.amount}</td>
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