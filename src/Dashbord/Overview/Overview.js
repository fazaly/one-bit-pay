import React from "react";
import { useSelector } from "react-redux";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import { useGetUserLoggedinDetailsQuery } from "../../features/api/apiSlice";
import Activities from "./Activities";
import Balance from "./Balance";
import Chart2 from "./Chart/Chart2";
import LoanAmount from "./LoanAmount";
import OfferCard from "./OfferCard";
// import ChartView from "./Chart/Chart";



const Overview = () => {
  // const { user, userDetails } = useContext(AuthContext);
  const email = useSelector((state) => state.auth.email);
  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-11 gap-2 mt-6">
      <div className="md:col-span-8 p-3">
        <OfferCard></OfferCard>
        <div className="grid sm:grid-cols-2 gap-6 my-6">
          <div className=" p-10 rounded-2xl shadow-lg shadow-gray-400 hover:shadow-xl hover:shadow-gray-500 transition-all ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-6 ">
              <h4 className="text-xl ml-4 font-semibold ">Reports</h4>
              <select className="bg-[#ECEFF6] p-3 rounded-lg  w-full max-w-xs mx-auto">
                <option disabled selected> Monthly</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>
            <Activities userDetails={userDetails}></Activities>
          </div>
          <div className="grid grid-cols-1 gap-3 text-white">
            <Balance userDetails={userDetails}></Balance>
            {/* <LoanAmount userDetails={userDetails}></LoanAmount> */}
          </div>
        </div>
      </div>


      <div className="col-span-3  grid grid-cols-1 px-4 md:-mt-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

        </div>
        <div className="w-full md:-mt-20 flex items-center">
          <div className="mx-auto">

          </div>
        </div>
        <div>

        </div>

      </div>


    </div>
  );
};

export default Overview;
