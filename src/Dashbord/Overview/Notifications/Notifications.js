import React from "react";
import { useSelector } from "react-redux";
import {
  useGetNotificationsQuery,
  useGetTransactionHistoryQuery,
} from "../../../features/api/apiSlice";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Notifications = () => {
  const email = useSelector((state) => state.auth.email);
  const { data } = useGetNotificationsQuery(email);
  const { data: traxdata } = useGetTransactionHistoryQuery(email);
  const notifications = data;
  const transactions = traxdata.data;
  console.log(transactions);

  return (
    <div className="">
      <h1 className="text-green-500 text-md lg:text-right text-left lg:ml-0 ml-5">Notification's</h1>
      <div className="p-4">
        <div className="space-y-4">
          {transactions.slice(0, 3)?.map((transaction, i) => (
            <div className="flex lg:w-[500px] p-3 rounded-lg bg-white shadow-[#D9DCFF] shadow-lg justify-between items-center">
              <div className="flex w-2/5 justify-between items-center">
                <div className="text-xl font-medium">
                  {email === transaction?.senderEmail ? (
                    <h1 className="bg-[#ECEDFF] p-2 text-lg rounded-md text-red-500">
                      <FaArrowUp />
                    </h1>
                  ) : (
                    <h1 className="bg-[#ECEDFF] p-2 text-lg rounded-md text-green-500">
                      <FaArrowDown />
                    </h1>
                  )}
                </div>
                <h1 className="text-xl font-semibold text-left">
                  <span className="text-[#5966FF]">$</span>{" "}
                  {transaction?.amount}
                </h1>
              </div>
              <div className="w-full">
                <h1 className="text-md  mr-4 font-semibold text-right">
                  {
                    email === transaction?.receiverEmail ? "You Received" : "You Sent"
                  }
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
