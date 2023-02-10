import React from 'react';
import bannerMobile from "../../../images/homeImage/Hero_Mobile.png";
import bannerBg from "../../../images/homeImage/Hero_Image.png"
import "./Banner.css";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  bg-black justify-center items-center text-white curved-background_curved pt-14' style={{ backgroundImage: `url(${bannerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} >
            <div className='flex flex-col justify-center mx-auto w-10/12'>
                <h2 className='text-5xl font-bold   '>Fasted Money Transfer Without Any Frustrations</h2>
                <p className='my-4'>The best way to pay money with OneBitPay.Our Payment system is high seccured</p>
                <Link to='/dashboard' className='btn  bg-[#5966FF] w-36' >Start Now</Link>

            </div>
            <div className='flex flex-col justify-center items-center '>
                <img className=' w-96' src={bannerMobile} alt="" />
            </div>
        </div >
    );
};

export default Banner;