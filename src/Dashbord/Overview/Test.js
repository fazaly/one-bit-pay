import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import AgentOverview from "../../AgentDashboard/AgentOverview/AgentOverview";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import {
  useGetTransactionHistoryQuery,
  useGetUserLoggedinDetailsQuery,
} from "../../features/api/apiSlice";
import Admin from "../../Pages/Admin/Overview/Admin";
import Activities from "./Activities";
import Balance from "./Balance";
import BalanceOverview from "./BalanceOverview/BalanceOverview";
import Chart2 from "./Chart/Chart2";
import LoanAmount from "./LoanAmount";
import Notifications from "./Notifications/Notifications";
import OfferCard from "./OfferCard";

const Test = () => {
  const email = useSelector((state) => state.auth.email);
  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;

  const { data: trxhistory } = useGetTransactionHistoryQuery(email);

  const transactions = trxhistory.data;
  return (
    <>
      {userDetails?.role === "user" && (
        <div className="">
          <div className="w-full flex lg:flex-row flex-col justify-between gap-14 p-4">
            <div className="">
              <BalanceOverview />
            </div>
            <div className="">
              <Notifications />
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-green-500 text-lg mb-4">History</h1>
            <div className="overflow-x-auto shadow-xl shadow-[#D9DCFF]">
              <table className="table table-zebra  w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>STATUS</th>
                    <th>AMOUNT</th>
                    <th>USER</th>
                    <th>DATE TIME</th>
                  </tr>
                </thead>
                <tbody className="">
                  {transactions?.map((transaction, i) => (
                    <tr className="bg-[#D9DCFF]">
                      <th>{i + 1}</th>
                      <td className="text-xl font-medium">
                        {email === transaction?.senderEmail ? (
                          <h1 className="p-2 text-lg rounded-md text-red-500">
                            <FaArrowUp className=""/>
                          </h1>
                        ) : (
                          <h1 className="p-2 text-lg rounded-md text-green-500">
                            <FaArrowDown className=""/>
                          </h1>
                        )}
                      </td>
                      <td className="font-semibold"><span className="text-[#5966FF] font-semibold">$ </span>{transaction?.amount}</td>
                      <td>{transaction?.receiverEmail}</td>
                      <td>Blue</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {userDetails?.role === "admin" && <Admin></Admin>}
      {userDetails?.role === "agent" && <AgentOverview></AgentOverview>}
    </>
  );
};

export default Test;
