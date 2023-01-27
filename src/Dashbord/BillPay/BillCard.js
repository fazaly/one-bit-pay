import React from 'react';

const BillCard = ({ bill }) => {
    return (
        <div>
            <div>
                <div>
                    <button type='submit' className='btn btn-lg btn-outline capitalize font-bold text-xl text-gray-900 opacity-50'>
                        {bill.name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BillCard;