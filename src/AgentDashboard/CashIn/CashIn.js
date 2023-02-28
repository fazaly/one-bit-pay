import React, { useEffect } from "react";
import dateTime from "date-time";
import { toast } from "react-hot-toast";
import { useState } from "react";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserLoggedinDetailsQuery,
  useGetUsersRoleQuery,
  usePostCashInMutation,
} from "../../features/api/apiSlice";
import CashInHistory from "./CashInHistory";

const CashIn = () => {
  const [focusEmail, setFocusEmail] = useState("");

  const email = useSelector((state) => state.auth.email);
  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;
  const { data: userRole } = useGetUsersRoleQuery(focusEmail);

  //post cashin data in database------------
  const [postData, { isLoading, isSuccess, isError, error }] = usePostCashInMutation();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Cash In has been success", { id: "Cash In" });
    } else if (isError) {
      toast.error(error.message, { id: "Cash In" });
    }
  }, [isLoading, isSuccess, isError, error]);



  const handleCashIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const receiverEmail = form.receiverEmail.value;
    const amount = form.amount.value;
    const agentEmail = email;
    const time = dateTime({ showTimeZone: true });
    const cashInInfo = {
      agentEmail,
      receiverEmail,
      amount: parseInt(amount),
      time,
      type: "cashin",
    };

    if (receiverEmail === email) {
      return toast.error("Send money not possible own account");
    } else if (userDetails.balance <= 10) {
      return toast.error("insufficient balance");
    } else if (amount < 10) {
      return toast.error("Minimum sending amount is 10");
    } else if (userRole.userRole === "agent") {
      return toast.error("Cashin in Agent Account Not Possible");
    } else if (userRole?.status === false) {
      toast.error("Enter Valid Email");
    } else if (receiverEmail !== email && userDetails?.balance > 10) {
      postData(cashInInfo);
      form.reset();

    }
  };

  return (
    <div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className="card lg:w-80 w-96  bg-[#181818] text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-gray-500 transition-all p-4">
          <div className="card-body rounded-lg">
            <h1 className="font-bold text-xl text-[#fff] uppercase">
              Main Balance
            </h1>
            <h1 className="font-bold text-3xl text-white">
              <span className="text-[#5966FF]">$ {userDetails?.balance}.00</span>
            </h1>
          </div>
        </div>

        <div className="card lg:w-80 w-96 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-gray-500 transition-all">
          <div className="card-body">
            <h1 className={`font-bold text-xl text-[#181818] `}>
              CASH IN
            </h1>
            <form onSubmit={handleCashIn} className="space-y-2 relative">
              <input
                type="text"
                name="receiverEmail"
                required
                placeholder="user email"
                className={`w-full border-0 border-b-2 border-slate-700 text-slate-700 outline-none  focus:text-[#5966FF] focus:border-b-[#5966FF]`}
                data-tip="hello"
                onBlur={(e) => setFocusEmail(e.target.value)}
              />
              <input
                type="number"
                name="amount"
                required
                placeholder="amount"
                className=" w-full border-0 border-b-2 border-slate-700 outline-none text-slate-700 focus:text-[#5966FF]  focus:border-b-[#5966FF]"
              />
              <button
                type="submit"
                className={`btn w-full btn-xs rounded-sm border-none hover:bg-[#5966FF]`}
              >
                {
                  isLoading ? <ButtonSpinner /> : "CASH IN"
                }
              </button>
            </form>
          </div>
        </div>

        <div className="card lg:w-80 w-96 bg-white text-primary-content shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-gray-500 transition-all">
          <div className="card-body">
            <h1 className="font-bold text-xl text-[#181818] ">
              Today's Commission
            </h1>
            <h1 className="font-bold text-md text-slate-700">
              You made <br />
              <span className="text-3xl text-[#5966FF]">
                $ 24
              </span>{" "}
              commission
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <CashInHistory />
      </div>
    </div>
  );
};

export default CashIn;
