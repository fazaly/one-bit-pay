import React from 'react';
import { useState } from 'react';
import dateTime from "date-time";
import { useSelector } from 'react-redux';
import { useGetUserLoggedinDetailsQuery, useGetUsersRoleQuery } from '../../features/api/apiSlice';
import MoneyTransferHistory from './MoneyTransferHistory';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';


const B2B = () => {
    const [focusEmail, setFocusEmail] = useState("");
    const email = useSelector((state) => state.auth.email);
    const { data } = useGetUserLoggedinDetailsQuery(email);
    const userDetails = data?.data;
    const { data: userRole } = useGetUsersRoleQuery(focusEmail);

    console.log("focusEmail", focusEmail,)
    console.log("userDetails", userDetails)
    console.log("userRole", userRole)

    const handleTransition = (e) => {
        e.preventDefault()
        const receiverEmail = e.target.email.value;
        const transferAmount = parseInt(e.target.amount.value);
        const time = format(new Date(), "PP");


        const transferInfo = {
            receiverEmail,
            transferAmount,
            time,
            type: "b2b transition",
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
        else if (userRole.isUser) {
            return toast.error("transition in User Account Not Possible");
        }
        else if (receiverEmail !== email && userDetails?.balance > 100) {
            // postData(cashInInfo);
            // if (isSuccess) {
            //     form.reset();
            // }
            console.log(transferInfo)
            toast.success("Transition successfull")
        }
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="CARD-1">
                    <div className="card lg:w-80 w-96 h-48 bg-white text-primary-content mx-auto shadow-lg">
                        <div className="card-body">
                            <h1 className="font-bold text-xl text-[#5966FF] opacity-90">
                                Your Balance
                            </h1>
                            <h1 className="font-bold text-3xl text-gray-600">
                                ${userDetails?.balance}.00
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card lg:w-80 w-96 h-48 bg-white text-primary-content mx-auto shadow-xl">
                        <div className="CARD-2 hover:shadow-slate-300 hover:shadow-lg">
                            <form
                                onSubmit={handleTransition}
                                className="card-body rounded-xl bg-white hover:shadow-slate-300 hover:shadow-lg"
                            >
                                <h1 className="font-bold text-xl text-[#5966FF] opacity-90">
                                    Transfer money
                                </h1>
                                <div className="">
                                    <div className="">
                                        <div className="form-control mb-2 flex flex-row gap-2">
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="reciver email"
                                                className="w-44 border-0 border-b border-slate-700 outline-none text-slate-700 focus:text-[#5966FF] focus:border-b-[#5966FF]"
                                                onBlur={(e) => setFocusEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-control">
                                            <input
                                                required
                                                type="text"
                                                name="amount"
                                                placeholder="Amount"
                                                className="border-0 border-b border-slate-700 outline-none text-slate-700 focus:text-[#5966FF] focus:border-b-[#5966FF]"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-control rounded-full ">
                                        <button
                                            // onClick={() => handleRecharge}
                                            type="submit"
                                            className="btn w-full btn-sm  rounded-sm mt-2 border-none
                                            text-lg hover:text-gray-100 bg-gradient-to-r from-[#00AAFF] to-[#8759f1] hover:to-[#00AAFF] transition-all hover:from-[#8759f1] text-white
                                            "
                                        >
                                            Transition Confirm
                                            {/* {loading ? <ButtonSpinner /> : "CONFIRM"} */}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="CARD-3">
                    <div className="card lg:w-80 w-96 h-48 bg-white text-primary-content mx-auto shadow-lg">
                        <div className="card-body">
                            <h1 className="font-bold text-xl text-[#5966FF] opacity-90">
                                Todays Transaction
                            </h1>
                            <h1 className='text-gray-500 text-xl font-bold'>You made</h1>
                            <h1 className="font-bold text-3xl text-gray-600">
                                {/* ${userDetails?.balance}.00 */}
                                $00.00
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <MoneyTransferHistory></MoneyTransferHistory>
        </div>
    );
};

export default B2B;