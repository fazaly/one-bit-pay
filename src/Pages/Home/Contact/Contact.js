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
        <section className="relative flex justify-center items-center overflow-visible w-full h-screen">
            <div id="contact-container" className="w-full h-screen">
            </div>
            <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center lg:p-0 p-5">
                <div className="flex lg:flex-row flex-col lg:p-0 p-6 justify-center items-center bg-white rounded-xl shadow-xl">

                    <div className="px-6">
                        <h1 className="lg:text-5xl font-bold text-4xl">Get in touch</h1>
                        <p className="pt-2 lg:text-xl text-lg pb-4">
                            We are here for you! how can we help?
                        </p>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="flex flex-col gap-3 "
                        >
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Enter Your Name"
                                className="block  outline-[#5966FF] rounded-md shadow-sm text-black py-3 px-5 bg-[#E7E8FF]"
                                required
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Enter Your Email"
                                className="block  rounded-md shadow-sm text-black py-3 px-5 bg-[#E7E8FF] outline-[#5966FF]"
                                required
                            />
                            <textarea
                                name="message"
                                rows="5"
                                className="block hover:border-[#5966FF] outline-[#5966FF] sm:rows-3 rounded-md px-5 text-black bg-[#E7E8FF] "
                                placeholder="Enter Your Message..."
                                required
                            ></textarea>
                            <button
                                type="submit"
                                value="send"
                                className=" btn rounded border-none mt-2 hover:text-gray-100 bg-[#5966FF] text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="p-10">
                        <div className="hidden lg:block">
                            <img src={img} alt="" className="w-full  object-cover mb-1" />
                        </div>
                        <div>
                            <p className="flex items-center mb-2">
                                <FaLocationArrow className="text-xl text-[#5966FF]" />
                                <span className="text-black font-bold ml-2 ">
                                    Dhaka, Bangladesh
                                </span>
                            </p>
                            <p className="flex items-center mb-2">
                                <BsTelephoneFill className="text-xl text-[#5966FF]" />
                                <span className="text-black font-bold ml-2 ">
                                    {" "}
                                    (+88) 0197700000
                                </span>
                            </p>
                            <p className="flex items-center mb-2">
                                <FaMailBulk className="text-xl text-[#5966FF]" />
                                <span className="text-black font-bold ml-2 ">
                                    {" "}
                                    onebitpay@gmail.com
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;