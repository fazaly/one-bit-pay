import React from 'react';
import { Link } from 'react-router-dom';
import curve1 from "../../../images/homeImage/curve_line_1.png";
import sendMoney from "../../../images/homeImage/Send_Money.png";
import withdrawImg from "../../../images/homeImage/withdraw_Mobile.png";
import payBillImg from "../../../images/homeImage/Pay_bill_mobile.png";

const HomeSendmoney = () => {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2    ' style={{ backgroundImage: `url(${curve1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <div>
                    <img className='h-11/12 w-full' src={sendMoney} alt="" />
                </div>
                <div className='flex flex-col justify-center '>
                    <p className='text-[#5966FF]'>Online Money Transfer System</p>
                    <h2 className='text-5xl my-3 font-semibold '>The easiest way to <br /> transfer money</h2>
                    <Link to='/dashboard' className='btn bg-[#5966FF] w-36' >Know More</Link>
                </div>
            </div >
            <div className='grid grid-cols-1 md:grid-cols-2 mx-20 ' style={{ backgroundImage: `url(${curve1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>

                <div className='flex flex-col justify-center '>
                    <p className='text-[#5966FF]'>Online Money Transfer System</p>
                    <h2 className='text-5xl my-3 font-semibold '>The easiest way to <br /> transfer money</h2>
                    <Link to='/dashboard' className='btn bg-[#5966FF] w-36' >Know More</Link>
                </div>
                <div>
                    <img className='h-11/12 w-full' src={withdrawImg} alt="" />
                </div>
            </div >
            <div className='grid grid-cols-1 md:grid-cols-2 mx-20 ' style={{ backgroundImage: `url(${curve1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <div>
                    <img className='h-11/12 w-full' src={payBillImg} alt="" />
                </div>
                <div className='flex flex-col justify-center '>
                    <p className='text-[#5966FF]'>Online Money Transfer System</p>
                    <h2 className='text-5xl my-3 font-semibold '>The easiest way to <br /> transfer money</h2>
                    <Link to='/dashboard' className='btn bg-[#5966FF] w-36' >Know More</Link>
                </div>
            </div >
        </div>
    );
};

export default HomeSendmoney;