import React from 'react';
import BillCard from './BillCard';

const BillPay = () => {

    const AllBils = [
        {
            "id": 1,
            "name": "Gas Bill"
        },
        {
            "id": 1,
            "name": "Gas Bill"
        },
        {
            "id": 1,
            "name": "Electricity Bill"
        },
        {
            "id": 1,
            "name": "Water Bill"
        },
        {
            "id": 1,
            "name": "Paper Bill"
        },
        {
            "id": 1,
            "name": "Gas Bill"
        },

    ]




    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>



                {
                    AllBils?.map(bill => <BillCard key={bill.id} bill={bill}></BillCard>)
                }

            </div>
        </div>
    );
};

export default BillPay;