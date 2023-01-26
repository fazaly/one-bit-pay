import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ institute }) => {
    const { Name, img, details, _id } = institute
    return (
        <div className="card   card-side bg-base-100 shadow-xl">
            <div className='flex justify-center w-1/2'>
                <figure><img src={img} alt="" /></figure>
            </div>
            <div className="card-body w-1/2 ">
                <h2 className="font-bold">{Name}</h2>
                {/* <p className='text-sm'>{details}</p> */}
                <div className="card-actions flex justify-end">

                    <Link to={`/dashboard/donationDetails/${_id}`} className="btn btn-outline btn-info btn-xs">Details</Link>
                    <label htmlFor="my-modal-3" className="btn btn-outline btn-primary btn-xs">Donate Now</label>

                </div>
            </div>
        </div>
    );
};

export default DonationCard;