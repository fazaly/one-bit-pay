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

const Withdraw = () => {
  const email = useSelector((state) => state.auth.email);
  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;
  const { data: transactions } = useGetTransactionHistoryQuery(email);
  const [withdraw, { isLoading, isSuccess, isError }] = useWithdrawMutation()

  const withdrawTransaction = transactions?.data.filter((transaction) => {
    return transaction?.senderEmail === email
  })

  const calculateTotalTransaction = (data, type) => {
    const collection = data?.filter((newTransaction) => {
      return newTransaction?.type === type;
    })
    const total = collection?.reduce((previousValue, current) => previousValue + current?.amount, 0);
    return total
  }



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
    form.reset();

  }

  return (
    <div className="pt-10">
      <div className="flex gap-4 lg:flex-row flex-col justify-center items-center">
        <div className="card lg:w-80 w-72 h-40 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-500">
          <div className="flex items-center justify-center h-screen flex-col">
            <h1 className="font-bold text-xl text-[#303640] opacity-75">
              Current Balance
            </h1>
            <h1 className="font-bold text-3xl text-[#5966FF]">
              <Typewriter
                options={{
                  strings: [`$${userDetails?.balance}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>

        <div className="card lg:w-80 w-72 h-40 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-500">
          <div className="flex items-center justify-center h-screen flex-col px-6">
            <h1 className="font-bold text-xl text-[#303640] opacity-75">
              Withdraw Amount
            </h1>
            <form onSubmit={handleWithdraw} className="space-y-4">
              <input
                type="text"
                name="receiverEmail"
                required
                placeholder="agentEmail"
                className=" w-full border-0 border-b-2 border-slate-700 outline-none text-slate-700 focus:text-[#5966FF] focus:border-b-[#5966FF]"
              />
              <input
                type="text"
                name="amount"
                required
                placeholder="Amount"
                className=" w-full border-0 border-b-2 border-slate-700 outline-none text-slate-700 focus:text-[#5966FF]  focus:border-b-[#5966FF]"
              />
              <p className="">
                <button
                  type="submit"
                  className="btn btn-[#303640] btn-sm w-full  rounded-lg border-none hover:bg-[#5966FF]"
                >
                  {isLoading ? <ButtonSpinner /> : "Withdraw Now"}
                </button>
              </p>
            </form>
          </div>
        </div>

        <div className="card lg:w-80 w-72 h-40 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-500">
          <div className="flex items-center justify-center h-screen flex-col">
            <h1 className="font-bold text-xl text-[#303640] opacity-75">
              Today's Transaction
            </h1>
            <h1 className="font-bold text-xl text-slate-700">
              You made <br />{" "}
              <span className="text-3xl text-[#5966FF]">
                ${calculateTotalTransaction(withdrawTransaction, "withdraw")}
              </span>{" "}
              <br /> transaction All Time
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="card bg-white text-primary-content shadow-lg">
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
export default Withdraw;
