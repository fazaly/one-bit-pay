import { format } from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { useApplyForLoanMutation } from "../../features/api/apiSlice";

const Loan = () => {
  const email = useSelector((state) => state.auth.email);
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  const date = format(new Date(), "PP");
  const [isChecked, setIsChecked] = useState(false);
  const [applyForLoan, { isLoading, isSuccess, isError }] = useApplyForLoanMutation();



  useEffect(() => {
    if (isSuccess) {
      toast.success("You Successfully Send Loan Request", {
        id: "loan",
      });
    }
    if (!isSuccess && isError) {
      toast.error("Failed to loan request! Please try again", {
        id: "loan",
      });
    }
  }, [isSuccess, isError]);


  const handleLoanReqSubmit = (data) => {

    const loanApplicantData = {
      name: `${data.firstName} ${data.lastName}`,
      address: data.address,
      email,
      anoualIncome: data?.anoualIncome,
      birthDate: data.birthDate,
      desireAmount: data.desireAmount,
      duration: data.duration,
      gender: data.gender,
      nidNumber: data.nidNumber,
      phnNumber: data.phnNumber,
      profession: data.profession,
      reasonForLoan: data.reasonForLoan,
      loanRequest: "pending",
      applyDate: date
    }

    applyForLoan(loanApplicantData);
    reset()

  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="px-10 py-4">
      <div className="flex">
        <span className="min-w-2 min-h-4 mr-2 bg-[#5966FF] text-[#5966FF]">
          |
        </span>{" "}
        <h1 className="text-2xl font-bold text-gray-700 uppercase">
          Please Provide Your All Informations for loan
        </h1>
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmit(handleLoanReqSubmit)}>
          <div className="px-6 py-1 rounded-xl">
            <div>
              {/* ==========personal info collection============ */}
              <h1 className="text-xl pl-2 mt-2 font-bold text-gray-500">Personal information</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="w-full flex-1 mx-2 svelte-1l8159u">
                  <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                    First Name
                  </div>
                  <div className=" flex svelte-1l8159u">
                    <input
                      {...register("firstName", { required: "First name is required" })}
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800" />
                  </div>
                  {errors.firstName?.type === 'required' && <p className="text-red-700 text-sm">{errors.firstName.message}</p>}
                </div>
                <div className="w-full flex-1 mx-2 svelte-1l8159u">
                  <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                    Last Name
                  </div>
                  <div className="flex svelte-1l8159u">
                    <input
                      {...register("lastName", { required: "Last name is required" })}
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800"
                    />
                  </div>
                  {errors.lastName?.type === 'required' && <p className="text-red-700 text-sm">{errors.lastName.message}</p>}
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                  Address
                </div>
                <div className=" flex svelte-1l8159u">
                  <input
                    {...register("address", { required: "Address is required" })}
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800" />
                </div>
                {errors.address?.type === 'required' && <p className="text-red-700 text-sm">{errors.address.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                  NID Number
                </div>
                <div className=" flex svelte-1l8159u">
                  <input
                    {...register("nidNumber", { required: "NID number is required" })}
                    type="number"
                    name="nidNumber"
                    placeholder="NID Number"
                    className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800" />
                </div>
                {errors.nidNumber?.type === 'required' && <p className="text-red-700 text-sm">{errors.nidNumber.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                  Phone Number
                </div>
                <div className=" flex svelte-1l8159u">
                  <input
                    {...register("phnNumber", { required: "NID number is required" })}
                    type="number"
                    name="phnNumber"
                    placeholder="015XXXXXXXX"
                    className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800" />
                </div>
                {errors.phnNumber?.type === 'required' && <p className="text-red-700 text-sm">{errors.phnNumber.message}</p>}
              </div>

              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                  Gender
                </div>
                <div className="text-gray-800">
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    name="gender" className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                  </select>
                </div>
                {errors.gender?.type === 'required' && <p className="text-red-700 text-sm">{errors.gender.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                  Profession
                </div>
                <div >
                  <select
                    {...register("profession", { required: "Profession is required" })}
                    name="profession" className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800">
                    <option value="" className="text-gray-800">Select Profession</option>
                    <option value="job">Job Holder</option>
                    <option value="businessmen">Businessmen</option>
                    <option value="farmer">Farmer</option>
                    <option value="student">Student</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                {errors.profession?.type === 'required' && <p className="text-red-700 text-sm">{errors.profession.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                  Date of birth
                </div>
                <div className=" flex svelte-1l8159u">
                  <input
                    {...register("birthDate", { required: "NID number is required" })}
                    type="date"
                    name="birthDate"
                    placeholder="Date of birth"
                    className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800" />
                </div>
                {errors.birthDate?.type === 'required' && <p className="text-red-700 text-sm">{errors.birthDate.message}</p>}
              </div>
            </div>

            {/* ==== loan info collection==== */}
            <div className="mt-4">
              <h1 className="text-xl pl-2 mt-4 font-semibold text-gray-500">Loan Information</h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2">
                <div className="w-full mx-2 svelte-1l8159u">
                  <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                    Desire amount
                  </div>
                  <div className=" flex svelte-1l8159u">
                    <input
                      {...register("desireAmount", { required: "Desire mount is required" })}
                      type="number"
                      name="desireAmount"
                      placeholder="$ Amount you want"
                      className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800"
                    />
                  </div>
                  {errors.desireAmount?.type === 'required' && <p className="text-red-700 text-sm">{errors.desireAmount.message}</p>}
                </div>
                <div className="w-full mx-2 svelte-1l8159u">
                  <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                    Duration in year
                  </div>
                  <div >
                    <select
                      {...register("duration", { required: "Duration mount is required" })}
                      name="duration" className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800">
                      <option value="" className="text-gray-800">Select duration</option>
                      <option value="1">1</option>
                      <option value="3">3</option>
                      <option value="5">5</option>
                      <option value="7">7</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  {errors.duration?.type === 'required' && <p className="text-red-700 text-sm">{errors.duration.message}</p>}
                </div>
                <div className="w-full mx-2 svelte-1l8159u">
                  <div className="font-semibold h-6 mt-1 text-[#303640]  leading-8 ">
                    Anoual income
                  </div>
                  <div className=" flex svelte-1l8159u">
                    <input
                      {...register("anoualIncome", { required: "Anoual income mount is required" })}
                      type="number"
                      name="anoualIncome"
                      placeholder="$ Your anoual income"
                      className="p-1 px-2 bg-white border mt-2 rounded-md appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800"
                    />
                  </div>
                  {errors.anoualIncome?.type === 'required' && <p className="text-red-700 text-sm">{errors.anoualIncome.message}</p>}
                </div>

                <div className="lg:w-2/3 md:w-full w-full lg:col-span-3 md:col-span-3 mx-2 svelte-1l8159u">
                  <div className="font-semibold h-6 my-2 text-[#303640]   ">
                    Tell us, why you want loan?
                  </div>
                  <div className=" flex svelte-1l8159u">
                    <textarea
                      name="reasonForLoan"
                      type="reasonForLoan"
                      {...register("reasonForLoan", { required: "Reason for loan is required" })}
                      className="p-1 px-2 lg:h-[100px]  rounded-xl border appearance-none hover:border-[#5966FF] outline-[#5966FF] w-full text-gray-800" placeholder="Why you want to loan"></textarea>
                  </div>
                  {errors.reasonForLoan?.type === 'required' && <p className="text-red-700 text-sm">{errors.reasonForLoan.message}</p>}
                </div>
              </div>
              {/* =============loan condition route========== */}
              <Link to="/dashboard/loantermscondition"><h1 className="text-[#5966FF] my-2 ml-2 underline">Click here to See Full term and condition and Eligibity of loan</h1></Link>
            </div>

            <div className="flex justify-between items-center">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                  className="mr-2" />
                Are you agree with our terms & condition?
              </label>
              <div className="flex">
                <button
                  type="reset"
                  className="btn shadow-md bg-red-500  rounded-xl border-none ease-in-out transition-all" >
                  Reset
                </button>
                {
                  <button
                    type="submit"
                    disabled={!isChecked}
                    className="btn shadow-md bg-black
                    hover:bg-[#5966FF] rounded-xl border-none ml-2 ease-in-out transition-all">
                    {
                      isLoading ? <ButtonSpinner /> : "Apply for loan"
                    }
                  </button>
                }
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Loan;