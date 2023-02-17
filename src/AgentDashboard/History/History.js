import React from "react";
import { useSelector } from "react-redux";
import { useAgentHistoryQuery } from "../../features/api/apiSlice";

const History = () => {
  const email = useSelector((state) => state.auth.email);
  const { data } = useAgentHistoryQuery(email);
  const history = data;

  return (
    <div className="mt-8">
      <h1 className="text-lg font-normal text-green-500 mb-4">History</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>AMOUNT</th>
              <th>USER EMAIL</th>
              <th>DATE TIME</th>
            </tr>
          </thead>
          <tbody>
            {history?.map((item, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <span className="text-[#5966FF]">$</span> {item?.amount}
                </td>
                <td className="text-red-500">{item?.receiverEmail}</td>
                <td>{item?.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
