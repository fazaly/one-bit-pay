import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import image from '../.././images/Bitcoin P2P.gif';

const SendMoneyGuide = () => {
    const email = useSelector((state) => state.auth.email);
    return (
        <section>
            <div className='p-4'>
                <div className='flex lg:flex-row flex-col justify-center gap-4 items-center bg-white'> 
                    <img src={image} alt=""/>
                    <div>
                        <h1 className='lg:text-3xl text-2xl font-semibold text-[#181818]'>Start Transfering Money <br/> With Your Friends, Family and <br/> Other Members With 0% fee.
                        </h1>
                        <Link to={email ? "/dashboard/sendMoney" : "/login"} className='btn mt-4 bg-[#5966FF] border-none'>START NOW</Link>
                    </div>
                </div>
                <hr className='bg-[#5966FF] mb-4 mt-4 border-2 border-[#5966FF]'/>
                <div className='bg-white p-4'>
                    <p className='mb-4 text-lg'>One Bit Pay is a secure and easy-to-use online payment website that allows you to send money to friends, family, or businesses with ease. With One Bit Pay, you can send money to anyone with just a few clicks, and our send money charge is 0% of the transaction amount.</p>

                    <p className='mb-4 text-lg'>To send money with One Bit Pay, simply log in to your account and select the "Send Money" option. Enter the recipient's email address or mobile number, the amount you wish to send, and any notes you want to include with the transaction. You can also choose to send money in different currencies, and we'll take care of the conversion for you.</p>

                    <p className='mb-4 text-lg'>Once you've confirmed the transaction details, you can submit the payment, and the recipient will receive a notification that the money has been sent. The funds will be transferred to the recipient's account within minutes, depending on their bank's processing time.</p>

                    <p className='mb-4 text-lg'>One Bit Pay's send money charge is 0% of the transaction amount, which is a very competitive rate compared to other online payment services. This charge is automatically calculated and displayed before you confirm the transaction, so you know exactly how much you'll be charged before submitting the payment.</p>

                    <p className='mb-4 text-lg'>In summary, One Bit Pay is a fast, secure, and affordable way to send money online, with a charge of 0%. So why not sign up for a free account today and start sending money to your loved ones or business partners with ease?</p>
                </div>
            </div>
        </section>
    );
};

export default SendMoneyGuide;