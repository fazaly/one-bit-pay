import React, { useContext, useEffect, useState } from "react";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { Link, NavLink, Outlet } from "react-router-dom";
import userImage2 from '../images/userImage2.png';
import grid from '.././images/icons/grid.svg';
import apply from '.././images/icons/apply.svg';
import loan from '.././images/icons/loan.svg';
import payment from '.././images/icons/payment.svg';
import receive from '.././images/icons/receive.svg';
import recharge from '.././images/icons/recharge.svg';
import send from '.././images/icons/send.svg';
import wallet from '.././images/icons/wallet.svg';
import { AuthContext } from "../context/AuthProvider";
import Navbar from "../Components/Navbar/Navbar";
import DashBoardNavbar from "../Components/DashBoardNavbar/DashBoardNavbar";
import './DashboardLayout.css';
import { HiViewGridAdd, HiCurrencyDollar } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { FaUserEdit, FaMobile } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faSackDollar, faFileSignature, faCreditCard, faWallet } from "@fortawesome/free-solid-svg-icons";



const DashbordLayout = () => {
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState([])
  const { user } = useContext(AuthContext)


  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.status) {
          setUserDetails(data.data)
        }
      })

  }, [user, userDetails])

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:p-4 p-2">
          <div>
            <DashBoardNavbar></DashBoardNavbar>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#5966FF] text-base-content relative ">
            <label
              onClick={() => setOpen(!open)}
              htmlFor="my-drawer-2"
              className="bg-[#5966FF] text-white p-2 w-8 absolute -right-7 rounded-tr-full rounded-br-full duration-300">
              {open ? <HiChevronDoubleRight className="text-lg" /> : <HiChevronDoubleLeft className="text-lg" />}
            </label>
            {/* <!-- Sidebar content here --> */}
            <div className="flex justify-center items-center border-2 rounded-md p-2">
              <div className="mr-2">
                {
                  user?.userPhoto ?
                    <>
                      <NavLink to="/dashboard/editProfile">
                        <img src={user?.userPhoto} alt="" className="w-20 rounded-full" />
                      </NavLink>
                    </>
                    :
                    <>
                      <NavLink to="/dashboard/editProfile">
                        <img src={userImage2} alt="" className="w-20 rounded-full" />
                      </NavLink>
                    </>
                }

              </div>
              <div>
                <h1 className="font-bold text-white text-lg">{userDetails?.name}</h1>
                <h1 className="text-sm text-white">{userDetails?.userEmail}</h1>
              </div>
            </div>
            <div className="text-white p-4">
              <NavLink to="dahsboard/overview" className="flex items-center mb-6 mt-4">
                <HiViewGridAdd className="text-[30px] mr-4"/>
                <p className="text-lg font-semibold">Dashbord</p>
              </NavLink>
              <NavLink to="/dashboard/editProfile" className="flex items-center mb-6 mt-4">
                <FaUserEdit className="text-[30px] mr-4"/>
                <p className="text-lg font-semibold">Update Profile</p>
              </NavLink>
              <NavLink to='/dashboard/sendMoney' className="flex items-center mb-6 mt-4">
                <HiCurrencyDollar className="text-[30px] mr-4" />
                <p className="text-lg font-semibold">Send Money</p>
              </NavLink>
              <NavLink to="/dashboard/withdraw" className="flex items-center mb-6 mt-4">
                <FontAwesomeIcon icon={faWallet} className="text-[25px] mr-4"/>
                <p className="text-lg font-semibold">Withdraw</p>
              </NavLink>
              <NavLink to="/dashboard/mobileRecharge" className="flex items-center mb-6 mt-4">
                <FaMobile className="text-[25px] mr-4" />
                <p className="text-lg font-semibold">Mobile Recharge</p>
              </NavLink>
              <NavLink to="/dashboard/billPay" className="flex items-center mb-6 mt-4">
                <FontAwesomeIcon icon={faCreditCard} className="text-[25px] mr-4"/>
                <p className="text-lg font-semibold">Bill Pay</p>
              </NavLink>
              <NavLink to="/dashboard/loanRequest" className="flex items-center mb-6 mt-4">
                <FontAwesomeIcon icon={faSackDollar} className="text-[25px] mr-4"/>
                <p className="text-lg font-semibold">Loan Request</p>
              </NavLink>
              <NavLink to="/dashboard/applyForAgent" className="flex items-center mb-6 mt-4">
                <FontAwesomeIcon icon={faFileSignature} className="text-[25px] mr-4"/>
                <p className="text-lg font-semibold">Become An Agent</p>
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;
