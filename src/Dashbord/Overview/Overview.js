import React from "react";
import { useSelector } from "react-redux";
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
  // const { user, userDetails } = useContext(AuthContext);
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

              <div className="grid grid-cols-1 gap-3 text-white">
                <Balance userDetails={userDetails}></Balance>
                {/* <LoanAmount userDetails={userDetails}></LoanAmount> */}
              </div>
            </div>
          </div>

          <div className="col-span-4  grid grid-cols-1 px-4 ">

            <div className=" p-4 rounded-2xl shadow-lg shadow-gray-400 hover:shadow-xl hover:shadow-gray-500 transition-all ">
              <div className="">
                <h4 className="text-xl ml-4 font-semibold ">Reports</h4>
              </div>
              <Activities userDetails={userDetails}></Activities>
            </div>

            <div>

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
