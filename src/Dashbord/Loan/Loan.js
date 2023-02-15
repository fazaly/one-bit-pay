import { format } from "date-fns";
import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Loan = () => {
  const { userDetails } = useContext(AuthContext)
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  const date = format(new Date(), "PP");
  const [isChecked, setIsChecked] = useState(false);

  const handleLoanReqSubmit = (data) => {
    const loanApplicantData = {
      name: `${data.firstName} ${data.lastName}`,
      address: data.address,
      email: userDetails?.userEmail,
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
    console.log(loanApplicantData)
    if (userDetails.userEmail) {
      fetch("http://localhost:5000/loanApplicantData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loanApplicantData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.success("loan request successfull")
            reset()
          }
        })

    }

  };


  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="px-10 py-4">

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
              <h1 className="text-xl pl-2 mt-4 font-bold text-gray-500">Personal information</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="w-full flex-1 mx-2 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                    First Name
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      {...register("firstName", { required: "First name is required" })}
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      // {...register("first_name", { required: true })}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                  {errors.firstName?.type === 'required' && <p className="text-red-700 text-xs">{errors.firstName.message}</p>}
                </div>
                <div className="w-full flex-1 mx-2 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                    Last Name
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      {...register("lastName", { required: "Last name is required" })}
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      // {...register("first_name", { required: true })}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                  {errors.lastName?.type === 'required' && <p className="text-red-700 text-xs">{errors.lastName.message}</p>}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                  Address
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <input
                    {...register("address", { required: "Address is required" })}
                    type="text"
                    name="address"
                    placeholder="Address"
                    // {...register("first_name", { required: true })}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
                {errors.address?.type === 'required' && <p className="text-red-700 text-xs">{errors.address.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                  NID Number
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <input
                    {...register("nidNumber", { required: "NID number is required" })}
                    type="number"
                    name="nidNumber"
                    placeholder="NID Number"
                    // {...register("first_name", { required: true })}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
                {errors.nidNumber?.type === 'required' && <p className="text-red-700 text-xs">{errors.nidNumber.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                  Phone Number
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <input
                    {...register("phnNumber", { required: "NID number is required" })}
                    type="number"
                    name="phnNumber"
                    placeholder="015XXXXXXXX"
                    // {...register("first_name", { required: true })}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
                {errors.phnNumber?.type === 'required' && <p className="text-red-700 text-xs">{errors.phnNumber.message}</p>}
              </div>

              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                  Gender
                </div>
                <div className="text-gray-800">
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    name="gender" className="bg-white my-2 p-2 flex border  border-gray-200 rounded svelte-1l8159u w-full  outline-none  text-gray-800">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                  </select>
                </div>
                {errors.gender?.type === 'required' && <p className="text-red-700 text-xs">{errors.gender.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                  Profession
                </div>
                <div >
                  <select
                    {...register("profession", { required: "Profession is required" })}
                    name="profession" className="bg-white my-2 p-2 flex border border-gray-200 rounded svelte-1l8159u w-full  outline-none  text-gray-800">
                    <option value="" className="text-gray-800">Select Profession</option>
                    <option value="job">Job Holder</option>
                    <option value="businessmen">Businessmen</option>
                    <option value="farmer">Farmer</option>
                    <option value="student">Student</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                {errors.profession?.type === 'required' && <p className="text-red-700 text-xs">{errors.profession.message}</p>}
              </div>
              <div className="w-full flex-1 mx-2 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                  Date of birth
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <input
                    {...register("birthDate", { required: "NID number is required" })}
                    type="date"
                    name="birthDate"
                    placeholder="Date of birth"
                    // {...register("first_name", { required: true })}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
                {errors.birthDate?.type === 'required' && <p className="text-red-700 text-xs">{errors.birthDate.message}</p>}
              </div>
            </div>


            <div className="mt-6">
              <h1 className="text-xl pl-2 mt-6 font-bold text-gray-500">Loan Information</h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2">
                <div className="w-full mx-2 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                    Desire amount
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      {...register("desireAmount", { required: "Desire mount is required" })}
                      type="number"
                      name="desireAmount"
                      placeholder="$ Amount you want"
                      // {...register("first_name", { required: true })}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                  {errors.desireAmount?.type === 'required' && <p className="text-red-700 text-xs">{errors.desireAmount.message}</p>}
                </div>
                <div className="w-full mx-2 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                    Duration in year
                  </div>
                  <div >
                    <select
                      {...register("duration", { required: "Duration mount is required" })}
                      name="duration" className="bg-white my-2 p-2 flex border border-gray-200 rounded svelte-1l8159u w-full  outline-none  text-gray-800">
                      <option value="" className="text-gray-800">Select duration</option>
                      <option value="1">1</option>
                      <option value="3">3</option>
                      <option value="5">5</option>
                      <option value="7">7</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  {errors.duration?.type === 'required' && <p className="text-red-700 text-xs">{errors.duration.message}</p>}
                </div>
                <div className="w-full mx-2 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                    Anoual income
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      {...register("anoualIncome", { required: "Anoual income mount is required" })}
                      type="number"
                      name="anoualIncome"
                      placeholder="$ Your anoual income"
                      // {...register("first_name", { required: true })}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                  {errors.anoualIncome?.type === 'required' && <p className="text-red-700 text-xs">{errors.anoualIncome.message}</p>}
                </div>

                <div className="lg:w-2/3 md:w-full w-full lg:col-span-3 md:col-span-3 mx-2 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 ">
                    Tell us, why you want loan?
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <textarea
                      name="reasonForLoan"
                      type="reasonForLoan"
                      {...register("reasonForLoan", { required: "Reason for loan is required" })}
                      className="p-1 px-2 lg:h-[100px] appearance-none outline-none w-full text-gray-800" placeholder="Why you want to loan"></textarea>
                  </div>
                  {errors.reasonForLoan?.type === 'required' && <p className="text-red-700 text-xs">{errors.reasonForLoan.message}</p>}
                </div>
              </div>
              <Link to="/dashboard/loancondition"><h1 className="text-red-500">See Full term and condition and Eligibity of loan</h1></Link>
            </div>

            <div className="flex justify-between items-center">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                  className="mr-2"
                />
                Are you agree with our <Link className="text-[#00AAFF]" to="/dashboard/loantermscondition">terms & condition</Link>?
              </label>
              <div className="flex">
                <button
                  type="reset"
                  className="btn shadow-md bg-slate-800  rounded-xl border-none ease-in-out transition-all" >
                  Reset
                </button>
                {
                  <button
                    type="submit"
                    disabled={!isChecked}
                    className="btn shadow-md bg-[#5966FF]
                    hover:bg-[#5966FF] rounded-xl border-none btn-md ml-2 ease-in-out transition-all">
                    Apply for loan
                  </button>
                }
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loan;