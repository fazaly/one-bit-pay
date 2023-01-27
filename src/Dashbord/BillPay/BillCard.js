import React from 'react';

const BillCard = ({ bill }) => {
    return (
        <div className="">
            <div className="card w-32 bg-white text-primary-content mx-auto shadow-2xl">
                <div className="py-6 flex justify-center gap-3">
                    <h1 className="font-bold text-xl text-center text-[#5966FF] opacity-50">
                        {bill.name}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default BillCard;