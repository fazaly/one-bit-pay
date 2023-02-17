import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { FaBell, FaHome, FaUserEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetTransactionHistoryQuery } from '../../features/api/apiSlice';
import NotificationLog from './NotificationLog';
import { signOut } from 'firebase/auth';
import { auth, logoutUser } from '../../features/api/authSlice';
import userImage from "../../images/userImage2.png"


const DashBoardNavbar = ({ notifi, setNotifi, userDetail }) => {
    const email = useSelector((state) => state.auth.email);
    const { data } = useGetTransactionHistoryQuery(email);
    const transactions = data?.data;
    const dispatch = useDispatch();
    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(logoutUser());
        });
    }




    const handleNotification = () => {
        fetch(`https://one-bit-pay-server.vercel.app/notification/${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    setNotifi(false)
                }
            });

    }


    return (
        <div>
            <div className="navbar justify-between px-4  ">
                <div className="flex w-9/12">
                    <div className="navbar hidden lg:grid lg:grid-cols-1 ml-3">

                        <h2 className='text-2xl font-bold mr-1'>Hi, <span>{userDetail?.name}</span></h2>
                        <p className='text-gray-300'>Welcome Back!</p>
                    </div>
                    <div className='flex'>
                        <Link className='text-2xl text-[#070733] font-bold mr-9' to="/">
                            <FaHome></FaHome>
                        </Link>

                    </div>
                </div>
                <div className="flex w-3/12 justify-between">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaBell className='text-2xl text-[#5966FF] '></FaBell>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-72 bg-base-100 shadow">
                            <div className="card-body">
                                {
                                    transactions?.slice(0, 6).map((transactionsData) => <NotificationLog transactionsData={transactionsData}></NotificationLog>)
                                }


                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                {
                                    userDetail?.imageUrl ?
                                        <img src={userDetail?.imageUrl} alt="" />
                                        :
                                        <img src={userImage} alt="" />
                                }

                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72">
                            <li>
                                <Link to="/dashboard/editProfile"
                                    className="flex  justify-items-start "
                                >
                                    <FaUserEdit className="text-[30px] mr-4" />
                                    <p className="text-lg font-semibold">Profile
                                    </p>
                                </Link>

                            </li>
                            <li>
                                <Link
                                    to="/dashboard/applyForAgent"
                                    className="flex items-center"
                                >
                                    <FontAwesomeIcon
                                        icon={faFileSignature}
                                        className="text-[25px] mr-4"
                                    />
                                    <p className="text-lg font-semibold">Become An Agent</p>
                                </Link>
                            </li>
                            <li className='font-semibold'>
                                <button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashBoardNavbar;