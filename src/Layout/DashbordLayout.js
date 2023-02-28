import React, { useEffect, useState } from "react";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { Link, NavLink, Outlet } from "react-router-dom";
import DashBoardNavbar from "../Components/DashBoardNavbar/DashBoardNavbar";
import "./DashboardLayout.css";
import { HiViewGridAdd, HiCurrencyDollar } from "react-icons/hi";
import { FaUserEdit, FaMobile, FaHandshake, FaDonate, FaArrowLeft } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlCalculator } from "react-icons/sl";
import {
  faSackDollar,
  faFileSignature,
  faCreditCard,
  faWallet,
  faCommentDollar,
  faUsers,
  faUsersGear,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";

import { useGetUserLoggedinDetailsQuery } from "../features/api/apiSlice";
import { useSelector } from "react-redux";
import logo from "../images/logo.svg"
import sidebarImg from "../images/dasboard/18953931_6075540-removebg-preview.png"
const DashbordLayout = () => {
  const [open, setOpen] = useState(false);
  const [notifi, setNotifi] = useState(false);



  const email = useSelector(state => state.auth.email);
  const { data, isLoading, isSuccess } = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data

  console.log(email)
  console.log(userDetails)

  useEffect(() => {
    if (userDetails?.notification) {
      setNotifi(true);
    }
  }, [])



  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:p-4 p-2">
          <div>
            <DashBoardNavbar
              notifi={notifi}
              setNotifi={setNotifi}
              userDetail={userDetails}
            ></DashBoardNavbar>
          </div>
          <div className="bg-white">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side shadow-2xl ml-4">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-white text-black relative ">
            <label
              onClick={() => setOpen(!open)}
              htmlFor="my-drawer-2"
              className=" p-2 w-8 absolute -right-7 rounded-tr-full rounded-br-full duration-300 mt-16"
            >
              {open ? (
                <HiChevronDoubleLeft className="text-lg " />
              ) : (
                <HiChevronDoubleRight className="text-lg " />

              )}
            </label>
            {/* <!-- Sidebar content here --> */}
            <div className="w-52 flex flex-col justify-center items-center  rounded-md p-2 ml-3 ">
              <Link to='/' className="">
                <img src={logo} alt='' className='w-46 btn  border-0' />
              </Link>

            </div>
            <div className=" p-4">
              {
                userDetails?.role === 'user' && <div className="grid grid-cols-1 gap-5">
                  <NavLink
                    to="/dashboard/overview"
                    className="flex justify-items-start "
                  >
                    <HiViewGridAdd className="text-[25px] mr-4" />
                    <p className="text-lg font-semibold">OverView</p>
                  </NavLink>

                  <NavLink
                    to="/dashboard/sendMoney"
                    className="flex items-center "
                  >
                    <HiCurrencyDollar className="text-[25px] mr-4" />
                    <p className="text-lg font-semibold">Send Money</p>
                  </NavLink>

                  <NavLink
                    to="/dashboard/withdraw"
                    className="flex items-center "
                  >
                    <FontAwesomeIcon
                      icon={faWallet}
                      className="text-[25px] mr-4"
                    />
                    <p className="text-lg font-semibold">Withdraw</p>
                  </NavLink>

                  <NavLink
                    to="/dashboard/mobileRecharge"
                    className="flex items-center"
                  >
                    <FaMobile className="text-[23px] mr-4" />
                    <p className="text-lg font-semibold">Mobile Recharge</p>
                  </NavLink>

                  <NavLink
                    to="/dashboard/billPay"
                    className="flex items-center "
                  >
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      className="text-[23px] mr-4"
                    />
                    <p className="text-lg font-semibold">Bill Pay</p>
                  </NavLink>

                  <NavLink
                    to="/dashboard/loanRequest"
                    className="flex items-center "
                  >
                    <FontAwesomeIcon
                      icon={faSackDollar}
                      className="text-[23px] mr-4"
                    />
                    <p className="text-lg font-semibold">Loan Request</p>
                  </NavLink>
                  <NavLink
                    to="/dashboard/donation"
                    className="flex items-center "
                  >
                    <FontAwesomeIcon
                      icon={faDollar}
                      className="text-[23px] mr-4"
                    />
                    <p className="text-lg font-semibold">Donation</p>
                  </NavLink>

                </div>
              }

              {/* agent routes------------------------------------------  */}
              {
                userDetails?.role === 'agent' && <div>
                  <NavLink to="/dashboard/overview" className="flex items-center mb-6 mt-4">
                    <HiViewGridAdd className="text-[30px] mr-4" />
                    <p className="text-lg font-semibold">Dashbord</p>
                  </NavLink>

                  <NavLink to="/dashboard/b2b" className="flex items-center mb-6 mt-4">
                    <FaHandshake className="text-[30px] mr-4" />
                    <p className="text-lg font-semibold">B2B Transfer</p>
                  </NavLink>

                  <NavLink to="/dashboard/cashin" className="flex items-center mb-6 mt-4">
                    <FontAwesomeIcon
                      icon={faCommentDollar}
                      className="text-[30px] mr-4"
                    />
                    <p className="text-lg font-semibold">Cash In</p>
                  </NavLink>

                  <NavLink to="/dashboard/transactions" className="flex items-center mb-6 mt-4">
                    <FontAwesomeIcon
                      icon={faCommentDollar}
                      className="text-[30px] mr-4"
                    />
                    <p className="text-lg font-semibold">Transaction's</p>
                  </NavLink>
                </div>
              }

              {/* //Admin routes ------------------------------------------*/}
              {
                userDetails?.role === 'admin' && <div>
                  <NavLink to="/dashboard/adminOverview" className="flex items-center mb-6 mt-4">
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      className="text-[25px] mr-4"
                    />
                    <p className="text-lg font-semibold">OverView</p>
                  </NavLink>
                  <NavLink to="/dashboard/loanRequestList" className="flex items-center mb-6 mt-4">
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      className="text-[25px] mr-4"
                    />
                    <p className="text-lg font-semibold">Loan Requests</p>
                  </NavLink>
                  <NavLink to="/dashboard/agentRequest" className="flex items-center mb-6 mt-4">
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      className="text-[25px] mr-4"
                    />
                    <p className="text-lg font-semibold">Agents Requests</p>
                  </NavLink>

                  <NavLink to="/dashboard/agents" className="flex items-center mb-6 mt-4">
                    <FontAwesomeIcon
                      icon={faUsersGear}
                      className="text-[25px] mr-4"
                    />
                    <p className="text-lg font-semibold">All Agents</p>
                  </NavLink>

                  <NavLink to="/dashboard/users" className="flex items-center mb-6 mt-4">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="text-[25px] mr-4"
                    />
                    <p className="text-lg font-semibold">All users</p>
                  </NavLink>
                </div>
              }
            </div>

            <div className="flex justify-center  p-4 mb-3  rounded-xl">
              <img className="w-24" src={sidebarImg} alt="" />
            </div>

            {
              userDetails?.role === 'user' && <Link
                to="/dashboard/applyForAgent"
                className="flex items-center btn btn-sm "
              >
                <FontAwesomeIcon
                  icon={faFileSignature}
                  className="text-[23px] mr-4"
                />
                <p className="text-lg font-semibold">Become An Agent</p>
              </Link>
            }

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;
