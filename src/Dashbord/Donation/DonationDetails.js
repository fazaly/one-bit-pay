import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DonationModal from './DonationModal';

const DonationDetails = () => {
    const instituteDetails = useLoaderData()
    const { Name, details, img } = instituteDetails





    return (
        <div className='mx-4'>
            <div className='flex gap-4'>
                <Link className='btn btn-outline  btn-sm  hover:bg-[#5966FF]' to="/dashboard/donation">Back</Link>
                <label htmlFor="my-modal-3" className="btn btn-outline btn-primary btn-sm">Donate Now</label>
            </div>
            <h2 className='text-center font-semibold text-2xl my-3 text-blue-600'>{Name}</h2>

            <p>{details}</p>
            <img className='w-full' src={img} alt="" />
            <DonationModal key={instituteDetails._id} institute={instituteDetails}></DonationModal>
        </div>
    );
};

export default DonationDetails;