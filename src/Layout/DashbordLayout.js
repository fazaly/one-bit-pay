import React, { useState } from "react";
import { HiChevronDoubleRight, HiChevronDoubleLeft} from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import userImage from '../images/userImage.png';
import grid from '.././images/icons/grid.svg';
import apply from '.././images/icons/apply.svg';
import loan from '.././images/icons/loan.svg';
import payment from '.././images/icons/payment.svg';
import receive from '.././images/icons/receive.svg';
import recharge from '.././images/icons/recharge.svg';
import send from '.././images/icons/send.svg';
import wallet from '.././images/icons/wallet.svg';


const DashbordLayout = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:p-4 p-2">
          <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#5966FF] text-base-content relative">
            <label 
                onClick={() => setOpen(!open)} 
                htmlFor="my-drawer-2" 
                className="bg-[#5966FF] text-white p-2 w-8 absolute -right-7 rounded-tr-full rounded-br-full duration-300">
                {open ? <HiChevronDoubleRight className="text-lg"/> :  <HiChevronDoubleLeft className="text-lg"/>}
            </label>
            {/* <!-- Sidebar content here --> */}
            <div className="flex justify-center items-center border-2 rounded-md p-2">
              <div className="mr-2">
                <img src={userImage} alt="" className="w-20"/>
              </div>
              <div>
                <h1 className="font-bold text-white text-lg">Shamim Sarkar</h1>
                <h1 className="text-sm text-white">shamimibas@gmail.com</h1>
              </div>
            </div>
            <div className="text-white p-4">
              <Link className="flex items-center mb-6 mt-4">
                <img src={grid} alt="" className="w-7 mr-4"/>
                <p className="text-lg font-semibold">Dashbord</p>
              </Link>
              <Link className="flex items-center mb-6 mt-4">
                <img src={send} alt="" className="w-7 mr-4"/>
                <p className="text-lg font-semibold">Send Money</p>
              </Link>
              <Link className="flex items-center mb-6 mt-4">
                <img src={wallet} alt="" className="w-7 mr-4"/>
                <p className="text-lg font-semibold">Withdraw</p>
              </Link>
              <Link className="flex items-center mb-6 mt-4">
                <img src={recharge} alt="" className="w-7 mr-4"/>
                <p className="text-lg font-semibold">Mobile Recharge</p>
              </Link>
              <Link className="flex items-center mb-6 mt-4">
                <img src={payment} alt="" className="w-7 mr-4"/>
                <p className="text-lg font-semibold">Bill Pay</p>
              </Link>
              <Link className="flex items-center mb-6 mt-4">
                <img src={loan} alt="" className="w-7 mr-4"/>
                <p className="text-lg font-semibold">Loan Request</p>
              </Link>
              <Link className="flex items-center mb-6 mt-4">
                <img src={apply} alt="" className="w-7 mr-4"/>
                <p className="text-lg font-semibold">Become An Agent</p>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;
