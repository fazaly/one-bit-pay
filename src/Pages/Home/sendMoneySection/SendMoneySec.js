import React from "react";
import line1 from "../../.././images/homeImage/newCurve.png";
import mobile from "../../.././images/homeImage/Send_Money.png";

const SendMoneySec = () => {
 
  const myStyle = {
    backgroundImage: `url(${line1})`,
    backgroundImageRepeat: "no-repeat",
    width: "100%",
    height: "832px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full wrapper lg:mt-0 mt-14" style={myStyle}>
      <div 
        className="flex lg:flex-row flex-col justify-around items-center h-full w-full overflow-hidden">
        <div>
          <img
            data-aos="zoom-out-left"
            src={mobile}
            className="lg:w-[450px] lg:mt-0 mt-16"
            alt=""
          />
        </div>
        <div data-aos="zoom-out-right">
          <p className="text-[#5966FF] font-semibold text-xl mb-2">
            Online money transfer platform
          </p>
          <h1 className="lg:text-6xl text-4xl font-semibold mb-4">
            The easiest way to <br /> send money
          </h1>
          <button className="btn " type="">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoneySec;
