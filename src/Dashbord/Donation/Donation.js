import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DonationCard from './DonationCard';
import DonationModal from './DonationModal';

const Donation = () => {
    const [institutes, setInstitutes] = useState([])
    useEffect(() => {
        fetch(`https://one-bit-pay-server.vercel.app/donations`)
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
            <DonationModal></DonationModal>
        </div>
    );
};

export default Donation;