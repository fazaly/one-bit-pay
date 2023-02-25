import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useGetUserLoggedinDetailsQuery, useUpdateUserProfileMutation } from "../../features/api/apiSlice";
import './UpdateProfile.css';
import updateInfoImg from "../../images/dasboard/overview.png"
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

const UpdateProfile = () => {
  const email = useSelector((state) => state.auth.email);
  const { data } = useGetUserLoggedinDetailsQuery(email)
  const { register, handleSubmit, reset } = useForm();
  const imageHostKey = process.env.REACT_APP_imgHostKey
  const [postUpdateData, { isLoading, isSuccess, isError, error }] = useUpdateUserProfileMutation(email)
  const userDetails = data?.data

  useEffect(() => {

    if (isError && error) {
      toast.error(error, { id: "data update" })
    }
    else if (!isLoading && isSuccess) {
      toast.success("Updated successfully", { id: "data update" })
      reset()
    }
  }, [isLoading, isSuccess, isError, error, reset])


  const handleUpdate = (data) => {
    const image = data.image[0]
    const formData = new FormData();
    if (!data.image[0]) {
      const userData = {
        name: data.name,
        address: data.address,
        nidNumber: data.nidNumber,
        phnNumber: data.phoneNumber,
        birthDate: data.birthDay,
        userEmail: email
      }
      return postUpdateData(userData)
    }

    if (data.image[0]) {
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(imgdata => {
          if (imgdata.success) {
            const userData = {
              name: data.name,
              address: data.address,
              imageUrl: imgdata.data.url,
              nidNumber: data.nidNumber,
              phnNumber: data.phoneNumber,
              birthDate: data.birthDay,
              userEmail: email
            }
            return postUpdateData(userData)
          }
        })
    }

  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdate)}
      className="">
      <div className="">
        <div className="mb-10">
          <div className="bg-[#ECEFF6] grid grid-cols-1 md:grid-cols-2 justify-center items-center relative mt-20  md:w-full mx-4 md:mx-0">
            <div className="p-4">
              <h4 className="text-gray-400 text-3xl">Update Your </h4>
              <span className="text-black text-3xl">Information</span>
            </div>
            <img className="right-24 bottom-0 absolute hidden md:flex" src={updateInfoImg} alt="" />
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mx-4">
          <div className="p-10 rounded-2xl shadow-xl shadow-slate-400 hover:shadow-2xl hover:shadow-gray-400 transition-all">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your name</span>
              </label>
              <input
                defaultValue={userDetails?.name}
                type="text"
                name="name"
                className="input  w-full "
                {...register('name')}
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your email</span>
              </label>
              <input
                defaultValue={userDetails?.userEmail}
                type="email"
                name="email"
                placeholder="Type here"
                className="input  w-full "
                {...register('email')}
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your nid number</span>
              </label>
              <input
                defaultValue={userDetails?.nidNumber && userDetails?.nidNumber}
                type="number"
                placeholder="Enter NID number"
                className="input  w-full "
                name="nidNumber"
                {...register('nidNumber')}
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your date of birth</span>
              </label>
              <input
                defaultValue={userDetails?.birthDate
                  && userDetails?.birthDate
                }
                type="date"
                placeholder="Enter birth date"
                className="input  w-full"
                name="birthDay"
                {...register('birthDay')}
              />
              <div className="divider mt-0 mb-0"></div>
            </div>
          </div>

          <div>
            <div className="p-10 rounded-2xl shadow-xl shadow-slate-400 hover:shadow-2xl hover:shadow-gray-400 transition-all mb-8">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text"> Your address</span>
                </label>
                <input
                  defaultValue={userDetails?.address && userDetails?.address}
                  type="text"
                  placeholder="Enter your address"
                  className="input  w-full "
                  name="address"
                  {...register('address')}
                />
                <div className="divider mt-0 mb-0"></div>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text"> Your phone number</span>
                </label>
                <input
                  defaultValue={userDetails?.phnNumber && userDetails?.phnNumber}
                  type="number"
                  placeholder="Enter your number"
                  className="input  w-full "
                  name="phoneNumber"
                  {...register('phoneNumber')}
                />
                <div className="divider mt-0 mb-0"></div>
              </div>
            </div>
            <div className="form-control w-full p-10 rounded-2xl shadow-xl shadow-slate-400 hover:shadow-2xl hover:shadow-gray-400 transition-all">
              <div>
                <div className="">
                  Image
                </div>
                <div className="">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-[#00AAFF]"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="image"
                          type="file"
                          className="sr-only"
                          {...register('image')}
                        />
                      </label>
                      <p className="">or drag and drop</p>
                    </div>
                    <p className="">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="flex justify-end items-center mt-5 mr-20">
          <input />

          {/* <input type="submit" value="submit" /> */}
          <button type="reset" className="btn  bg-red-500 border-none ">reset all</button>
          <button type="submit" className="btn bg-[#070733] rounded-lg border-none px-3 ml-3">
            {
              isLoading ? <ButtonSpinner /> : " SUBMIT"
            }
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateProfile;
