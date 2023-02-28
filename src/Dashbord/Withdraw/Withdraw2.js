import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import {
  useGetTransactionHistoryQuery,
  useGetUserLoggedinDetailsQuery,
  useWithdrawMutation,
} from "../../features/api/apiSlice";
import WithdrawHistory from "./WithdrawHistory";

const Withdraw2 = () => {
  const email = useSelector((state) => state.auth.email);
  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;
  const { transactionsData } = useGetTransactionHistoryQuery(email);

  const [withdraw, { isLoading, isSuccess, isError }] = useWithdrawMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("You Successfully withdraw Money", {
        id: "withdraw",
      });
    }
    if (!isSuccess && isError) {
      toast.error("Failed to withdraw! Please try again", {
        id: "withdraw",
      });
    }
  }, [isSuccess, isError]);

  const handleWithdraw = (event) => {
    event.preventDefault();
    const form = event.target;
    const agentEmail = form.receiverEmail.value;
    const amount = form.amount.value;
    const senderEmail = email;
    const time = format(new Date(), "PP");
    const WithdrawInfo = {
      senderEmail,
      agentEmail,
      amount: parseInt(amount),
      time,
      type: "Withdraw",
    };

    withdraw(WithdrawInfo);

    setTimeout(() => {
      form.reset();
    }, 3000);
    
  };

  return (
    <div className="pt-10 p-6">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="bg-[#181818] p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-4">Your Balance</h1>
          <div>
            <h1 className="text-5xl font-semibold text-white">
              <span className="text-[#5966FF]">$</span>
              {userDetails?.balance}.00
            </h1>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold text-xl text-[#181818] mb-4">
            Withdraw Amount
          </h1>
          <form onSubmit={handleWithdraw} className="space-y-6">
            <input
              type="text"
              name="receiverEmail"
              required
              placeholder="agentEmail"
              className="input input-bordered w-full text-slate-700 focus:text-[#5966FF] focus:border-b-[#5966FF]"
            />
            <input
              type="text"
              name="amount"
              required
              placeholder="Amount"
              className="input input-bordered w-full text-slate-700 focus:text-[#5966FF]  focus:border-b-[#5966FF]"
            />
            <p className="">
              <button
                type="submit"
                className="btn bg-[#181818] w-full  rounded-lg border-none hover:bg-[#5966FF]"
              >
                {isLoading ? <ButtonSpinner /> : "Withdraw Now"}
              </button>
            </p>
          </form>
        </div>
      </div>

      <div className="mt-4">
        <div className="card bg-white text-primary-content">
          <div>
            <h1 className="font-bold text-xl text-[#5966FF] opacity-100 p-6">
              History
            </h1>
            <SendMoneyHistory email={email} type={"withdraw"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Withdraw2;
