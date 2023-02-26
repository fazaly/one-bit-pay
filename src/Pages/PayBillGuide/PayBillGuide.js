import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from '../.././images/PayBill-01.png';
const PayBillGuide = () => {
    const email = useSelector((state) => state.auth.email);
  return (
    <section>
      <div className="p-4">
        <div className="flex lg:flex-row flex-col justify-center gap-4 items-center bg-white">
          <img src={image} alt="" className="w-[450px]" />
          <div>
            <h1 className="lg:text-3xl text-2xl font-semibold text-[#181818]">
              Pay Your Bill's without any <br/> charges and Easy to use.
            </h1>
            <Link
              to={email ? "/dashboard/billPay" : "/login"}
              className="btn mt-4 bg-[#5966FF] border-none"
            >
              START NOW
            </Link>
          </div>
        </div>
        <hr className="bg-[#5966FF] mb-4 mt-4 border-2 border-[#5966FF]" />
        <div className="bg-white p-4">
          <p className="mb-4 text-lg">
          One Bit Pay is a reliable and convenient online payment website that allows you to pay your bills with ease. With One Bit Pay, you can pay bills quickly and securely from anywhere, at any time, and the best part is that our pay bills service is absolutely free.
          </p>

          <p className="mb-4 text-lg">
          To pay your bills with One Bit Pay, simply log in to your account and select the "Pay Bills" option. Enter the bill details, including the biller's name, account number, and the amount due. You can also choose to save the biller's information for future payments to save time.
          </p>

          <p className="mb-4 text-lg">
          Once you've confirmed the payment details, you can submit the payment, and the funds will be transferred to the biller within minutes. One Bit Pay's advanced security features ensure that your payment information is always kept safe and secure.
          </p>

          <p className="mb-4 text-lg">
          One Bit Pay's pay bills service is completely free, which means you won't be charged any additional fees or charges for making bill payments. This is a significant advantage compared to other online payment services, which may charge fees for certain bill payments.
          </p>

          <p className="mb-4 text-lg">
          In summary, One Bit Pay's pay bills service is a convenient and secure way to pay your bills online, and it's completely free. So why not sign up for a free account today and start paying your bills with ease?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PayBillGuide;
