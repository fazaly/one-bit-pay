import React from 'react';
import Spinner from '../../Components/Spinner/Spinner';

const MobileRecharge = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="text-center text-3xl font-bold uppercase">
         Mobile Recharge comming
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-center lg:text-9xl text-7xl font-normal uppercase text-[#5966FF]">
            s
          </span>
          <Spinner />
          <Spinner />
          <span className="text-center lg:text-9xl text-7xl font-normal uppercase text-[#5966FF]">
            n
          </span>
        </div>
      </div>
    );
};

export default MobileRecharge;