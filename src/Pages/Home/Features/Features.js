import React from "react";
import secure from "../../.././images/homeImage/secure.png";
import people from "../../.././images/homeImage/pepole.png";
import support from "../../.././images/homeImage/support.png";

const Features = () => {
  return (
    <div className="bg-[#F5F8FF] w-full lg:h-screen  flex justify-center items-center overflow-hidden">
      <div className="lg:mt-0 mt-10 lg:mb-0 mb-10">
        <div>
          <h1 className="text-4xl font-bold text-center">Our Features</h1>
          <p className="text-center text-xl">
            Incredibles features that we are providing
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-10 mt-10">
          <div data-aos="zoom-in" className="flex flex-col justify-center items-center w-[320px] h-[300px] bg-white p-4 rounded-xl shadow-md">
            <div className="bg-[#DEE1FF] w-20 p-4 rounded-full">
              <img data-aos="zoom-in-down" src={secure} alt="" className="" />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold text-center">
                Secure Payment’s
              </h1>
              <p className="text-center">
                We are providing more secure payment methods
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex flex-col justify-center items-center w-[320px] h-[300px] bg-white p-4 rounded-xl shadow-md">
            <div className="bg-[#DEE1FF] w-20 h-20 p-4 rounded-full">
              <img data-aos="zoom-in-down" src={people} alt="" className="w-12 mt-2" />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold text-center">
                Secure Payment’s
              </h1>
              <p className="text-center">
                We are providing more secure payment methods
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex flex-col justify-center items-center w-[320px] h-[300px] bg-white p-4 rounded-xl shadow-md">
            <div className="bg-[#DEE1FF] w-20 h-20 p-3 rounded-full">
              <img data-aos="zoom-in-down" src={support} alt="" className="" />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold text-center">
                Secure Payment’s
              </h1>
              <p className="text-center">
                We are providing more secure payment methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
