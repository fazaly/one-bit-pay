import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetTransactionHistoryQuery, useGetUserLoggedinDetailsQuery } from '../../features/api/apiSlice';
import AgentHistoryCard from './AgentHistoryCard';

const AgentOverview = () => {
    const email = useSelector((state) => state.auth.email);
    const { data: transactionsData } = useGetTransactionHistoryQuery(email);
    const transactions = transactionsData?.data;
    const { data } = useGetUserLoggedinDetailsQuery(email);
    const userDetails = data?.data

    return (
        <div className='mt-10 mx-6 text-white  '>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2  justify-between gap-5  lg:gap-36 '>
                <div className='bg-[#303640] p-6 rounded-lg h-52 lg:w-96 '>
                    <h1 className='text-5xl font-bold mb-8'>OverView</h1>
                    <p>Total Balance</p>
                    <h2 className='text-2xl font-semibold'><span className='text-[#5966FF]'>$</span>{userDetails?.balance}</h2>
                </div>
                <div className='lg:w-96'>
                    <h4 className='text-xl text-end font-semibold text-[#5966FF] mb-3'>Notifications</h4>
                    <div className='grid grid-cols-1 gap-2' >
                        {
                            transactions?.filter((data) => {
                                return data.type === "b2bTransition"
                            }
                            ).slice(0, 3).map((transactionData) => <AgentHistoryCard transactionData={transactionData} email={email}></AgentHistoryCard>)
                        }

                    </div>
                </div>
            </div>
            <div className='bg-[#303640] px-14 py-6 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-semibold'>7% COMMITION ON <br />
                        EVERY <span className='font-bold text-5xl text-[#5966FF]'>CASHIN</span>
                    </h2>
                </div>

                <div className='bg-[#5966FF] p-2 w-12 rounded-full'>
                    <Link to="/dashboard/cashin">
                        <FaArrowRight className='text-2xl text-[#ffff]'></FaArrowRight>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AgentOverview;