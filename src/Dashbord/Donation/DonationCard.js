import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DonationModal from './DonationModal';

const DonationCard = ({ institute }) => {
    const [modal, setModal] = useState(false);
    const { Name, img, details, _id } = institute;
    console.log(institute)
    const handleModal = () => {
        setModal(true)
    }


    return (
        <div className="card  card-side bg-base-100 shadow-xl">
            <div className='flex justify-center w-1/2'>
                <figure><img src={img} alt="" /></figure>
            </div>
            <div className="card-body w-1/2 ">
                <h2 className="font-bold">{Name}</h2>
                {/* <p className='text-sm'>{details}</p> */}
                <div className="card-actions flex justify-end">
                    <Link to={`/dashboard/donationDetails/${_id}`} className="btn btn-outline btn-info btn-xs">Details</Link>
                    <button onClick={handleModal}>
                        <label htmlFor="my-modal-3" className="btn btn-outline btn-primary btn-xs">
                            Donate
                        </label>
                    </button>
                </div>
            </div>
            {
                modal && <DonationModal key={institute._id} institute={institute} modal={modal} setModal={setModal}></DonationModal>
            }
        </div>
    );
};

export default DonationCard;