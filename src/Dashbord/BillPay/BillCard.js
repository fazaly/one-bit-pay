import React from 'react';

const BillCard = ({ bill }) => {
    return (
        <div className="">
            <div className="card lg:w-80 w-96 bg-white text-primary-content mx-auto shadow-lg">
                <div className="py-6 flex justify-center gap-3">
                    <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                        {bill.name}
                    </h1>
                    <button className="btn btn-outline btn-info btn-xs mt-1">Go</button>
                </div>
            </div>
        </div>
    );
};

export default BillCard;