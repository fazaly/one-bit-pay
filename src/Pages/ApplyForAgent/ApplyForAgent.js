import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { useApplyForAgentMutation } from "../../features/api/apiSlice";
import "./ApplyForAgent.css";

const ApplyForAgent = () => {
  const email = useSelector((state) => state.auth.email);
  const [postData, { isLoading, isSuccess, isError, error }] = useApplyForAgentMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Apply Success", { id: "postData" });
      reset();
    } else if (isError) {
      toast.error(error, { id: "postData" });
    }
  }, [error, isError, isLoading, isSuccess, reset])

  const handleupdateInfo = (data) => {
    console.log(data);

    const userData = {
      fname: data.first_name,
      lname: data.last_name,
      email: email,
      img: data.image[0],
      nid: data.nidNumber,
      tin: data.tinNumber,
      number: data.number,
      status: 'pending'
    };
    console.log(userData);

    const image = userData.img;

    const formData = new FormData();
    formData.append('image', image);

    //Upload user image to imgBB database
    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_KEY}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        const userinfo = {
          img: data.data?.display_url,
          name: `${userData?.fname} ${userData.lname}`,
          email: userData?.email,
          nid: userData?.nid,
          tin: userData?.tin,
          number: userData?.number,
          status: "pending",
        }

        //Insert user data in databas
        postData(userinfo);
      })
      .catch(err => {
        console.log(err);
        toast.error(err.message);
      })
  };
  return (
    <div>
      <div className="p-5">
        <div className="mx-4 p-4">
          <div className="flex">
            <span className="min-w-2 min-h-4 mr-2 bg-[#5966FF] text-[#5966FF]">
              |
            </span>{" "}
            <h1 className="lg:text-2xl text-xl font-bold uppercase">
              Please Provide Your All Informations
            </h1>
          </div>
        </div>
        <Form
          id="user"
          onSubmit={handleSubmit(handleupdateInfo)}
          className="mt-4 px-12 py-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="text-black h-6 mt-1  leading-8 font-semibold">
                First Name
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="text"
                  name="first_name"
                  placeholder="first name"
                  {...register("first_name", { required: "First name is required" })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
              {errors.first_name?.type === 'required' && <p className="text-red-700 text-sm">{errors.first_name.message}</p>}
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="text-black h-6 mt-1 leading-8 font-semibold">
                Last Name
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="text"
                  name="last_name"
                  placeholder="last name"
                  {...register("last_name", { required: "Last name is required" })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
              {errors.last_name?.type === 'required' && <p className="text-red-700 text-sm">{errors.last_name.message}</p>}
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="text-black h-6 mt-1 leading-8 font-semibold">
                Business Location
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  name="businessLocation"
                  type="text"
                  placeholder="enter place name"
                  {...register("businessLocation", { required: "Business location is required" })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
              {errors.businessLocation?.type === 'required' && <p className="text-red-700 text-sm">{errors.businessLocation.message}</p>}
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="text-black h-6 mt-1 leading-8 font-semibold">
                NID Number
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="number"
                  name="nidNumber"
                  placeholder="enter nid number"
                  {...register("nidNumber", { required: "NID number is required" })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
              {errors.nidNumber?.type === 'required' && <p className="text-red-700 text-sm">{errors.nidNumber.message}</p>}
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="text-black h-6 mt-1 leading-8 font-semibold">
                TIN ID
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="number"
                  name="tinNumber"
                  placeholder="enter tin number"
                  {...register("tinNumber", { required: "TIN ID is required" })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
              {errors.tinNumber?.type === 'required' && <p className="text-red-700 text-sm">{errors.tinNumber.message}</p>}
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="text-black h-6 mt-1 leading-8 font-semibold">
                Phone Number
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="number"
                  name="number"
                  placeholder="018XXXXXXXX"
                  {...register("number", { required: "Phone number is required" })}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
              {errors.number?.type === 'required' && <p className="text-red-700 text-sm">{errors.number.message}</p>}
            </div>

            <div>
              <div className="text-black h-6 my-1 ml-2 leading-8 font-semibold">
                Image
              </div>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 "
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
                        {...register("image", { required: "Image is required" })}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-700">
                    PNG, JPG, GIF up to 10MB
                  </p>
                  {errors.image?.type === 'required' && <p className="text-red-700 text-sm">{errors.image.message}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 mt-4">
            <div className="flex-auto flex justify-end">
              <button
                type="reset"
                className="btn bg-red-500 ml-2 border-none"
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn bg-black hover:bg-[#5966FF] border-none ml-3"
              >
                {isLoading ? <ButtonSpinner /> : "CONFIRM"}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ApplyForAgent;
