import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import image from '../.././images/withdraw.jpg';

const WithdrawGuide = () => {
    const email = useSelector((state) => state.auth.email);
    return (
        <section>
            <div className='p-4'>
                <div className='flex lg:flex-row flex-col justify-center gap-4 items-center bg-white'> 
                    <img src={image} alt="" className='w-[450px]'/>
                    <div>
                        <h1 className='lg:text-3xl text-2xl font-semibold text-[#181818]'>Withdraw your money With <br/> only 1.3% charge.
                        </h1>
                        <Link to={email ? "/dashboard/withdraw" : "/login"} className='btn mt-4 bg-[#5966FF] border-none'>START NOW</Link>
                    </div>
                </div>
                <hr className='bg-[#5966FF] mb-4 mt-4 border-2 border-[#5966FF]'/>
                <div className='bg-white p-4'>
                    <p className='mb-4 text-lg'>One Bit Pay is a secure and easy-to-use online payment website that allows you to Withdraw to friends, family, or businesses with ease. With One Bit Pay, you can Withdraw to anyone with just a few clicks, and our Withdraw charge is 1.3% of the transaction amount.</p>

                    <p className='mb-4 text-lg'>To Withdraw with One Bit Pay, simply log in to your account and select the "Withdraw" option. Enter the recipient's email address or mobile number, the amount you wish to send, and any notes you want to include with the transaction. You can also choose to Withdraw in different currencies, and we'll take care of the conversion for you.</p>

                    <p className='mb-4 text-lg'>Once you've confirmed the transaction details, you can submit the payment, and the recipient will receive a notification that the money has been sent. The funds will be transferred to the recipient's account within minutes, depending on their bank's processing time.</p>

                    <p className='mb-4 text-lg'>One Bit Pay's Withdraw charge is 1.3% of the transaction amount, which is a very competitive rate compared to other online payment services. This charge is automatically calculated and displayed before you confirm the transaction, so you know exactly how much you'll be charged before submitting the payment.</p>

                    <p className='mb-4 text-lg'>In summary, One Bit Pay is a fast, secure, and affordable way to Withdraw online, with a <span className='text-lg font-semibold'>charge of 1.3%</span>. So why not sign up for a free account today and start sending money to your loved ones or business partners with ease?</p>
                </div>
            </div>
        </section>
    );
};

export default WithdrawGuide;