import React from "react";
import { SlCalculator } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AgentOverview from "../../AgentDashboard/AgentOverview/AgentOverview";
import SendMoneyHistory from "../../Components/TransactionHistory/SendMoneyHistory";
import { useGetUserLoggedinDetailsQuery } from "../../features/api/apiSlice";
import Admin from "../../Pages/Admin/Overview/Admin";
import Activities from "./Activities";
import Balance from "./Balance";
import Chart2 from "./Chart/Chart2";
import LoanAmount from "./LoanAmount";
import OfferCard from "./OfferCard";
// import ChartView from "./Chart/Chart";



const Overview = () => {
  const email = useSelector((state) => state.auth.email);
  const { data } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;

  return (

    <>
      {
        userDetails?.role === 'user' && <div className="grid grid-cols-1 md:grid-cols-11 pl-4 gap-2 mt-6 ">

          <div className="md:col-span-7 p-3 ">
            <OfferCard></OfferCard>
            <div className="grid sm:grid-cols-2 gap-6 my-6">

              <div className="grid grid-cols-1  gap-3 text-white">
                <Balance userDetails={userDetails}></Balance>
              </div>
              <div className="text-[#070733] rounded-2xl grid grid-cols-1  items-center pl-8 p-4  shadow-xl shadow-slate-200 h-48">
                <p className="text-xl font-semibold">Calculate your charges</p>
                <Link className="btn btn-xs" to="/dashboard/chargeCalculate">Click here</Link>
              </div>

            </div>
          </div>

          <div className="col-span-4  grid grid-cols-1 px-4 ">

            <div className=" p-4 rounded-2xl shadow-lg shadow-gray-200 hover:shadow-lg hover:shadow-gray-300 transition-all ">
              <div className="mb-4">
                <h4 className="text-xl text-center ml-4 font-semibold ">Reports</h4>
              </div>
              <Activities userDetails={userDetails}></Activities>
              <div>

              </div>
            </div>

          </div>


        </div>
      }


      {
        userDetails?.role === 'admin' && <Admin></Admin>
      }
      {
        userDetails?.role === 'agent' && <AgentOverview></AgentOverview>
      }

    </>

  );
};

export default Overview;
