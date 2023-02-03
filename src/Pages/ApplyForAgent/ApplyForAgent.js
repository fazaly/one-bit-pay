import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Form } from "react-router-dom";
import Loader2 from "../../Components/Loader/Loader2";
import { AuthContext } from "../../context/AuthProvider";
import "./ApplyForAgent.css";

const ApplyForAgent = () => {
  const { user, userDetails } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleupdateInfo = (data) => {
    console.log(data);

    const userData = {
      fname: data.first_name,
      lname: data.last_name,
      email: user?.email,
      img: data.image[0],
      nid: data.nidNumber,
      tin: data.tinNumber,
      number: data.number,
    };
    console.log(userData);

    const image = userData.img;

    const formData = new FormData();
    formData.append('image', image);

    //Upload user image to imgBB database
    setLoading(true);
    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_KEY}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        const userinfo = {
          img: data.data.display_url,
          name: `${userData.fname} ${userData.lname}`,
          email: userData.email,
          nid: userData.nid,
          tin: userData.tin,
          number: userData.number
        }

        //Insert user data in databas
        fetch(`https://one-bit-pay-server.vercel.app/agents/request`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userinfo)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setLoading(false);
            toast.success('Request Inserted');
            reset();
          })
          .catch(err => {
            setLoading(false);
            toast.error(err.message);
          })
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        toast.error(err.message);
      })
  };
  return (
    <div>
      <div className="p-5">
        <div className="mx-4 p-4">
          {/* <div className="flex items-center">
                        <div className="flex items-center text-[#00AAFF] relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Personal</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5966FF]"></div>
                        <div className="flex items-center text-white relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#5966FF] border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus ">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Account</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5966FF]"></div>
                        <div className="flex items-center text-white relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#5966FF] border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail ">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Business</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5966FF]"></div>
                        <div className="flex items-center text-white relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#5966FF] border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database ">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Confirm</div>
                        </div>
                    </div> */}
          <div className="flex">
            <span className="min-w-2 min-h-4 mr-2 bg-[#5966FF] text-[#5966FF]">
              |
            </span>{" "}
            <h1 className="text-2xl font-bold uppercase">
              Please Provide Your All Informations
            </h1>
          </div>
        </div>
        <Form
          id="user"
          onSubmit={handleSubmit(handleupdateInfo)}
          className="mt-8 p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">
                First Name
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="text"
                  name="first_name"
                  placeholder="first name"
                  {...register("first_name", { required: true })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">
                Last Name
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="text"
                  name="last_name"
                  placeholder="last name"
                  {...register("last_name", { required: true })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">
                Business Location
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  name="businessLocation"
                  type="text"
                  placeholder="enter place name"
                  {...register("businessLocation", { required: true })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">
                NID Number
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="number"
                  name="nidNumber"
                  placeholder="enter nid number"
                  {...register("nidNumber", { required: true })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">
                TIN ID
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="number"
                  name="tinNumber"
                  placeholder="enter tin number"
                  {...register("tinNumber", { required: true })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">
                Phone Number
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="number"
                  name="number"
                  placeholder="018XXXXXXXX"
                  {...register("number", { required: true })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            {/* <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">Image</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input type='file' name='image' placeholder="Enter NID Number" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 sr-only" /> </div>
                        </div> */}
            <div>
              <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">
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
                  <div className="text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="text-center">Upload a file</span>
                      <input
                        id="file-upload"
                        name="image"
                        type="file"
                        {...register("image", { required: true })}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-700">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 mt-4">
            {/* <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition">Previous</button> */}
            <div className="flex-auto flex flex-row-reverse">
              <button
                type="submit"
                className="text-base  ml-3  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:text-gray-100 bg-gradient-to-r from-[#00AAFF] to-[#8759f1] hover:to-[#00AAFF]  hover:from-[#8759f1] text-white duration-200 ease-in-out transition"
              >
                {loading ? <Loader2 /> : "CONFIRM"}
              </button>
              <button
                type="reset"
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:text-gray-100 bg-gradient-to-r from-[#00AAFF] to-[#8759f1] hover:to-[#00AAFF]  hover:from-[#8759f1] text-white duration-200 ease-in-out transition"
              >
                Reset
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ApplyForAgent;
