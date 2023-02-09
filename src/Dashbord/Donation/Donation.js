import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SendMoneyHistory from '../../Components/TransactionHistory/SendMoneyHistory';
import { AuthContext } from '../../context/AuthProvider';
import DonationCard from './DonationCard';
import DonationModal from './DonationModal';

const Donation = () => {
    const { user, userDetails } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [institutes, setInstitutes] = useState([])
    useEffect(() => {
        fetch(` http://localhost:5000/donations`)
            .then(res => res.json())
            .then(data => {
                setInstitutes(data)
            })


    }, [])


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
                <SendMoneyHistory email={user?.email} loading={loading} type={"donation"}></SendMoneyHistory>
            </div>
            {/* <DonationModal></DonationModal> */}
        </div>
    );
};

export default Donation;