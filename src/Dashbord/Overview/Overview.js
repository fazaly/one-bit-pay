import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-3 gap-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:col-span-2">
          {/* CARD 1 */}
          <div className="">
            <div className="card lg:w-80 w-96 bg-white text-primary-content mx-auto shadow-lg">
              <div className="card-body">
                <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                  Main Balance
                </h1>
                <h1 className="font-bold text-3xl text-gray-900">
                  $ 247,567.00
                </h1>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div>
            <div className="card lg:w-80 w-96 bg-white text-primary-content mx-auto shadow-lg">
              <div className="card-body">
                <h1 className="font-bold text-xl text-[#5966FF] opacity-50">
                  Loan Balance
                </h1>
                <h1 className="font-bold text-3xl text-gray-900">$ 24,67.00</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-white">
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-[#5866FF]"></div>
              <div className="w-full h-4 rounded bg-[#5866FF]"></div>
              <div className="w-3/4 h-4 rounded bg-[#5866FF]"></div>
              <div className="w-full h-4 rounded bg-[#5866FF]"></div>
              <div className="w-full h-4 rounded bg-[#5866FF]"></div>
              <div className="w-3/4 h-4 rounded bg-[#5866FF]"></div>
              <div className="w-full h-4 rounded bg-[#5866FF]"></div>
              <div className="w-full h-4 rounded bg-[#5866FF]"></div>
              <div className="w-3/4 h-4 rounded bg-[#5866FF]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;