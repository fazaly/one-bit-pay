import React, { useState } from "react";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { toast } from "react-hot-toast";
import dateTime from "date-time";
import {
  useGetTransactionHistoryQuery,
  useGetUserLoggedinDetailsQuery,
  useGetUsersRoleQuery,
  useSendMoneyMutation,
} from "../../features/api/apiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import balanceImage from "../../././images/10109-01.png";

const SendMoney = () => {
  const email = useSelector((state) => state.auth.email);

  const [sendMoney, { isLoading, isSuccess, isError }] = useSendMoneyMutation();

  const [receiver, setReceiver] = useState("");


  // get login user role
  const { data: userRole } = useGetUsersRoleQuery(`${receiver}`);

  // get login user all details
  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;

  useEffect(() => {
    if (isSuccess) {
      toast.success("You Successfully Send Money", {
        id: "sendMoney",
      });
    }
    if (!isSuccess && isError) {
      toast.error("Failed to sending money! Please try again", {
        id: "sendMoney",
      });
    }
  }, [isSuccess, isError]);

  const handleSendMoney = (event) => {
    event.preventDefault();
    const form = event.target;
    const receiverEmail = form.receiverEmail.value;
    const amount = form.amount.value;
    const senderEmail = email;
    const time = dateTime({ showTimeZone: true });
    const sendMoneyInfo = {
      senderEmail,
      receiverEmail,
      amount: parseInt(amount),
      time,
      type: "balanceTransfer",
    };

    if (receiverEmail === email) {
      toast.error("Send money not possible own account");
    } else if (userDetails?.balance <= 10) {
      toast.error("insufficient balance");
    } else if (amount < 10) {
      toast.error("Minimum sending amount is 10");
    } else if (userRole.userRole === "agent") {
      toast.error("Send money not possible in agent account");
    } else if (userRole?.status === false) {
      toast.error("Enter Valid Email");
    } else if (receiverEmail !== email && userDetails?.balance > 10 && userDetails.role === "user") {
      sendMoney(sendMoneyInfo);
      setTimeout(() => {
        form.reset();
      }, 3000);
    }
  };

  const handleFocus = (e) => {
    setReceiver(e);
  }

  return (
    <div>
      <div className="flex gap-4 lg:flex-row flex-col items-center p-4">

        <div className="lg:w-7/12  p-6 relative bg-[#EEEFFF] rounded-lg h-[260px]">
          <h1 className="text-4xl font-bold mb-4 ">Main Balance</h1>
          <div className="">
            <h1 className="text-xl mb-2 ">Today’s Balance</h1>
            <h1 className="text-5xl font-medium ">
              <span className="text-[#5966FF]">$</span> {userDetails?.balance}
              .00
            </h1>
            <div className="flex justify-between mt-6 z-10">
              <img src={balanceImage} alt="" className="absolute right-0 bottom-0 w-80 -z-0" />
            </div>
          </div>
        </div>

        <div className="lg:w-5/12 p-6  rounded-lg">
          <h1 className="font-bold text-left text-2xl mb-4 text-[#181818]">
            Transfer Money
          </h1>
          <form onSubmit={handleSendMoney} className="space-y-3">
            <input
              type="text"
              name="receiverEmail"
              required
              onBlur={(e) => handleFocus(e.target.value)}
              placeholder="RECEIVER EMAIL"
              className="input input-bordered bg-white w-full border-[#181818]"
            />
            <input
              type="text"
              name="amount"
              required
              placeholder="AMOUNT"
              className=" input input-bordered bg-white w-full border-[#181818]"
            />
            <p className="">
              <button
                type="submit"
                className="btn bg-[#181818] text-white w-full  rounded-lg border-none hover:bg-[#5966FF]"
              >
                {isLoading ? <ButtonSpinner /> : "SEND NOW"}
              </button>
            </p>
          </form>
        </div>
      </div>

      <div className="mt-2">
        <div className="card bg-white text-primary-content shadow-lg shadow-[#D9DCFF]">
          <div className="card-body">
            <h1 className="font-medium text-lg text-green-500  mb-4">
              History
            </h1>
            <SendMoneyHistory
              email={email}
              loading={isLoading}
              type={"balanceTransfer"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
