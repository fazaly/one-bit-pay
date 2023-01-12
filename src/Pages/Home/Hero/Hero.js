import React from "react";
import "./Hero.css";
import HeroImg from '../../.././images/New-01.svg';

const Hero = () => {
  return (
    <div className="relative w-[1240px] mx-auto">
      
      <div className="absolute top-8 right-4">
        <div
          id="hero-circle"
          className="bg-[#00AAFF] w-96 h-96 rounded-full ml-96"
        ></div>
        <div
          id="hero-circle"
          className="bg-[#8759f1] w-60 mr-96 h-60 rounded-full"
        ></div>
      </div>
      <div id="hero" className="mt-10 flex justify-between items-center">
        <div className="w-1/2 p-6">
            <h1 className="text-4xl font-semibold">Welcome to</h1>
            <h1 className="text-6xl font-bold text-[#5966FF]">OneBitPay</h1>
            <h1 className="text-3xl font-semibold mt-3 text-[#00AAFF]">The best way to pay</h1>
            <p className="text-lg mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
            <button className="btn border-0 rounded-full bg-[#5966FF] text-white w-40">GET STARTED</button>
        </div>
        <div className="w-1/2">
            <img src={HeroImg} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Hero;