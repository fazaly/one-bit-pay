import React from 'react';
import FinancialSolutionsCard from './FinancialSolutionsCard';

const FinancialSolutions = () => {
    const FinancialSolutionsData = [
        {
            "id": "1",
            "title": "Mobile Recharge",
            "text": "Recharge any number and get the best offer",
            "img": "https://i.ibb.co/k6KD7zG/recharge.png"
        },
        {
            "id": "2",
            "title": "Send Money",
            "text": "Send money from OneBitPay to any number instantly",
            "img": "https://i.ibb.co/phB4qJN/send.png"
        },
        {
            "id": "3",
            "title": "Withdraw",
            "text": "Cash Out anytime from the largest Agent and ATM network",
            "img": "https://i.ibb.co/rM09dtn/cashout.png"
        },
        {
            "id": "4",
            "title": "Pay Bill",
            "text": "Pay any bill from the largest bill payment network in Bangladesh",
            "img": "https://i.ibb.co/R0Z342n/paybill.png"
        },
    ]
    return (
        <div className='w-[80vw] mx-auto mb-20'>
            <h1 className='text-3xl mt-16 mb-10 text-center font-bold'>One Platform for all Financial Solutions</h1>
            <div className='grid  grid-cols-1 lg:grid-cols-4 gap-10 mx-auto md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1'>
                {
                    FinancialSolutionsData.map(FSData => <FinancialSolutionsCard
                        key={FSData.id}
                        FSData={FSData}
                    ></FinancialSolutionsCard>
                    )
                }
            </div>
        </div>
    );
};

export default FinancialSolutions;