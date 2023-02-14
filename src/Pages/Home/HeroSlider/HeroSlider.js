import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HeroSlider.css';
import hero1 from '../../../images/mobRecharge.png';
import hero2 from '../../../images/billPay.png';
import hero3 from '../../../images/sendMoney.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

const HeroSlider = () => {

    return (
        <div className='m-12'>
            <Swiper
                autoplay={{ delay: 5000 }}
                speed={2000}
                slidesPerView={1}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                pagination={{ clickable: true }}
                msName="mySwiper"
            >
                <SwiperSlide className='py-24 flex rounded-3xl'>
                    <div className='md:pl-12 lg:pl-24 w-2/4'>
                        <h1 className='text-6xl font-bold pb-6'>
                            One Tap For
                            <br />
                            Mobile
                            <br />
                            Recharge
                        </h1>
                        <p>This feature allows users to easily and quickly recharge their mobile phone's credit with just one tap on their device. This eliminates the need for manually entering payment information and simplifies the recharge process.</p>
                        <button className='lg:w-1/2 btn-transparent border border-black p-3 rounded-lg mt-6 hover:bg-[#5966FF] hover:text-white hover:border-[#5966FF]'>Learn More</button>
                    </div>
                    <div className='w-2/4 mr-12 hidden lg:block md:block'>
                        <img className="pb-14" src={hero1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='py-24 flex rounded-3xl'>
                    <div className='w-2/4 md:pl-12 lg:pl-24'>
                        <h1 className='text-6xl font-bold pb-6'>
                            Easy to
                            <br />
                            Pay Bills
                        </h1>
                        <p>You can pay bills online, such as utility bills, credit card bills, and other regular payments. You can access automatic payments, online bill management, and various payment methods, to make the process as easy as possible.</p>
                        <button className='lg:w-1/2 btn-transparent border border-black p-3 rounded-lg mt-6 hover:bg-[#5966FF] hover:text-white hover:border-[#5966FF]'>Learn More</button>
                    </div>
                    <div className='w-2/4 mr-12 hidden lg:block md:block'>
                        <img src={hero2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='py-24 flex rounded-3xl'>
                    <div className='w-2/4 md:pl-12 lg:pl-24'>
                        <h1 className='text-6xl font-bold pb-6'>
                            No Charge
                            <br />
                            On
                            <br />
                            Send Money
                        </h1>
                        <p>You can transfer money to other individuals or accounts without incurring any fees or charges.</p>
                        <button className='lg:w-1/2 btn-transparent border border-black p-3 rounded-lg mt-6 hover:bg-[#5966FF] hover:text-white hover:border-[#5966FF]'>Learn More</button>
                    </div>
                    <div className='w-2/4 mr-12 hidden lg:block md:block'>
                        <img src={hero3} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HeroSlider;