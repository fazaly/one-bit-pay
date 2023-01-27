import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


//deployed server api
// https://one-bit-pay-server.vercel.app

const RechargeHistory = ({recharges, refetch}) => {
  return (
    <div>
      <div className="overflow-x-auto shadow-lg">
        <table className="table table-zebra w-full">
          <thead className="text-slate-700">
            <tr>
              <th></th>
              <th>Number</th>
              <th>EMAIL</th>
              <th>AMOUNT</th>
              <th>TRANSACTION ID</th>
              <th>DATE & TIME</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {
                recharges.slice(0, 10)?.map((recharge, i) => <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{recharge.userphone}</td>
                    <td>{recharge.userEmail}</td>
                    <td>{recharge.balance}</td>
                    <td>{recharge.trxID}</td>
                    <td>{recharge?.date}</td>
                  </tr>
                  )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RechargeHistory;
