import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { auth, loginUser } from "../../features/api/authSlice";
import background from "../../././images/LoginImage7.png";
import "./Login.css";
import loginImage from "../../././images/Login/Login (3).gif";
import { HiOutlineHome } from "react-icons/hi";
import { sendPasswordResetEmail } from "firebase/auth";
import useVerifyUser from "../../Hooks/useVerifyUser";

const Login = () => {
  const dispatch = useDispatch();
  const {email, isLoading, isSuccess, isError, error} = useSelector((state) => state.auth);
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [token] = useVerifyUser();
 
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!isLoading && isSuccess && token) {
      toast.success("Login Success!", {id:"APHA"});
      navigate(from, { replace: true });
    }else if(isError){
      toast.error(error, {id:"APHA"});
    }
  },[email, isLoading, isSuccess, isError, error, navigate, from, token])

  const handleSignIn = (data) => {
    const email = data.email;
    const password = data.password;
    dispatch(loginUser({ email, password }));
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        toast.success("Password Reset Email sent. Please Check Your Email");
      })
      .catch((error) => {
        console.log("error:", error, {id:"ALPHA"});
      });
  };

  const loginStyle = {
    backgroundImage: `url(${background})`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full h-screen">
      <div className="flex lg:flex-grow md:flex-row flex-col justify-center">
        <div
          style={loginStyle}
          className="lg:w-6/12 h-screen lg:static md:static hidden bg-[#181818] lg:flex justify-center items-center"
        >
          <div
            id="image-container"
            className="w-96 h-4/6 rounded-xl flex flex-col justify-center items-center"
          >
            <img src={loginImage} alt="" className="w-72" />
            <div className="relative">
              <h1 className="text-white font-semibold text-xl">
                To Access All Features <br /> Please
              </h1>
              <span className="text-3xl text-white font-bold absolute right-9 top-7">
                SIGN IN
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-full  h-screen bg-[#FFF] flex justify-center items-center relative">
          <Link to={'/'} className="absolute top-8 right-0">
            <div className="w-32 h-10 bg-[#181818] rounded-tl-full rounded-bl-full flex justify-center items-center hover:bg-[#5966FF] transition-all cursor-pointer">
              <HiOutlineHome className="text-white text-2xl mb-1 mr-2" />
              <h1 className="text-white text-lg">HOME</h1>
            </div>
          </Link>
          <div className="w-96 h-4/6 p-6 flex justify-center items-center">
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="space-y-4 rounded-xl"
            >
              <h4 className="text-black font-bold text-center text-2xl mb-2">
                SIGN IN
              </h4>
              <div className="form-control">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  onBlur={handleEmailBlur}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered border-[#181818] focus:border-[#5966FF]"
                />
                {errors.email && (
                  <p className="text-red-500" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password is Wrong" },
                  })}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered border-[#181818] focus:border-[#5966FF]"
                />
                {errors.password && (
                  <p className="text-red-500" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                <label className="label">
                  <button
                    onClick={handlePasswordReset}
                    className="label-text-alt link link-hover mb-0 text-sm"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>

              <div className="form-control">
                <button
                  type="submit"
                  className="btn bg-[#181818] border-none text-lg hover:bg-[#5966FF]"
                >
                  {isLoading ? <ButtonSpinner /> : "SIGN IN"}
                </button>
              </div>
              <p className="text-sm text-center">
                New to OneBitPay?
                <Link className="text-[#5966FF] font-semibold" to="/signUp">
                  &nbsp;SIGN UP
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
