import React from "react";

const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Coming Soon.....
          </h3>
          <p className="py-4">
          Exciting news! Our platform will soon be adding a new feature that allows you to easily add money to your account directly from your bank account. No need to worry about transferring funds or waiting for deposits to clear. Stay tuned for more details on this convenient and time-saving addition!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn border-none bg-red-500">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
