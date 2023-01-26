import React, { useContext, useEffect, useState } from "react";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import { AuthContext } from "../../context/AuthProvider";
import sendImage from "../../images/sendIcon.png";
import sendImage2 from "../../images/sendIcon2.jpg";
import { MdOutlineSendToMobile } from "react-icons/md";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { IoMdSend } from "react-icons/io";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { toast } from "react-hot-toast";
import { format } from "date-fns";

const SendMoney = () => {
  const { user, userDetails } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // const {data:userInfo = []} = useQuery({
  //   queryKey: ['SendMoney'],
  //   queryFn: async () => {
  //     const res = await fetch(`https://one-bit-pay-server.vercel.app/user/${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   }
  // })
  const handleSendMoney = (event) => {
    event.preventDefault();
    const form = event.target;
    const receiverEmail = form.receiverEmail.value;
    const amount = form.amount.value;
    const senderEmail = user?.email;
    const time = format(new Date(), "PP");
    const sendMoneyInfo = {
      senderEmail,
      receiverEmail,
      amount: parseInt(amount),
      time,
    };

    console.log(sendMoneyInfo);

    if (receiverEmail === user.email) {
      toast.error("Send money not possible own account");

    } else if (userDetails.balance <= 10) {
      toast.error("insufficient balance");

    } else if (amount < 10) {
      toast.error('Minimum sending amount is 10');

    } else if (receiverEmail !== user?.email && userDetails?.balance > 10) {
      setLoading(true);
      fetch("https://one-bit-pay-server.vercel.app/sendMoney", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(sendMoneyInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Send money success");
          form.reset();
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className="card lg:w-80 w-96 bg-white text-primary-content shadow-lg">
          <div className="card-body">
            <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
              Current Balance
            </h1>
            <h1 className="font-bold text-3xl text-slate-700">
              ${userDetails?.balance}.00
            </h1>
          </div>
        </div>

        <div className="card lg:w-64 w-96 bg-white text-primary-content shadow-lg">
          <div className="card-body">
            <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
              Send Money
            </h1>
            <form onSubmit={handleSendMoney} className="space-y-2">
              <input
                type="text"
                name="receiverEmail"
                required
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
                  className="btn w-full btn-xs rounded-sm border-none hover:bg-[#5966FF]"
                >
                  {loading ? <ButtonSpinner /> : "SEND NOW"}
                </button>
              </p>
            </form>
          </div>
        </div>

        <div className="card lg:w-80 w-96 bg-white text-primary-content shadow-lg">
          <div className="card-body">
            <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
              Today's Transaction
            </h1>
            <h1 className="font-bold text-xl text-slate-700">
              You made <br />{" "}
              <span className="text-3xl text-[#5966FF]">
                ${userDetails?.balance}
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
            <SendMoneyHistory email={user?.email} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
