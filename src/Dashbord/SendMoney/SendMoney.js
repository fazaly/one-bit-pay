import React, { useContext, useState } from "react";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import { AuthContext } from "../../context/AuthProvider";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { toast } from "react-hot-toast";
import dateTime from "date-time";
import {
  useGetTransactionHistoryQuery,
  useGetUserDetailsQuery,
  useGetUserLoggedinDetailsQuery,
  useGetUsersRoleQuery,
  useSendMoneyMutation,
} from "../../features/api/apiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SendMoney = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [sendMoney, { isLoading, isSuccess, isError }] = useSendMoneyMutation();
  const [receiver, setReceiver] = useState("");
  const dispatch = useDispatch();

  const email = useSelector((state) => state.auth.email);
  const { transactionsData } = useGetTransactionHistoryQuery(email);
  const transactions = transactionsData?.data;
  let total = 0

  transactions?.foreach((transaction) => {
    total += transaction.amount;
    console.log(transaction)

  })

  const { data: userRole } = useGetUsersRoleQuery(`${receiver}`);
  console.log(userRole?.status);

  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;

  useEffect(() => {
    if (isSuccess) {
      toast.success("You Successfully Send Money", {
        id: "sendMoney",
      });
    }
    if (!isSuccess && isError) {
      toast.success("Failed to sending money! Please try again", {
        id: "sendMoney",
      });
    }
  }, [isSuccess, isError]);

  const handleSendMoney = (event) => {
    event.preventDefault();
    const form = event.target;
    const receiverEmail = form.receiverEmail.value;
    const amount = form.amount.value;
    const senderEmail = user?.email;
    const time = dateTime({ showTimeZone: true });
    const sendMoneyInfo = {
      senderEmail,
      receiverEmail,
      amount: parseInt(amount),
      time,
      type: "balanceTransfer",
    };

    if (receiverEmail === user?.email) {
      toast.error("Send money not possible own account");
    } else if (userDetails?.balance <= 10) {
      toast.error("insufficient balance");
    } else if (amount < 10) {
      toast.error("Minimum sending amount is 10");
    } else if (userRole.userRole === "agent") {
      toast.error("Send money not possible in agent account");
    } else if (userRole?.status === false) {
      toast.error("Enter Valid Email");
    } else if (receiverEmail !== user?.email && userDetails?.balance > 10 && userDetails.role === "user") {
      sendMoney(sendMoneyInfo);
      form.reset();
    }
  };

  const handleFocus = (e) => {
    setReceiver(e);
    console.log(e)
  }

  return (
    <div>
      <div className="flex gap-4 lg:flex-row flex-col justify-center items-center">
        <div className="card lg:w-80 w-72 h-40 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-gray-500 transition-all">
          <div className="flex items-center justify-center h-screen flex-col">
            <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
              Current Balance
            </h1>
            <h1 className="font-bold text-3xl text-slate-700">
              ${userDetails?.balance}.00
            </h1>
          </div>
        </div>

        <div className="card lg:w-80 w-72 h-40 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-gray-500 transition-all">
          <div className="flex items-center justify-center h-screen flex-col p-6">
            <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
              Send Money
            </h1>
            <form onSubmit={handleSendMoney} className="space-y-2">
              <input
                type="text"
                name="receiverEmail"
                required
                onBlur={(e) => handleFocus(e.target.value)}
                placeholder="receiver email"
                className=" w-full border-0 border-b-2 border-slate-700 outline-none text-slate-700 focus:text-[#5966FF] focus:border-b-[#5966FF]"
              />
              <input
                type="text"
                name="amount"
                required
                placeholder="amount"
                className=" w-full border-0 border-b-2 border-slate-700 outline-none text-slate-700 focus:text-[#5966FF]  focus:border-b-[#5966FF]"
              />
              <p className="">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm w-full  rounded-lg border-none hover:bg-[#5966FF]"
                >
                  {isLoading ? <ButtonSpinner /> : "SEND NOW"}
                </button>
              </p>
            </form>
          </div>
        </div>

        <div className="card lg:w-80 w-72 h-40 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-gray-500 transition-all">
          <div className="flex items-center justify-center h-screen flex-col">
            <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
              Today's Transaction
            </h1>
            <h1 className="font-bold text-xl text-slate-700">
              You made <br />{" "}
              <span className="text-3xl text-[#5966FF]">
                {total}
              </span>{" "}
              <br /> transaction today
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="card bg-white text-primary-content shadow-lg">
          <div className="card-body">
            <h1 className="font-bold text-xl text-[#5966FF] opacity-50 mb-4">
              History
            </h1>
            <SendMoneyHistory
              email={email}
              loading={loading}
              type={"balanceTransfer"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
