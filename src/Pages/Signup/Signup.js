import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { useAddUserMutation } from "../../features/api/apiSlice"
import { HiOutlineHome } from "react-icons/hi";
import background from "../../././images/LoginImage7.png";
import signupImage from "../.././images/Login/Authentication.gif";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/api/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const [createdUser, setCreatedUser] = useState({});
  
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const [saveUser, { isLoading, isError, isSuccess }] = useAddUserMutation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email) {
      saveUser(createdUser);
      toast.success("Sign Up Success");
      navigate("/");
    }
  },[email])

  useEffect(() => {
    if (isLoading) {
      toast.success("Creating New User..", { id: "addUser" });
    }
    if (isSuccess) {
      toast.success("SIGN UP SUCCESS ✔", { id: "addUser" });
      navigate("/");
      setLoading(false);
    }
    if (isError) {
      toast.success("Something Wrong Please try again!", { id: "addUser" });
    }
  }, [isLoading, isSuccess, isError, navigate])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleSignUp = (info) => {
    const name = info.name;
    const email = info.email;
    const password = info.password;
    const confirm = info.confirm;
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;

    setSignupError("");
    const userData = {
      name,
      userEmail: email,
      password,
      confirmPass: confirm,
      balance: 10000,
      accountType: "user",
      role: "user",
      date
    };
    setLoading(true);
    dispatch(createUser({email, password}));
    setCreatedUser(userData);
  };

  const registerStyle = {
    backgroundImage: `url(${background})`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full h-screen">
      <div className="flex lg:flex-row md:flex-row flex-col justify-center ">
        <div
          style={registerStyle}
          className="lg:w-6/12 h-screen lg:static hidden bg-[#181818] lg:flex justify-center items-center"
        >
          <div
            id="image-container"
            className="w-96 h-4/6 rounded-xl flex flex-col justify-center items-center"
          >
            <img src={signupImage} alt="" className="w-72" />
            <div className="relative">
              <h1 className="text-white font-semibold text-xl">
                To Access All Features <br /> Please
              </h1>
              <span className="text-3xl text-white font-bold absolute right-7 top-7">
                SIGN UP
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-full h-screen bg-[#FFF] flex justify-center items-center relative">
          <Link to={'/'} className="absolute top-8 right-0">
            <div className="w-32 h-10 bg-[#181818] rounded-tl-full rounded-bl-full flex justify-center items-center hover:bg-[#5966FF] transition-all cursor-pointer">
              <HiOutlineHome className="text-white text-2xl mb-1 mr-2" />
              <h1 className="text-white text-lg">HOME</h1>
            </div>
          </Link>
          <div className="w-96 h-4/6 p-6 flex justify-center items-center">
          <form
              onSubmit={handleSubmit(handleSignUp)}
              className="card-body space-y-2 rounded-[14px] bg-white"
            >
              <h4 className="text-black font-bold mb-4 text-center text-2xl">
                SIGN UP
              </h4>
              <div className="form-control">
                <input
                  {...register("name", {
                    required: "Full Name is required",
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered border-black"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="text"
                  placeholder="Email"
                  className="input input-bordered border-black"
                />
              </div>
              <div className="form-control">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be in 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered border-black"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered border-black"
                  {...register("confirm", {
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.confirm && <p>{errors.confirm.message}</p>}
              </div>
              <div className="form-control ">
                <button type="submit" className="btn bg-black">
                  {loading ? <ButtonSpinner /> : "SIGN UP"}
                </button>
                {signupError && <p className="text-red-500">{signupError}</p>}
              </div>
              <p className="text-xs text-center mt-4">
                Already have an account?{" "}
                <Link className="text-[#5966FF] font-semibold" to="/login">
                  &nbsp;SIGN IN
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
