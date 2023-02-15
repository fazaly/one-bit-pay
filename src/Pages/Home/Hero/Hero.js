import React, { useState } from "react";
import "./Hero.css";
import heroImage from "../../.././images/homeImage/11.png";
import mobile from "../../.././images/homeImage/new.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiArrowSmRight } from "react-icons/hi";
import ball from "../../.././images/homeImage/ball2.png";

const Hero = () => {
  const email = useSelector((state) => state.auth.email);
  const [isHoverd, setIsHoverd] = useState(false);
  const myStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative flex justify-center items-center w-full h-screen mb-10">
      <div
        id="hero-cantainer"
        className="relative w-full h-screen mx-auto"
        style={myStyle}
      ></div>
      <div id="second-hero" className="absolute top-0">
        <div className="flex lg:flex-row flex-col justify-around items-center w-full h-scree">
          <div className="lg:mt-10 mt-8 overflow-hidden">
            <h1 className="lg:text-6xl text-4xl font-medium mt-14 text-[#fff] lg:leading-none leading-9 shadow-md">
              Fastest Money
              <br /> Transfer Without <br /> Any Frustrations
            </h1>
            <p className="text-lg font-medium mt-4 text-white">
              The best way to pay money with OneBitPay <br /> Payment
              system with high security
            </p>
            <Link
              onMouseEnter={() => setIsHoverd(true)}
              onMouseLeave={() => setIsHoverd(false)}
              to={email ? "/dashboard" : "/login"}
              className="btn shadow-md bg-[#5966FF]
           hover:bg-[#5966FF] mt-8 rounded-full ease-in-out transition-all"
            >
              {isHoverd ? (
                <>
                  <span>START NOW</span> <HiArrowSmRight className="text-2xl" />
                </>
              ) : (
                `START NOW`
              )}
            </Link>
          </div>
          <div data-aos="zoom-in-up" className="lg:mr-16 lg:mt-10">
            <img
              src={mobile}
              alt=""
              className="lg:w-96 w-80 lg:mt-28 mt-2"
            />
            <img
              src={ball}
              alt=""
              className="w-32  transition-transform duration-75 absolute right-6 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
