import React from 'react';
import { Link } from 'react-router-dom';
import line from '../../../././images/homeImage/lineX.png';
import mobile from '../../.././images/homeImage/Pay_bill_mobile.png'

const BillPaySection = () => {
    const myStyle = {
        backgroundImage: `url(${line})`,
        backgroundImageRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    return (
        <div className='w-full h-screen' style={myStyle}>
            <div 
        className="flex lg:flex-row flex-col justify-around items-center h-screen w-full overflow-hidden">
        <div>
          <img
            data-aos="zoom-out-left"
            src={mobile}
            className="lg:w-[400px] lg:mt-0 mt-16"
            alt=""
          />
        </div>
        <div data-aos="zoom-out-right">
          <p className="text-[#5966FF] font-semibold text-xl mb-2">
          pay your bill’s from home          </p>
          <h1 className="lg:text-6xl text-4xl font-semibold mb-4">
          More easiest way <br/> to pay your bill’s
          </h1>
          <Link to={'/pay_bill_gide'} className="btn bg-[#5966FF] border-none" type="">
            KNOW MORE
          </Link>
        </div>
      </div>
        </div>
    );
};

export default BillPaySection;