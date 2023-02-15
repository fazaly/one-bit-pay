import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaUsers } from "react-icons/fa";
import { MdSupportAgent, MdAdminPanelSettings } from "react-icons/md";

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                <div className='transitions ease-in-out delay-150 bg-white rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white p-10 duration-300'>
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-medium'>Total Users</h3>
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    
                    <h2 className='text-3xl text-[#5966FF] font-semibold'>
                    
                        {
                        counterOn &&
                        <CountUp start={0} end={38} duration={2} delay={0} />
                        }+
                    
                    </h2>
                </div>
                <div className='transitions ease-in-out delay-150 bg-white rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white p-10 duration-300'>
                <div className='flex justify-between'>
                        <h3 className='text-xl font-medium'>Total Agents</h3>
                        <MdSupportAgent className='text-3xl'></MdSupportAgent>
                    </div>
                    <h2 className='text-3xl text-[#5966FF] font-semibold'>
                    
                        {
                        counterOn &&
                        <CountUp start={0} end={4} duration={2} delay={0} />
                        }+
                    
                    </h2>
                </div>
                <div className='transitions ease-in-out delay-150 bg-white rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white p-10 duration-300'>
                <div className='flex justify-between'>
                        <h3 className='text-xl font-medium'>Total Admins</h3>
                        <MdAdminPanelSettings className='text-3xl'></MdAdminPanelSettings>
                    </div>
                    <h2 className='text-3xl text-[#5966FF] font-semibold'>
                    
                        {
                        counterOn &&
                        <CountUp start={0} end={14} duration={2} delay={0} />
                        }+
                    
                    </h2>
                </div>
            </div>
            </ScrollTrigger>
    );
};

export default Counter;