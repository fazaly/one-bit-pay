import React, { useContext } from 'react';
import { FaArrowLeft, FaBackspace } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../.././images/logo.svg';
import { useGetTransactionHistoryQuery } from '../../features/api/apiSlice';
import NotificationLog from './NotificationLog';

const DashBoardNavbar = ({ notifi, setNotifi }) => {
    const email = useSelector((state) => state.auth.email);
    const { data } = useGetTransactionHistoryQuery(email);
    const transactions = data?.data

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
            <div className="navbar rounded-xl shadow-md bg-base-100 mb-8">
                <div className="navbar-start">
                    <Link to='/' className='ml-10 text-blue-500'>
                        <FaArrowLeft></FaArrowLeft>
                    </Link>

                </div>
                <div className="navbar-center">

                    <img src={logo} alt='' className='w-36 btn bg-transparent border-0' />
                    {/* <a className="btn btn-ghost normal-case text-2xl text-[#5966FF]">OneBitPay</a> */}
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className=""><button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                {

                                    notifi && <span onClick={handleNotification} className="badge badge-xs badge-primary indicator-item p-2">
                                        1
                                    </span>
                                }

                            </div>
                        </button></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80">
                            <div className='grid grid-cols-1 gap-1 p-2'>
                                {
                                    transactions?.slice(0, 5).filter((data) => data.notification === true
                                    ).map((transactionsData) => <NotificationLog
                                        key={transactionsData._id}
                                        transactionsData={transactionsData}></NotificationLog>)
                                }
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
            {/* <div className="divider"></div> */}
        </div>
    );
};

export default DashBoardNavbar;