import React, { useState } from "react";
import secure from "../../.././images/homeImage/secure.png";
import people from "../../.././images/homeImage/pepole.png";
import support from "../../.././images/homeImage/support.png";

const Features = () => {
  const [hoverd1, setHoverd1] = useState(false);
  const [hoverd2, setHoverd2] = useState(false);
  const [hoverd3, setHoverd3] = useState(false);

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
          <div
            onMouseEnter={() => setHoverd1(true)}
            onMouseLeave={() => setHoverd1(false)}
            data-aos="zoom-in"
            className={`flex flex-col justify-center items-center w-[320px] h-[300px] bg-white p-4 rounded-xl shadow-md cursor-pointer`}>
            <div className={`bg-[#DEE1FF] ${hoverd1 ? "w-24" : "w-20"} p-4 rounded-full transition-all`}>
              <img data-aos="zoom-in-down" src={secure} alt="" className="" />
            </div>
            <div className="mt-4">
              <h1 className={`text-xl font-bold text-center ${hoverd1 && "text-[#5966FF]"} transition-all`}>
                Secure Payment’s
              </h1>
              <p className="text-center">
                We are providing more secure payment methods
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => setHoverd2(true)}
            onMouseLeave={() => setHoverd2(false)}
            data-aos="zoom-in"
            className="flex flex-col justify-center items-center w-[320px] h-[300px] bg-white p-4 rounded-xl shadow-md cursor-pointer"
          >
            <div className={`bg-[#DEE1FF] ${hoverd2 ? "w-24 h-24" : "w-20 h-20"} p-4 rounded-full transition-all`}>
              <img
                data-aos="zoom-in-down"
                src={people}
                alt=""
                className="mt-2"
              />
            </div>
            <div className="mt-4">
              <h1 className={`text-xl font-bold text-center ${hoverd2 && "text-[#5966FF]"}`}>
              Easy to use
              </h1>
              <p className="text-center">
              User friendly and easy to used functionality for our customer’s
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => setHoverd3(true)}
            onMouseLeave={() => setHoverd3(false)}
            data-aos="zoom-in"
            className="flex flex-col justify-center items-center w-[320px] h-[300px] bg-white p-4 rounded-xl shadow-md cursor-pointer"
          >
            <div className={`bg-[#DEE1FF] ${hoverd3 ? "w-24" : "w-20"} p-3 rounded-full transition-all`}>
              <img data-aos="zoom-in-down" src={support} alt="" className="" />
            </div>
            <div className="mt-4">
              <h1 className={`text-xl font-bold text-center ${hoverd3 && "text-[#5966FF]"}`}>
              Support
              </h1>
              <p className="text-center">
              We are providing the best support for our all customer’s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
