import React, { useContext, useEffect, useState } from "react";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import { AuthContext } from "../../context/AuthProvider";
import Chart2 from "./Chart/Chart2";
// import ChartView from "./Chart/Chart";



const Overview = () => {
<<<<<<< HEAD
  const [userDetails, setUserDetails] = useState({});
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://one-bit-pay-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data.data);
        setLoading(false);
      });
  }, [user, userDetails, loading]);

=======
  const { user, userDetails} = useContext(AuthContext);
  // console.log(userDetails);
>>>>>>> 56f87ba9f40c0bade1c179380e8f94c00564d000
  return (
    <div>
      <div>
        <div className="w-full grid lg:grid-cols-3 gap-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 col-span-2">
            {/* CARD 1 */}
            <div className="">
              <div className="card lg:w-80 w-96 bg-[#5966FF] text-primary-content mx-auto shadow-lg">
                <div className="card-body">
                  <h1 className="font-bold text-xl text-white opacity-60">
                    Main Balance
                  </h1>
                  <h1 className="font-bold text-3xl text-white">
                    ${userDetails?.balance}.00
                  </h1>
                </div>
              </div>
            </div>
            {/* CARD 2 */}
            <div>
              <div className="card lg:w-80 w-96 bg-white text-primary-content mx-auto shadow-lg">
                <div className="card-body border-2 rounded-lg border-[#5966FF]">
                  <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                    Loan Balance
                  </h1>
                  <h1 className="font-bold text-3xl text-gray-900">
                    $24,67.00
                  </h1>
                </div>
              </div>
            </div>
            {/* card 3  */}
            <div>
              <div className="card lg:w-80 w-96 bg-white text-primary-content mx-auto shadow-lg">
                <div className="card-body border-2 rounded-lg border-[#5966FF]">
                  <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                    Total Overview
                  </h1>
                  <div className="text-slate-700">
                    <h1 className="font-semibold">Total Received</h1>
                    <h1 className="font-semibold">Total Send</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* card 4  */}
            <div>
              <div className="card lg:w-80 w-96 bg-white text-primary-content mx-auto shadow-lg">
                <div className="card-body border-2 rounded-lg border-[#5966FF]">
                  <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                    Total Overview
                  </h1>
                  <div className="text-slate-700">
                    <h1 className="font-semibold">Total Received</h1>
                    <h1 className="font-semibold">Total Send</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="py-4 rounded-lg lg:w-80 h-80 shadow-lg bg-white">
            <Chart2/>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="card bg-white text-primary-content shadow-lg">
            <div className="card-body">
              <SendMoneyHistory email={user.email}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
