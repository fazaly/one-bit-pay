import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SendMoneyHistory from '../../Components/TransactionHistory/SendMoneyHistory';
import { useGetDonationInistituteQuery } from '../../features/api/apiSlice';
import DonationCard from './DonationCard';
import DonationModal from './DonationModal';

const Donation = () => {
    const email = useSelector((state) => state.auth.email);
    const [loading, setLoading] = useState(false);
    // const [institutes, setInstitutes] = useState([]);

    // get insititute data
    const { data, isLoading, isSuccess, isError } = useGetDonationInistituteQuery();

    const institutes = data;

    if (isLoading) {
        return <p>Loading..</p>
    }
    if (isError) {
        return <p>Something Went Wrong ! Please Check .. </p>
    }

    return (
        <div className='mx-2'>
            <h2 className='text-center text-2xl font-semibold '>Make Someone Happy</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                {
                    institutes?.map(institute => <DonationCard key={institute._id} institute={institute}></DonationCard>)
                }
            </div>
            <div className='mt-8 '>
                <h2 className='my-4 text-2xl text-center font-semibold'>All Donation History</h2>
                <SendMoneyHistory email={email} loading={loading} type={"donation"}></SendMoneyHistory>
            </div>
            {/* <DonationModal></DonationModal> */}
        </div>
    );
};

export default Donation;