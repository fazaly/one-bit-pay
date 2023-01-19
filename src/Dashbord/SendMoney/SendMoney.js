import React, { useContext, useEffect, useState } from 'react';
import SendMoneyHistory from '../../Components/TransactionHistory/SendMoneyHistory';
import { AuthContext } from '../../context/AuthProvider';
import sendImage from '../../images/sendIcon.png'
import sendImage2 from '../../images/sendIcon2.jpg'

const SendMoney = () => {
    const [userDetails, setUserDetails] = useState([])
    const { user } = useContext(AuthContext)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://one-bit-pay-server.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setUserDetails(data.data)
                }
            })

    }, [loading])

    const handleSendMoney = (event) => {
        event.preventDefault()
        const form = event.target;
        const receiverEmail = form.receiverEmail.value
        const amount = form.amount.value
        const senderEmail = user?.email
        const time = new Date().toISOString()
        const sendMoneyInfo = {
            senderEmail,
            receiverEmail,
            amount: parseInt(amount),
            time
        }
        console.log(sendMoneyInfo)

        fetch('https://one-bit-pay-server.vercel.app/sendMoney', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(sendMoneyInfo)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(!loading)
                console.log(data);
            })



    }

    return (
        <div>
            <div className="">
                <div className="card lg:w-80 w-96 bg-white text-primary-content mx-auto shadow-lg">
                    <div className="card-body">
                        <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                            Main Balance
                        </h1>
                        <h1 className="font-bold text-3xl text-gray-900">
                            ${userDetails?.balance}
                        </h1>
                    </div>
                </div>
            </div>


            <div className='my-4'>

                <form onSubmit={handleSendMoney} className="card-body rounded-xl bg-white   ">
                    <h4 className='text-black font-semibold text-center text-2xl'>Send Money</h4>
                    <div className='flex gap-4 mx-auto'>
                        <div className='drop-shadow-2xl'>
                            <div className="form-control mb-2">
                                <input type="text"
                                    name="receiverEmail"
                                    placeholder="ReceiverEmail" className="input  " />
                            </div>

                            <div className="form-control">
                                <input type="text"
                                    name="amount"
                                    placeholder="Amount" className="input " />
                            </div>
                        </div>
                        <div className="form-control rounded-full ">
                            <button type='submit'>
                                <img className='w-16 mt-4 ' src={sendImage} alt="" />

                            </button>
                        </div>
                    </div>
                </form>


                <div>
                    <SendMoneyHistory key={userDetails._id} email={user?.email} loading={loading}></SendMoneyHistory>
                </div>


            </div>


        </div>
    );
};

export default SendMoney;