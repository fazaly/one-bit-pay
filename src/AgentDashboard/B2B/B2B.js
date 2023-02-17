import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetTransactionHistoryQuery, useGetUserLoggedinDetailsQuery, useGetUsersRoleQuery, usePostB2bMutation } from '../../features/api/apiSlice';
import MoneyTransferHistory from './MoneyTransferHistory';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';
import ButtonSpinner from '../../Components/ButtonSpinner/ButtonSpinner';


const B2B = () => {
    const [focusEmail, setFocusEmail] = useState("");
    const email = useSelector((state) => state.auth.email);
    const { data } = useGetUserLoggedinDetailsQuery(email);
    const userDetails = data?.data;
    const { data: userRole } = useGetUsersRoleQuery(focusEmail);
    const [postB2bData, { isLoading, isSuccess }] = usePostB2bMutation()
    console.log(userRole)

    // todays transaction
    const { data: transactions } = useGetTransactionHistoryQuery(email)
    const date = format(new Date(), "PP");
    const todaysTransition = transactions?.data?.filter(td => td.time === date && td.type === "b2bTransition" && td.senderEmail === email)
    const todaysTransitionAmount = todaysTransition?.reduce((a, curr) => a + curr.amount, 0)

    const todaysTransitionReceived = transactions?.data?.filter(td => td.time === date && td.type === "b2bTransition" && td.receiverEmail === email)
    const todaysTransitionReceivedAmount = todaysTransitionReceived?.reduce((a, curr) => a + curr.amount, 0)
    console.log(todaysTransitionReceivedAmount)

    useEffect(() => {
        if (!isLoading && isSuccess) {
            toast.success("Transition success", { id: "b2b transition" })
        }
    }, [isLoading, isSuccess])


    const handleTransition = (e) => {
        e.preventDefault()
        const receiverEmail = e.target.email.value;
        const transferAmount = parseInt(e.target.amount.value);

        const transferInfo = {
            receiverEmail,
            transferAmount,
            time: date,
            type: "b2bTransition",
            agentEmail: email
        }

        if (receiverEmail === email) {
            return toast.error("transition money not possible in own account");
        }
        else if (userDetails.balance <= 100) {
            return toast.error("insufficient balance");
        }
        else if (transferAmount < 100) {
            return toast.error("Minimum transition amount is 100");
        }
        else if (userRole.userRole !== "agent") {
            return toast.error("Please enter a valid agent email for transfer money");
        }
        else if (!userRole.userRole) {
            return toast.error("Please enter a valid a email");
        }
        else if (receiverEmail !== email && userDetails?.balance > 100) {
            postB2bData(transferInfo)
            // toast.success("Transition success")
            e.target.reset()
        }

    }

    return (
        <div>
            <div className="flex lg:flex-row flex-col items-center lg:gap-12">
                <div className=" lg:w-6/12 bg-white rounded-xl p-8">
                    <div className="">
                        <h1 className="text-3xl mb-3 font-bold">
                            Transfer
                        </h1>
                        <form onSubmit={handleTransition} className="space-y-4  w-full relative">

                            <input
                                type="text"
                                name="email"
                                required
                                placeholder="RECEIVER EMAIL"
                                className="input-border border-[#181818] text-md input w-full"
                                data-tip="hello"
                                onBlur={(e) => setFocusEmail(e.target.value)}
                            />
                            <input
                                type="number"
                                name="amount"
                                required
                                placeholder="AMOUNT"
                                className="input-border input border-[#181818] text-md w-full"
                                data-tip="hello"
                            />
                            <button
                                type="submit"
                                className="btn mt-4  w-full bg-[#181818] rounded-md"
                            >
                                {
                                    isLoading ? <ButtonSpinner /> : "SEND"
                                }
                            </button>
                        </form>
                    </div>
                </div>

                <div className=" lg:w-6/12 bg-[#181818] text-primary-content p-12 rounded-xl">
                    <div className=" rounded-lg">
                        <h1 className="font-bold text-3xl text-[#FFFFFF] uppercase">
                            Main Balance
                        </h1>
                        <h1 className="text-lg mt-4">Your Balance</h1>
                        <h1 className=" text-3xl font-semibold text-white">
                            <span className="text-[#5966FF]">$ </span>{userDetails?.balance}.00
                        </h1>
                    </div>
                </div>
            </div>
            <MoneyTransferHistory
                email={email}
                type="b2bTransition"
            ></MoneyTransferHistory>
        </div>
    );
};

export default B2B;