import React from "react";
import ReactTimeAgo from 'react-time-ago';
import dateTime from "date-time";
import { useGetRechargeHistoryQuery} from "../../features/api/apiSlice";
import { useSelector } from "react-redux";
//deployed server api
// https://one-bit-pay-server.vercel.app

const RechargeHistory = () => {
  const user = useSelector((state) => state.currentUser.user);
  const {data} = useGetRechargeHistoryQuery(user.email);
  const recharges = data;
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
                recharges?.slice(0, 10).map((recharge, i) => <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{recharge?.userphone}</td>
                    <td>{recharge?.userEmail}</td>
                    <td>{recharge?.balance}</td>
                    <td>{recharge?.trxID}</td>
                    <td>
                    {/* <ReactTimeAgo date={Date.parse(recharge?.date)} 
                    locale="en" timeStyle="round-minute"/> */}
                    </td>
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
