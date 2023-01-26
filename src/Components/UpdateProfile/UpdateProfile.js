import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import './UpdateProfile.css';

const UpdateProfile = () => {
  const { user, userDetails } = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const imageHostKey = process.env.REACT_APP_imgHostKey

  const handleUpdate = (data) => {
    const image = data.image[0]
    const formData = new FormData();

    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgdata => {
        if (imgdata.success) {
          // console.log(imgdata.data.url)
          const userData = {
            name: data.name,
            address: data.address,
            imageUrl: imgdata.data.url,
            nidNumber: data.nidNumber,
            phnNumber: data.phoneNumber,
            birthDate: data.birthDay
          }
          handleUpdateUser(userData)
        }
      })
  }

  const handleUpdateUser = userData => {
    fetch(`https://one-bit-pay-server.vercel.app/userUpdate/${user.email}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("User Info updated successfully")
          reset()
        }
      })
  }
  return (
    <form
      onSubmit={handleSubmit(handleUpdate)}
      className="w-full flex bg-white rounded-lg shadow-xl lg:mt-5 mt-16 mb-5">
      <div className="lg:w-32 w-10 min-h-full bg-[#5966FF]">
        <h1 className="text-[#5966FF]"></h1>
      </div>

      <div className="p-4">
        {/* Input fields */}
        <h1 className="text-2xl font-semibold uppercase text-slate-800">
          Update Your Informations
        </h1>
        <div className="grid lg:grid-cols-2 gap-6 mx-auto mt-5">
          <div className="lg:w-96 w-72">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your name</span>
              </label>
              <input
                defaultValue={userDetails.name}
                type="text"
                placeholder="Type here"
                name="name"
                className="input  w-full "
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-xs text-red-600 ml-6 mt-1">{errors.name?.message}</p>}
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your email</span>
              </label>
              <input
                defaultValue={userDetails.userEmail}
                disabled
                type="email"
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
                type="number"
                placeholder="Type here"
                className="input  w-full "
                name="nidNumber"
                {...register('nidNumber', { required: 'nidNumber is required' })}
              />
              {errors.nidNumber && <p className="text-xs text-red-600 ml-6 mt-1">{errors.nidNumber?.message}</p>}
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your date of birth</span>
              </label>
              <input
                type="date"
                placeholder="Type here"
                className="input  w-full"
                name="birthDay"
                {...register('birthDay', { required: 'birthDay is required' })}
              />
              {errors.birthDay && <p className="text-xs text-red-600 ml-6 mt-1">{errors.birthDay?.message}</p>}
              <div className="divider mt-0 mb-0"></div>
            </div>
          </div>

          <div className="lg:w-96 w-72">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your address</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full "
                name="address"
                {...register('address', { required: 'address is required' })}
              />
              {errors.address && <p className="text-xs text-red-600 ml-6 mt-1">{errors.address?.message}</p>}
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Your phone number</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input  w-full "
                name="phoneNumber"
                {...register('phoneNumber', { required: 'phone Number is required' })}
              />
              {errors.phoneNumber && <p className="text-xs text-red-600 ml-6 mt-1">{errors.phoneNumber?.message}</p>}
              <div className="divider mt-0 mb-0"></div>
            </div>
            <div className="form-control w-full ">
              <div>
                <div className="font-bold h-6 mt-3 text-[#000] text-md leading-8">
                  Image
                </div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                    <div className="flex text-sm text-gray-600">
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
                          {...register('image', { required: 'image is required' })}
                        />
                        {errors.image && <p className="text-xs text-red-600 ml-6 mt-1">{errors.image?.message}</p>}
                      </label>
                      <p className="pl-1 text-gray-700">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-700">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <input type="reset" value="reset all" className="btn bg-transparent hover:bg-transparent hover:text-[#939cff] text-[#5966FF] border-none btn-xs" />

          <input type="submit" value="submit" className="btn bg-[#5966FF] rounded-full border-none" />

        </div>
      </div>
    </form>
  );
};

export default UpdateProfile;
