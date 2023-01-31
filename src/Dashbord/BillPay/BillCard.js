import React from 'react';

const BillCard = ({ bill }) => {
    return (
        <div className='min-w-'>
            <button type='submit' className='btn w-full btn-outline capitalize font-bold text-xl text-gray-900 opacity-50'>
                <span>{bill.icon}</span>
                <span>{bill.name}</span>
            </button>
        </div>
    );
};

export default BillCard;