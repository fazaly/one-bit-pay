import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { FaLocationArrow } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";

import "./Contact.css"
import img from "../../../../src/images/homeImage/contact.png"
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w6svlhk', 'template_xzkrtc7', form.current, 'q_62p3f56iW_fG_dP')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast.success('Message send Successfully.');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='relative flex  mt-28 justify-center items-center overflow-visible w-full' >
            <div id='contact-container'
                className='relative'
            >

            </div>
            <div id='contact-2nd-part' className="grid lg:grid-cols-2 py-4 sm:grid-rows-1 md:grid-rows-1 items-center absolute lg:top-36 top-16 rounded-xl shadow-xl lg:w-[941px] lg:h-[550px] h-[630px] overflow-hidden mx-10 bg-[#ffffff]">
                {/* ================
               first part start
               absolute top-20
               =================== */}
                <div className="px-6 sm:w-full ">
                    <h1 className="lg:text-5xl font-bold text-4xl">Get in touch</h1>
                    <p className="pt-2 lg:text-xl text-lg pb-4">We are here for you! how can we help?</p>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 ">
                        <input type="text" name="user_name" placeholder="Enter Your Name" className="block w-full outline-[#5966FF] rounded-md shadow-sm text-black py-3 px-5 bg-[#E7E8FF]" required />
                        <input type="email" name="user_email" placeholder="Enter Your Email" className="block w-full rounded-md shadow-sm text-black py-3 px-5 bg-[#E7E8FF] outline-[#5966FF]" required />
                        <textarea name='message' rows="5" className="block hover:border-[#5966FF] w-full sm:rows-3 rounded-md px-5 text-black bg-[#E7E8FF] outline-[#5966FF]" placeholder='Enter Your Message...' required></textarea>
                        <button type="submit" value='send' className=" w-full btn rounded border-none mt-2 hover:text-gray-100 bg-[#5966FF] text-white">Submit</button>
                    </form>
                </div>
                {/* ================
                2nd part start
                ================== */}
                <div className=" p-10 sm:w-full ">
                    <div className='hidden lg:block md:block'>
                        <img src={img} alt="" className='w-full  object-cover mb-1' />
                    </div>
                    <div>
                        <p className="flex items-center mb-2">
                            <FaLocationArrow className='text-2xl text-[#5966FF]' />
                            <span className='text-black font-bold ml-2 '>Dhaka, Bangladesh</span>
                        </p>
                        <p className="flex items-center mb-2">
                            <BsTelephoneFill className='text-2xl text-[#5966FF]' />
                            <span className='text-black font-bold ml-2 '> (+88) 0197700000</span>
                        </p>
                        <p className="flex items-center mb-2">
                            <FaMailBulk className='text-2xl text-[#5966FF]' />
                            <span className='text-black font-bold ml-2 '> onebitpay@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;