import React from 'react';
import BillCard from './BillCard';

const BillPay = () => {

    const AllBils = [
        {
            "id": 1,
            "name": "Gas"
        },
        {
            "id": 2,
            "name": "Internet"
        },
        {
            "id": 3,
            "name": "Electricity"
        },
        {
            "id": 4,
            "name": "Water"
        },
        {
            "id": 5,
            "name": "Education"
        },
        {
            "id": 6,
            "name": "Insurance"
        },
        {
            "id": 7,
            "name": "TV & Telephone"
        },
        {
            "id": 8,
            "name": "Bank & FI"
        },
        {
            "id": 9,
            "name": "Other"
        },

    ]


    return (
        <div>
            <div className='text-center mb-10'>
                <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none'>My Bills</button>
                <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none ml-10'>Receipts</button>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-2xl">Biller</span>
                </label>
                <input
                    type="number"
                    type="text"
                    placeholder="Enter Biller Name or Biller Number"
                    className="input  w-full "
                    name="phoneNumber"
                />
            <div className="divider mt-0 mb-0"></div>
            </div>
            <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none'>Pay</button>
            <h3 className='text-2xl font-bold mb-6 mt-8'>Bill Type</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10'>
                {
                    AllBils?.map(bill => <BillCard key={bill.id} bill={bill}></BillCard>)
                }

            </div>
        </div>
    );
};

export default BillPay;