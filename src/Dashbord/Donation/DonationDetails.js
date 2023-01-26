import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DonationDetails = () => {
    const instituteDetails = useLoaderData()
    const { Name, details, img } = instituteDetails





    return (
        <div>
            <Link className='btn btn-outline' to="/dashboard/donation">Back</Link>
            <h2 className='text-center font-semibold text-xl my-3 text-blue-600'>{Name}</h2>
            <p>{details}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default DonationDetails;