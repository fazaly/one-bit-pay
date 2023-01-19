import React from "react";

const UpdateProfile = () => {
  return (
    <div className="w-full flex bg-white rounded-lg shadow-xl lg:mt-5 mt-16 mb-5">
      <div className="lg:w-32 w-10 min-h-full bg-[#5966FF]">
        <h1 className="text-[#5966FF]"></h1>
      </div>

      <div className="p-4">
        {/* Input fields */}
        <h1 className="text-2xl font-semibold uppercase text-[#5966FF]">
          Update Your Informations
        </h1>
        <div className="grid lg:grid-cols-2 gap-6 mx-auto mt-5">
          <div className="lg:w-96 w-72">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full "
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full "
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full "
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full"
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
          </div>

          <div className="lg:w-96 w-72">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full "
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full "
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full "
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your first name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full "
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <button className="btn bg-transparent hover:bg-transparent hover:text-[#939cff] text-[#5966FF] border-none btn-xs">
            Reset All
          </button>
          <button className="btn bg-[#5966FF] rounded-full border-none">
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
