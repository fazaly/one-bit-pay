import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Testimonial.css";
import { Pagination, Autoplay } from "swiper";
// import bgimg from "../../../../src/images/testimonial/lineCtmonialbg.png"

const Testimonials = () => {
    const datas = [
        {
            "id": 1,
            "name": "John Smith",
            "text": "OneBitPay offers fast, secure, and reliable financial services with comprehensive tools, competitive fees, user-friendly interface,for seamless transactions and responsive customer support, making it a top choice for hassle-free transactions.",
            "location": "United kingdom",
            "img": require("../../../images/testimonial/male1.jpg")
        },
        {
            "id": 2,
            "name": "Maria Garcia",
            "text": "This is a top-tier financial commerce website offering secure and reliable financial services with competitive fees, comprehensive tools, user-friendly interface, transparent policies, and responsive customer support for seamless transactions. Highly recommended.",
            "location": " Madrid, Spain",
            "img": require("../../../images/testimonial/female15.jpg")
        },
        {
            "id": 3,
            "name": "Ahmed Hassan",
            "text": "OneBitPay is a user-friendly financial commerce website providing comprehensive . With competitive fees, transparent policies, responsive customer support, and reliable tools, hassle-free transactions. Highly recommended for a seamless experience.",
            "location": "Cairo, Egypt",
            "img": require("../../../images/testimonial/male2.jpg")
        },
        {
            "id": 4,
            "name": "Li Weigan",
            "text": "This company offers a worry-free financial commerce experience with comprehensive and secure services, a user-friendly interface, competitive fees, transparent policies, reliable tools, and responsive customer support. Highly recommended for seamless .",
            "location": "Beijing, China",
            "img": require("../../../images/testimonial/male10.jpg")
        },
        {
            "id": 5,
            "name": "Sophie Dubois",
            "text": "Access secure and reliable financial services with ease, thanks to the OneBitPay website's, transparent policies, competitive fees, user-friendly interface, and responsive customer support. Highly recommended for worry-free transactions.",
            "location": "Paris, France",
            "img": require("../../../images/testimonial/female1.jpg")
        },
        {
            "id": 6,
            "name": "Daniel Kim",
            "text": "Reliable, user-friendly financial services with comprehensive tools, transparent policies, competitive fees,transparent policies, competitive fees, secure transactions, and responsive customer support for peace of mind.",
            "location": "Seoul, Korea",
            "img": require("../../../images/testimonial/male12.jpg")
        },
        {
            "id": 7,
            "name": "Gabriela Santos",
            "text": "Fast, secure, and easy-to-use financial services with comprehensive tools,ansparent policies, competitive fees,transparent policies,responsive customer support, competitive fees, and excellent customer support for hassle-free transactions.",
            "location": "Janeiro, Brazil",
            "img": require("../../../images/testimonial/male11.jpg")
        },
    ]
    return (
        <div className=' mx-auto sm:py-10 flex items-center justify-center '
        >
            <div>
                <h1 className='text-4xl font-bold text-center'>Testimonials</h1>
                <h1 className='text-xl mt-3 mb-6 text-center'

                >What says our happy customer?</h1>
                <div

                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}

                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}

                        breakpoints={{
                            640: {
                                width: 640,
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        style={{ width: "90vw" }}
                        className="mySwiper "
                    >

                        <div>
                            {datas.map(data =>
                                <SwiperSlide
                                    key={data.id}
                                    className="rounded-xl px-10 py-2 bg-stone-100 hover:shadow-2xl hover:bg-transparent cursor-pointer shadow-xl
                                     mb-16 mt-6"
                                >
                                    <div >
                                        <p className='mt-2 text-[16px]'>{data.text}</p>
                                        <div className=" flex justify-between items-center mt-2">
                                            <div className='flex items-center mt-3 gap-2'>
                                                <img style={{ height: "30px", width: "30px", borderRadius: "15px" }} className=' object-cover border-2 border-[#5966FF]' src={data.img} alt="" />
                                                <div>
                                                    <h3 className='text-[14px] font-semibold'>{data.name}</h3>
                                                    <h5 className='text-[14px]'>{data.location}</h5>
                                                </div>
                                            </div>
                                            <div className='text-[12px] text-orange-600 flex'>
                                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;