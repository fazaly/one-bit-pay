import React from "react";
import line2 from "../../.././images/homeImage/newLine2.png";
import mobile from "../../.././images/homeImage/withdraw_Mobile.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const WithdrawSection = () => {
  const myStyle = {
    backgroundImage: `url(${line2})`,
    backgroundImageRepeat: "no-repeat",
    width: "100%",
    backgroundColor: "#FFF",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full h-screen" style={myStyle} >
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center h-full w-full">
        <div className="" data-aos="fade-right">
          <p className="text-[#5966FF] font-semibold text-xl mb-2">
            Online money transfer platform
          </p>
          <h1 className="lg:text-6xl text-4xl font-semibold mb-4">
            Easiest Way To <br/> Withdraw Money
          </h1>
          <button className="btn bg-[#5966FF] border-0" type="">
            KNOW MORE
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={mobile}
            className="lg:mb-0 w-[450px] mt-16 lg:mt-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WithdrawSection;
