import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BillModal from './BillModal';

const CompaniesCard = ({company}) => {
    // console.log(company);
    const [payBill, setPayBill] = useState(null)
    return (
        // to={`/dashboard/bill/${company._id}`}
        <div>
            <label onClick={()=>setPayBill(company)} htmlFor="bill-modal">
                <div className='flex mt-5'>
                    <img className='w-16 h-16 mr-6 mb-4 rounded-full cursor-pointer' src={company.image} alt="" />
                    <div className='cursor-pointer'>
                        <h3 className='text-2xl'>{company.name}</h3>
                        <h3 className='text-2xl'>{company.code}</h3>
                    </div>
                </div>
            </label>
            {
                payBill && 
                <BillModal
            company={company}
            setPayBill={setPayBill}
            payBill={payBill}
            ></BillModal>
            }
        </div>
    );
};

export default CompaniesCard;