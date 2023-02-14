import React from 'react';
import cardBg from "../../images/dasboard/cardBg.jpg"
const LoanAmount = () => {
    return (
        <div className='bg-black tex-white rounded-2xl grid grid-cols-1  items-center pl-8 p-4 shadow-2xl shadow-slate-500 bg-[#edff84a1] text-black' >
            <p>Loan Amount</p>
            <p className='text-2xl font-bold'>$12000</p>
            <p>25 30 24 87</p>
        </div>
        // <div className='bg-black tex-white rounded-2xl grid grid-cols-1 gap-2 items-center p-4 shadow-2xl shadow-slate-500' style={{ backgroundImage: `url(${cardBg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
        //     <p>Loan Amout</p>
        //     <p className='text-xl'>$12000</p>
        //     <p>25 30 24 87</p>
        // </div>
    );
};

export default LoanAmount;