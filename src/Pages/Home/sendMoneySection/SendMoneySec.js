import React from "react";
import { Link } from "react-router-dom";
import line1 from "../../.././images/homeImage/newCurve.png";
import mobile from "../../.././images/homeImage/Send_Money.png";

const SendMoneySec = () => {
 
  const myStyle = {
    backgroundImage: `url(${line1})`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full h-screen wrapper lg:mt-20 md:mt-8 mt-14" style={myStyle}>
      <div 
        className="flex lg:flex-row flex-col justify-around items-center h-full w-full overflow-hidden">
        <div>
          <img
            data-aos="zoom-out-left"
            src={mobile}
            className="lg:w-[400px] md:w-[480px] lg:mt-0 mt-10"
            alt=""
          />
        </div>
        <div data-aos="zoom-out-right">
          <p className="text-[#5966FF] font-semibold text-xl mb-2">
            Online money transfer platform
          </p>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold mb-4">
            The easiest way to <br /> send money
          </h1>
          <Link to={'/send_money_Ggide'} className="btn bg-[#5966FF] border-none" type="">
            KNOW MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SendMoneySec;
