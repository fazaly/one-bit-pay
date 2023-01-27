import React from 'react';

const BillCard = ({ bill }) => {
    return (
        <div className="">
            <div className="card w-32 bg-white text-primary-content mx-auto shadow-lg">
                <div className="py-6 flex justify-center gap-3">
                    <h1 className="font-bold text-xl text-center text-gray-900 opacity-50">
                        {bill.name}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default BillCard;