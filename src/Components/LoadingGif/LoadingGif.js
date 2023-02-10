import React from "react";
import Loading from '../.././images/Loading/Pulse-1.2s-217px.svg';

const LoadingGif = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
          <img src={Loading} alt=""/>
    </div>
  );
};

export default LoadingGif;
