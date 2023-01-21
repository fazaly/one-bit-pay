import React, { useContext, useEffect, useState } from "react";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import { AuthContext } from "../../context/AuthProvider";
import sendImage from "../../images/sendIcon.png";
import sendImage2 from "../../images/sendIcon2.jpg";
import { MdOutlineSendToMobile } from "react-icons/md";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const SendMoney = () => {
  const [userDetails, setUserDetails] = useState({});
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
          setUserDetails(data.data);
          console.log(data)
          setLoading(false);
      });
  }, [user, userDetails, loading]);

  // const {data:userInfo = []} = useQuery({
  //   queryKey: ['SendMoney'],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/user/${user?.email}`);
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
    const time = new Date().toISOString();
    const sendMoneyInfo = {
      senderEmail,
      receiverEmail,
      amount: parseInt(amount),
      time,
    };
    console.log(sendMoneyInfo);

    fetch("http://localhost:5000/sendMoney", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendMoneyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="">
          <div className="card lg:w-80 w-96 h-52 bg-white text-primary-content mx-auto shadow-lg">
            <div className="card-body">
              <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                Main Balance
              </h1>
              <h1 className="font-bold text-3xl text-gray-900">
              {
                  loading ? <Loader/> : `$ ${userDetails?.balance}`
                }
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="card lg:w-80 w-96 h-52 bg-white text-primary-content mx-auto shadow-xl">
            <div className="">
              <form
                onSubmit={handleSendMoney}
                className="card-body rounded-xl bg-white"
              >
                <h1 className="font-bold text-xl text-[#5966FF] opacity-50">Send Money</h1>
                <div className="">
                  <div className="">
                    <div className="form-control send-money mb-2">
                      <input
                        type="text"
                        name="receiverEmail"
                        placeholder="receiver email"
                        className=""
                      />
                    </div>

                    <div className="form-control send-money mb-2">
                      <input
                        type="text"
                        name="amount"
                        placeholder="amount"
                        className="input_field"
                      />
                    </div>
                  </div>
                  <div className="form-control rounded-full ">
                    <button type="submit" className="btn btn-xs w-20 rounded-sm mt-2 hover:bg-[#5966FF] border-none">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 mt-8">
        <div>
          <SendMoneyHistory
            key={userDetails._id}
            email={user?.email}
            loading={loading}
          ></SendMoneyHistory>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
