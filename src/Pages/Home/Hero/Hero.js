import React from "react";
import "./Hero.css";
import heroImage from "../../.././images/homeImage/1.png";
import mobile from "../../.././images/homeImage/new.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const myStyle = {
    backgroundImage: `url(${heroImage})`,
    width: "100%",
    height: "832px",
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#181818",
  };
  return (
    <div className="relative w-full h-screen mx-auto" style={myStyle}>
      <div className="flex lg:flex-row flex-col justify-around items-center w-full h-scree z-50">
        <div className="lg:mt-10 mt-6">
          <h1 className="lg:text-6xl text-4xl font-medium mt-14 text-[#fff]">
            Fastest Money
            <br/> Transfer Without <br/> Any Frustrations
          </h1>
          <p className="text-lg font-medium mt-4 text-white">The best way to pay money with OneBitPay <br/> Payment system with high security</p>
          <Link
           type="" 
           className="btn shadow-md bg-[#5966FF]
           hover:bg-[#5966FF] mt-8 rounded-full">START NOW</Link>
        </div>
        <div
        data-aos="zoom-in-up"
        className="lg:mr-16 lg:mt-10">
          <img src={mobile} alt="" className="lg:w-96 w-80 lg:mt-28 mt-2"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
