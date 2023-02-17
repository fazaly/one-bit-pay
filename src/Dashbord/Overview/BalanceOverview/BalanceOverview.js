import React from "react";
import { useSelector } from "react-redux";
import Modal from "../../../Components/Modal/Modal";
import { useGetUserLoggedinDetailsQuery } from "../../../features/api/apiSlice";

const BalanceOverview = () => {
    const email = useSelector((state) => state.auth.email);
    const {data} = useGetUserLoggedinDetailsQuery(email);
    const userDetails = data.data;

    return(
    <div className="w-full  p-6">
      <h1 className="text-5xl font-bold mb-4">Overview</h1>
      <div>
        <h1 className="text-xl mb-2">Today’s Balance</h1>
        <h1 className="text-5xl font-medium">
          <span className="text-[#5966FF]">$</span> {userDetails?.balance}.00
        </h1>
        <div className="flex justify-between mt-6 w-72">
          <label htmlFor="my-modal" className="btn rounded-md bg-[#181818] hover:bg-[#5966FF] border-none">
            ADD Founds
          </label>
          <button className="btn rounded-md bg-[#DADADA] hover:bg-red-500 hover:text-[#FFF] text-[#181818] border-none">
            Withdraw
          </button>
        </div>
      </div>
      <Modal/>
    </div>
  );
};

export default BalanceOverview;
